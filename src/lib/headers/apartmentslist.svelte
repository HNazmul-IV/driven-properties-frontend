<script>
    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    import ListingListItem from './listing.svelte';  
    // import ContentFormMesg from '$lib/commons/ContentFormMesg.svelte'
          
    export let list = [];
    // let hideFrm = true;

    // setTimeout(() => {
    //     hideFrm =false;
    // }, 200);

    // $: condition = hideFrm;
    
</script>

<div class="col-lg-6 mt-5" id="MyDetails">
    <div class="row">
        <div class="card mb-2">
            <!-- {list.length} -->
            {#each list as listing (listing.objectID) }
                <!-- {#if listing.Published === 'Yes' ||  listing.Published === 'No' } -->
                    {@html listing.Property_Ref_No}
                     <ListingListItem 
                        title={(listing.Property_Name +"\r\n "+ listing.Property_Title)} 
                        noOfBeds={listing.Bedrooms +' Beds'} 
                        noOfBaths={listing.No_of_Bathroom+' Bathroom'} 
                        images={listing.Images.image[0]}
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
            <!-- {:else}
                <div class="col-lg-12 col-md-12" class:showAfter={hideFrm}>
                    <ContentFormMesg/>
                </div> -->
            {/each}            
        </div>        
    </div>
    <!--Total Rows: {list.length}-->
</div>

<style>
    
    #MyDetails {max-height: 100vh; overflow-y:scroll; margin-bottom: 40px !important;  }
    #MyDetails .card{ border:0; border-radius:0;} 
    .showAfter{display: none;}    
</style>