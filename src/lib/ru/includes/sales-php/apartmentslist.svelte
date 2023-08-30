<script>
    import { onMount } from 'svelte';
    import algoliasearch from "algoliasearch";
    import { page } from "$app/stores";
    import ListingListItem from '$lib/ru/includes/sales-php/listing.svelte';
    import ContentFormMesg from '$lib/commons/ContentFormMesg.svelte';
    import {offPlan_Location, offPlan_Location_result} from './store';
    import { baseURL } from '../../../../base-url';

    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_TEST_NAME = "tbl_Properties_offplan";
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);
    const isMobile = false;
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(global.navigator.userAgent);
    // var isMobile = ('DeviceOrientationEvent' in window || 'orientation' in window);
    

    export let list = [];
    let isData = false;
    let pageSlug = $page.url.pathname.split('/');
    let searchedKeyArray = [];
    let searchedKey = [];
    let result = [];
    let isLoading = false;
    let jumpToHomeSearchForm = false;

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
    
    // Result by map rotate 
    $: list, listData();
    const listData = () => {
        console.log('apartmentlist-listData',list);
        
        result = list;
        console.log(result);
        isData = true;
    }

    const getCommunity = async() => {
        console.log('getCommunity fn');
        let response = await fetch(`${baseURL}/searchCommunityOffPlan`);
        let searchKey = await response.json();
        searchedKeyArray = searchKey; // list of suggested community
        searchedKey = searchKey; // list of suggested community
        document.getElementById("search-container").style.display = "block";
    }

    // Function while key up action
    const handleKeywordSearch = async(e) => {
        console.log('handleKeywordSearch fn');
        
        document.onclick = function () {
            document.getElementById("search-container").style.display = "none";
        };

        let value = String(e.target.value);

        var expression = `.*${value}.*`;
        var re = new RegExp(expression, 'gi');

        console.log(value);
        let filterSearch = searchedKeyArray.filter((item)=> {
            if(re.test(item.pctitle)){
                return item.pctitle;
            }
        });
        console.log(filterSearch);
        searchedKey = filterSearch;
        
        if (value !== "") {
            document.getElementById("search-container").style.display = "block";
        } else {
            // document.getElementById("search-container").style.display = "none";
            getCommunity();
        }
    }

    // work when something selected from community list popup 
    const handleSearchClicked = async (e) => {
        console.log('handleSEarcheClicked fn');
        const searchClickedText = e.target.innerText;
        document.getElementById("location-input").value = searchClickedText;
        $offPlan_Location.location = searchClickedText;
        document.getElementById("search-container").style.display = "none";
    };

    // work when form is submitting
    const handleServiceChargeForm = async() => {
        // isLoading = true;
        $offPlan_Location_result.isMapMoved = !$offPlan_Location_result.isMapMoved;
        let location = $offPlan_Location.location.split('-');
        
        let pageName = pageSlug[pageSlug.length-1];
        let page = getListType(pageName);
        
        let query=[];
        if(location.length){
            query = [location[0], page];
        }else{
            query = [page];
        }

        console.log(query);
        // work when submit click selected community
        index.search(query ? query : '', {
            hitsPerPage: 50,
            length:50,
        }).then((hits) => {
            result=(hits.hits);
            if(result.length){
                isData = true;
                isLoading = true;
            }
            $offPlan_Location_result.location_coord = result;
            console.log(result);
            
        });
        // $offPlan_Location.location="";
    }

    onMount(()=> {
        let community = localStorage.getItem('community');
        handleServiceChargeForm();
        if(community !== 'null'){
            setTimeout(()=>{
                $offPlan_Location.location = community;
            }, 2000);
            setTimeout(()=>{
                document.getElementById('btnSubmit').click();
                localStorage.setItem("community",null);
            }, 5000);
        }
        document.onclick = function () {
            document.getElementById("search-container").style.display = "none";
        };
    });


</script>
<div class="col-lg-6 mt-5" id="MyDetails">    
    <div class="line-keeper">
        <div class="line"></div>
    </div>
    <div id="search-container">
        {#each searchedKey as item}
            <div class="search-key" on:click={handleSearchClicked}>
                {item.pctitle}
            </div>
        {/each}
    </div>
    <form class="offplan-search-location" id="myForm" on:submit|preventDefault={handleServiceChargeForm}>
        <div class="form-group location-container">
            <input type="text" class="form-control location-input" id="location-input" autocomplete="off"  
            bind:value={$offPlan_Location.location} on:focus={getCommunity} on:keyup={handleKeywordSearch} 
            placeholder="Location / Property Name"/>
        </div>
        <div class="mt-md-4 mb-3">
            <button type="submit" id="btnSubmit" class="d-grid btn btn-primary search-btn" >
                ПОИСК
            </button>
            <div class="lens"><i class="bi bi-search"></i></div> 
        </div>
    </form>

    <div class="row">
        {#if isLoading}
            <div class="card mb-2">
                {#each result as listing , i}
                    
                    <!-- {#if listing.Published === 'Yes' &&  listing.Price !== null} -->
                    {#if listing.Published === 'Yes' && listing.Property_Title_ru}
                        <ListingListItem 
                            title={(listing.Property_Title_ru)}
                            Community = {listing.Community_ru}
                            noOfBeds={(listing.Bedrooms)} 
                            noOfBaths={(listing.No_of_Bathroom)} 
                            images={(listing.Prothbimgname)}
                            price={listing.Price ? covertToIntCurrancy(listing.Price): ''}
                            CsPrice={listing.Price ? CurrancySBC(listing.Price): ''}
                            agentNumber ={(listing.Property_Name_ru)}
                            building={(listing.Property_Title_ru )} 
                            objectID = {listing.id}
                            slug = {listing.Property_Slug}
                        />
                    {/if}

                {:else}

                    <div class="col-lg-12  col-md-12">
                        <ContentFormMesg/>
                    </div>
                    
                {/each}
            </div>
        {/if}    
    </div>
    <!--Total Rows: {list.length}-->
</div>

<style>
    
    #MyDetails { 
        height:670px; 
        overflow-y:scroll; 
        margin-bottom: 40px !important; 
        background: white; 
        position: relative; 
    }

    #MyDetails .card{ border:0; border-radius:0;}
    
    .offplan-search-location{
        position: relative;
        margin-left: -10px;
    }
    
    /* i.bi.bi-search.location-search {
        position: absolute;
        top: 29px;
        left: 1px;
        background: #4167b1;
        padding: 6px 8px;
        color: white;
    } */
    
    input#location-input {
        padding-left: 40px;
    }
    div#search-container {
        background: white;
        font-size: 14px;
        padding: 0 11px;
        position: absolute;
        border: 1px solid #ccc;
        border-top: 0px;
        z-index: 11;
        top: 38px;
        width: auto;
        left: 48px;
        min-width: 50%;
    }
    div#search-container .search-key {
        border-top: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        padding: 5px;
        cursor: pointer;
    }
    div#search-container .search-key:hover {
        background-color: #f5f5f5;
    }
    div#search-container {
        background: white;
        font-size: 14px;
        padding: 0 11px;
        position: absolute;
        border: 1px solid #fff;
        border-top: 0px;
        z-index: 11;
        top: 38px;
        width: auto;
        left: 2px;
        min-width: 48%;
        max-height: 300px;
        overflow-y: auto;
    }
    input#location-input {
        padding-left: 17px;
    }

    @media(max-width: 768px){
        /* div#search-container{
            top: 70px;
        } */
        /* div#search-container{
            position: fixed;
            top: 170px !important;
            left: 37px;
            z-index: 111;
            width: 285px;
        } */
        div#search-container {
            position: absolute;
            top: 70px !important;
            z-index: 111;
            left: 0 !important;
            right: 0 !important;
            width: auto;
            /* padding-top: 30px; */
            max-height: 342px !important;
        }
        #MyDetails { 
            top: 314px !important;
            background: white;
            z-index: 111;
            padding-top: 2em;
            margin-bottom: 18em !important;
            border-radius: 20px;
        }
        .offplan-search-location {
            position: relative;
            background: white;
            left: 0px;
            right: 0px;
            margin-top: 0px;
            padding: 0px 26px 0px 26px;
            z-index: 1;
            /* box-shadow: 0px 0px 4px 5px #e5e5e5; */
            /* transform: translate3d(0,0,0); */
            transform: none !important;;
        }
        
        input#location-input {
            padding-left: 17px;
            border-radius: 48px;
        }
        div#search-container {
            position: absolute !important;
            top: 134px;
            left: 37px;
            z-index: 111;
        }
        .line {
            width: 50px;
            height: 2px;
            background: #ccc;
            box-shadow: 0px -3px 0px 0px #777;
            display: block;
            margin: auto;
            margin-top: -16px;
        }
        .lens {
            display: block;
            position: absolute;
            right: 37px;
            top: 9px;
        }
        .lens .bi-search {
            font-size: 18px;
            color: #999;
        }
        .lens .bi-search::before {
            content: "\f52a";
            font-size: 23px;
        }
        .search-btn{
            display: none;
        }
        button.search-btn {
            position: absolute;
            top: 0;
            right: 0;
            height: 38px;
            width: auto;
        }
        button.search-btn {
            position: absolute;
            top: 13px;
            right: 26px;
            height: 38px;
            width: auto;
            border-radius: 35px;
            display: none !important;
        }
        
    }

    @media(min-width: 769px){
        .lens{
            display: none;
        }
        button.search-btn{
            display: block;
            position: absolute;
            z-index: 1;
            top: 0;
            right: 0;
            height: 37px;
        }
    }
        
</style>