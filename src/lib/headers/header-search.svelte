<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import { page } from '$app/stores';
    import Select from 'svelte-select';
    import RangeSlider from "svelte-range-slider-pips";


    import Slider from '@bulatdashiev/svelte-slider';
    import {covertToIntCurrancy, CurrancySBC, getMaxNumbers} from '$lib/includes/others';
    import {capitalizeFirstLetter} from '$lib/helpers';
    import { baseURL } from '../../base-url';
    
    //export let MyData =[];
    export let BedRoomType = [];
    export let PropertyType =[];
    export let PropertyStatus =[];
    export let pgname;
    let pageSlug = $page.url.pathname.split('/');
    let NewCommunityLists = [];

    console.log(pgname);
    // let searchKey = pgname ? pgname : pageSlug[3];
    let searchKey = '';
    // searchKey = (searchKey.replaceAll('-', ' ').split(' ')); 
    console.log(searchKey);

    
    let selected = { agserach:'Dubai Marina' };
    let ShowPrice;


    let dispatch = createEventDispatcher();
    
    // let prostatus =`For ${ searchKey[0] ? capitalizeFirstLetter(searchKey[0]): 'Sale' }`;
    let prostatus ='For Sale';
    let protitle ='';
    let bedrooms='Bedrooms Type';
    let protype='Property Type';
    let range2 = [0, 150000000];
    let range3 = [0, 3000000];

    onMount(async () => {        
        
        let oneURL; let twoUrl; let threeURL; let fourURL;
        
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

        threeURL = !(threeURL) ? `${baseURL}/getAllPropertyStatus` : `http://127.0.0.1:8000/api/getAllPropertyStatus`;
        const response2 = await fetch(threeURL);
        const data2 = await response2.json();
        PropertyStatus = data2;
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
        //console.log('selected item', event.detail);
        protitle = event.detail;
    };

    const FrmSubmit = ()=>{

        console.log("prostatus="+prostatus, "\nprotitle="+protitle, "\nprotype="+protype, "\nbedrooms="+bedrooms, 
        "\nsearchKey="+searchKey, "\nrange2="+range2[0], "\nrange2="+range2[1]);
        console.log(protitle);
        const FrmData = {
            'No_of_Rooms':parseInt(bedrooms.replace('Bedroom','')),
            "minPrice":range2[0] ? range2[0]: range3[0],
            "maxPrice":range2[1] ? range2[1]: range3[1],
            'Ad_Type':capitalizeFirstLetter(prostatus), 
            'Unit_Type':capitalizeFirstLetter(protype),
            'Property_Title':capitalizeFirstLetter(protitle),            
            'FrmSearchKey':searchKey
        };
        dispatch('serachFromData', FrmData);
    };
    // // End FrmSubmit

    const frmOnChanges = ()=>{

        const FrmData = {
            
            'No_of_Rooms':parseInt(bedrooms.replace('Bedroom','')),
            "minPrice":range2[0] ? range2[0]: range3[0],
            "maxPrice":range2[1] ? range2[1]: range3[1],
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
        if(prostatus === 'For Sale') {ShowPrice = 'Yes'; }
        else{ShowPrice = 'No'; }
    };
    //Mysale End

    const logFs = (position)=>{
        
    };

</script>


<div class="row header-search">
    <div class="col-lg-12 aos-init aos-animate" data-aos="fade-up">
        <form on:submit|preventDefault={FrmSubmit}>
            <div class="row BxInfo-row">

                <!-- <div class="col-lg-2 mb-2 col-md-6">
                    <div class="input-group">
                        <select id="FSR" name="prostatus" class="form-select fsr" bind:value="{prostatus}" on:change={Mysale}> -->
                            <!--option> For Sale</option>
                            <option>For Rent</option-->
                            <!-- {#each PropertyStatus as propertystatus, ps }
                                {#if propertystatus.pstitle !== 'Off Plan'}
                                    <option value="{propertystatus.pstitle}"> {propertystatus.pstitle} </option>
                                {/if}
                            {/each}
                        </select>
                    </div>
                </div> -->

                <div class="col-lg-12  col-md-6">
                    <div class="input-group" id="MyCommunityLists1">
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
                        <input type="hidden" name="protitle" id="Community" bind:value="{protitle.agserach}" />
                        <!-- <button class="btn btn-primary btnfrm" id="mySearch" >Search</button> -->
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
                    <!--select id="FSRONE" class="form-select frsone">
                        <option> --- Price ---</option>
                        {Math.ceil(Math.log10(10000000))}
                    </select-->
                    {#if ShowPrice === 'No'}
                        <RangeSlider step={7} bind:values={range3} min={0} max={3000000} pips on:change={frmOnChanges} />
                        <p class="text-center">Min Price. AED {covertToIntCurrancy(range3[0])} Max Price. AED {covertToIntCurrancy(range3[1])}</p>                    
                        <input type="hidden" name="minPrice" bind:value="{range3[0]}"/>
                        <input type="hidden" name="maxPrice" bind:value="{range3[1]}"/>
                    {:else}
                        <RangeSlider step={7} bind:values={range2} min={0} max={150000000} pips on:change={frmOnChanges} />
                        <!-- <Slider max="150000000" step="{Math.pow(Math.ceil(Math.log10(150000000)),3)}" bind:value={range2} on:change={frmOnChanges} range order/> -->
                        <p class="text-center">Min Price. AED {covertToIntCurrancy(range2[0])} Max Price. AED {covertToIntCurrancy(range2[1])}</p>                    
                        <input type="hidden" name="minPrice" bind:value="{range2[0]}"/>
                        <input type="hidden" name="maxPrice" bind:value="{range2[1]}"/>
                    {/if}
                </div>
                <!--button class="btn btn-primary btnfrm">Serach</button-->
            </div>
        </form>
        
        <!-- form values Details :<br/>
        PropertyStatus: {prostatus} <br/>
        PropertyType: {protype} <br/>
        No. BedRoom: {bedrooms} <br/>
        Property Title: {protitle} <br/>
        searchKey: {searchKey}<br/>
        minPrice: {range2[0]}<br/>
        maxPrice: {range2[1]}<br/> -->
        

    </div>
</div>
<!-- Serach Box End -->

<style>
    
    #FSRONE{
        height: 48px; width: 100%; padding: 10px 20px; border-radius:0; background-position: right 1.13rem center;
    } 
    
    .input-group{display: flex !important;}
    
    

    @media only screen and (max-width: 768px) {
        #mySearch{ 
            width: 100% !important; margin-top: 6px; position: absolute; top: 260px;
        }
        .btnfrm{ width:auto !important;}
        .BxInfo-row{padding: 0 10px;}
    }

</style>