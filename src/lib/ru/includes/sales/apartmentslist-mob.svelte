<script>
    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    import ListingListItem from '$lib/ru/includes/sales/listing.svelte';  
    import ContentFormMesg from '$lib/commons/ContentFormMesg.svelte'
    import Loader from '../../../loader/loader.svelte';
          
    export let list = [];
    let hideFrm = true;
    let isData = false;

    $: list, listData();

    const listData = () => {
        // console.log(list);
        if(list.length){
            isData = true;
        }
    }

    setTimeout(() => {
        hideFrm =false;
    }, 200);

    // $: condition = hideFrm;
    
</script>

<div class="col-lg-6 mt-5" id="MyDetails">
    <div class="row">
        {#if isData}
            <div class="card mb-2">
                <!-- {list.length} -->
                {#each list as listing (listing.objectID) }
                    <!-- {#if listing.Published === 'Yes' ||  listing.Published === 'No' } -->                    
                        <ListingListItem 
                            title={(listing.Property_Name +"\r\n "+ listing.Property_Title)} 
                            noOfBeds={listing.Bedrooms.split('-')[0] +' Beds'} 
                            noOfBaths={listing.No_of_Bathroom+' Bathroom'} 
                            images={listing.Images}
                            price={listing.Price}
                            Community = {listing.Community +" "+ listing.Sub_Community}
                            agentNumber ={listing.Listing_Agent_Phone}
                            building={listing.Unit_Type} 
                            objectID = {listing.objectID}
                            Emirate ={listing.Emirate}
                            PropertyStatus = {listing.Ad_Type}
                            propertyTitle = {listing.Property_Name}
                            published = {listing.Published}
                        />                    
                    <!-- {/if} -->
                {:else}
                    <div class="col-lg-12 col-md-12" >
                        {#if isData}
                            <ContentFormMesg/>
                        {:else}
                            <Loader/> 
                        {/if}
                    </div>
                {/each}            
            </div>  
        {:else}
            <div class="loader"><Loader /></div>
        {/if}          
    </div>
    <!--Total Rows: {list.length}-->
</div>

<style>
    
    #MyDetails { height:670px; overflow-y:scroll; margin-bottom: 40px !important;  }
    #MyDetails .card{ border:0; border-radius:0;}
    /* .showAfter{display: none;}     */

    .loader{
        text-align: center;
    }
</style>