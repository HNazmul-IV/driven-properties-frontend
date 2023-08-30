
<script>

  import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
  import { spring } from 'svelte/motion';

  import { page } from '$app/stores'
  
  import Mapbox from '$lib/includes/sales/map.svelte';
  import algoliasearch from "algoliasearch";

  import BreadCrumb from '$lib/commons/breadcrumb.svelte';
  import SEOTools from '$lib/commons/SEOText.svelte';

  import Search from '$lib/includes/sales/search.svelte';
  import ApartmentsList from '$lib/includes/sales/apartmentslist.svelte';   
  
  import MOBMapbox from '$lib/includes/sales/map-mobile.svelte';
  import MOBApartmentsList from '$lib/includes/sales/apartmentslist-mob.svelte';
  import Loader from '../../loader/loader.svelte';
  //import Pagination from "$lib/includes/sales//pagination.svelte";
  
  //import ApartmentsList from "./ApartmentsList.svelte";
  //import Map from "./Map.svelte";


  const ALGOLIA_APP_ID = "48O3SXQXMR";
  const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
  const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
  const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties';

  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);
  
  let TNOR = 50;
  let bgimg ='/assets/images/gen_2869.jpg';

  let data=[];
  let searchKey; 
  export let pgname;
  let results;
  let pages;
  
  let updateFunction;

  let subQuery;
  let MySearchData;
  let MyRSearchAttributes;
  let MyFilters;
  let Query;    
  let counters=1;
  let active;
  let pageSlug = $page.url.pathname.split('/');
  let pageNumber = 1;
  let isPaginationClick;

  let NoRooms; let minPrice; let maxPrice; let UnitType; let AdType; let PropertyTitle;

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

  const serachFromData = (e=null)=>{
    
    //console.log(e.detail);  
    console.log('serachFromData');    
    
    NoRooms = e.detail.No_of_Rooms ? e.detail.No_of_Rooms : '';
    minPrice = e.detail.minPrice ? e.detail.minPrice : 0 ;
    maxPrice = e.detail.maxPrice ? e.detail.maxPrice : 0 ;

    UnitType = e.detail.Unit_Type !== 'Property Type' ? e.detail.Unit_Type : '';
    AdType = (e.detail.Ad_Type === 'For Sale' ||  e.detail.Ad_Type === 'For Rent') ? e.detail.Ad_Type.replace("For","") : e.detail.FrmSearchKey[0];
    PropertyTitle  = e.detail.Property_Title ? e.detail.Property_Title.replace(/^\s+|\s+$/gm,'') : '';

    
    //console.log(AdType);
    //NoRooms, minPrice, maxPrice, UnitType, AdType, PropertyTitle

    //subQuery = [NoRooms, minPrice, maxPrice, UnitType, AdType, PropertyTitle];

    MySearchData = ["Price", "No_of_Rooms","Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"];
    MyRSearchAttributes =["Price", "No_of_Rooms","Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name"];          

    MyFilters = `Price:${minPrice} TO ${maxPrice}`;
    if(NoRooms !== ''){
      MyFilters = `${MyFilters} AND (No_of_Rooms=${NoRooms}`;
      MyFilters = `${MyFilters} OR Bedrooms=${NoRooms})`;
    }

    //console.log(PropertyTitle);

    if(UnitType !==" "){ Query = [UnitType]; } else{return false;}
    if(AdType !==" "){ Query = [AdType.replaceAll(" ","")]; } else{return false;}
    if(PropertyTitle !==" "){ Query = [PropertyTitle]; }  else{return false;}
    //if(NoRooms !==" "){Query = [NoRooms]} else{return false;}

    if(UnitType !==" " ||  AdType !==" " ){ Query = [AdType.replaceAll(" ",""), UnitType]; }  else{return false;}
    if(UnitType !==" " ||  PropertyTitle !==" " ){ Query = [PropertyTitle, UnitType]; }  else{return false;}
    if(AdType !==" " ||  PropertyTitle !==" " ){ Query = [AdType.replaceAll(" ",""), PropertyTitle]; }  else{return false;}

    if(AdType !==" " ||  PropertyTitle !==" " || UnitType !== " "){ Query = [AdType.replace(" ",""), UnitType, PropertyTitle]; } else{return false;}
    
    console.log(Query, MyFilters); // ['Sale', 'Apartments', 'Palm Jumeirah'] Price:0 TO 150000000
    console.log(typeof Query, typeof MyFilters);
    SearchByString(Query, MyFilters,counters=1);
  };
  //End serachFromData

  // const getPageName = (Query, MyFilters)=>{

  //     if(MyFilters.length > 0 &&  Query.length > 0 ){ 
  //       searchKey ='';
  //     }

  //     console.log('getPageName');
  //     searchKey = pgname ? pgname : pageSlug[3];
  //     searchKey = (searchKey.replaceAll('-', ' ').split(' '));
  //     console.log('searchkey',searchKey);

  //     SearchByString(searchKey);
      
  // };
  // End getPageName end

  
  // Run this function while map move according coordinate
  updateFunction = (newBoundingBox = null, pageNumber)=>{

    console.log('updateFunction', newBoundingBox, pageNumber);
    // should i also update the boundingBox to newBoundingBox?
    if(!isPaginationClick){
      boundingBoxForQuery = [
        newBoundingBox._sw.lat, newBoundingBox._sw.lng,
        newBoundingBox._ne.lat, newBoundingBox._ne.lng,
      ]
    }
    console.log('updateFunction',boundingBoxForQuery, searchKey);

    index.search(searchKey ? searchKey : '', {
      
      insideBoundingBox: [boundingBoxForQuery],
      length:40,
      hitsPerPage: 40,
      relevancyStrictness: 100,
      page: pageNumber,
    })
    .then((hits) => {
      data=(hits);
      results = data.nbHits;
      pages = data.nbPages-1;
      isPaginationClick = false;
      console.log('updateFunction1',data);
    });

  };
  // updateFunction End


  // Run while page load Triggered by onMount
  // Run via page URL like sales-apartment
  const MyLoadFun = async (pageNumber)=>{
    
    console.log(pageNumber, boundingBoxForQuery);
   // console.log('MyLoadFun', searchKey); // [sales, apartments]
    index.search(searchKey ? searchKey : '', {
      insideBoundingBox: [boundingBoxForQuery],
      length:40,
      relevancyStrictness: 100,
      hitsPerPage: 40,
      // page: pageNumber,
    })
    .then((hits) => {
      data=(hits);
      console.log('hist',data);
      // results = data.nbHits;
      // pages = data.nbPages;
    });
  };
  // End MyLoadFun

  
  let Desktop;

  onMount(async ()=>{ 

    searchKey = pgname ? pgname : pageSlug[3];
    searchKey = (searchKey.replaceAll('-', ' ').split(' ')); //['sales', 'apartments']

    updateFunction(boundingBox, 1);

    Desktop = window.innerWidth > 769;

  });
  // End onMount End

  // pagination nextprev start
  const nextPrevPagination = (start=null, end=null) => {
      isPaginationClick = true;
      let paginationNumber = 0;
      if(start){
          paginationNumber = start;
      }else{
          paginationNumber = end;
      }
      pageNumber = paginationNumber;
      updateFunction(null,paginationNumber);
  } // end nextPrevPagination


  // pagination numbering start
  const numPagination = (event) =>{
      isPaginationClick = true;
      let paginationNumber = parseInt(event.target.innerText);
      console.log(paginationNumber);
      pageNumber = paginationNumber;
      updateFunction(null,paginationNumber);
  } // end numPagination  

</script>

<!-- <SEOTools MetaTitle ='' MetaDescription =''/> -->

<BreadCrumb imgbg={bgimg} LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} headings={pageSlug[3]} Bdtype={4}/>


<!-- Compoenent section -->
<section data-sveltekit-prefetch id="skills" class="skills mt-2">
  <div class="container aos-init aos-animate" data-aos="fade-up">
      <Search on:serachFromData={serachFromData}  pgname={searchKey}/>
      <!-- <Loader /> -->
      <div class="row mt-{Desktop ? "4": "2"}">
          {#if Desktop }
            <ApartmentsList list = {data.hits} />  
            <Mapbox boundingBox = {boundingBox} data={data.hits} updateFunction={updateFunction} />
            <!-- <Mapbox boundingBox = {boundingBox} data={data.hits} /> -->
          {:else}
            <MOBMapbox boundingBox = {boundingBox} data={data.hits} updateFunction={updateFunction} />
            <MOBApartmentsList list = {data.hits} />
          {/if}
      </div>
  </div>
</section>
<!-- End Skills Section -->
<!-- Pagination -->
<div id="pagination-container" class="container">
  <div class="row col-sm-12  mb-5" id="Pgnton">
      <div class="text-center total-pages d-flex">
        <div class="pagination pagination-first">
            <span on:click={()=>nextPrevPagination(1, null)} class="page-no page-first {pageNumber !== 1? '':'page-disabled'} ">&#8249;</span>
        </div>
        <div class="pagination pagination-middle">
            {#each Array(pages) as _, i}
                <span on:click={(event)=>numPagination(event) } class="page-no {pageNumber-1 === i? ' page-active': ''}">{i+1}</span>
            {/each}
        </div>
        <div class="pagination pagination-last">
            <span on:click={()=>nextPrevPagination(null, pages)} class="page-no page-last {pageNumber !== pages? '':'page-disabled'} ">&#8250;</span>
        </div>
    </div>
  </div>
</div>
<!--Pagination End-->

<!-- <section id="Pgnton">
  <div class="container mt-2 mb-2">
      <div class="g-0 row">
          <div class="g-0 col-sm col-md-6 col-lg-6">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center" id="PDPAGE">
                    <li class="page-item"><a sveltekit:prefetch class="page-link btn {counters === 1 ? 'disabled':''}" id="prevButton" on:click={myPrevious}>Previous</a></li>
                    
                      <li class="page-item w-100">
                        <a class="page-link btn disabled" href="!#">
                          <div class="counter-viewport">
                            <div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
                                                                                
                              <strong class="hidden" aria-hidden="true">
                                  {Math.floor($displayed_count + 1)} 
                                  Page(s) : {Math.floor($displayed_count + 1) * TNOR } - {TNOR} Records
                              </strong>
                                
                              <strong>
                                  {Math.floor($displayed_count)} 
                                  {#if Math.floor($displayed_count) !== 0}
                                    {#if counters ===1}
                                      Page(s) : {(Math.floor($displayed_count) * 1) } - 
                                      {(Math.floor($displayed_count) * TNOR) + 0 }  Records
                                    {:else}
                                      Page(s) : {(Math.floor($displayed_count * TNOR) - TNOR + 1) } -
                                      {(Math.floor($displayed_count) * TNOR)}  Records
                                    {/if}
                                  {:else}
                                      Page(s) : {(Math.floor($displayed_count) * TNOR)} - {TNOR} Records
                                  {/if}
                              </strong>

                            </div>
                          </div>	                        
                        </a>
                      </li>
                    
                    <li class="page-item"><a sveltekit:prefetch class="page-link btn {counters === data.length ? 'disabled':''}" id="nextButton" on:click={myNext}>Next</a></li>
                </ul>
            </nav>
          </div>
      </div>
  </div>
</section> -->
<!--Pagination End-->

<style>

  #Pgnton{ position: relative; padding:0px 0px 60px 0px;}

  @media only screen and (max-width: 768px) {

    #skills{ padding: 0;}
    #Pgnton{ padding:30px 0px 10px 0;}

  }

  section {
    padding: 60px 0 0;
    overflow: hidden;
  }
  .page-active{
        font-weight: bold;
        /* text-decoration: underline; */
        background: #333;
        border-radius: 50%;
        color: white;
        padding: 10px 16px;
    }
  .total-pages {
      padding-left: 0;
      padding-right: 0;
      /* justify-content: space-between; */
      justify-content: space-evenly;
      margin-left: 10px;
      width: 100%;
      /* border: 1px solid #ccc; */
      /* box-shadow: 0px 0px 2px 1px #eee; */
      /* background: #f5f5f5; */
      padding: 1em;
      /* box-shadow: 0px 0px 1px 1px #ddd;
      border-radius: 4px; */
      /* overflow: hidden; */
  }
  .page-no{
      cursor: pointer;
      padding: 10px 5px;
      font-size: 14px;
      padding: 10px 16px;
  }
  .page-no.page-last {
      /* border-left: 1px solid #ccc; */
      /* background: #f9f9f9; */
      padding: 0 15px;
      font-size: 24px;
      border-radius: 50%;
  }
  .page-no.page-first {
      /* border-right: 1px solid #ccc; */
      /* background: #f9f9f9; */
      padding: 0 15px;
      font-size: 24px;
      border-radius: 50%;
  }
  .page-disabled{
      color: #ccc;
      font-weight: normal;
  }
  .page-disabled:hover{
      cursor: none;
      font-weight: normal !important;
  }
  span.page-no:hover {
      cursor: pointer;
      /* background-color: #f5f5f5; */
      font-weight:bold;
  }
    

</style>