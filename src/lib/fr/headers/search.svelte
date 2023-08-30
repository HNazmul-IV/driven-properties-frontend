<script>
    import { onMount, createEventDispatcher, afterUpdate } from 'svelte';
    import { page } from '$app/stores';
    import Select from 'svelte-select';
    import RangeSlider from "svelte-range-slider-pips";

    import {covertToIntCurrancy, CurrancySBC, getMaxNumbers} from '$lib/includes/others';
    import {capitalizeFirstLetter} from '$lib/helpers';
    import { baseURL } from '../../../base-url';
    
    export let BedRoomType = [];
    export let PropertyType =[];
    export let status;
    let pageSlug = $page.url.pathname.split('/');
    let NewCommunityLists = [];
    let isHome = false;
    let isStatus = 'sale'

    let searchKey = '';
    console.log(searchKey);

    
    let selected = { agserach:'Dubai Marina' };
    let ShowPrice;


    let dispatch = createEventDispatcher();
    
    let prostatus = status;
    let minPrice, maxPrice, No_of_Rooms, Unit_Type, protitle=" ", Status;
    let bedrooms='Type de chambres';
    let protype='Type de propriété';
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

    afterUpdate(()=> {
        // $page.path === 'http://localhost:3000/'
        if($page.url.pathname === '/'){
            isHome = true;
        }
    })

    onMount(async () => {        
        
        let oneURL; let twoUrl; let threeURL; let fourURL;

        // console.log('header search page',pageSlug);
        oneURL = !(oneURL) ? `${baseURL}/getAllBedRoom` : 'http://127.0.0.1:8000/api/getAllBedRoom';
        const response = await fetch(oneURL);
        const data = await response.json();
        BedRoomType = data;

        console.log(BedRoomType);
        // //BedRoomType API End

        twoUrl = !(twoUrl) ? `${baseURL}/getAllPropertyType`: 'http://127.0.0.1:8000/api/getAllPropertyType' ;
        const response1 = await fetch(twoUrl);
        const data1 = await response1.json();
        PropertyType = data1;
        // //PropertyType API End

        fourURL = !(fourURL) ? `${baseURL}/getAllAlgoliaSync` : 'http://127.0.0.1:8000/api/getAllAlgoliaSync';
        const response3 = await fetch(fourURL);
        const data3 = await response3.json();
        NewCommunityLists = data3;
        //PropertyType API End

    });
    // End onMount

    
    // const FrmSubmit = ()=>{
    //     const FrmData = {
    //         'No_of_Rooms':parseInt(bedrooms.replace('Bedroom','')),
    //         "minPrice":range2[0] ? range2[0]: range3[0],
    //         "maxPrice":range2[1] ? range2[1]: range3[1],
    //         'Ad_Type':capitalizeFirstLetter(prostatus), 
    //         'Unit_Type':capitalizeFirstLetter(protype),
    //         'Property_Title':protitle,            
    //         'FrmSearchKey':searchKey
    //     };
    //     console.log('FrmSubmit');
    //     console.log(FrmData);
    //     dispatch('serachFromData', FrmData);
    // };
        // End FrmSubmit
    
    
    const handleSelect = (event)=>{
        console.log('selected item', event.detail);
        protitle = event.detail;
        FrmData = {
            'Property_Title':protitle, 
        }
    };
    
    const frmOnChanges = (e)=>{
    
        if(e.detail){
            minPrice = e.detail.values[0];
            maxPrice = e.detail.values[1];
        }
        if(e.target !== null){
            if(e.target.name === "bedrooms"){
                No_of_Rooms = e.target.value;
            }
            if(e.target.name === "protype"){
                Unit_Type = e.target.value;
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
            'Ad_Type':capitalizeFirstLetter(prostatus), 
            'Unit_Type':capitalizeFirstLetter(Unit_Type),
            'Status': Status,
            'Property_Title':protitle,            
            'FrmSearchKey':searchKey
        };

    };    //frmOnChanges end
    
    const handleFormClickBtn = (e) =>{
        console.log(e);
        dispatch('frmOnChanges', FrmData);
        // e.target.reset();
    }

</script>


<div class="row header-search">
    <div class="col-lg-12 aos-init aos-animate" data-aos="fade-up">
        <form on:submit|preventDefault={handleFormClickBtn}>
            <div class="row BxInfo-row">

                <div class="combine-status-community row mb-2 mt-2">
                    {#if !isHome}

                        <div class="col-lg-2  col-md-6 status-search">
                            <select id="FSRONE" name="status" class="form-select frsone" on:change={frmOnChanges}>
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
                                placeholder="Rechercher un emplacement ou un projet (par exemple, Business Bay)…."
                                showIndicator=true
                                isClearable=true
                                noOptionsMessage ="We can't find your search query. Please check your spelling or try a different location."
                                on:select={handleSelect}
                            />
                            <input type="hidden" name="protitle" id="Community" on:change={frmOnChanges} bind:value="{protitle.agserach}" />
                        </div>
                    </div>
                </div>

                
                <div class="col-lg-4  col-md-6 mt-2">
                    <select id="FSRONE" name="protype" class="form-select frsone" on:change={frmOnChanges} bind:value="{protype}">
                        <option selected>Type de propriété</option>  
                        {#each PropertyType as propertytype, pt }
                            <option value="{propertytype.pttitle_fr}"> {propertytype.pttitle_fr} </option>
                        {/each}
                    </select>
                </div>

                <div class="col-lg-4  col-md-6 mt-2">
                    <select id="FSRONE" name="bedrooms" class="form-select frsone" on:change={frmOnChanges} bind:value="{bedrooms}">
                        <option disabled>Type de chambres</option>
                        {#each BedRoomType as bdroomtype, bd }
                            <option value="{bdroomtype.bdtitle_fr}">{bdroomtype.bdtitle_fr}</option>
                        {/each}
                    </select>
                </div>


                <div class="col-lg-4 col-md-6 mt-2" id="DrvnSlider">
                    {#if isStatus === 'rent'}
                        <RangeSlider step={7} bind:values={range3} min={0} max={3000000} pips  on:change={frmOnChanges} />
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <div class="range-slider-input-container">
                            <div class="price-block"><label>prix minimum</label><span class="price-symbol">د.إ (AED)</span><input type="text" class="price minprice" name="minPrice" bind:value="{range3[0]}"/></div> 
                            <div class="dash-sign">-</div>
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <div class="price-block"><label>prix maximum</label><span class="price-symbol">د.إ (AED)</span><input type="text" class="price maxprice" name="maxPrice" bind:value="{range3[1]}"/></div>
                        </div>
                    {:else}
                        <RangeSlider bind:values={range2} min={0} max={150000000} pips  on:change={frmOnChanges} />
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <div class="range-slider-input-container">
                            <div class="price-block"><label>prix minimum</label><span class="price-symbol">د.إ (AED)</span><input type="text" class="price minprice" name="minPrice" bind:value="{range2[0]}"/></div> 
                            <div class="dash-sign">-</div>
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <div class="price-block"><label>prix maximum</label><span class="price-symbol">د.إ (AED)</span><input type="text" class="price maxprice" name="maxPrice" bind:value="{range2[1]}"/></div>
                        </div>
                    {/if}
                    
                </div>
                <div class="offcanvas-buttons">
                    <button data-bs-dismiss="offcanvas" id="offcanvas-button" type="submit" class="text-center headerSearch-button btn btn-dark button-search">
                        <i class="bi bi-search"></i> 
                        recherche
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
    .input-group{display: flex !important;}
    button.headerSearch-button {
        border: 1px solid white;
        border-radius: none;
        width: 100%;
    }
    #DrvnSlider input{
        display: inline-block;
    }
    .range-slider-input-container {
        text-align: center;
        display: flex;
        flex-flow: wrap-reverse;
    }

    #FSRONE {
        height: 52px;
        width: 100%;
        padding: 10px 20px;
        border-radius: 0;
        background-position: right 1.13rem center !important;
    }

    @media only screen and (max-width: 768px) {
        .BxInfo-row{padding: 0 10px;}
    }

</style>