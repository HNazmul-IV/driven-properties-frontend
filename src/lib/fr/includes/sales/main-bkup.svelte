<script>    

    import BreadCrub from '$lib/includes/sales/breadcrub.svelte';    
    import Search from '$lib/includes/sales/search.svelte';
    import ApartmentsList from '$lib/includes/sales/apartmentslist.svelte';    

    import Mapbox from '$lib/includes/sales/map.svelte';
    import algoliasearch from "algoliasearch";

    import { page } from '$app/stores'
    //import { GetURL } from './../../../store/getUrlByname.js'
    

    //import ApartmentsList from "./ApartmentsList.svelte";
    //import Map from "./Map.svelte";


    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);  
  
    let bgimg ='/assets/images/gen_2869.jpg';
    let linkone ='Sales';
    let linktwo ='Buy Ready Property';
    let linkthree ='Ready Apartments';
    
    let searchKey
    searchKey = $page.params.getByPageName ? $page.params.getByPageName.replace('-', ' ') :' '
    searchKey = searchKey.split(" ");
    //console.log(searchKey);
    
    
    let data;

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

    //$: boundingBox, console.log('---- bounding box updated in main');

    //index.getSettings().then(settings => { console.log(settings); });
    // index.setSettings({ 
    //   searchableAttributes: ["Ad_Type", "Unit_Type", "objectID", "No_of_Rooms" ,"Property_Name"],
    //   customRanking:["desc(Price)"]
    // });


    index.search(searchKey, {
      insideBoundingBox: [boundingBoxForQuery],
    }).then(({ hits }) => {
      data=(hits);
      //console.log(data);
    });
        
    let updateFunction = (newBoundingBox)=>{

      //console.log(newBoundingBox+ ' this caca');

      // should i also update the boundingBox to newBoundingBox?
      boundingBoxForQuery = [
        newBoundingBox._sw.lat,
        newBoundingBox._sw.lng,
        newBoundingBox._ne.lat,
        newBoundingBox._ne.lng,
      ]
      
      //console.log(boundingBoxForQuery+ ' Testing with new values');

      index.search(searchKey, {
        insideBoundingBox: [boundingBoxForQuery],
      }).then(({ hits }) => {
        data=(hits);
        //console.log(data);
      });
      
    };
    // updateFunction End


    // New Code here    
</script>
    
<BreadCrub imgbg={bgimg} LinkOne={linkone} LinkTwo={linktwo} LinkThree={linkthree} />
<!-- ======= Skills Section ======= -->
<section id="skills" class="skills">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        <Search MyData = {data} boundingBox = {boundingBox} updateFunction={updateFunction} />
        <div class="row mt-5">
            <ApartmentsList list = {data} />
            <Mapbox boundingBox = {boundingBox} data={data} updateFunction={updateFunction} />        
        </div>        
    </div>

</section>
<!-- End Skills Section -->