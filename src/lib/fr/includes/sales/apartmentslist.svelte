<script>
    import ListingListItem from '$lib/fr/includes/sales/listing.svelte';    
    export let list = [];

</script>

<div class="col-lg-6 mt-5" id="MyDetails">
    <div class="row">
        <div class="card mb-2">
            {#each list as listing , i}
                {#if listing.Published =='Yes'}
                    <ListingListItem 
                        title={(listing.Property_Name +"\r\n "+ listing.Property_Title)} 
                        noOfBeds={listing.Bedrooms +' Lit'} 
                        noOfBaths={listing.No_of_Bathroom+' Bain'} 
                        images={listing.Images}
                        price={listing.Price}
                        Community = {listing.Community +" "+ listing.Sub_Community}
                        agentNumber ={listing.Listing_Agent_Phone}
                        building={listing.Unit_Type} 
                        objectID = {listing.objectID}
                    />
                {/if}
                
            {:else}
                <p style="color:red; font-size:0.9rem; font-weight:700;"> 
                    Not found or something went wrong!
                </p>
            {/each}            
        </div>        
    </div>
    <!--Total Rows: {list.length}-->
</div>

<style>
    
    #MyDetails { height:670px; overflow-y:scroll; margin-bottom: 40px !important;  }
    #MyDetails .card{ border:0; border-radius:0;}
        
</style>