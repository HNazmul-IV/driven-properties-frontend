
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css" />

<script>

    import algoliasearch from 'algoliasearch/lite';

    import { onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';
    import { page } from '$app/stores';

    import BreadCrumb from '$lib/commons/breadcrumb.svelte';


    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);    
    
    let MyFiterData =[];
    let pageSlug = $page.url.pathname.split('/');
    let PerPage = 5000;

    let Ad_Type ="Sale";
    let Unit_Type = 'Apartment';
    let MyCommunity ='Furjan';
    let No_of_Rooms = 2;
    let Bedrooms = 2;
    let Price =900000;
    let MaxPrice =1000000;

    let subQuery = [Price, No_of_Rooms, Bedrooms, Unit_Type, Ad_Type, MyCommunity];
    let MySearchData = ["Price", "No_of_Rooms","Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name", "objectID"];
    let MyRSearchAttributes =["Price", "No_of_Rooms","Bedrooms", "Unit_Type", "Ad_Type", "Community", "Sub_Community", "Property_Title", "Property_Name"];    
    let MyFilters;

    //const filters = 'available = 1 AND (category:Book OR NOT category:Ebook) AND _tags:published AND publication_date:1441745506 TO 1441755506 AND inStock > 0 AND author:"John Doe"';

    //MyFilters = `Price > ${Price}`;
    //MyFilters = `${MyFilters} OR Price:${Price} TO ${MaxPrice}`;

    MyFilters = `Price:${Price} TO ${MaxPrice}`;
    MyFilters = `${MyFilters} AND (No_of_Rooms=${No_of_Rooms}`;
    MyFilters = `${MyFilters} OR Bedrooms=${Bedrooms})`;

    //MyFilters = `${MyFilters} AND Unit_Type:${Unit_Type}`;
    //MyFilters = `${MyFilters} AND Ad_Type=${Ad_Type}`;
    //MyFilters = `${MyFilters} AND Community:${MyCommunity}`;

    onMount( async()=>{  
      LoadMyDATAS(subQuery,MySearchData,MyRSearchAttributes,MyFilters,PerPage) 
    });

    const LoadMyDATAS = (subQuery,MySearchData,MyRSearchAttributes,MyFilters,PerPage)=>{

      /* Query Seraching with multiple fields but not working */
      index.search('', {

        similarQuery: subQuery,
        attributesToRetrieve:MySearchData,
        restrictSearchableAttributes:MyRSearchAttributes,
        //tagFilters:[['Ad_Type']],

        relevancyStrictness: 100,
        filters:MyFilters,
        hitsPerPage: PerPage ? PerPage:20,

      }).then(({ hits }) => {
        console.log(hits);
          MyFiterData = hits;
      });
    };
    console.log(MyFilters); 
</script>


<BreadCrumb LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} BDType={2} />

<div class="container mt-3 mb-5">
  <h1>Driven Properties Listing </h1>
  <p>Lets Sereach Properties.</p>
  <div class="row">
    <div class="table-responsive table-responsive-sm">
      <table class="table table-striped table-bordered table-sm">

        <tr>
          <th>Property Name</th>
          <!--th>Property Title</th-->
          <th>Community Name</th>
          <th>Area Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>Type</th>
          <th>BedRooms</th>
        </tr>      

      {#each MyFiterData as myfiterdata (myfiterdata.objectID) }        
        <tr>
          <td>{@html myfiterdata.Property_Name}</td>
          <!--td>{@html myfiterdata.Property_Title}</td-->
          <td>{@html myfiterdata.Community}</td>
          <td>{@html myfiterdata.Sub_Community}</td>
          <td>{@html myfiterdata.Price}</td>
          <td>{@html myfiterdata.Ad_Type}</td>
          <td>{@html myfiterdata.Unit_Type}</td>
          <td>{@html myfiterdata.Bedrooms}</td>
        </tr>        
        <!--Property Name: {myfiterdata.Property_Name}<br/>
        Property Title: {myfiterdata.Property_Title}<br/>          
        Community Name: {myfiterdata.Community}<br/>
        Sub Community Name: {myfiterdata.Sub_Community}<br/>
        Property Price: {myfiterdata.Price}<br/>  
        Property Type: {myfiterdata.Ad_Type}<br/>
        Property Type: {myfiterdata.Unit_Type}<br/>
        No Of BedRooms: {myfiterdata.Bedrooms}<br/-->                  
      {/each}
      </table> 
    </div>     
  </div>
</div>


<style>

</style>
