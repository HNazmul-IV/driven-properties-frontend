<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    import 'mapbox-gl/dist/mapbox-gl.css'
    
    export let MyCommunity ="Al Furjan";
    let projectName = MyCommunity.replace('-',' ');
    
    onMount(async () => {
        
        
        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g';
        
        const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
        mapboxClient.geocoding
        .forwardGeocode({
            query: `${MyCommunity}, Dubai`,
            autocomplete: false,
            limit: 1
        })
        .send()
        .then((response) => {
            if (
                !response ||
                !response.body ||
                !response.body.features ||
                !response.body.features.length
            ) {
                console.error('Invalid response:');
                console.error(response);
                return;
            }
            const feature = response.body.features[0];
            console.log(feature);
            const map = new mapboxgl.Map({
                container: 'map',
                // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
                style: 'mapbox://styles/mapbox/outdoors-v12',
                center: feature.center,
                zoom: 11
            });

            // Add a new Marker.
            // const marker = new mapboxgl.Marker({
            //     color: '#F84C4C' // color it red
            // });

            // Create a marker and add it to the map.
            new mapboxgl.Marker({color: 'red'}).setLngLat(feature.center).addTo(map);
        });

     }); // onMount end

    </script>


<section id="Map">
    <script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="text-uppercase">Map</h4>
                <div class="col-lg-12 ">
                    <div class="apartment-sale-right">        
                        <div id="map" class="myMapListing" allowfullscreen="true" loading="lazy"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<style>
    #Map{position: relative; height: 550px; margin-bottom: 5em;}
    /* #Map { position: absolute; top: 0; bottom: 0; width: 100%; } */
    /* #Map{ position: relative; padding: 0px 0 60px 0;} */
    #map { position: relative;  width: 100%; }

    .myMapListing { position:relative; height: 450px; width: 100%;}

    body { margin: 0; padding: 0; }
</style>