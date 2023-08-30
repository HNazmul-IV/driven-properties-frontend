<script>
    import { onMount, createEventDispatcher, afterUpdate } from 'svelte';
    import { goto } from '$app/navigation';
    import { baseURL } from '../../../base-url';

    let dispatch = createEventDispatcher();
    let searchKey=[];
    let expired;
    let searchedKeyArray=[], searchedKey=[];
    export let status;

    $: status, changeStatus();
    let inputValue = '';

    const changeStatus = () => {
        console.log(status);
    }

    const onInputChange = (e) => {
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

    const handleClick = () => {
        console.log(inputValue, status);
        if(status === 'Sale'){
            goto(`/de/properties-for-sale/${inputValue.replace(/\s+/g, "-").toLowerCase()}/any/any/0-150000000`);
        }else if(status === 'Rent'){
            goto(`/de/properties-for-rent/${inputValue.replace(/\s+/g, "-").toLowerCase()}/any/any/0-3000000`);
        }else if(status === 'Offplan'){
            localStorage.setItem("community", inputValue);
            // localStorage.setItem('bannerSearchForm', true);
            goto(`/de/sales/buy-offplan/offplan-apartments`);
        }
    }

    const getCommunity = async() => {

        let cachelife = 5000;

        //get cached data from local storage
        let cacheddata = localStorage.getItem('communityOffplan');

        if(cacheddata){
            cacheddata = JSON.parse(cacheddata);
            console.log(cacheddata);
            expired = parseInt(Date.now() / 1000) - cacheddata.cachetime > cachelife;
        }

        //If cached data available and not expired return them.
        if (cacheddata  && !expired){
            console.log(cacheddata);
            searchKey =  cacheddata.data;
            searchedKeyArray = searchKey; // list of suggested community
            searchedKey = searchKey; // list of suggested community
        }else{
            //otherwise fetch data from api then save the data in localstorage 
            const res = await fetch(`${baseURL}/searchCommunityOffPlan`);
            searchKey = await res.json();
            const json = {data: searchKey, cachetime: parseInt(Date.now() / 1000)};
            localStorage.setItem('communityOffplan', JSON.stringify(json));
            searchedKeyArray = searchKey; // list of suggested community
            searchedKey = searchKey; // list of suggested community
        }
        
        document.getElementById("search-container").style.display = "block";
    }

    // work when something selected from community list popup 
    const handleSearchClicked = async (e) => {
        console.log('handleSEarcheClicked fn');
        const searchClickedText = e.target.innerText;
        document.getElementById("location-input").value = searchClickedText;
        inputValue = searchClickedText;
        document.getElementById("search-container").style.display = "none";
    };

    onMount(()=> {
        document.getElementById("search-container").style.display = "none";
    })

</script>


<div class="row banner-search">

    <div id="search-container">
        {#each searchedKey as item}
            <div class="search-key" on:click={handleSearchClicked}>
                {item.pctitle}
            </div>
        {/each}
    </div>

    <div class="container search-form-hero-banner">
        <div class="banner-search-form p-3">
            <div class="location-container">
                <lable for="location">Standort</lable>
                <div class="banner-search-location">
                    <input type="text"  name="location" id="location-input" on:focus={getCommunity} on:keyup={onInputChange} 
                    autocomplete="off" placeholder="Gebiet, Entwicklung..."/>
                </div>
            </div>
            <div class="filter-submit-container">
                <!-- <div class="banner-search-filter">Filter</div> -->
                <button type="submit" on:click={handleClick} class="banner-search-submit"><i class="bi bi-search"></i> Suche</button>
            </div>
        </div>
    </div>
</div>
<!-- Serach Box End -->

<style>
    .search-form-hero-banner{
        position: relative;
        width: 600px;
        top: -30px;
    }
    .banner-search{
        position: relative;
    }
    .banner-search-form {
        background: white;
        position: absolute;
        width: 600px;
        top: 23px;
        border-radius: 50px;
    }
    .banner-search-form {
        display: flex;
        justify-content: space-between;
        line-height: 37px;
    }
    .filter-submit-container {
        display: flex;
        justify-content: space-between;
        /* width: 30%; */
    }
    .location-container lable {
        font-size: 14px;
        color: #888;
        top: -2px;
        position: absolute;
    }
    input#location-input {
        border: none;
        width: 400px;
    }
    ::placeholder { 
        color: black;
        opacity: .9;
    }
    .banner-search-submit {
        background: #333;
        padding: 0px 15px;
        color: white;
        border-radius: 32px;
    }
    .location-container {
        padding: 0px 10px;
    }
    
    /* Search Suggestions */
    div#search-container {
        background: white;
        font-size: 14px;
        padding: 0 11px;
        position: absolute;
        border: 1px solid #ccc;
        border-top: 0px;
        z-index: 11;
        top: 38px;
        /* width: auto; */
        /* left: 48px;
        min-width: 50%; */
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
        top: 65px;
        /* width: auto;
        left: 26%;
        min-width: 48%; */
        max-height: 300px;
        overflow-y: auto;
    }

</style>