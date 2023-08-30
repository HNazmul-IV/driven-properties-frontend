<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import { page } from '$app/stores';
    import Select from 'svelte-select';
    import RangeSlider from "svelte-range-slider-pips";
    import { goto } from '$app/navigation';

    import Slider from '@bulatdashiev/svelte-slider';
    import {covertToIntCurrancy, CurrancySBC, getMaxNumbers} from '$lib/includes/others';
    import {capitalizeFirstLetter} from '$lib/helpers';
    import { baseURL } from '../../../base-url';
    
    //export let MyData =[];
    export let BedRoomType = [];
    export let PropertyType =[];
    export let PropertyStatus =[];
    export let pgname;
    let pageSlug = $page.url.pathname.split('/');
    let NewCommunityLists = [];

    let searchKey = pgname ? pgname : pageSlug[3];
    searchKey = (searchKey.replaceAll('-', ' ').split(' '));
    console.log(searchKey);
    
    let selected = { agserach:'Dubai Marina' };
    let ShowPrice;


    let dispatch = createEventDispatcher();
    
    let prostatus =`For ${ searchKey[0] ? capitalizeFirstLetter(searchKey[0]): 'Sale' }`;
    let protitle ='';
    let bedrooms='Bedrooms Type';
    let protype=`${ searchKey[1] ? capitalizeFirstLetter(searchKey[1]) : 'Property Type' }`;
    let minPrice='';
    let maxPrice='';
    let range2 = [0, 150000000];
    let range3 = [0, 3000000];

    onMount(async () => {        

        protype = 'Property Type';
        
        let oneURL; let twoUrl; let threeURL; let fourURL;
        oneURL = !(oneURL) ? `${baseURL}/getAllBedRoom` : `http://127.0.0.1:8000/api/getAllBedRoom`;
        const response = await fetch(oneURL);
        const data = await response.json();
        BedRoomType = data;
        //BedRoomType API End

        twoUrl = !(twoUrl) ? `${baseURL}/getAllPropertyType`: `http://127.0.0.1:8000/api/getAllPropertyType` ;
        const response1 = await fetch(twoUrl);
        const data1 = await response1.json();
        PropertyType = data1;
        //PropertyType API End

        threeURL = !(threeURL) ? `${baseURL}/getAllPropertyStatus` : `http://127.0.0.1:8000/api/getAllPropertyStatus`;
        const response2 = await fetch(threeURL);
        const data2 = await response2.json();
        PropertyStatus = data2;
        //PropertyType API End

        fourURL = !(fourURL) ? `${baseURL}/getAllAlgoliaSync` : `http://127.0.0.1:8000/api/getAllAlgoliaSync`;
        const response3 = await fetch(fourURL);
        const data3 = await response3.json();
        NewCommunityLists = data3;
        //PropertyType API End


    });
    // End onMount

    const handleSelect = (e)=>{
        //console.log('selected item', e.detail);
        //console.log('selected item', e.detail.agserach);
        protitle = e.detail.agserach;
    };

    const FrmSubmit = ()=>{
        console.log('frmsuibmit');
        console.log(prostatus, protitle, protype, bedrooms, searchKey, range2[0], range2[1]);
        const FrmData = {
            'No_of_Rooms':parseInt(bedrooms.replace('Bedroom','')),
            "minPrice":ShowPrice === 'No' && range3[0] ? range3[0]: range2[0],
            "maxPrice":ShowPrice === 'No' &&  range3[1] ? range3[1]: range2[1],
            'Ad_Type':capitalizeFirstLetter(prostatus), 
            'Unit_Type':capitalizeFirstLetter(protype),
            'Property_Title':capitalizeFirstLetter(protitle),            
            'FrmSearchKey':searchKey
        };
        goto(`/properties-for-${prostatus.split(' ')[1].toLowerCase()}/${protitle!==''?protitle.replace(/\s+/g, "-").toLowerCase():'any'}/${protype!=='Property Type'?protype.toLowerCase():'any'}/${bedrooms!=='Bedrooms Type'? parseInt(bedrooms.split(' ')[0]):'any'}/${range2[0]}-${range2[1]}`);
        // dispatch('serachFromData', FrmData);
    };
    // // End FrmSubmit

    const frmOnChanges = ()=>{

        
        const FrmData = {
            
            'No_of_Rooms':parseInt(bedrooms.replace('Bedroom','')),
            "minPrice":ShowPrice === 'No' && range3[0] ? range3[0]: range2[0],
            "maxPrice":ShowPrice === 'No' &&  range3[1] ? range3[1]: range2[1],
            'Ad_Type':capitalizeFirstLetter(prostatus),
            'Unit_Type':capitalizeFirstLetter(protype),
            'Property_Title':capitalizeFirstLetter(protitle),            
            'FrmSearchKey':searchKey
        };

        dispatch('frmOnChanges', FrmData);
        //console.log('change')
    };
    //frmOnChanges end

    const Mysale = async()=>{
        //console.log(prostatus);
        //let range2 = [0, 3000000];
        if(prostatus === 'For Sale') {ShowPrice = 'Yes'; } else{ShowPrice = 'No'; }
    };
    //Mysale End

    const logFs = (position)=>{
        
    };

</script>


<div class="row">
    <div class="col-lg-12 aos-init aos-animate" data-aos="fade-up">
        <form on:submit|preventDefault={FrmSubmit}>
            <div class="row BxInfo-row">
                <div class="col-lg-2 mb-2 col-md-6">
                    <div class="input-group">
                        <select id="FSR" name="prostatus" class="form-select fsr" bind:value="{prostatus}" on:change={Mysale}>
                            <!--option> For Sale</option>
                            <option>For Rent</option-->
                            {#each PropertyStatus as propertystatus, ps }
                                {#if propertystatus.pstitle !== 'Off Plan'}
                                    <option value="{propertystatus.pstitle}"> {propertystatus.pstitle} </option>
                                {/if}
                            {/each}
                        </select>
                    </div>
                </div>

                <div class="col-lg-10  col-md-6">
                    <div class="input-group" id="MyCommunityLists">
                        <Select
                            items={NewCommunityLists}
                            optionIdentifier={o => o.agserach}
                            getSelectionLabel={o => o.agserach}
                            getOptionLabel={o => o.agserach}
                            placeholder="Search Location or Project (e.g. Business Bay)…."
                            showIndicator=true
                            isClearable=true
                            noOptionsMessage ="We can't find your search query. Please check your spelling or try a different location."
                            on:select={handleSelect}
                        />
                        <input type="hidden" name="Sprotitle" id="SCommunity" bind:value="{protitle}" />
                        <button class="btn btn-primary btnfrm" id="mySearch" >Search</button>
                    </div>
                </div>
                
                
                <div class="col-lg-4  col-md-6 mt-2">
                    <select id="FSRONE" name="protype" class="form-select frsone" bind:value="{protype}">
                        <option>Property Type</option>  
                        {#each PropertyType as propertytype, pt }
                            <option value="{propertytype.pttitle}"> {propertytype.pttitle} </option>
                        {/each}
                    </select>
                </div>

                
                <div class="col-lg-4  col-md-6 mt-2">
                    <select id="FSRONE" name="bedrooms" class="form-select frsone" bind:value="{bedrooms}">
                        <option>Bedrooms Type</option>
                        {#each BedRoomType as bdroomtype, bd }
                        <option value="{bdroomtype.bdtitle}">{bdroomtype.bdtitle}</option>
                        {/each}
                    </select>
                </div>

                <div class="col-lg-4 col-md-6 mt-2" id="DrvnSlider">
                    {#if ShowPrice === 'No'}
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
                <!--button class="btn btn-primary btnfrm">Serach</button-->
            </div>
        </form>
        
        <!--form values Details :<br/>
        PropertyStatus: {prostatus} <br/>
        PropertyType: {protype} <br/>
        No. BedRoom: {bedrooms} <br/>
        Property Title: {protitle} <br/>
        searchKey: {searchKey}<br/>
        minPrice: {range2[0]}<br/>
        maxPrice: {range2[1]}<br/-->
        

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
    
    #DrvnSlider input{
        display: inline-block;
    }
    .range-slider-input-container {
        text-align: center;
        display: flex;
        flex-flow: wrap-reverse;
    }
    
    .btnfrm{ 
        line-height: 40px; border: none; border-radius: 0; width: 15%; background-color: #A8A8A8; color: #fff; 
        font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; height: 52px;
    }
    .btnfrm:hover{ background-color: black;}
    
    #drv-bread .input-group:not(.has-validation) >.dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu)
    {border-color:none !important; border-radius: 1px;}

    
    #FSR{ 
        background-color: black; color: #fff; height: 52px; width: 90%; padding: 10px 30px; 
        border-radius:0; background-position: right 1.13rem center;
        background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>") !important;        
    }
    #FSRONE{
        height: 48px; width: 100%; padding: 10px 20px; border-radius:0; background-position: right 1.13rem center;
    } 
    .RGAP{padding: 0;}

    .input-group{display: flex !important;}
    
    #feature-filters{
        padding:5px;
        border:2px solid #ccc;
        -webkit-border-radius: 4px;
        border-radius: 5px;
    }
    #DrvnSlider .rangeSlider .rangeHandle {height:0.4rem !important;}
    

    @media only screen and (max-width: 768px) {
        #mySearch{ 
            width: 100% !important; margin-top: 6px; position: absolute; top: 260px;
        }
        .btnfrm{ width:auto !important;}
        .BxInfo-row{padding: 0 10px;}
        #FSR{
            width: 100%;
        }
    }

</style>