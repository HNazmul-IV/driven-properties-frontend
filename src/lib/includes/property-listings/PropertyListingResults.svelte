<script>
    import algoliasearch from "algoliasearch";
    import ApartmentList from "./PLR/apartmentList.svelte";
    import Mapbox from "./PLR/map.svelte";
    import { spring } from 'svelte/motion';
    import Loader from "../../loader/loader.svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_TEST_NAME = "tbl_properties";
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

    let results;
    let pages;

    export let dynamicUrl;
    $: dynamicUrl, update();
    
    let data = [];
    let dataFromCoord = [];
    let query = [];
    let counters=1;
    $: paginationCount = 0;
    let coordMapMove;
    let isMapMoved = false;
    let isLoading = false;
    let isSubmitClicked = false;
    let pageNumber = 1;
    let isPaginationClick = false;
    let priceFilters = '0 TO 150000000';

    let boundingBoxForQuery = [];

    const displayed_count = spring();
    // $: displayed_count.set(counters);
    $: offset = modulo($displayed_count, 1);

    // const myNext = ()=>{

    //     if(counters === data.length){ active = "disabled"; return false; }
    //     counters = counters+1;  
    //     update(counters);
    // };
    // // End myNext

    // const myPrevious = ()=>{
    //     if(counters === 1){ active = "disabled"; return false;}
    //     counters = counters-1;
    //     update(counters);
    // };
    // //End myPrevious

    const modulo =(n, m)=>{
        // handle negative numbers
        return ((n % m) + m) % m;
    };
    //End modulo

    const getMapCoord = async({detail}) => {
        // console.log('searched',detail);
        // console.log('searched',paginationCount);
        // paginationCount = 1;
        isLoading = true;
        boundingBoxForQuery = [
          detail.boundingBox._sw.lat, detail.boundingBox._sw.lng,
          detail.boundingBox._ne.lat, detail.boundingBox._ne.lng,
        ]

        // dispatch('formData', dynamicUrl);

        let query1 = [dynamicUrl.status];
        if(dynamicUrl.property && dynamicUrl.property !== 'any'){
            query1 = [...query1, dynamicUrl.property];
        }
        if(dynamicUrl.bed && dynamicUrl.bed !== 'any'){
            // query1 = [...query1, dynamicUrl.bed];
            query1 = [...query1, `${dynamicUrl.bed}-Beds`];
        }
        // console.log('getMapCoord ',query1);

        index.search(query1 ? query1 : '', {
            insideBoundingBox: [boundingBoxForQuery],
            hitsPerPage: 50,
            // page:paginationCount? paginationCount: '',
            numericFilters: priceFilters,
        })
        .then((hits) => {
            isLoading = false;
            // dataFromCoord=(hits.hits);
            // console.log('dataFromCoord', hits.nbHits, hits.nbPages);
            if(!isPaginationClick){
                data=(hits.hits);
                // console.log('dataFromCoord', dataFromCoord);
                // console.log('dataFromCoord', hits.nbHits, hits.nbPages);
                // results = hits.nbHits;
                // pages = hits.nbPages;
            }
        });
    } // end getMapCoord

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
        update(paginationNumber);
    } // end nextPrevPagination


    // pagination numbering start
    const numPagination = (event) =>{
        isPaginationClick = true;
        let paginationNumber = parseInt(event.target.innerText);
        pageNumber = paginationNumber;
        update(paginationNumber);
    } // end numPagination  

    let status, community, propertyType, bedrooms, minPrice, maxPrice; // declaration
    
    // Update function
    const update =(counters) => {
        isLoading = true;
        paginationCount = counters;
        console.log(paginationCount);

        console.log("url after update", dynamicUrl);
        status = dynamicUrl.status ? dynamicUrl.status: 'sale';
        community = dynamicUrl.community ? dynamicUrl.community: 'any';
        propertyType = dynamicUrl.property ? dynamicUrl.property: 'any';
        // bedrooms = dynamicUrl.bed ? dynamicUrl.bed: 2;
        bedrooms = dynamicUrl.bed ? dynamicUrl.bed+'-Beds': 'any';
        minPrice = dynamicUrl.minPrice ? Number(dynamicUrl.minPrice): 0;
        maxPrice = dynamicUrl.maxPrice ? Number(dynamicUrl.maxPrice):150000000;

        // console.log('update', dynamicUrl);

        if(isMapMoved){
            console.log('propertylistinresults if map move', query, paginationCount)
            query = [community]
            if (propertyType !== "any" || propertyType !== undefined) {
                query = [...query, propertyType];
            }
        }else{
            console.log('propertylistinresults if only submit new location ', query, paginationCount)
            query = [status];
            
            if (community !== "any") {
                query = [...query, community];
            }
            if (propertyType !== "any" || propertyType !== undefined) {
                query = [...query, propertyType];
            }
            // console.log(query);
        }

        // console.log(bedrooms);
        if(bedrooms !== "any" && bedrooms !== "any-Beds"){
            query = [...query, bedrooms];
        }
        // console.log(query);

        // let priceFilters = `Price:${minPrice} TO ${maxPrice}`; // 'Price:816963 TO 2028516'
        priceFilters = `Price:${minPrice} TO ${maxPrice}`; // 'Price:816963 TO 2028516'

        // console.log(priceFilters);
        
        isSubmitClicked = true;

        index
        .search(query ? query : "", {
            attributesToRetrieve: ["*"],
            attributesToSnippet: ["*:20"],
            enableABTest: false,
            explain: ["*"],
            facets: ["*"],
            getRankingInfo: true,
            hitsPerPage: 20,
            // length:20,
            page: pageNumber?pageNumber:'',
            responseFields: ["*"],
            snippetEllipsisText: "…",
            numericFilters: priceFilters,
        })
        .then(({ hits, nbHits, nbPages }) => {
            // console.log(hits, nbHits, nbPages);
            isLoading = false;
            data = hits;
            isMapMoved = !isMapMoved;
            // console.log('update fn', hits);
            // console.log('update fn', nbHits, nbPages,pageNumber);
            if(!isPaginationClick){
                results = nbHits;
                pages = nbPages;
            }
        }); // end promise
        setTimeout(()=> {
            isSubmitClicked = false;
            isPaginationClick = false;
        },5000);
        
    } //update end
</script>

<!-- {#if results}<div class="property-found container">{results} Results Found!</div>{/if} -->
<!-- {#if results && !isSubmitClicked}
    <div class="property-found container">
    <span class="result">{results}</span> 
        Properties {community!=='any'? `Found in ${community}`:''}
    </div>
{/if} -->

<!-- Passing Data list value to Component -->
<div id="property-list-container" class="container">
    {#if isLoading}
        <div class="container loading-container">
            <div class="loading"><Loader /></div>
        </div>
    {/if}
    <!-- <ApartmentList list={dataFromCoord} /> -->
    <ApartmentList list={data} />
    <Mapbox data={data} mapMove={isMapMoved} on:coord={getMapCoord} isSubmitClicked={isSubmitClicked}/>
</div>

<!-- Pagination -->
<div id="pagination-container" class="container">
    <div class="row col-sm-6 mt-2 mb-5" id="Pgnton">
        <div class="text-center total-pages d-flex">
            <div class="pagination pagination-first">
                <span on:click={()=>nextPrevPagination(1, null)} class="page-no page-first {pageNumber !== 1? '':'page-disabled'} ">&#8249;</span>
            </div>
            <div class="pagination pagination-middle">
                {#each Array(pages) as _, i}
                    <span on:click={(event)=>numPagination(event) } class="page-no {pageNumber-1 === i? 'page-active': ''}">{i + 1}</span>
                {/each}
            </div>
            <div class="pagination pagination-last">
                <span on:click={()=>nextPrevPagination(null, pages)} class="page-no page-last {pageNumber !== pages? '':'page-disabled'} ">&#8250;</span>
            </div>
        </div>
        <!--><div class="g-0 row col-sm-6">
            <div class="g-0 col-sm col-md-12 col-lg-12">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center" id="PDPAGE">
                        <li class="page-item"><a sveltekit:prefetch class="page-link btn {counters === 1 ? 'disabled':''}" id="prevButton" on:click={myPrevious}>Previous</a></li>
                        
                            <li class="page-item w-100">
                                <a class="page-link btn disabled" href="!#">
                                    <div class="counter-viewport">
                                        <div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
                                                                                        
                                            
                                            {Math.floor($displayed_count)} 
                                            {#if Math.floor($displayed_count) !== 0}
                                            {#if counters ===1}
                                                Page(s) : {(Math.floor($displayed_count) * 1) } - 
                                                {(Math.floor($displayed_count) * 50) + 0 }  Records
                                            {:else}
                                                Page(s) : {(Math.floor($displayed_count * 50) - 50+1) } -
                                                {(Math.floor($displayed_count) * 50)}  Records
                                            {/if}
                                            {:else}
                                                Page(s) : {(Math.floor($displayed_count) * 50)} - 50 Records
                                            {/if}
            
                                        </div>
                                    </div>	                        
                                </a>
                            </li> 
                        
                        <li class="page-item"><a sveltekit:prefetch class="page-link btn {counters === data.length ? 'disabled':''}" id="nextButton" on:click={myNext}>Next</a></li>
                    </ul>
                </nav>
            </div>
        </div> -->
    </div> <!--End #Pgnton-->
</div> <!--End .container-->

<style>
    div#property-list-container {
        display: flex;
    }
    
    #Pgnton{
        padding: 0;
    }
    .loading-container{
        position: absolute;
        display: block;
        width: 100%;
    }
    .loading {
        position: absolute;
        top: 20px;
        z-index: 111;
        text-align: right;
        display: block;
        width: 100%;
        right: 22%;
    }
    span.page-no:hover {
        cursor: pointer;
        /* background-color: #f5f5f5; */
        font-weight:bold;
    }
    .property-found {
        color: #555;
        padding: 5px 15px;
        margin-bottom: -50px;
        font-weight: bold;
        text-transform: capitalize;
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
</style>