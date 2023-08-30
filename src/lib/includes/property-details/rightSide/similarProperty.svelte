<script>
    import { onMount } from "svelte";
    import algoliasearch from "algoliasearch";
    
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

    export let agentPhone;
    export let agentName;
    export let QueryCommunity;
    // let query = [QueryCommunity, agentName, agentPhone];
    let query = [QueryCommunity];
    let SimilarProperties=[];
    console.log(query);

    const getRandomInt =(max)=>{
        return Math.floor(Math.random() * max);
    }

    onMount(async () =>{

        index.search( query ? query : '' , {
            //filters:MyFilters ? MyFilters:'',
            //similarQuery: Subquery ? Subquery :'',
            //hitsPerPage: 3,
            offset:3,
            length:3
        })
        .then(({hits}) => {
            SimilarProperties=(hits);
            console.log(SimilarProperties);
        });
        // Query Two

    });
</script>

{#if SimilarProperties.length > 0 }
<div class="g-0 container mt-5 mb-5">
    <div class="g-0 row">
        
        <div class="g-0 col-sm">
            <div id="SimilarProperties">
                <h5>Similar Properties</h5>

                <div class="g-0 row mb-3 mt-3">
                    {#each SimilarProperties as MySimilarPro }
                        <a href="/{(MySimilarPro.Emirate.toLowerCase())}/{(MySimilarPro.Unit_Type.toLowerCase())}-for-{(MySimilarPro.Ad_Type.toLowerCase())}/{(MySimilarPro.Community.toLowerCase()).replaceAll(' ','-')}/{(MySimilarPro.Property_Name.toLowerCase()).replaceAll(' ','-')}/{MySimilarPro.Property_Ref_No.toLowerCase()}" 
                           class="">
                            <div class="col-sm-12">
                                <img class="img-fluid" alt="a" src="https://cdn.crm.drivenproperties.com/image/original/listings/listing/2020/05/07/092156704/photos/3e8a2026-hdr.jpg" />
                                <h6 class="mt-3">{@html MySimilarPro.Property_Title ? MySimilarPro.Property_Title :'Spacious | High Floor | Ready to move in'}</h6>
                                <p>{@html (MySimilarPro.Unit_Type && MySimilarPro.Ad_Type) ? MySimilarPro.Unit_Type+" For "+MySimilarPro.Ad_Type :'Apartment For Sale'}</p>
                                <p>
                                    <i></i>
                                    {@html (MySimilarPro.Community && MySimilarPro.Sub_Community) ? MySimilarPro.Sub_Community+" "+MySimilarPro.Community :'BLVD Heights Tower 2, Downtown Dubai'}
                                </p>
                                <p><strong>AED {covertToIntCurrancy(MySimilarPro.Price)} / {CurrancySBC(MySimilarPro.Price)}</strong></p>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
            
        </div>


    </div>
</div>
{/if}