
<script>

    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    import { page } from '$app/stores'
    import Mapbox from '$lib/fr/includes/sales-php/map.svelte';

    import BreadCrumb from '$lib/fr/commons/breadcrumb.svelte';
    //import Search from '$lib/fr/includes/sales-php/search.svelte';
    import ApartmentsList from '$lib/fr/includes/sales-php/apartmentslist.svelte';    
    import { baseURL } from '../../../../base-url';
    
    let bgimg ='/assets/images/gen_2869.jpg';

    let data;
    let searchKey; 
    let searchKey2;
    export let pgname;
    export let pgname2;

    let updateFunction;
    let subQuery;
    let MySearchData;
    let MyRSearchAttributes;
    let MyFilters;
    let Query;
    
    let pageContent=[];
    let GetURLFstNAme =[];
    let GetURLLstNAme = [];

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
    
    onMount(async ()=>{ 

      MyLoadFun();

      const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[4]}`);
      const data = await response.json();
      pageContent = data;
      //getSignleHeaderMenu API End

      const getFstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[2]}`);
      const dataFstFr = await getFstNameFr.json();
      GetURLFstNAme = dataFstFr;

      const getLstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[3]}`);
      const dataLstFr = await getLstNameFr.json();
      GetURLLstNAme = dataLstFr;


    });
    // End onMount End

    onDestroy(async ()=>{ getPageName(Query, subQuery, MyFilters); });
    // End onDestroy End

    //tick().then(()=>{ getPageName($page); MyLoadFun(); });
    // End tick Promise End
    
    beforeUpdate(async ()=>{ getPageName(Query, subQuery, MyFilters);});
    // End beforeUpdate End

    afterUpdate(async ()=>{ getPageName(Query, subQuery, MyFilters);});
    // End afterUpdate End

    const serachFromData = (e=null)=>{
      
      //console.log(e.detail);



      let NoRooms = e.detail.No_of_Rooms ? e.detail.No_of_Rooms : 0;
      let minPrice = e.detail.minPrice ? e.detail.minPrice : 0 ;
      let maxPrice = e.detail.maxPrice ? e.detail.maxPrice : 0 ;
      let UnitType = e.detail.Unit_Type ? e.detail.Unit_Type : '';
      let AdType = e.detail.Ad_Type === 'For Sale' ? e.detail.FrmSearchKey[0]: e.detail.Ad_Type.replace("For","");
      let PropertyTitle = e.detail.Property_Title ? e.detail.Property_Title.replace(/^\s+|\s+$/gm,'') : '';       
      //NoRooms, minPrice, maxPrice, UnitType, AdType, PropertyTitle

      subQuery = [NoRooms, minPrice, maxPrice, UnitType, AdType, PropertyTitle];

      MySearchData = ["Price", "No_of_Rooms","Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"];
      MyRSearchAttributes =["Price", "No_of_Rooms","Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name"];          

      MyFilters = `Price:${minPrice} TO ${maxPrice}`;
      MyFilters = `${MyFilters} AND (No_of_Rooms=${NoRooms}`;
      MyFilters = `${MyFilters} OR Bedrooms=${NoRooms})`;

      Query = [ UnitType, AdType, PropertyTitle];
      
      getPageName(Query, subQuery, MyFilters);
      
      //console.log("From filter Value");
      //console.log(subQuery,MyFilters);

    };
    //End serachFromData

    const getPageName = (Query, subQuery, MyFilters)=>{

        
        if(MyFilters !=='' && subQuery !==0 && Query !==0){ searchKey =''; } else{return false;}

        //searchKey = pgname ? pgname.replaceAll('-', ' ') :''              
        //searchKey = searchKey.split(" ");
        searchKey = pgname ? pgname : '',
        searchKey2 = pgname2 ? pgname2 : '',
        console.log(searchKey2);
        

        //console.clear();
        //console.log("Custome Searching with Query: "+ Query);
        //console.log("Default Searching with Query: "+ searchKey);
        //console.log("Exact Searching with Query: "+ subQuery);
        //console.log("Custome Filter Searching with Query: "+ MyFilters);

        
        //console.log("Page Params: "+$page.params.getByPageName);
    };
    // End getPageName end
    
    const MyLoadFun = async ()=>{

      //console.clear();
      //$: boundingBox, console.log('---- bounding box updated in main');      
      //insideBoundingBox: [boundingBoxForQuery],

        let response =null;
        
        if(searchKey !==''){
          response = await fetch(`${baseURL}/getAllBySlugProperties/${searchKey}`);
        }
        else if(searchKey2 !==''){
          response = await fetch(`${baseURL}/getAllBySlugPropertiesT2/${searchKey2}`);
        }else{
          response = await fetch(`${baseURL}/getAllProperties`);
        }
                      
        const hits = await response.json();
        data = hits;
        console.log(data);
        //getSignleHeaderMenu API End


      updateFunction = (newBoundingBox)=>{

        // should i also update the boundingBox to newBoundingBox?
        boundingBoxForQuery = [
          newBoundingBox._sw.lat, newBoundingBox._sw.lng,
          newBoundingBox._ne.lat, newBoundingBox._ne.lng,
        ];
        
      };
      // updateFunction End
            
    };
    // End MyLoadFun
    let pageSlug = $page.url.pathname.split('/');

</script>

{#if pageSlug[3] && pageSlug[4]}

  <BreadCrumb 
    imgbg={bgimg} LinkOne={pageSlug[2]} LinkTwo={pageSlug[3]} LinkThree={pageSlug[4]} 
    headings={pageContent.name_fr} Bdtype={4}
    FstName_Fr={GetURLFstNAme.name_fr} LstName_Fr={GetURLLstNAme.name_fr}
  />

{:else if pageSlug[2] && pageSlug[3]}
  <BreadCrumb 
  imgbg={bgimg}
  LinkOne={pageSlug[2]} LinkTwo={pageSlug[3]} 
  headings={pageContent.name_fr}
  FstName_Fr={GetURLFstNAme.name_fr} LstName_Fr={GetURLLstNAme.name_fr}
  Bdtype ={2}
  />
  <slot>
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2 class="mb-4">{@html GetURLLstNAme.name_fr ? GetURLLstNAme.name_fr : "Area Guide" }</h2>
      </div>  
    </div>
  </slot>

{/if}
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
      <!-- <Search MyData = {data} on:serachFromData={serachFromData} /> -->

      <slot/>

      <div class="row mt-4">
          <ApartmentsList list = {data} />
          <Mapbox boundingBox = {boundingBox} data={data} updateFunction={updateFunction} />
      </div>        
  </div>    
</section>
<!-- End Skills Section -->