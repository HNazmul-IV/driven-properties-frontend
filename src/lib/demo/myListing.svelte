<script>
    import algoliasearch from "algoliasearch";
    import { onMount } from 'svelte';
    
    import SearchForm from '$lib/demo/dev/sForm.svelte';
    import LeftListing from '$lib/demo/dev/leftListing.svelte';
    import RightMaps from '$lib/demo/dev/rightMap.svelte';
    import CSMAP from '$lib/demo/dev/csMaps.svelte';
    

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);  


    let data;
    let updateFunction;
    let MySerachingBtn;
    let Community;

    export let boundingBox = {
      "_sw": {
          "lng": 55.098586285398085,
          "lat": 25.00444866471817
      },
      "_ne": {
          "lng": 55.18201371459705,
          "lat": 25.15650411973273
      }
    };

    export let boundingBoxForQuery = [
      25.004448664717486, // p1Lat
      55.064511502076556, // p1Lng
      25.15650411973199, // p2Lat
      55.21608849792656, // p2Lng
    ];
    
    onMount(async () => {

        MySerachingBtn = (e)=>{
            Community = e.detail.Community ? e.detail.Community : "";
        };
        
        const AlgoliaDataSet =(query)=>{

            console.log(query);

            index.search(query ? query:'' , {
                insideBoundingBox: [boundingBoxForQuery],
                //similarQuery: subQuery ? subQuery :'',
                //relevancyStrictness: 100,
                //filters:MyFilters ? MyFilters:''
                
                page: 0,
                hitsPerPage: 10,

                //distinct: 1
            })
            .then(({ hits }) => {
                data=(hits);
                console.log(data);
            });

            updateFunction = (newBoundingBox)=>{

                //console.clear();
                //console.log(newBoundingBox+ ' this caca');

                // should i also update the boundingBox to newBoundingBox?
                boundingBoxForQuery = [
                    newBoundingBox._sw.lat, newBoundingBox._sw.lng,
                    newBoundingBox._ne.lat, newBoundingBox._ne.lng,
                ]

                //console.log(boundingBoxForQuery+ ' Testing with new values');

                index.search(query ? query:'' , {
                    insideBoundingBox: [boundingBoxForQuery],
                    //similarQuery: subQuery ? subQuery :'',
                    //relevancyStrictness: 100,
                    //filters:MyFilters ? MyFilters:''

                    page: 0,
                    hitsPerPage: 10,                

                    //distinct: 1
                })
                .then(({ hits }) => {
                    data=(hits);
                    console.log(data);
                });
            };
            // updateFunction End        

        };
        // End AlgoliaDataSet
        AlgoliaDataSet(Community);        
        
    });
    // end onMount
    

</script>

<!-- <section>
    <div class="container mt-5 mb-5">
        <div class="row">

            <div class="col-sm">
                <SearchForm/>
            </div>
            
        </div>
    </div>

    <div class="container mt-5 mb-5">
        <div class="row">            
            <div class="col-sm">
                <LeftListing data={data}/>
            </div>

            <div class="col-sm">
                <RightMaps boundingBox = {boundingBox} data={data} updateFunction={updateFunction} />
            </div>

        </div>
    </div>
</section> -->

<section></section>

<SearchForm on:MySerachingBtn{MySerachingBtn}/>

<CSMAP boundingBox = {boundingBox} data={data} updateFunction={updateFunction}/>

