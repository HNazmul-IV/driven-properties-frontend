<script>
    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    // import { spring } from 'svelte/motion';

    // import { page } from '$app/stores'
    // import Mapbox from '$lib/includes/sales/map.svelte';
    import algoliasearch from "algoliasearch";

    // import Search from '$lib/includes/sales/search.svelte';
    import ApartmentsList from './apartmentslist.svelte';   
    
    // import MOBMapbox from '$lib/includes/sales/map-mobile.svelte';
    // import MOBApartmentsList from '$lib/includes/sales/apartmentslist-mob.svelte';

    export let searchData;

    let MySearchData, MyRSearchAttributes, MyFilters, Query, counters;
    let No_of_Rooms, minPrice, maxPrice, UnitType, AdType, PropertyTitle;
    let data=[];

    // export let boundingBox = {
    //   "_sw": {
    //       "lng": 55.098586285398085,
    //       "lat": 25.00444866471817
    //   },
    //   "_ne": {
    //       "lng": 55.18201371459705,
    //       "lat": 25.15650411973273
    //   }
    // };

    // export let boundingBoxForQuery = [
    //   25.004448664717486, // p1Lat
    //   55.064511502076556, // p1Lng
    //   25.15650411973199, // p2Lat
    //   55.21608849792656, // p2Lng
    // ];

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_TEST_NAME = "tbl_properties";
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

    
    afterUpdate(() => {
		// ...the DOM is now in sync with the data
        No_of_Rooms = searchData.No_of_Rooms ? searchData.No_of_Rooms : '';
        minPrice = searchData.minPrice ? searchData.minPrice : 0 ;
        maxPrice = searchData.maxPrice ? searchData.maxPrice : 150000000 ;
    
        UnitType = searchData.Unit_Type !== 'Property Type' ? searchData.Unit_Type : '';
        AdType = searchData.Ad_Type;
        // PropertyTitle  = searchData.Property_Title.agserach ? searchData.Property_Title.agserach : '';
        PropertyTitle  = '';
        console.log(searchData);
          
        //NoRooms, minPrice, maxPrice, UnitType, AdType, PropertyTitle agserach
        //subQuery = [NoRooms, minPrice, maxPrice, UnitType, AdType, PropertyTitle];
        MySearchData = ["Price", "No_of_Rooms","Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"];
        MyRSearchAttributes =["Price", "No_of_Rooms","Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name"];          
    
        MyFilters = `Price:${minPrice} TO ${maxPrice}`;
        if(No_of_Rooms !== ''){
            MyFilters = `${MyFilters} AND (No_of_Rooms=${No_of_Rooms}`;
            MyFilters = `${MyFilters} OR Bedrooms=${No_of_Rooms})`;
        }
    
        if(UnitType !==" "){ 
            Query = [UnitType]; 
        }
    
        if(AdType !==" "){ 
            Query = [AdType]; 
        } 
        
        if(PropertyTitle !==" "){ 
            Query = [PropertyTitle]; 
        }  
    
        if(UnitType !==" " ||  AdType !==" " ){ 
            Query = [AdType, UnitType]; 
        }
    
        if(UnitType !==" " ||  PropertyTitle !==" " ){ 
            Query = [PropertyTitle, UnitType]; 
        }
    
        if(AdType !==" " ||  PropertyTitle !==" " ){ 
            Query = [AdType, PropertyTitle]; 
        }  
    
        if(AdType !==" " ||  PropertyTitle !==" " || UnitType !== " "){ 
            Query = [AdType, UnitType, PropertyTitle];  
        } 
        
        console.log(searchData);
        console.log(Query, MyFilters);
	});
    // }; //End serachFromData

    const SearchByString = async (Query=null, MyFilters=null, counters)=>{
          
        console.log(Query, MyFilters, counters);

        index.search(Query ? Query :'', {
            // insideBoundingBox: [boundingBoxForQuery],
            //hitsPerPage: 150,
            //page: counters ? counters : 0,
            offset: counters ? (counters * 50) : 0,
            //offset: 0,
            length:10,
            relevancyStrictness: 100,
            filters:MyFilters ? MyFilters :''
        })
        .then((hits) => {
            data=(hits);
            console.log(hits);
        });

    };// End SearchByString
    
    const handleClickBtn = () => {
        SearchByString(Query, MyFilters,counters=1);
    }
   

</script>

<div id="header-search-result">

    
    <div class="offcanvas-buttons">
        <button class="headerSearch-button btn btn-dark button-map"><i class="bi bi-geo-alt"></i> Map View</button>
        <button on:click={handleClickBtn} class="headerSearch-button btn btn-dark button-search"><i class="bi bi-search"></i> Search</button>
    </div>
    
    <ApartmentsList list = {data.hits} />   
</div>

<style>
    .offcanvas-buttons {
        display: flex;
        justify-content: space-between; 
    }
    button.headerSearch-button {
        border: 1px solid white;
        border-radius: none;
        width: 50%;
    }
</style>
