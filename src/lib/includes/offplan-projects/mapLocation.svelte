<script>

    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    import {ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_TEST_NAME, MBoxAccessToken} from '$lib/helpers';
    
    import 'mapbox-gl/dist/mapbox-gl.css';

    
    import './assets/css/custom.css';
    import './assets/css/myCss.css';
    
    // let lat = 25.013484;
    // let lng = 55.181215;

    export let locDis;
    export let lng = 55.181215;
    export let lat = 25.013484;

    onMount(async () => {
        mapboxgl.accessToken = MBoxAccessToken;
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            //maxZoom: 5,
            minZoom: 6,
            zoom: 8
        });
    });

</script>

<section id="mapLocation" class="bg-light">
    <div class="container">

        <div class="block block-location">
            <!--opacity-2 display-2 bolder uppercase px-3 px-lg-0 DLPFonts Mgaps-->
            <div class="row no-gutters">
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="inner-column aos-init aos-animate" data-aos="fade-up">
                        <h2 class="opacity-2 display-2 bolder uppercase DLPFonts Mgaps">LOCATION & DISTANCES</h2>
                        <h3 class="title-sub t--color"> Near By Places </h3>
                        <p>{locDis ? locDis : ''}</p>
                        <ul class="list-unstyled">
                            <li class="d-flex justify-content-between"> 
                                <span class="mr-2">Dubai Mall</span> 
                                <strong>20 Mints</strong> 
                            </li>
                        </ul>
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