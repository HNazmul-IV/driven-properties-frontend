
<script>

    import { afterUpdate, onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    import {ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_TEST_NAME, MBoxAccessToken} from '$lib/helpers';
    
    import 'mapbox-gl/dist/mapbox-gl.css';
    import './assets/css/custom.css';
    import './assets/css/myCss.css';

    
    export let locDis;
    export let lng = 55.181215;
    export let lat = 25.013484;

    // onMount(async () => {
    //     mapboxgl.accessToken = MBoxAccessToken;
    //     const map = new mapboxgl.Map({
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/streets-v12',
    //         center: [lng, lat],
    //         //maxZoom: 5,
    //         minZoom: 6,
    //         zoom: 8
    //     });
    // });

     afterUpdate(async () => {
        console.log(lng, lat);
        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVubWFwYm94IiwiYSI6ImNsNjBpaDJoajE4bGgzZm9hYzh4amlhOTEifQ.2X7wHieXqxadrO16pnLl6g';
        const map = new mapboxgl.Map({
            container: 'map',
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: 12
        });
        const marker1 = new mapboxgl.Marker({color: 'red'}).setLngLat([lng, lat]).addTo(map);

     }); // onMount end

     console.log('fsdfsdf');
     console.log('fsdfsdfasdfsdf');
     console.log('sdfdsfdsfsdf');
</script>

<section id="mapLocation" class="bg-light">
    <div class="container">

        <div class="block block-location">
            <!--opacity-2 display-2 bolder uppercase px-3 px-lg-0 DLPFonts Mgaps-->
            <div class="row no-gutters landing-location-container">
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="inner-column aos-init aos-animate" data-aos="fade-up">
                        <h2 class="opacity-2 display-2 bolder uppercase DLPFonts Mgaps">МЕСТОПОЛОЖЕНИЕ И РАССТОЯНИЯ</h2>
                        <h3 class="title-sub t--color"> Достопримечательности рядом с проектом </h3>
                        <p>{locDis ? locDis : ''}</p>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div id="map" class="project-map aos-init aos-animate" data-aos="fade-up"></div>
                </div>

            </div>
        </div>
        <!--Map End-->

    </div>    
</section>
<!--mapLocation End-->

<style>
    h3.title-sub.t--color {
        font-size: 40px;
        display: flex;
        flex-wrap: wrap;
    }
    h2.opacity-2.display-2.bolder.uppercase.DLPFonts.Mgaps {
        font-size: 50px;
        display: flex;
        flex-wrap: wrap;
    }
</style>
