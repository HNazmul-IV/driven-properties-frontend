<script>

  import { onMount} from 'svelte';
  import { page } from '$app/stores'
  import Mapbox from '$lib/ru/includes/sales-php/map.svelte';
  import algoliasearch from "algoliasearch";
  import BreadCrumb from '$lib/ru/commons/breadcrumb.svelte';
  import SEOTools from '$lib/commons/SEOText.svelte';
  
  //import Search from '$lib/includes/sales-php/search.svelte';
  import ApartmentsList from '$lib/ru/includes/sales-php/apartmentslist.svelte';    
  import { baseURL } from '../../../../base-url';
  
  let bgimg ='/assets/images/gen_2869.jpg';

  const ALGOLIA_APP_ID = "48O3SXQXMR";
  const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
  const ALGOLIA_INDEX_TEST_NAME = "tbl_Properties_offplan";
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

  let pageContent = [];
  let pageSlug = $page.url.pathname.split('/');
  let boundingBoxForQuery = [];
  let data=[];
  let results;
  let pageNo;
  let pageNumber = 1;
  let isPaginationClick;

  const getListType = (pageName) => {
      if(pageName === 'exclusive-projects'){
          return 'Exclusive Projects';
      }else if(pageName === 'ready-projects'){
          return 'Ready Projects';
      }else if(pageName === 'new-development-dubai'){
          return 'New Development';
      }else if(pageName === 'offplan-apartments'){
          return 'Apartments';
      }else if(pageName === 'offplan-villas'){
          return 'Villas';
      }else if(pageName === 'offplan-townhouses'){
          return 'Townhouses';
      }
  }

  const getMapCoord = async(coord, pageNumber=1) => {

    // console.log(coord, pageNumber);
    
    let pageName = pageSlug[pageSlug.length-1];
    let page = getListType(pageName);
    
    // isLoading = true;
    if(!isPaginationClick){
      boundingBoxForQuery = [
        coord.detail.boundingBox._sw.lat, coord.detail.boundingBox._sw.lng,
        coord.detail.boundingBox._ne.lat, coord.detail.boundingBox._ne.lng,
      ]
    }
    console.log(page, boundingBoxForQuery, pageNumber);

    // API Search by coordinates
    index.search(page?page: '', {
    
      insideBoundingBox: [boundingBoxForQuery],
      hitsPerPage: 50,
      page: pageNumber-1,
    
    }).then((hits) => {
    
      console.log(hits);

      let result=(hits.hits);
      data = hits.hits;
      
      console.log(data);
      results = hits.nbHits;
      pageNo = hits.nbPages;
      pageNo = pageNo < 0 ? 0: pageNo;
      console.log(pageNo);
      isPaginationClick = false;
    });
  }


  onMount(async ()=>{ 
      const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`);
      const data = await response.json();
      pageContent = data;
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
      getMapCoord(null, paginationNumber);
  } // end nextPrevPagination


  // pagination numbering start
  const numPagination = (event) =>{
      isPaginationClick = true;
      let paginationNumber = parseInt(event.target.innerText);
      console.log(paginationNumber);
      pageNumber = paginationNumber;
      getMapCoord(null, paginationNumber);
  } // end numPagination  

</script>

<SEOTools MetaTitle ={pageContent.metatitle} MetaDescription ={pageContent.metadescription}/>

<!-- {#if pageSlug[2] && pageSlug[3] }
  <BreadCrumb imgbg={bgimg} LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} headings={pageSlug[3]} Bdtype={4}/>
{:else if  pageSlug[1]} -->
  <BreadCrumb 
      LinkOne={pageSlug[1]} 
      LinkTwo={pageContent.name} 
      headings ={pageContent.name ? pageContent.name : "Why Dubai?" }
      Bdtype={2}
  />
  <slot>
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2 class="mb-4">{@html pageContent.name_ru ? pageContent.name_ru : "SALES" }</h2>
      </div>
    </div>
  </slot>
<!-- {/if} -->

<!-- ======= Skills Section ======= -->
<section data-sveltekit-prefetch id="skills" class="skills">
  <div class="container sale-php-section aos-init aos-animate" data-aos="fade-up">

      <slot/>

      <div class="row mt-4 sales-component-container">
          <ApartmentsList list={data} />
          <Mapbox on:coord={getMapCoord}  list={data}/>
      </div>

  </div>    
</section>
<!-- <div id="pagination-container" class="container">
  <div class="row col-sm-12  mb-5" id="Pgnton">
      <div class="text-center total-pages d-flex">
        <div class="pagination pagination-first">
            <span on:click={()=>nextPrevPagination(1, null)} class="page-no page-first {pageNumber !== 1? '':'page-disabled'} ">&#8249;</span>
        </div>
        <div class="pagination pagination-middle">
            {#each Array(pageNo) as _, i}
                <span on:click={(event)=>numPagination(event) } class="page-no {pageNumber-1 === i? ' page-active': ''}">{i+1}</span>
            {/each}
        </div>
        <div class="pagination pagination-last">
            <span on:click={()=>nextPrevPagination(null, pageNo)} class="page-no page-last {pageNumber !== pageNo? '':'page-disabled'} ">&#8250;</span>
        </div>
    </div>
  </div>
</div> -->
<!-- End Skills Section -->

<style>
  section{ padding-top:0px; padding-bottom: 0;}
  .sale-php-section {
    margin-top: -30px;
  }

  @media(max-width: 760px){
    .sales-component-container{
      display: flex;
      margin-top: -14em !important;
    }
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
  @media(max-width: 768px){
    div#pagination-container {
      z-index: 11111111111111111111111111111;
      position: relative;
      background: white;
      padding: 3em 1em 1em 1em;
    }
  }
</style>