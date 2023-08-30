<script>
    import algoliasearch from "algoliasearch";
    import ApartmentList from "./PLR/apartmentList.svelte";
    import Mapbox from "./PLR/map.svelte";
    import { spring } from 'svelte/motion';
    import Loader from "../../../loader/loader.svelte";
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
    let pageNumber = 1;
    let isPaginationClick = false;
    let priceFilters = '0 TO 150000000';

    let boundingBoxForQuery = [];

    const displayed_count = spring();
    // $: displayed_count.set(counters);
    $: offset = modulo($displayed_count, 1);

   

    const modulo =(n, m)=>{
        // handle negative numbers
        return ((n % m) + m) % m;
    };
    //End modulo

    const getMapCoord = async(coord, pageNumber=1) => {
        console.log('searched',coord);
        // console.log('searched',paginationCount);
        // paginationCount = 1;
        isLoading = true;
        if(!isPaginationClick){
            boundingBoxForQuery = [
                coord.detail.boundingBox._sw.lat, coord.detail.boundingBox._sw.lng,
                coord.detail.boundingBox._ne.lat, coord.detail.boundingBox._ne.lng,
            ]
        }

        // dispatch('formData', dynamicUrl);

        let query1 = [dynamicUrl.status];
        if(dynamicUrl.property && dynamicUrl.property !== 'any'){
            query1 = [...query1, dynamicUrl.property];
        }
        if(dynamicUrl.bed && dynamicUrl.bed !== 'any'){
            // query1 = [...query1, dynamicUrl.bed];
            query1 = [...query1, `${dynamicUrl.bed}-Beds`];
        }
        console.log('getMapCoord ',query1);

        index.search(query1 ? query1 : '', {
            insideBoundingBox: [boundingBoxForQuery],
            hitsPerPage: 20,
            page:pageNumber-1,
            numericFilters: priceFilters,
        })
        .then((hits) => {
            isLoading = false;
            data=(hits.hits);
            // console.log('dataFromCoord', dataFromCoord);
            // console.log('dataFromCoord', hits.nbHits, hits.nbPages);
            results = hits.nbHits;
            pages = hits.nbPages;
            isPaginationClick = false;
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
        getMapCoord(null, paginationNumber);
    } // end nextPrevPagination


    // pagination numbering start
    const numPagination = (event) =>{
        isPaginationClick = true;
        let paginationNumber = parseInt(event.target.innerText);
        pageNumber = paginationNumber;
        getMapCoord(null, paginationNumber);
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
        query = [status];
        
        console.log(query);
        console.log(community);
        if (community !== "any") {
            query = [...query, community];
        }
        console.log(query);
        console.log(propertyType);
        if (propertyType !== "any") {
            query = [...query, propertyType];
        }
        console.log(query);

        // console.log(bedrooms);
        if(bedrooms !== "any" && bedrooms !== "any-Beds"){
            query = [...query, bedrooms];
        }
        // console.log(query);

        // let priceFilters = `Price:${minPrice} TO ${maxPrice}`; // 'Price:816963 TO 2028516'
        priceFilters = `Price:${minPrice} TO ${maxPrice}`; // 'Price:816963 TO 2028516'

        console.log(query);

        index
        .search(query ? query : "", {
            attributesToRetrieve: ["*"],
            attributesToSnippet: ["*:20"],
            enableABTest: false,
            explain: ["*"],
            facets: ["*"],
            getRankingInfo: true,
            hitsPerPage: 20,
            page: pageNumber?pageNumber:'',
            responseFields: ["*"],
            snippetEllipsisText: "…",
            numericFilters: priceFilters,
            page: 0,
        })
        .then(({ hits, nbHits, nbPages }) => {
            isLoading = false;
            data = hits;
        }); // end promise        
    } //update end

</script>


<!-- Passing Data list value to Component -->
<div id="property-list-container" class="container">
    {#if isLoading}
        <div class="container loading-container">
            <div class="loading"><Loader /></div>
        </div>
    {/if}
    <!-- <ApartmentList list={dataFromCoord} /> -->
    <ApartmentList list={data} />
    <Mapbox data={data} on:coord={getMapCoord}/>
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

    @media(max-width: 768px){
        div#property-list-container {
            display: flex;
            flex-direction: column-reverse;
        }
    }
</style>