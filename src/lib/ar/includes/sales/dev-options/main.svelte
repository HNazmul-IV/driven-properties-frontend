
<script>

    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    import Mapbox from '$lib/includes/sales/map.svelte';
    import algoliasearch from "algoliasearch/lite";
    import { page } from '$app/stores';

    import BreadCrub from '$lib/includes/sales/breadcrub.svelte';    
    import Search from '$lib/includes/sales/search.svelte';
    import ApartmentsList from '$lib/includes/sales/apartmentslist.svelte';    


    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'test_properties';

    let client;
    let index;

    let bgimg ='/assets/images/gen_2869.jpg';
    let linkone ='Sales';
    let linktwo ='Buy Ready Property';
    let linkthree ='Ready Apartments';

    let data =[];
    let searchKey;
    let updateFunction;
    let MyArray =[];


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

      //onMount(async ()=>{ MyLoadFun(); });
      // End onMount End

      //onDestroy(async ()=>{ search(); });
      // End onDestroy End

      //tick().then(()=>{ getPageName($page); MyLoadFun(); });
      // End tick Promise End

      //beforeUpdate(async ()=>{ getPageName($page); });
      // End beforeUpdate End

      //afterUpdate(async ()=>{ getPageName($page); });
      // End afterUpdate End

      let serachFromData = (e=null)=>{
          
        console.log(e.detail);

        //console.log(e.detail.BedRoom);
        //["Ad_Type","Unit_Type","Price","No_of_Rooms","Property_Name","min","max", "objectID"]
        //MyArray = [e.detail.FrmSearchKey[0], e.detail.FrmSearchKey[1], e.detail.maxPrice, e.detail.BedRoom, e.detail.ProTitle, e.detail.minPrice,  e.detail.maxPrice];
        //mysting = (e.detail.ProStatus)  ? e.detail.ProStatus.replace("For Sale", 'Sale') :e.detail.ProStatus.replace("For Rent", 'Rent')

        MyArray = [
          e.detail.ProType,
          //e.detail.maxPrice, 
          e.detail.BedRoom,
          e.detail.ProTitle
        ];

        console.log("From filter Value");
        console.log(MyArray);

      };
      //End serachFromData

      const getPageName = (PageNames)=>{

        const fruits = [
          "ready-apartments", "ready-villas", "ready-townhouses", 
          "offplan-apartments", "offplan-villas", "offplan-townhouses", "land-plots",
          "commerical-for-sale", "industrial-for-sale", "ready-townhouses", 
        ];

        if(MyArray.length !== 0 ){
          searchKey = MyArray;
          //searchKey = searchKey.split(" ");
        }
        else{
          searchKey = $page.params.getByPageName ? $page.params.getByPageName.replace('-', ' ') :' '      
          searchKey = searchKey.split(" ");
          //console.log(searchKey);
        }

      };
      // End getPageName end

      
      onMount(async ()=>{

        client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
        index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

        // only query string
        //let abc = $page.params.getByPageName.replace('-',' ').split(','); 
        //console.log(abc);      
        const res = await index.search(searchKey,{insideBoundingBox: [boundingBoxForQuery]});
        data = res.hits;
        //console.log('On Load: '+ data);

      });


    async function search(){

      //$: boundingBox, console.log('---- bounding box updated in main');
      let searchableAttributes = ["No_of_Rooms", "Price", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"]; setSettings(searchableAttributes);

      //let abc = $page.params.getByPageName.replace('-',' ').split(',');
      //console.log(abc);
      const res = await index.search(searchKey,{insideBoundingBox: [boundingBoxForQuery]});
      data = res.hits;
      //console.log('Seach Sync On: '+ data);      
    };
    // Search End


      updateFunction = async(newBoundingBox)=>{

        //console.log(newBoundingBox+ ' this caca');

        // should i also update the boundingBox to newBoundingBox?
        boundingBoxForQuery = [
        newBoundingBox._sw.lat, newBoundingBox._sw.lng,
        newBoundingBox._ne.lat, newBoundingBox._ne.lng,
        ]

        //let abc = $page.params.getByPageName.replace('-',' ').split(',');
        const res = await index.search(searchKey,{insideBoundingBox: [boundingBoxForQuery]});
        data = res.hits;

      };
      // updateFunction End      


    const setSettings = async (searchableAttributes=null, customRanking=null)=>{
      const res = await index.setSettings({ 
        searchableAttributes: searchableAttributes ? searchableAttributes: ["No_of_Rooms", "Price", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"],
        customRanking: customRanking ? customRanking: ["desc(No_of_Rooms)","desc(Price)"],
        //filters:[{"No_of_Rooms":a,"Price":a, "Unit_Type":a, "Ad_Type":a}]
      });
      //index.getSettings().then(settings => { console.log(settings); });  
    };
    // end setSettings

    //tick().then(()=>{ getPageName($page); MyLoadFun(); });
    // End tick Promise End

    beforeUpdate(async ()=>{ getPageName($page); });
    // End beforeUpdate End

    afterUpdate(async ()=>{ getPageName($page); });
    // End afterUpdate End

    onDestroy(async ()=>{ getPageName($page); });
    // End onDestroy End

</script>

<BreadCrub imgbg={bgimg} LinkOne={linkone} LinkTwo={linktwo} LinkThree={linkthree} />

<!-- ======= Skills Section ======= -->
<section id="skills" class="skills">
  <div class="container aos-init aos-animate" data-aos="fade-up">
      <Search MyData = {data} on:serachFromData={serachFromData} />
      <div class="row mt-4">
          <ApartmentsList list = {data} />
          <Mapbox boundingBox = {boundingBox} data={data} updateFunction={updateFunction} />
      </div>
  </div>
</section>
<!-- End Skills Section -->

<!-- <p class="text-center">Serach Key: {searchKey} </p> -->
<!--form values Details :<br/>
PropertyStatus: {prostatus} <br/>
PropertyType: {protype} <br/>
No. BedRoom: {bedrooms} <br/>
Property Title: {protitle} <br/>
searchKey: {searchKey}<br/>
minPrice: {range2[0]}<br/>
maxPrice: {range2[1]}<br/-->
<!-- [e.detail.FrmSearchKey[0], e.detail.FrmSearchKey[1], e.detail.maxPrice, e.detail.BedRoom, e.detail.ProTitle, e.detail.minPrice,  e.detail.maxPrice] -->
