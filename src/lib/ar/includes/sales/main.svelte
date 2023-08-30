
<script>

    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    import { page } from '$app/stores'
    import Mapbox from '$lib/includes/sales/map.svelte';
    import algoliasearch from "algoliasearch";

    import BreadCrub from '$lib/includes/sales/breadcrub.svelte';    
    import Search from '$lib/includes/sales/search.svelte';
    import ApartmentsList from '$lib/includes/sales/apartmentslist.svelte';    

    
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

    let searchKey; let data;
    let updateFunction;
    let MyArray =[];
    let SearchData = []; //["No_of_Rooms", "Price", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"]
    
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
    
    onMount(async ()=>{ MyLoadFun(); });
    // End onMount End

    //onDestroy(async ()=>{ MyLoadFun(); });
    // End onDestroy End

    //tick().then(()=>{ getPageName($page); MyLoadFun(); });
    // End tick Promise End
    
    beforeUpdate(async ()=>{ getPageName($page); });
    // End beforeUpdate End

    afterUpdate(async ()=>{ getPageName($page); });
    // End afterUpdate End

    const serachFromData = (e=null)=>{
      
      //console.log(e.detail);
      //console.log(e.detail.BedRoom);
      //["Ad_Type","Unit_Type","Price","No_of_Rooms","Property_Name","min","max", "objectID"]
      //MyArray = [e.detail.FrmSearchKey[0], e.detail.FrmSearchKey[1], e.detail.maxPrice, e.detail.BedRoom, e.detail.ProTitle, e.detail.minPrice,  e.detail.maxPrice];

      let NoRooms = e.detail.No_of_Rooms ? e.detail.No_of_Rooms : 0;
      let minPrice = e.detail.minPrice ? e.detail.minPrice : 0 ;
      let maxPrice = e.detail.maxPrice ? e.detail.maxPrice : 0 ;
      let UnitType = e.detail.Unit_Type ? e.detail.Unit_Type : '';
      let AdType = e.detail.Ad_Type === 'For Sale' ? e.detail.FrmSearchKey[0]: e.detail.Ad_Type.replace("For","");
      let PropertyTitle = e.detail.Property_Title ? e.detail.Property_Title : '';       
      //NoRooms, minPrice, maxPrice, UnitType, AdType, PropertyTitle
      
      if( NoRooms === 0 && PropertyTitle === '' ){ MyArray = [maxPrice, UnitType, AdType ]; } 
      else if( PropertyTitle !== '' ){ MyArray = [ NoRooms, maxPrice, UnitType, AdType ]; }
      else {MyArray = [ NoRooms, maxPrice, UnitType, AdType, PropertyTitle ];}
    
      //console.log("From filter Value");
      //console.log(MyArray);
      
    };
    //End serachFromData

    const getPageName = (PageNames)=>{

      const fruits = [
        "ready-apartments", "ready-villas", "ready-townhouses", 
        "offplan-apartments", "offplan-villas", "offplan-townhouses", "land-plots",
        "commerical-for-sale", "industrial-for-sale", "ready-townhouses", 
      ];

      if(MyArray.length !== 0 ){

        //console.clear();
        
        if(MyArray[0] === '' && MyArray[5] === ''){ SearchData = ["Price", "Unit_Type"];}
        else if(MyArray[5] === ''){ SearchData = ["No_of_Rooms", "Price", "Unit_Type"]; }
        else {SearchData = ["No_of_Rooms", "Price", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"];}
        
        // index.setSettings({  searchableAttributes:SearchData, 
        //   customRanking:["desc(No_of_Rooms)","desc(Price)"],
        //   //facetFilters:["No_of_Rooms", "Price"],
        // });
        // index.getSettings().then(settings => { console.log(settings); });
        
        //index.setSettings({'maxValuesPerFacet':MyArray[1]});
        searchKey = MyArray;
        //searchKey = searchKey.split(" ");
        console.log(MyArray);

      } else{
        
        //console.clear();
        //SearchData = ["No_of_Rooms", "Price", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"];
        // index.setSettings({ 
        //   searchableAttributes: SearchData,
        //   //facetFilters:["No_of_Rooms", "Price"],
        //   customRanking:["desc(No_of_Rooms)","desc(Price)"],
        // });
        // index.getSettings().then(settings => { console.log(settings); });

        searchKey = $page.params.getByPageName ? $page.params.getByPageName.replace('-', ' ') :' '      
        searchKey = searchKey.split(" ");
        
        //console.log(searchKey);

     }

    };
    // End getPageName end
    
    const MyLoadFun = ()=>{
        
        //console.clear();
        //$: boundingBox, console.log('---- bounding box updated in main');
        index.search(searchKey, {
          insideBoundingBox: [boundingBoxForQuery],
        })
        .then(({ hits }) => {
          data=(hits);
          //console.log(data);
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

          index.search(searchKey, {
            insideBoundingBox: [boundingBoxForQuery],
          })
          .then(({ hits }) => {
            data=(hits);
            //console.log(data);
          });
          
        };
        // updateFunction End
    };
    // End MyLoadFun

</script>

<BreadCrub imgbg={bgimg} LinkOne={linkone} LinkTwo={linktwo} LinkThree={linkthree} />

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