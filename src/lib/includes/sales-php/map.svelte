<script>
    import { onMount, createEventDispatcher, afterUpdate, tick } from "svelte";
    import mapboxgl from "mapbox-gl";
    import {covertToIntCurrancy} from '$lib/includes/others';
    import {offPlan_Location_result, offPlan_Location} from './store.js';
 
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { baseURL } from "../../../base-url.js";
    import Loader from "../../loader/loader.svelte";
    const dispatch = createEventDispatcher();
    const token =  "pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g";
    export let list = [];
    let data = [];
    let properties = [];
    let map;
    let boundingBox;
    let isMapLoading = false;
    let mapLoadonRefresh = false;
    let isMobile = false;

    // $: $offPlan_Location_result.location_coord, updatedList
    $: list, mapMoveListUpdate();
    $: $offPlan_Location_result.location_coord, dataUpdate();
    $: $offPlan_Location.location, dataUpdate();
    // $: mapMove, mapMoveUpdate();
    $: $offPlan_Location_result.isMapMoved, mapMoveUpdate();
    let lat = 25.177602;
    let lng = 55.234789;
    let coordinates = [lng, lat];
    let coordinates1 = [lng, lat];
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


    // data which is changeable 
    const dataUpdate = async () => {

        properties = $offPlan_Location_result.location_coord;
        const location = $offPlan_Location.location;
        if(location !== ''){
            let response = await fetch(`${baseURL}/getOffplanCoord/${location}`);
            let coord = await response.json();
            if(coord[0].pclog !== null && coord[0].pclat !== null){
                coordinates = [coord[0].pclog, coord[0].pclat];
                console.log(coordinates);
            }
        }
        if(coordinates[1] !== 25.177602 &&  coordinates[0] !== 55.234789){
            mapLoadonRefresh = true;
        }
        getPropertiesMarkerMap(map);
        if (isMobile) {
            // if (window.screen.width < 800) {
                mapMoveUpdate();
            // }
        }
    };

    const mapMoveListUpdate = async() => {
        data = list;
        // console.log(data);
        properties = data;
        if (data.length > 0) {
            lng = Number(data[0].Longitude);
            lat = Number(data[0].Latitude);
            if (lng === 0 && lat === 0) {
                lng = Number(data[1].Longitude);
                lat = Number(data[1].Latitude);
            }
            coordinates = [lng, lat];
        }
        isMapLoading = false;
        if(coordinates[1] !== 25.177602 &&  coordinates[0] !== 55.234789){
            mapLoadonRefresh = true;
        }
        getPropertiesMarkerMap(map);
        
    }
    
    // data which is changeable 
    const mapMoveUpdate = async () => {
        if(map){
            mapFly(map);
        }
        isMapLoading = false;
    }

    const mapFly = (map) => {
        map.flyTo({
            center: coordinates,
            zoom: mapLoadonRefresh? 13:10
        })
    }


    const getPropertiesMarkerMap = (map) => {
        
        for (const property of properties) {
            if(property.Price !== null){
                const description = `
                    <div class="container g-0">
                        <div class="row g-0">
                            <div class="col-12 mb-2"><img  src="/l9images/community/${property.Prothbimgname}" class="img-fluid myImgPopup" /></div>
                                <div class="col-sm-12 px-2 mb-2">
                                    <h6><strong>${property.Property_Title}</strong></h6>
                                    <h6>${property.Community}</h6>
                                    
                                    <div class="d-flex flex-row bd-highlight justify-content-between mb-1">
                                        <div class="pt-2 bd-highlight"><strong>Project Type:</strong> ${property.ProjectType}</div>
                                    </div>
                                    <div class="d-flex flex-row bd-highlight justify-content-between mb-1">
                                        <div class="pt-2 bd-highlight"><strong>Offplan Type:</strong> ${property.Type.pttitle}</div>
                                    </div>
                                    <div class="d-flex flex-row bd-highlight justify-content-between mb-1">
                                        <div class="pt-2 bd-highlight"><strong>Price:</strong> AED ${property.Price}</div>
                                    </div>

                                </div>
                        </div>
                    </div>
                `;

                const el = document.createElement('span');
                
                el.textContent= 'AED '+ covertToIntCurrancy(property.Price);
                // el.className = 'marker'; // added marker class
                el.className = 'marker1';

                let long = Number(property.Longitude), lati = Number(property.Latitude);
                // make a marker for each property and add it to the map
                if(long && lati){
                    new mapboxgl
                    .Marker(el)
                    .setLngLat([long, lati])
                    .setPopup(new mapboxgl.Popup({ offset: 25 })
                        .setHTML(description)
                    )
                    .addTo(map);
                }
            }
        }
        // isMapLoading = false;
    }
 
    onMount( async() => {
        $offPlan_Location.location = "";
        $offPlan_Location_result.location_coord = "";

        mapboxgl.accessToken = token;

        if(window.screen.width < 800){
            isMobile = true;
        }

        map = new mapboxgl.Map({
            container: "mapView",
            style: "mapbox://styles/mapbox/streets-v11",
            center: coordinates,
            zoom: 10,
        });

        map.on('idle', (e) => {
            boundingBox = map.getBounds();
            dispatch('coord', {
                boundingBox
            });                        
            isMapLoading = true;
            getPropertiesMarkerMap(map);
        });

        map.on('movestart', (e) => {
            getPropertiesMarkerMap(map);
        });
        
        map.on('load', () => {
            
            // btnCallingMap();
            getPropertiesMarkerMap(map);

            map.addControl(new mapboxgl.NavigationControl());
            map.addControl(new mapboxgl.FullscreenControl());
            
        })

    }); // end onMount

</script>
<div class="col-lg-6 mt-lg-5">
    {#if isMapLoading}
        <div class="container loading-container">
            <div class="loading"><Loader /></div>
        </div>
    {/if}
    <div class="apartment-sale-right">
        
        <div id="mapView" class="myMapListing" allowfullscreen="true" loading="lazy"/>
        <!-- <RightWidget1 />
        <RightWidget2 /> -->
    </div>
</div>

<style>
    .myMapListing {
        position: relative;
        height: 635px;
        width: 100%;
    }

    /* img, svg{ width: 12px !important; height: 18px !important; display: block !important;}

    svg { width: 12px !important; height: 18px !important; display: block !important; } */

    /* #marker {
        background-color: inherit;
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }    
    */
    /* .mapboxgl-popup-content {
        text-align: center;
        position: relative;
    }

    #mapView .mapboxgl-popup-content {
        background: #ffffff;  border-radius: 1px !important; height: 50px !important;
        box-shadow: 0 0px 0px rgb(0 0 0 / 10%) !important; padding: 2px 7px 2px !important;
    }  */
    .loading {
        position: absolute;
        top: 300px;
        z-index: 111;
        width: 98%;
        margin-left: 18%;
    }
    
    @media only screen and (max-width: 768px) {
        .myMapListing {
            top: 140px;
            position: fixed;
            left: 0;
            height: 350px;
            z-index: 11;
        }
        
    }
</style>
