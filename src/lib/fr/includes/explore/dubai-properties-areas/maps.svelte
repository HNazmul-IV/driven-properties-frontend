<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    import algoliasearch from 'algoliasearch/lite';
    
    import 'mapbox-gl/dist/mapbox-gl.css'
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
   

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);    

    
    export let Unit_Type = "Apartment";
    export let MyCommunity ="Al Furjan";
    let projectName = MyCommunity.replace('-',' ');
    let Query;
    export let MyFiterData=[];
    let geojson = null;

    Query = [Unit_Type, projectName];
    
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


    onMount(async () => {

        const LoadMyDATAS = (Query)=>{

            /* Query Seraching with multiple fields but not working */
            index.search(Query ? Query :'', {

                //similarQuery: subQuery ? subQuery :'' ,
                //facetFilters:Query,
                //attributesToRetrieve:MySearchData,
                //restrictSearchableAttributes:MyRSearchAttributes,
                relevancyStrictness: 100,
                //filters:MyFilters ? MyFilters: '',
                hitsPerPage:20,

            }).then(({ hits }) => {
                console.log(hits);
                MyFiterData = (hits);
            });
        };


        LoadMyDATAS(Query);

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

        map.on('load', () => {
            
            let length = (MyFiterData.length);
            for(let d=0; d<length; d++){
                geojson = {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {
                            'description': `<strong>AED ${covertToIntCurrancy(MyFiterData[d].Price)}</strong>`,
                            'active': `${MyFiterData[d].Published}`,
                            'price': MyFiterData[d].Price
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [MyFiterData[d].Longitude,MyFiterData[d].Latitude]
                        }
                    }]
                }

                add_markers(geojson);
            }
            //Load End
        });

        const add_markers = (geojson)=>{   

            geojson.features.forEach(function (marker) {

                boundingBox = map.getBounds();
                if(marker.properties.active == 'Yes'){
                    
                    var el = document.createElement('span');
                    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: true  })
                    .setLngLat(marker.geometry.coordinates)
                    .setHTML(`${marker.properties.description}`)
                    .addTo(map);

                }
            });        
        }
        // end Map

              
    });
</script>


<section id="Map">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="text-uppercase mb-5 mt-5">MAP</h4>
                <div class="col-lg-12 mt-5">
                    <div class="apartment-sale-right">        
                        <a class="map-expend" style="z-index:99" href="/"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a>
                        <a class="map-return" style="z-index:199" href="/"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                        <div id="mapView" class="myMapListing" allowfullscreen="true" loading="lazy"></div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</section>

<style>

    #Map{ padding: 0px 0 60px 0;}

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
    
    .myMapListing { position:relative; height: 450px; width: 100%;}

    #mapView .mapboxgl-popup-content {
        background: #ffffff;  border-radius: 1px !important; height: 50px !important;
        box-shadow: 0 0px 0px rgb(0 0 0 / 10%) !important; padding: 2px 7px 2px !important;
    }
</style>