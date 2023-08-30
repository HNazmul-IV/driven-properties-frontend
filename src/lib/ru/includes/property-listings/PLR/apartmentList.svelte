<script>
    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    import ListingListItem from '$lib/ru/includes/sales/listing.svelte';  
    import ContentFormMesg from '$lib/commons/ContentFormMesg.svelte';

    export let list = [];
    // export let results;
    let hideFrm = true;

    setTimeout(() => {
        hideFrm =false;
    }, 200);

    // $: condition = hideFrm;
    
</script>
<div class="col-lg-6 apartment-container mt-5 mr-2" id="MyDetails">
    <!-- <div class="property-found">{results} Results Found!</div> -->
    <div class="row">
        <div class="card mb-2">
            <!-- {list.length} -->
            {#each list as listing (listing.objectID) }
                <!-- {#if listing.Published === 'Yes' ||  listing.Published === 'No' } -->
                    <!-- {@html listing.Property_Ref_No} -->
                    <ListingListItem 
                        title={(listing.Property_Name +"\r\n "+ listing.Property_Title)} 
                        noOfBeds={listing.Bedrooms.split('-').length ? listing.Bedrooms.split('-')[0]+' Beds': listing.Bedrooms +' Beds'} 
                        noOfBaths={listing.No_of_Bathroom+' Bathroom'} 
                        images={listing.Images}
                        price={listing.Price}
                        Community = {listing.Community +" "+ listing.Sub_Community}
                        agentNumber ={listing.Listing_Agent_Phone}
                        building={listing.Unit_Type} 
                        objectID = {listing.objectID}
                        Emirate ={listing.Emirate}
                        PropertyStatus = {listing.Ad_Type}
                        PropertyRefNo ={listing.Property_Ref_No}
                        propertyTitle = {listing.Property_Name}
                    />
                    
                <!-- {/if} -->
            {:else}
                <div class="col-lg-12 col-md-12" class:showAfter={hideFrm}>
                    <ContentFormMesg/>
                </div>
            {/each}            
        </div>        
    </div>
    
    <!--Total Rows: {list.length}-->
</div>

<style>
    
    /* #MyDetails { height:670px; overflow-y:scroll; margin-bottom: 40px !important;  } */
    #MyDetails .card{ border:0; border-radius:0;}
    .showAfter{display: none;}    
    .apartment-container{
        padding-right: 1em;
    }
    #MyDetails{
        /* height: 634px;
        overflow-y: scroll; */
        overflow-x: hidden;
        box-shadow: 0px 0px 10px 0px #e1e1e1;
        border-top: 1px solid #e1e1e1;
        border-bottom: 1px solid #e1e1e1;
        margin-right: 0.6em;
        padding: 1em;
    }
    
</style>