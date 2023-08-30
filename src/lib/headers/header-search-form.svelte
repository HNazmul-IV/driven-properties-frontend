<script>
    import { onMount, createEventDispatcher, afterUpdate, beforeUpdate, onDestroy } from 'svelte';
    import { page } from '$app/stores';
    import Select from 'svelte-select';
    import RangeSlider from "svelte-range-slider-pips";

    import {capitalizeFirstLetter} from '$lib/helpers';
    import { baseURL } from '../../base-url';
    
    export let BedRoomType = [];
    export let PropertyType =[];
    export let status;
    let pageSlug;
    let NewCommunityLists = [];
    let isHome = false;
    let isStatus = 'sale';
    let tabChangeStatus;
    let formAutoFilled=false;
    let placeholderText='';
    let last_url='';


    $: status, checkStatus();

    let searchKey = '';
    console.log(searchKey);
    
    let selected = { agserach:'Dubai Marina' };
    let ShowPrice;

    let dispatch = createEventDispatcher();
    
    let prostatus = status;
    let minPrice, maxPrice, No_of_Rooms, Unit_Type, protitle=" ", Status;
    let bedrooms='Bedrooms Type';
    let protype='Property Type';
    let range2 = [0, 150000000];
    let range3 = [0, 3000000];

    let FrmData = {
        'No_of_Rooms':"",
        "minPrice":"",
        "maxPrice":"",
        'Ad_Type':"", 
        'Unit_Type':"",
        'Status': "",
        'Property_Title':"",            
        'FrmSearchKey':""
    };

    const checkStatus = () => {
        isStatus = (status === 'Rent')? 'rent':'sale';

        // tabChangeStatus =
        FrmData = {
            'No_of_Rooms':"",
            "minPrice":"",
            "maxPrice":"",
            'Ad_Type':status, 
            'Unit_Type':"",
            'Status': status,
            'Property_Title':"",            
            'FrmSearchKey':""
        };
    }

    function capitalize(str) {
        return str.replace(/\b\w/g, function(l) { return l.toUpperCase(); });
    }

    

    onMount(async () => {        
        
        let oneURL; let twoUrl; let threeURL; let fourURL;
        formAutoFilled = true;

        // console.log('header search page',pageSlug);
        
        oneURL = !(oneURL) ? `${baseURL}/getAllBedRoom` : `http://127.0.0.1:8000/api/getAllBedRoom`;
        const response = await fetch(oneURL);
        const data = await response.json();
        BedRoomType = data;
        // //BedRoomType API End

        twoUrl = !(twoUrl) ? `${baseURL}/getAllPropertyType`: `http://127.0.0.1:8000/api/getAllPropertyType` ;
        const response1 = await fetch(twoUrl);
        const data1 = await response1.json();
        PropertyType = data1;
        // //PropertyType API End

        // set cache lifetime in seconds
        const cachelife = 5000;
        
        //get cached data from local storage
        let cacheddata = localStorage.getItem('algoliaSync');

        if(cacheddata){
            cacheddata = JSON.parse(cacheddata);
            expired = parseInt(Date.now() / 1000) - cacheddata.cachetime > cachelife;
        }

        //If cached data available and not expired return them.
        if (cacheddata  && !expired){
            NewCommunityLists = cacheddata.data;
        }else{
            //otherwise fetch data from api then save the data in localstorage 
            fourURL = !(fourURL) ? `${baseURL}/getAllAlgoliaSync` : `http://127.0.0.1:8000/api/getAllAlgoliaSync`;
            const response3 = await fetch(fourURL);
            const data = await response3.json();
            NewCommunityLists = data;
            const json = {data: data, cachetime: parseInt(Date.now() / 1000)}
            localStorage.setItem('algoliaSync', JSON.stringify(json));
        }

    });
    // End onMount

    
    
    const handleSelect = (event)=>{
        console.log('hsf handleSelect', event.detail);
        protitle = event.detail;
        placeholderText = protitle;

        console.log(placeholderText);
        FrmData = {
            'Property_Title':protitle,  
            'No_of_Rooms':pageSlug[4],
            'Unit_Type':pageSlug[3],
            'Ad_Type': status, 
        }
    };
    
    const frmOnChanges = (e)=>{
        console.log('hsf frmOnChanges');
        if(e.detail){
            minPrice = e.detail.values[0];
            maxPrice = e.detail.values[1];
        }
        if(e.target !== null){
            if(e.target.name === "bedrooms"){
                No_of_Rooms = e.target.value;
                if(No_of_Rooms === 'Bedrooms Type'){
                    No_of_Rooms = 'any';
                }
                console.log(No_of_Rooms);
            }
            if(e.target.name === "protype"){
                Unit_Type = e.target.value;
                if(Unit_Type === 'Property Type'){
                    Unit_Type = 'any';
                }
                console.log(Unit_Type);
            }
            if(e.target.name === "status"){
                Status = e.target.value;
                isStatus = Status;
            }
        }

        FrmData = {
            'No_of_Rooms':parseInt(No_of_Rooms),
            "minPrice":minPrice,
            "maxPrice":maxPrice,
            'Ad_Type': capitalizeFirstLetter(prostatus), 
            // 'Ad_Type':capitalizeFirstLetter(Status), 
            'Unit_Type': Unit_Type ? capitalizeFirstLetter(Unit_Type):'any',
            'Status': Status,
            'Property_Title':protitle,            
            'FrmSearchKey':searchKey
        };   

        console.log(FrmData);

    }; //frmOnChanges end
    
    afterUpdate(()=> {
        if($page.url.pathname === '/'){
            isHome = true;
        }
        pageSlug = $page.url.pathname.split('/');
        
        // console.log('afterUpdate');
        // console.log(pageSlug[5].split('-')[0], pageSlug[5].split('-')[1]);

        if(formAutoFilled && pageSlug.length === 6){
            for (let i = 0; i < 3; i++) {
                setTimeout(()=>{
                    status = pageSlug[1].split('-')[2] ? pageSlug[1].split('-')[2] : 'sale';
                    placeholderText = capitalize(pageSlug[2].replace(/-/g, " "));
                    protype = pageSlug[3] !== 'any'? capitalize(pageSlug[3]) : 'Property Type';
                    bedrooms = pageSlug[4] !== 'any' ? `${pageSlug[4]} Beds`: 'Bedrooms Type';0
                    if(pageSlug[5] && status==='sale'){
                        range2[0] = pageSlug[5].split('-')[0];
                        range2[1] = pageSlug[5].split('-')[1];
                    }
                    if(pageSlug[5] && status==='rent'){
                        range3[0] = pageSlug[5].split('-')[0];
                        range3[1] = pageSlug[5].split('-')[1];
                        isStatus = 'rent';
                    }
                    // console.log('afterupdate settimeout');   
                    console.log(isStatus, prostatus, status);
                }, 3000);

                formAutoFilled = false;
            }
        }

        // var protypeId = document.getElementById("protype").value;
        // // var bedroomsId = document.getElementById("bedrooms").value;
        
        // // console.log(protypeId, bedroomsId);
        // let protype1 = protypeId === 'Property Type' ? 'any': protypeId
        // // let bedrooms1 = bedroomsId === 'Bedrooms Type' ? '': bedroomsId

        // // console.log(protype1, bedrooms1);
        
        // FrmData = {
        //     'Unit_Type':protype1,
        //     // 'No_of_Rooms':parseInt(bedrooms1),
        // }


    })


    // Run while form submitting
    // dispatch data to header.svelte
    const handleFormClickBtn = (e) =>{
       
        console.log('hsf handleFormClickBtn', FrmData);
        formAutoFilled = true;
        dispatch('frmOnChanges', FrmData);
    }


</script>


<div class="row header-search">
    <div class="col-lg-12 aos-init aos-animate" data-aos="fade-up">
        <form on:submit|preventDefault={handleFormClickBtn}>
            <div class="row BxInfo-row">
                <div class="combine-status-community row mb-2 mt-2">
                    {#if !isHome}

                        <div class="col-lg-2  col-md-6 status-search">
                            <select id="status" name="status" class="form-select frsone" bind:value={status}  on:change={frmOnChanges}>
                                <option value="sale"> For Sale </option>
                                <option value="rent"> For Rent </option>
                            </select>
                        </div>
                    
                    {/if}
                    
                    <div class={!isHome? "col-lg-10  col-md-6 community-search": "col-lg-12  col-md-6"} >
                        <div class="input-group" id="MyCommunityLists1">
                            <Select
                                items={NewCommunityLists}
                                optionIdentifier={o => o.agserach}
                                getSelectionLabel={o => o.agserach}
                                getOptionLabel={o => o.agserach}
                                placeholder={placeholderText && placeholderText !=='Any'? placeholderText:'Search Location or Project (e.g. Business Bay)….'} 
                                showChevron = true
                                isClearable=true
                                noOptionsMessage ="We can't find your search query. Please check your spelling or try a different location."
                                on:select={handleSelect}
                            />
                            <input type="hidden" name="protitle" id="Community" on:change={frmOnChanges} bind:value="{protitle.agserach}" />
                        </div>
                    </div>
                </div>

                
                <div class="col-lg-4  col-md-6 mt-2">
                    <select id="protype" name="protype" class="form-select frsone" bind:value={protype} on:change={frmOnChanges} >
                        <option>Property Type</option>  
                        {#each PropertyType as propertytype, pt }
                            <option value="{propertytype.pttitle}"> {propertytype.pttitle} </option>
                        {/each}
                    </select>
                </div>

                <div class="col-lg-4  col-md-6 mt-2">
                    <select id="bedrooms" name="bedrooms" class="form-select frsone" bind:value={bedrooms} on:change={frmOnChanges} >
                        <option>Bedrooms Type</option>
                        {#each BedRoomType as bdroomtype, bd }
                            <option value="{bdroomtype.bdtitle}">{bdroomtype.bdtitle}</option>
                        {/each}
                    </select>
                </div>
                <div class="col-lg-4 col-md-6 mt-2" id="DrvnSlider">
                    {#if isStatus === 'rent' || prostatus === 'Rent' && status==='rent'}
                        <RangeSlider bind:values={range3} min={0} max={3000000} pips  on:change={frmOnChanges} />
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <div class="range-slider-input-container">
                            <div class="price-block"><label>min price</label><span class="price-symbol">د.إ (AED)</span><input type="text" class="price minprice" name="minPrice" bind:value="{range3[0]}"/></div> 
                            <div class="dash-sign">-</div>
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <div class="price-block"><label>max price</label><span class="price-symbol">د.إ (AED)</span><input type="text" class="price maxprice" name="maxPrice" bind:value="{range3[1]}"/></div>
                        </div>
                    {:else}
                        <RangeSlider bind:values={range2} min={0} max={150000000} pips  on:change={frmOnChanges} />
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <div class="range-slider-input-container">
                            <div class="price-block"><label>min price</label><span class="price-symbol">د.إ (AED)</span><input type="text" class="price minprice" name="minPrice" bind:value="{range2[0]}"/></div> 
                            <div class="dash-sign">-</div>
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <div class="price-block"><label>max price</label><span class="price-symbol">د.إ (AED)</span><input type="text" class="price maxprice" name="maxPrice" bind:value="{range2[1]}"/></div>
                        </div>
                    {/if}
                    
                </div>
                <div class="offcanvas-buttons">
                    <button data-bs-dismiss="offcanvas" id="offcanvas-button" type="submit" class="headerSearch-button btn btn-dark button-search">
                        <i class="bi bi-search"></i> 
                        Search
                    </button>
                </div>
            </div>
        </form>

    </div>
</div>
<!-- Serach Box End -->

<style>
    
    .price-block{
        position: relative;
        display: inline-block;
        width: 40%;
        color: #999;
        font-weight: bold;
    } 
    .price-block .price {
        padding: 13px 5px 0px 53px;
        width: 100%;
        font-size: 15px;
        color: #666;
    }
    .price-block .price-symbol {
        position: absolute;
        font-size: 12px;
        color: #666;
        left: 4px;
        top: 18px;
    }
    .price-block label{
        position: absolute;
        font-size: 13px;
        left: 3px;
        font-weight: 500;
        color: black;
    }
    .dash-sign{
        display: inline;
        margin: 0px 10px 10px !important;
        font-weight: bold;
        font-size: 30px;
        color: #999;
    }
    /* .rangeSlider.pips {
        margin-bottom: 1.2em;
        margin-top: -.2em;
    } */
    .input-group{display: flex !important;}
    button.headerSearch-button {
        border: 1px solid white;
        border-radius: none;
        width: 100%;
    }
    /* p.text-center.range-text {
        font-size: 13px;
        margin-top: -25px;
        font-weight: bold;
    } */
    #DrvnSlider input{
        display: inline-block;
    }
    .range-slider-input-container {
        text-align: center;
        display: flex;
        flex-flow: wrap-reverse;
    }

    @media only screen and (max-width: 768px) {
        .BxInfo-row{padding: 0 10px;}
    }

</style>