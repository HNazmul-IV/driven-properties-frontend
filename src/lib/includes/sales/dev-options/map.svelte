<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    
    //import 'normalize.css/normalize.css'
    import 'mapbox-gl/dist/mapbox-gl.css'
    
    import {covertToIntCurrancy, CurrancySBC} from './others';

    import Apartmentslist from './apartmentslist.svelte';

    export let data;
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

    onMount(async () => {

        let lat = 25.2048;
        let lng = 55.2708;
        

        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g';
        const map = new mapboxgl.Map({
            container: 'mapView',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng,lat],
            //maxZoom: 5,
            minZoom: 6,
            zoom: 6
        });


        boundingBox = map.getBounds();
        //console.log(map.getBounds()); 

        map.on('load', () => {
            

            let length = (data.length);
            for(let d=0; d<length; d++){
                geojson = {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {
                            'description': `<strong>AED ${covertToIntCurrancy(data[d].Price)}</strong>`,
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
            /*
            map.addSource('pointsSource', {
                'type': 'geojson',
                'data':{
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {
                            'description': "<p>hello zubair </p>"
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [lng,lat]
                        }
                    }]
                } 
            });

            // Add a layer showing the places.
            map.addLayer({
                'id': 'points',
                'type': 'circle',
                'source': 'pointsSource',
                'paint': {
                    'circle-color': '#4264fb',
                    'circle-radius': 6,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                }

            });
            */

            map.on('resize', () => {

                boundingBox = map.getBounds();
                updateFunction(boundingBox);
                
                //console.log('map resized');
                //console.log(JSON.stringify(boundingBox));
            });
            // Resize end
            
            map.on('movestart', (e) => {

                //boundingBox = map.getBounds();
                //map.setFilter('airport', ['has', 'description']);
               
                let length = (data.length);
                for(let d=0; d<length; d++){
                    geojson = {
                        'type': 'FeatureCollection',
                        'features': [{
                            'type': 'Feature',
                            'properties': {
                                'description': `<strong>AED ${covertToIntCurrancy(data[d].Price)}</strong>`,
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
                
                //updateFunction(boundingBox);
                
                //console.log('Move Start');
                //console.log(JSON.stringify(boundingBox));

            });
            // Move Start End
            
            map.on('moveend', () => {

                boundingBox = map.getBounds();
                updateFunction(boundingBox);

                //console.log('Move End');
                //console.log(JSON.stringify(boundingBox));
            });
            // Move End        

            map.on('mousemove',(e)=>{
                
                boundingBox = map.getBounds();
                updateFunction(boundingBox);

                //console.log("Mouse Move Event");
                //console.log(JSON.stringify(boundingBox));
            });
            //Mouse Move end

            map.on('mouseleave', (e) => {

                boundingBox = map.getBounds();
                updateFunction(boundingBox);
                //console.log('Mouse Leave Event')
                //console.log(JSON.stringify(boundingBox));
            });
            // Mouse Leave end

        });
        // load end   
     
    const add_markers = (geojson)=>{   

        geojson.features.forEach(function (marker) {

            boundingBox = map.getBounds();

            if(marker.properties.active == 'Yes' && marker.properties.price >= 90000 ){
                
                var el = document.createElement('span');
                //el.className = 'map-icon map-icon-map-pin marker '+poi;
                //el.innerHTML = "<span class='tooltip "+icon(icon_name)+" marker-sub "+poi+"' title=\""+marker.properties.description+"\"></span>";
                //el.innerHTML = "<span class='tooltip  marker-sub' title=\""+marker.properties.description+"\"></span>";
                // add marker to map                
                

                new mapboxgl.Marker({color: "#bcb164", scale:0})
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({closeButton: false, closeOnClick: true })
                    .setHTML(`${marker.properties.description}`)
                )
                //.setHTML(`${marker.properties.description}`)
                .addTo(map);

                //very important
            }
            updateFunction(boundingBox);
            //console.log(marker)
        });        
    }
              
    });
</script>


<div class="col-lg-6 mt-md-5">
    <div class="apartment-sale-right">        
        <a class="map-expend" style="z-index:99" href="/"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
        <a class="map-return" style="z-index:199" href="/"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
        <div id="mapView" class="myMapListing" allowfullscreen="true" loading="lazy"></div>
    </div>    
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

    #mapView .mapboxgl-popup-content {
        background: #ffffff;  border-radius: 1px !important; height: 50px !important;
        box-shadow: 0 0px 0px rgb(0 0 0 / 10%) !important; padding: 2px 7px 2px !important;
    }
</style>