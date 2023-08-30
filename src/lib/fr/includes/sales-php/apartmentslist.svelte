<script>
    import ListingListItem from '$lib/fr/includes/sales-php/listing.svelte';    
    export let list = [];

</script>

<div class="col-lg-6 mt-5" id="MyDetails">    
    <div class="row">
        <div class="card mb-2">
            {#each list as listing , i}
                {#if listing.Published =='Yes'}
                    <ListingListItem 
                        title={(listing.Property_Name)}
                        Community = {listing.Community +" "+ listing.Sub_Community}
                        noOfBeds={(listing.bdmetatitle+ " Lit ")} 
                        noOfBaths={(listing.btmetatitle + " Bain ")} 
                        images={(listing.Prothbimgname)}
                        price={listing.Price}
                        agentNumber ={(listing.Property_Name)}
                        building={(listing.pttitle)} 
                        objectID = {listing.id}
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