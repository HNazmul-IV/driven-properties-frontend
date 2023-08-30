<script>
    import { onMount, onDestroy, afterUpdate, beforeUpdate,tick } from 'svelte';
    import ListingListItem from '$lib/includes/sales/listing.svelte';  
    import ContentFormMesg from '$lib/commons/ContentFormMesg.svelte'

    export let list = [];
    let hideFrm = true;

    setTimeout(() => {
        hideFrm =false;
    }, 10000);

    // $: condition = hideFrm;

    export let scroll;
    export let speed = -4;
    
</script>

<svelte:window bind:scrollY={scroll} />

<div class="col-lg-6 mt-md-5 MyProListbox" id="MyDetails" style:transform={`translate3d(0, ${scroll * speed}px, 0)`}>
    <div class="row">
        <div class="card mb-2">
            <div class="line-keeper">
                <div class="line"></div>
            </div>
            <!-- {list.length} -->
            {#each list as listing (listing.objectID) }
                <!-- {#if listing.Published === 'Yes' ||  listing.Published === 'No' } -->
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
            {:else}
                <div class="col-lg-12  col-md-12" class:showAfter={hideFrm}>
                    <ContentFormMesg/>
                </div>
            {/each}            
        </div>        
    </div>
    <!--Total Rows: {list.length}-->
</div>



<style>
    
    #MyDetails { height:670px; overflow-y:scroll; margin-bottom: 40px !important;  }
    #MyDetails .card{ border:0; border-radius:0;}
    .showAfter{display: none;} 

    @media only screen and (max-width: 768px) {

        #MyDetails{position: absolute; top: 2600px; min-height:2600px; border-radius: 10px;    border-radius: 10px;
    box-shadow: 1px 1px 4px 1px #666;}
        .MyProListbox {
            --size: 100%;
            height: var(--size);
            width: var(--size);
            background: lightGrey;
            margin-bottom: 0rem;
        }

        .line {
            width: 50px;
            height: 2px;
            background: #ccc;
            box-shadow: 0px -3px 0px 0px #777;
            display: block;
            margin: auto;
            margin-top: 20px;
        }

        .line-keeper {
            margin-bottom: 10px;
        }

    } 


</style>