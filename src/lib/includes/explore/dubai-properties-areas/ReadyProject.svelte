<script>

    import { onMount } from 'svelte';
    import algoliasearch from 'algoliasearch/lite';
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
    import { baseURL } from '../../../../base-url';

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);    

    export let MyCommunity ="Al Furjan";
    let projectName = MyCommunity.replaceAll('-',' ');

    export let MyFiterData =[];
    export let searchKey;
    
    
  
    onMount( async()=>{  

        //console.log(searchKey, projectName);     
        const response = await fetch(`${baseURL}/getAllProperties`);
        //const response = await fetch(`${baseURL}/getAllBySlugProperties/${searchKey}`);
        const hits = await response.json();
        MyFiterData = hits;
        //console.log(MyFiterData);
    });

</script>

{#if MyFiterData.length !== 0 }
    <section id="PRSales">
        <div class="container">

            <div class="row">
                <div class="col-lg-12 mb-5">
                    <h3 class="text-uppercase">READY PROJECTS IN {projectName} </h3>
                </div>
            </div>   

            <div class="row">
                {#each MyFiterData as MFData, i}
                    <!-- {#if ( i < 3 ) && (MFData.Community === projectName) && (MFData.ProjectStaus === "Ready Projects")} -->
                    {#if i < 3 }
                    <div class="col-md-4 col-lg-4 col-12 mb-5">
                        <a href="/" class="MyProList">
                            <div class="card">
                                <img class="card-img-top" src="/l9images/community/{MFData ? MFData.Prothbimgname :"1669192327-TheReserveVilla.jpg"}" alt="{MFData ?MFData.Prothbimgname: "1"}">
                                <div class="card-body">

                                    <h6 class="card-title">                                
                                        {@html MFData ? MFData.Property_Title : "Project Name Area"}
                                    </h6>

                                </div>
                            </div> 
                        </a>               
                    </div>
                    {/if}
                {/each}
            </div>

            <div class="row">
                <div class="col-lg-12 mt-3 mb-3">
                    <span class="d-flex flex-row-reverse">
                        <a href="/explore/ready-projects" class="btn-learn-more-two">More Offplan Ready Projects</a>
                    </span>
                </div>
            </div>

        </div>
    </section>

    <style>

    #PRSales{
        padding-top: 10px;
    }
    .card-title{font-size:1rem;}
    </style>
{/if}