<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import { page } from '$app/stores'


    import Slider from '@bulatdashiev/svelte-slider';
    import {covertToIntCurrancy, CurrancySBC, getMaxNumbers} from './others';
    import { baseURL } from '../../../../base-url';

    
    export let MyData =[];
    export let BedRoomType = [];
    export let PropertyType =[];
    export let PropertyStatus =[];
    
    let searchKey = $page.params.getByPageName ? $page.params.getByPageName.replace('-', ' ') :' '      
    $: searchKey = searchKey.split(" ");
    
    let dispatch = createEventDispatcher();
    
    let range2 = [500000, 120000000];    
    let prostatus ='For Sale';    
    let protitle ='';
    let bedrooms='1 Bedroom';
    let protype='Apartment';
    let minPrice='';
    let maxPrice='';

    onMount(async () => {        
        
        let oneURL; let twoUrl; let threeURL;
        oneURL = !(oneURL) ? `${baseURL}/getAllBedRoom` : `http://127.0.0.1:8000/api/getAllBedRoom`;
        const response = await fetch(oneURL);
        const data = await response.json();
        BedRoomType = data;
        //BedRoomType API End

        twoUrl = !(twoUrl) ? `${baseURL}/getAllPropertyType`:`http://127.0.0.1:8000/api/getAllPropertyType` ;
        const response1 = await fetch(twoUrl);
        const data1 = await response1.json();
        PropertyType = data1;
        //PropertyType API End

        threeURL = !(threeURL) ? `${baseURL}/getAllPropertyStatus` :`http://127.0.0.1:8000/api/getAllPropertyStatus`;
        const response2 = await fetch(threeURL);
        const data2 = await response2.json();
        PropertyStatus = data2;
        //PropertyType API End
    });
    // End onMount

    const FrmSubmit = ()=>{

        //console.log(prostatus, protitle, protype, bedrooms, searchKey, range2[0], range2[1]);
        const FrmData = {
            'ProStatus':prostatus, 
            'ProTitle':protitle, 
            'ProType':protype,
            'BedRoom':parseInt(bedrooms.replace('Bedroom','')),
            'FrmSearchKey':searchKey,
            "minPrice":range2[0],
            "maxPrice":range2[1]
        };
        dispatch('serachFromData', FrmData);
    };
    // // End FrmSubmit

    const frmOnChanges = ()=>{

        const FrmData = {
            'ProStatus':prostatus, 
            'ProTitle':protitle, 
            'ProType':protype,
            'BedRoom':parseInt(bedrooms.replace('Bedroom','')),
            'FrmSearchKey':searchKey,
            "minPrice":range2[0],
            "maxPrice":range2[1]
        };

        dispatch('frmOnChanges', FrmData);
        //console.log('change')
    };
    //frmOnChanges end

</script>

<div class="row">
    <div class="col-lg-12 aos-init aos-animate" data-aos="fade-up">
        <form on:submit|preventDefault={FrmSubmit}>
            <div class="row BxInfo-row">
                <div class="col-lg-2 col-md-6">
                    <div class="input-group">
                        <select id="FSR" name="prostatus" class="form-select fsr" bind:value="{prostatus}">
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
                    <div class="input-group">
                    <input list="feature-filters" name="protitle" type="text" bind:value="{protitle}" class="form-control" placeholder="Search Location or Project (e.g. Business Bay)….">
                    <datalist id="feature-filters">
                        {#each MyData as Lists (Lists.objectID)}
                            <option value="{(Lists.Property_Name +"\r\n "+ Lists.Property_Title)} ">
                        {/each}
                    </datalist>
                    <button class="btn btn-primary btnfrm">Serach</button>
                </div>
            </div>

                
                <div class="col-lg-4  col-md-6 mt-2">
                    <select id="FSRONE" name="protype" class="form-select frsone" bind:value="{protype}">
                        <option> --- Property Type ---</option>  
                        {#each PropertyType as propertytype, pt }
                            <option value="{propertytype.pttitle}"> {propertytype.pttitle} </option>
                        {/each}
                    </select>
                </div>

                <div class="col-lg-4  col-md-6 mt-2">
                    <select id="FSRONE" name="bedrooms" class="form-select frsone" bind:value="{bedrooms}">
                        <option> ---  Bedrooms ---</option>
                        {#each BedRoomType as bdroomtype, bd }
                            <option value="{bdroomtype.bdtitle}">{bdroomtype.bdtitle}</option>
                        {/each}
                    </select>
                </div>

                <div class="col-lg-4 col-md-6 mt-2" id="DrvnSlider">
                    <!--select id="FSRONE" class="form-select frsone">
                        <option> --- Price ---</option>
                    </select-->

                    <Slider max="150000000" step="5" bind:value={range2} on:change={frmOnChanges} range order/>
                    <p class="text-center">Min Price. USD {covertToIntCurrancy(range2[0])} Max Price. USD {covertToIntCurrancy(range2[1])}</p>                    
                    <input type="hidden" name="minPrice" bind:value="{range2[0]}"/>
                    <input type="hidden" name="maxPrice" bind:value="{range2[1]}"/>
                    
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
    
    .btnfrm{ 
        line-height: 40px; border: none; border-radius: 0; width: 15%; background-color: #A8A8A8; color: #fff; 
        font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 3px;
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

    @media only screen and (max-width: 768px) {
        .btnfrm{ width:auto !important;}
        .BxInfo-row{padding: 0 10px;}
        #FSR{
            width: 100%;
        }
    }

</style>