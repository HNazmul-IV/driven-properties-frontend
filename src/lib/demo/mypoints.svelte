<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';

    //import 'normalize.css/normalize.css';
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { covertToIntCurrancy, CurrancySBC } from '$lib/includes/others';

    export let data;
    
    onMount(async () => { 


        // TO MAKE THE MAP APPEAR YOU MUST
        // ADD YOUR ACCESS TOKEN FROM
        // https://account.mapbox.com

        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g';
        const monument = [55.25120403896978, 25.163216852696415];
        const map = new mapboxgl.Map({
            container: 'map',
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/light-v10',
            center: monument,
            zoom: 15
        });
        
        map.on('load', () => {

            console.log(data);
            // create the popup
            const popup = new mapboxgl.Popup({ offset: 25 }).setText( 'Testing with on click popup' );

            // create DOM element for the marker
            const el = document.createElement('div');
            el.id = 'marker';
            
            // create the marker
            new mapboxgl.Marker(el)
            .setLngLat(monument)
            .setPopup(popup) // sets a popup on this marker
            .addTo(map);

        });
    });
</script>

<div id="map"></div>

<style>
    #marker {
        background-image: url('https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg');
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }
    
    /* .mapboxgl-popup {
        max-width: 200px;
    } */
</style>

 
