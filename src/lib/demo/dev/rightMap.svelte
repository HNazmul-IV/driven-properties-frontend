<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    
    //import 'normalize.css/normalize.css'
    import 'mapbox-gl/dist/mapbox-gl.css'
    
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
  
    //import Apartmentslist from './apartmentslist.svelte';
    

    export let data =[];
    export let updateFunction;

    export let boundingBox = {
        "_sw": {
            "lng": 55.064511502076556,
            "lat": 25.004448664717486
        },
        "_ne": {
            "lng": 55.21608849792656,
            "lat": 25.15650411973199
        }
    };
    
    
    let geojson = null;

    let obj = {};
    let MyObj = {};
    let tempData = [];
    let stores;

  
    onMount(async () => {
  
        let lat = 25.163216852696415;
        let lng = 55.25120403896978;         
        
        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g';
        const map = new mapboxgl.Map({
            container: 'mapView',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng,lat],
            //maxZoom: 5,
            minZoom: 6,
            zoom: 8
        });
          

        boundingBox = map.getBounds();
        //console.log(map.getBounds()); 
  
        map.on('load', () => {            
            
            MyLinkScroll(data);

            map.addSource('places', {
                'type': 'geojson',
                'data': stores
            });

            // map.addLayer({
            //     'id': 'places',
            //     'type': 'circle',
            //     'source': 'places',
            //     'paint': {
            //         'circle-color': '#4264fb',
            //         'circle-radius': 6,
            //         'circle-stroke-width': 1,
            //         'circle-stroke-color': '#ffffff'
            //     }
            // });

            MyMapData(data);                
            buildLocationList(stores);
            addMarkers();
            
            map.addControl(new mapboxgl.FullscreenControl());
            map.addControl(new mapboxgl.NavigationControl());
            map.zoomTo(10, { duration: 700 });

            //updateFunction(boundingBox);

            map.on('movestart', (e) => {

                const popUps = document.getElementsByClassName('mapboxgl-popup');
                if (popUps[0]) popUps[0].remove();

                //boundingBox = map.getBounds();
                //updateFunction(boundingBox);
                
                MyMapData(data);                
                buildLocationList(stores);
                addMarkers();
                
                //console.log(boundingBox);
                
            });
            // End MoveStart

            map.on('resize', () => {
                
                const popUps = document.getElementsByClassName('mapboxgl-popup');
                if (popUps[0]) popUps[0].remove();

                //boundingBox = map.getBounds();
                //updateFunction(boundingBox);
                
                MyMapData(data);                
                buildLocationList(stores);
                addMarkers();
                
                //console.log(boundingBox);
            });
            // Resize end

            
            map.on('moveend', () => {

                const popUps = document.getElementsByClassName('mapboxgl-popup');
                if (popUps[0]) popUps[0].remove();

                //boundingBox = map.getBounds();
                //updateFunction(boundingBox);
                
                MyMapData(data);                
                buildLocationList(stores);
                addMarkers();
            });
            // Move End        
  
            map.on('mousemove',(e)=>{
                
                const popUps = document.getElementsByClassName('mapboxgl-popup');
                if (popUps[0]) popUps[0].remove();

                //boundingBox = map.getBounds();
                //updateFunction(boundingBox);
                
                MyMapData(data);                
                buildLocationList(stores);
                addMarkers();

            });
            //Mouse Move end
  
            map.on('mouseover', (e) => {

                const popUps = document.getElementsByClassName('mapboxgl-popup');
                if (popUps[0]) popUps[0].remove();

                //boundingBox = map.getBounds();
                //updateFunction(boundingBox);
                
                MyMapData(data);                
                buildLocationList(stores);
                addMarkers();

            });
            //Mouse Over end

            map.on('mouseleave', (e) => {
                
                const popUps = document.getElementsByClassName('mapboxgl-popup');
                if (popUps[0]) popUps[0].remove();

                //boundingBox = map.getBounds();
                //updateFunction(boundingBox);x
                
                MyMapData(data);                
                buildLocationList(stores);
                addMarkers();
            });
            // Mouse Leave end

        });
        // load end  

        const MyLinkScroll = (data)=>{
            
            //console.log(data);

            let len = (data).length;
            for (let i = 0; i < len; i++) {

                let Price = covertToIntCurrancy(data[i].Price).replaceAll('.00','');
                let PriceDecriptions = covertToIntCurrancy(data[i].Price).replaceAll('.00','');

                obj[i] = {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [data[i].Longitude, data[i].Latitude]
                    },
                    'properties': {
                        
                        //'phoneFormatted': '(202) 234-7336',
                        //'phone': '2022347336',
                        //'address': `${data[i].Property_Name +" "+data[i].Property_Title}`,
                        //'city': `${data[i].Community +" "+data[i].Sub_Community}`,
                        //'country': 'United States',
                        //'crossStreet': 'at 15th St NW',
                        //'postalCode': '20005',
                        //'state': `${data[i].Emirate}`,

                        'id': `${data[i].objectID}`,
                        'MPrice': `${Price}`,
                        'active': `${data[i].Published}`,
                        'description': `<strong>AED ${PriceDecriptions}</strong>`,
                    }
                }
                tempData.push(obj[i]);
            }
            MyObj = tempData;
            //console.log(MyObj);
            
            stores = {
                'type': 'FeatureCollection',
                'features': MyObj
            };

        };
        // End MyLinkScroll

        const addMarkers = () => {
            /* For each feature in the GeoJSON object above: */
                        
            for (const marker of stores.features) {
                /* Create a div element for the marker. */
                const el = document.createElement('div');
                /* Assign a unique `id` to the marker. */
                el.id = `marker-${marker.properties.id}`;
                /* Assign the `marker` class to each marker for styling. */
                el.className = 'marker';
                
                /**
                 * Create a marker using the div element
                 * defined above and add it to the map.
                 **/
                new mapboxgl.Marker(el, {
                        offset: [0, -23]
                    })
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);

                /**
                 * Listen to the element and when it is clicked, do three things:
                 * 1. Fly to the point
                 * 2. Close all other popups and display popup for clicked store
                 * 3. Highlight listing in sidebar (and remove highlight for all other listings)
                 **/

                el.addEventListener('mouseenter', (e) => {
                    
                    /* Fly to the point */
                    flyToStore(marker);
                    /* Close all other popups and display popup for clicked store */

                    createPopUp(marker);
                    
                    /* Highlight listing in sidebar */
                    const activeItem = document.getElementsByClassName('active');
                    e.stopPropagation();
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    const listing = document.getElementById(
                        `listing-${marker.properties.id}`
                    );
                    listing.classList.add('active');

                });
            }
        };
        //End addMarkers

        const buildLocationList = (stores) => {

            for (const store of stores.features) {
                /* Add a new listing section to the sidebar. */
                const listings = document.getElementById('listings');                
                const listing = listings.appendChild(document.createElement('div'));
                /* Assign a unique `id` to the listing. */
                listing.id = `listing-${store.properties.id}`;
                /* Assign the `item` class to each listing for styling. */
                listing.className = 'item';

                /* Add the link to the individual listing created above. */
                const link = listing.appendChild(document.createElement('a'));
                // if(store.properties.active === 'Yes'){

                    link.href = '!#';
                    link.className = 'title MarkerLinks';
                    link.id = `link-${store.properties.id}`;                
                    link.innerHTML = `ID: ${store.properties.id} Price: ${store.properties.MPrice}`;
                // }

                /**
                 * Listen to the element and when it is clicked, do four things:
                 * 1. Update the `currentFeature` to the store associated with the clicked link
                 * 2. Fly to the point
                 * 3. Close all other popups and display popup for clicked store
                 * 4. Highlight listing in sidebar (and remove highlight for all other listings)
                 **/

                link.addEventListener('mouseenter', function() {
                    for (const feature of stores.features) {
                        if (this.id === `link-${feature.properties.id}`) {
                            //flyToStore(feature);
                            createPopUp(feature);
                        }
                    }
                    const activeItem = document.getElementsByClassName('active');
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    this.parentNode.classList.add('active');
                });
            }
        };
        // End buildLocationList

        const flyToStore = (currentFeature) => {
            
            //console.log(currentFeature.geometry.coordinates);
            map.flyTo({
                center: currentFeature.geometry.coordinates,
                zoom: 15
            });
        };
        // End flyToStore
        
        // Create a popup, but don't add it to the map yet.
        const Blackpopup = new mapboxgl.Popup({ className: "black-popup", closeButton: false, closeOnClick: false })

        const createPopUp = (currentFeature) => {
            
            console.log(Blackpopup);

            // const popUps = document.getElementsByClassName('mapboxgl-popup');
            // if (popUps[0]) popUps[0].remove();
            // const popup = new mapboxgl.Popup({ closeOnClick: true })
            // .setLngLat(currentFeature.geometry.coordinates)
            // .setHTML(
            //     `<h3>Driven Properties: </h3><h4>${currentFeature.properties.address}</h4>`
            // )
            // .addTo(map);

            //const cla  = document.getElementsByClassName('mapboxgl-popup-content');
            //cla.className = "ActiveMap"; 
            //cla.classList.add("ActiveMap");
            const listEl = document.getElementById('link-'+currentFeature.properties.id);
            //console.log(listEl.id);

            listEl.addEventListener('mouseover', (id) => {
            // Highlight corresponding feature on the map
                Blackpopup
                .setLngLat(currentFeature.geometry.coordinates)
                .setHTML(`${currentFeature.properties.description}`)
                .addTo(map);
            });
        };
        // End createPopUp

        const add_markers = (geojson)=>{
            
            geojson.features.forEach(function (marker) {
  
                //boundingBox = map.getBounds();
  
                //if(marker.properties.active == 'Yes' && marker.properties.price >= 90000 ){
                if(marker.properties.active == 'Yes'){
                    
                    var el = document.createElement('span');
                    
                    const Pricepopup = new mapboxgl.Popup({ closeButton: false, closeOnClick: true  })
                    .setLngLat(marker.geometry.coordinates)
                    .setHTML(`${marker.properties.description}`)
                    .addTo(map);
                }
                //console.log(marker)                
            });
        }
        // end add_markers

        let MyMapData =(data)=>{
            
            boundingBox = map.getBounds();

            let length = (data.length);
            for(let d=1; d<length; d++){
                geojson = {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {
                            'description': `<strong>AED ${covertToIntCurrancy(data[d].Price).replaceAll('.00','')}</strong>`,
                            'active': `${data[d].Published}`,
                            'price': data[d].Price
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [data[d].Longitude,data[d].Latitude]
                        }
                    }]
                }

                add_markers(geojson);
            }
            //Load End
        };
        // end MyMapData

            
    });
    // End onMount
  </script>
  
  
  
<div class="apartment-sale-right">        
    <a class="map-expend" style="z-index:99" href="/"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
    <a class="map-return" style="z-index:199" href="/"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div id="mapView" class="myMapListing" allowfullscreen="true" loading="lazy"></div>
</div>    
 
  
  <style>
  
    img, svg{ width: 12px !important; height: 18px !important; display: block !important;}
  
    svg { width: 12px !important; height: 18px !important; display: block !important; }
  
    #marker {
        background-image: url('https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg');
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }    
    
    .myMapListing { position:relative; height: 635px; width: 100%;}
  
    .mapboxgl-popup-content {
        background: #ffffff;  border-radius: 10px !important; height: 50px !important;
        box-shadow: 0 0px 0px rgb(0 0 0 / 10%) !important; padding: 2px 7px 2px !important;
    }


    .mapboxgl-popup-content{
    padding: 3px 4px 3px 4px !important;
    }
    a.mapboxgl-ctrl-logo{ display:none !important;}
    .mapboxgl-ctrl-attrib-inner{display:none !important;}

    /* .mapboxgl-popup-content{
        position: absolute !important;
        padding: 40px 10px !important; 
        width: 35vw;
        right: 0;  
        left: -240px;
    } */
    @media only screen and (max-width: 768px) {

        .mapboxgl-popup-content{
            padding: 3px 4px 3px 4px !important;
        }
        a.mapboxgl-ctrl-logo{ display:none !important;}
        .mapboxgl-ctrl-attrib-inner{display:none !important;}
        
        /* .mapboxgl-popup-content{
            position: absolute !important;
            padding: 20px 10px !important; 
            width: 77vw; right: 0; left: -138px; bottom: -59px;
        } */

        .MarkerLinks{ color:inherit; display: inline;}
        
    }

    
  </style>