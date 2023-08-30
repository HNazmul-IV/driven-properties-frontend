<script>
    import { onMount, createEventDispatcher } from "svelte";
    import mapboxgl from "mapbox-gl";
    import { page } from "$app/stores";  
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
    import { baseURL } from "../../../../../base-url";

    // import 'normalize.css/normalize.css'
    import 'mapbox-gl/dist/mapbox-gl.css';

    const dispatch = createEventDispatcher();
    const token =  "pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g";
    export let data = [];
    let properties = [];
    let map;
    let boundingBox;

    $: data, dataUpdate();
    // $: isSubmitClicked, loadingMap();
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
    
    // data which is changeable 
    const dataUpdate = async () => {
        console.log('dataUpdate map.svelte PLR', data);
        let pageSlug = $page.url.pathname.split('/');
    
        location = pageSlug[3].split('-').join(' '); // 'jumeirah-village-circle' to 'jumeirah village circle'
        if(location === 'city walk'){
            location = 'city walk dubai';
        }
        if(location === 'any'){
            coordinates = [55.234789, 25.177602];
        }
        properties = data; // data of properties coming when map update
        if(data.length>0){
            let response = await fetch(`${baseURL}/getOffplanCoord/${location}`);
            let coord = await response.json();
            if(location !== 'any' && coord[0].pclog !== null && coord[0].pclat !== null){
                coordinates = [coord[0].pclog, coord[0].pclat];
            }
            if(coordinates[1] !== 25.177602 &&  coordinates[0] !== 55.234789){
                mapLoadonRefresh = true;
            }
        }
        mapMoveUpdate();
        getPropertiesMarkerMap(map);
    };

    // data which is changeable 
    const mapMoveUpdate = async () => {
        if(map){
            mapFly(map);
        }
    }

    const mapFly = (map) => {
        map.flyTo({
            center: coordinates,
            zoom: mapLoadonRefresh? 13:11
        })
    }

    const getPropertiesMarkerMap = (map) => {

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
                                    <div class="bd-highlight">${property.Unit_Type==='Apartment'? 'Wohnung': 'Villa'}</div>
                                    <div class="bd-highlight"><i class="bx bx-building-house"></i></div>
                                    <div class="bd-highlight">${property.Bedrooms.split('-')[0]} Betten}</div>
                                    <div class="bd-highlight"><i class="bx bx-building-house"></i></div>
                                    <div class="bd-highlight">${property.No_of_Bathroom} Badezimmer</div>
                                </div>

                                <div class="p-2 bd-highlight">${CurrancySBC(property.Price *.25)} EUR</div>
                            </div>
                    </div>
                </div>
            `;

            const el = document.createElement('span');
            
            el.textContent= covertToIntCurrancy(property.Price*0.25)+' EUR';
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

        console.log('map.svelte onMount');

        mapboxgl.accessToken = token;
        map = new mapboxgl.Map({
            container: "mapView",
            style: "mapbox://styles/mapbox/streets-v11",
            center: coordinates,
            zoom: 10,
        });
        
        map.on('idle', () => {
            boundingBox = map.getBounds();
            console.log('idle', boundingBox);
            // dispatch('coord', {
            //     boundingBox
            // });
            getPropertiesMarkerMap(map)
        });

        // map.on('movestart', (e) => {
        //     console.log('map.svelte movestart');
            
        //     getPropertiesMarkerMap(map);
        // });
        
        // console.log(properties);
        map.on('load', () => {
            console.log('map.svelte load');
            getPropertiesMarkerMap(map);
            
            map.addControl(new mapboxgl.NavigationControl());
            map.addControl(new mapboxgl.FullscreenControl());
        })

    }); // end onMount

</script>

<div class="col-lg-6 mt-md-5">
    <div class="apartment-sale-right">
        <div
            id="mapView"
            class="myMapListing"
            allowfullscreen="true"
            loading="lazy"
        />
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

    
    
    @media only screen and (max-width: 768px) {
        .myMapListing {
            top: 70px;
        }
    }
</style>
