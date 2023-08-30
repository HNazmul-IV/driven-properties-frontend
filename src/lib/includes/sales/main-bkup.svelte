
<script>

    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    import { spring } from 'svelte/motion';

    import { page } from '$app/stores'
    import Mapbox from '$lib/includes/sales/map.svelte';
    import algoliasearch from "algoliasearch";

    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import Search from '$lib/includes/sales/search.svelte';
    import ApartmentsList from '$lib/includes/sales/apartmentslist.svelte';    
    //import Pagination from "$lib/includes/sales//pagination.svelte";
    
    //import ApartmentsList from "./ApartmentsList.svelte";
    //import Map from "./Map.svelte";


    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);  
  
    let bgimg ='/assets/images/gen_2869.jpg';

    let data=[];
    let searchKey; 
    export let pgname;
    let updateFunction;

    let subQuery;
    let MySearchData;
    let MyRSearchAttributes;
    let MyFilters;
    let Query;    
    let counters=0;
    let active;

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
      if(AdType !==" "){ Query = [AdType.replace(" ","")]; } else{return false;}
      if(PropertyTitle !==" "){ Query = [PropertyTitle]; }  else{return false;}
      
      if(UnitType !==" " ||  AdType !==" " ){ Query = [AdType.replace(" ",""), UnitType]; }  else{return false;}
      if(UnitType !==" " ||  PropertyTitle !==" " ){ Query = [PropertyTitle, UnitType]; }  else{return false;}
      if(AdType !==" " ||  PropertyTitle !==" " ){ Query = [AdType.replace(" ",""), PropertyTitle]; }  else{return false;}
      
      if(AdType !==" " ||  PropertyTitle !==" " || UnitType !== " "){ Query = [AdType.replace(" ",""), UnitType, PropertyTitle]; } else{return false;}
      
      //Query = [ AdType, UnitType, PropertyTitle];
      //console.log(Query);

      getPageName(Query, MyFilters);

      //if( window.innerWidth > 769){ window.scrollTo(0,420); }
      //else{window.scrollTo(0,window.innerHeight*2.3);}

      //console.log(window.innerWidth, window.innerHeight);
      //console.log("From filter Value");
      //console.log(subQuery,MyFilters);
      
    };
    //End serachFromData

    const getPageName = (Query, MyFilters)=>{

        
        if(MyFilters.length > 0 &&  Query.length > 0 )
        { 
          searchKey =''; 
          //console.log('Search Key: ',searchKey ? searchKey : 'SearchKey Empty');
          //console.log('MyFilters: ',MyFilters);
          //console.log('Query : ',Query);
          SearchByString(Query, MyFilters);
        }

        //searchKey = $page.params.getByPageName ? $page.params.getByPageName.replace('-', ' ') : pgname ? pgname.replace('-', ' ') :''      
        //searchKey = pgname ? pgname.replace('-', ' ') :' ' 
        
        searchKey = pgname ? pgname.replace('-', ' ') :''      
        searchKey = searchKey.split(" ");
        //console.log('Search Key: ',searchKey);
        SearchByString(searchKey);
        
        //console.clear();
        //console.log("Custome Searching with Query: "+ Query);
        //console.log("Default Searching with Query: "+ searchKey);
        //console.log("Custome Filter Searching with Query: "+ MyFilters);

        //console.log("Exact Searching with Query: "+ subQuery);
        //console.log("Page Params: "+$page.params.getByPageName);

    };
    // End getPageName end
    
    const displayed_count = spring();
    $: displayed_count.set(counters);
    $: offset = modulo($displayed_count, 1);

    const myNext = ()=>{

      if(counters === data.length){ active = "disabled"; return false; }
      counters = counters + 1;  
      //console.log(data.length);
      MyPaginationNavigation(counters);

    };
    // End myNext
    
    const myPrevious = ()=>{

      if(counters === 1){ active = "disabled"; return false;}
      counters = counters - 1;
      MyPaginationNavigation(counters);

    };
    // End myPrevious
    
    const modulo =(n, m)=>{
      // handle negative numbers
      return ((n % m) + m) % m;
    };
    // End modulo

    const MyLoadFun = async ()=>{

      counters=1;
      //console.clear();
      //$: boundingBox, console.log('---- bounding box updated in main');      
      
      console.log(Query, searchKey, MyFilters);

      index.search(Query ? Query: searchKey, {
        insideBoundingBox: [boundingBoxForQuery],
        //similarQuery: subQuery ? subQuery :'',
        //hitsPerPage: 50,
        //page: counters ? counters : 0,
        offset: counters ? (counters * 50) : 0,
        length:50,
        relevancyStrictness: 100,
        filters:MyFilters ? MyFilters:''
      })
      .then((hits) => {
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

        index.search(Query ? Query: searchKey, {
          insideBoundingBox: [boundingBoxForQuery],
          //similarQuery: subQuery ? subQuery :'',
          //hitsPerPage: 50,
          //page: counters ? counters : 0,
          offset:counters ? (counters * 50) : counters,
          length:50,
          relevancyStrictness: 100,
          filters:MyFilters ? MyFilters:''
        })
        .then((hits) => {
          data=(hits);
          //console.log(data);
        });
        
      };
      // updateFunction End
      
      // console.log("updateFunction Custome Searching with Query: "+ Query);
      // console.log("updateFunction Default Searching with Query: "+ searchKey);
      // console.log("updateFunction Exact Searching with Query: "+ subQuery);
      // console.log("updateFunction Custome Filter Searching with Query: "+ MyFilters);
      
    };
    // End MyLoadFun

    const SearchByString = (Query=null, MyFilters=null, searchKey=null)=>{

      counters = 1;
      
      //console.log(Query, searchKey, MyFilters, counters);

      index.search(Query ? Query: '', {
        insideBoundingBox: [boundingBoxForQuery],
        hitsPerPage: 150,
        //page: counters ? counters : 0,
        offset: counters ? (counters * 50) : 0,
        length:50,
        relevancyStrictness: 100,
        filters:MyFilters ? MyFilters:''
      })
      .then((hits) => {
        data=(hits);
        console.log(data);
      });

      updateFunction = (newBoundingBox)=>{

        // should i also update the boundingBox to newBoundingBox?
        boundingBoxForQuery = [
          newBoundingBox._sw.lat, newBoundingBox._sw.lng,
          newBoundingBox._ne.lat, newBoundingBox._ne.lng,
        ]
        //console.log(boundingBoxForQuery+ ' Testing with new values');

        index.search(Query ? Query: searchKey, {
          insideBoundingBox: [boundingBoxForQuery],
          hitsPerPage: 150,
          //page: counters ? counters : 0,
          offset:counters ? (counters * 50) : counters,
          length:50,
          relevancyStrictness: 100,
          filters:MyFilters ? MyFilters:''
        })
        .then((hits) => {
          data=(hits);
          //console.log(data);
        });
        
      };
      // updateFunction End

    };
    // End SearchByString
    
    const MyPaginationNavigation = async(Query, searchKey, counters)=>{
      
      //console.log(Query, searchKey, counters);

      index.search(Query ? Query: searchKey,{
        insideBoundingBox: [boundingBoxForQuery],
        page: counters ? counters : 0,
        offset: counters ? (counters * 50) : 0,
        length:50,
      })
      .then((hits) => {
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

          index.search(Query ? Query: searchKey, {
            insideBoundingBox: [boundingBoxForQuery],
            page: counters ? counters : 0,
            offset:counters ? (counters * 50) : 0,
            length:50,
          })
          .then((hits) => {
            data=(hits);
            //console.log(data);
          });

      };

      // setTimeout(() => {
      //   window.scrollTo(200, 200);
      // }, 700);

    };
    // End MyPaginationNavigation
    
    onMount(async ()=>{ 
      if(counters > 1 ){ myNext();}
      else if( counters === 1){myPrevious();}
      MyLoadFun();
    });
    // End onMount End

    //onDestroy(async ()=>{ getPageName(Query, MyFilters); });
    // End onDestroy End

    //tick().then(()=>{ getPageName($page); MyLoadFun(); });
    // End tick Promise End

    //beforeUpdate(async ()=>{ getPageName(Query, MyFilters);});
    // End beforeUpdate End

    //afterUpdate(async ()=>{ getPageName(Query, MyFilters);});
    // End afterUpdate End

    let pageSlug = $page.url.pathname.split('/');

</script>

<BreadCrumb imgbg={bgimg} LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} headings={pageSlug[3]} Bdtype={4}/>

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
<section data-sveltekit-prefetch id="skills" class="skills">
  <div class="container aos-init aos-animate" data-aos="fade-up">
      <Search on:serachFromData={serachFromData}  pgname={searchKey}/>
      <div class="row mt-4">
          <ApartmentsList list = {data.hits} />  
          <Mapbox boundingBox = {boundingBox} data={data.hits} updateFunction={updateFunction} />
      </div>
  </div>
  
  <div class="container mt-2 mb-5">
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
                                Page(s) : {Math.floor($displayed_count + 1) * 50 } - 50 Records
                            </strong>
                              
                            <strong>
                                {Math.floor($displayed_count)} 
                                {#if Math.floor($displayed_count) !== 0}
                                    Page(s) : {(Math.floor($displayed_count) * 50) } - 
                                    {(Math.floor($displayed_count) * 50) + 50 }  Records
                                {:else}
                                    Page(s) : {(Math.floor($displayed_count) * 50)} - 50 Records
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
  

</section>

<!-- End Skills Section -->

<style>
  #PDPAGE .page-link{border-radius: 0 !important;}
  #PDPAGE .page-item:not(:first-child) .page-link {margin-left:1px;}
  #PDPAGE .btn{ color: #444;}
  
  #MyCustomCount {
    width:100%;
  }

  .counter-viewport {
    width: auto;
    height: 20.7px;
    overflow: hidden;
    text-align: center;
    position: relative;
  }

  .counter-viewport strong {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: 400;
    color: var(--color-theme-1);
    font-size: 1rem;
    align-items: center;
    justify-content: center;
  }

  .counter-digits {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .hidden {
    top: -100%;
    user-select: none;
  }	

  @media only screen and (max-width: 768px) {

    #PDPAGE .btn {
      height: 32px;
      font-size: 0.7rem;
    }
    #PDPAGE .counter-viewport strong {
      font-size: 0.7rem; font-weight: 600;
    }
  }
</style>