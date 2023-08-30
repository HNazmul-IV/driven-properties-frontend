<script>
    import { afterUpdate, onMount, tick, createEventDispatcher } from "svelte";
    import mapboxgl from "mapbox-gl";
    import { page } from "$app/stores";  
    // import RightWidget1 from '../../widgets/right-widget1.svelte';
    import RightWidget1 from '../../../widgets/right-widget1.svelte'
    import RightWidget2 from '../../../widgets/right-widget2.svelte';
    import {covertToIntCurrancy} from '$lib/includes/others';
    import { baseURL } from "../../../../base-url";

    // import 'normalize.css/normalize.css'
    import 'mapbox-gl/dist/mapbox-gl.css';

    const dispatch = createEventDispatcher();
    const token =  "pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g";
    export let data = [];
    export let mapMove;
    export let isSubmitClicked;
    let properties = [];
    let map;
    let boundingBox;

    $: data, dataUpdate();
    $: mapMove, mapMoveUpdate();
    $: isSubmitClicked, loadingMap();
    let lat = 25.177602;
    let lng = 55.234789;
    let coordinates = [lng, lat];
    let currentCenter;
    let mapLoadonRefresh = false;
    let location = 'palm jumeirah';
    let pageProperties;
    let sidebarWidgetOne;
    let sidebarWidgetTwo;
    let mapFlyfnJump = false;
    let intervalStarted;

    const loadingMap = async () => {
        
        if(isSubmitClicked){
            intervalStarted = setInterval(()=> {
                mapMoveUpdate();
                // console.log('setinterval');
            },1000);
        }
        
        if(!isSubmitClicked){
            clearInterval(intervalStarted);
        }
    }
    
    // data which is changeable 
    const dataUpdate = async () => {
        // console.log('dataUpdate', data);
        let pageSlug = $page.url.pathname.split('/');
    
        location = pageSlug[2].split('-').join(' '); // 'jumeirah-village-circle' to 'jumeirah village circle'
        if(location === 'city walk'){
            location = 'city walk dubai';
        }
        properties = data; // data of properties coming when map update
        if(data.length>0){
            let response = await fetch(`${baseURL}/getOffplanCoord/${location}`);
            let coord = await response.json();
            // console.log(coord);
            if(coord[0].pclog !== null && coord[0].pclat !== null){
                coordinates = [coord[0].pclog, coord[0].pclat];
                // console.log(coordinates);
            }
            if(coordinates[1] !== 25.177602 &&  coordinates[0] !== 55.234789){
                mapLoadonRefresh = true;
            }
        }
        getPropertiesMarkerMap(map);
    };

    // data which is changeable 
    const mapMoveUpdate = async () => {
        // console.log(map);
        if(map){
            mapFly(map);
        }
    }


    const mapFly = (map) => {
        map.jumpTo({
            center: coordinates,
            zoom: mapLoadonRefresh? 13:11
        })
    }

    const getPropertiesMarkerMap = (map) => {
        // console.log(properties);

        for (const property of properties) {
            const priceInMillion = property.Price/1000000;
            
            const description = `
                <div class="container g-0">
                    <div class="row g-0">
                        <div class="col-12 mb-2"><img src="${property.Images.image[0]}" class="img-fluid myImgPopup" /></div>
                        <div class="col-sm-12 px-2 mb-2">
                                <h6><strong>${property.Property_Name}</strong></h6>
                                <h6>${property.Property_Title}</h6>

                                <div class="d-flex flex-row bd-highlight justify-content-between mb-1">
                                    <div class="p-2 bd-highlight">${property.Unit_Type}</div>
                                    <div class="p-2 bd-highlight"><i class="bx bx-building-house"></i></div>
                                    <div class="p-2 bd-highlight">${property.Bedrooms} Beds</div>
                                    <div class="p-2 bd-highlight"><i class="bx bx-building-house"></i></div>
                                    <div class="p-2 bd-highlight">${property.No_of_Bathroom} Bath</div>
                                </div>

                                <div class="p-2 bd-highlight">AED ${property.Price}</div>
                            </div>
                    </div>
                </div>
            `;

            const el = document.createElement('span');
            
            el.textContent= 'AED '+ covertToIntCurrancy(property.Price);
            // el.className = 'marker'; // added marker class
            el.className = 'marker1';


            
            // make a marker for each property and add it to the map
            new mapboxgl
            .Marker(el)
            .setLngLat([property._geoloc.lng, property._geoloc.lat])
            .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(description)
            )
            .addTo(map);
        }
        
        
    }

    onMount( async() => {
        mapboxgl.accessToken = token;
        map = new mapboxgl.Map({
            container: "mapView",
            style: "mapbox://styles/mapbox/streets-v11",
            center: coordinates,
            zoom: 10,
            essential: true
        });

       
        
        map.on('idle', (e) => {
            boundingBox = map.getBounds();
            // console.log(boundingBox);
            dispatch('coord', {
                boundingBox
            });
            getPropertiesMarkerMap(map)
        });

        map.on('movestart', (e) => {
            getPropertiesMarkerMap(map);
        });
        
        // console.log(properties);
        map.on('load', () => {
            
            getPropertiesMarkerMap(map);
            
            map.addControl(new mapboxgl.NavigationControl());
            map.addControl(new mapboxgl.FullscreenControl());
            
        })
        
        // var marker = map.getSource('mapView');
        // marker.remove();
        // console.log(marker);

    }); // end onMount

</script>

<div class="col-lg-6 mt-5">
    <div class="apartment-sale-right">
        <div
            id="mapView"
            class="myMapListing"
            allowfullscreen="true"
            loading="lazy"
        />
        <RightWidget1 />
        <RightWidget2 />
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
    
    @media only screen and (max-width: 768px) {
        .myMapListing {
            top: 70px;
        }
    }
</style>
