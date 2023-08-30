<script>

    import { onMount } from 'svelte';
    import algoliasearch from 'algoliasearch/lite';
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);    

    export let Ad_Type ="Rent";
    export let Unit_Type = "Apartment";
    export let MyCommunity ="Al Furjan";
    let projectName = MyCommunity.replaceAll('-',' ');

    export let MyFiterData =[];
    let PerPage = 4;
    let subQuery = [Unit_Type, Ad_Type, MyCommunity];
    let MyFilters;
    let Query;

    Query = [Unit_Type, Ad_Type, projectName];

    //console.log(Query);
  
    onMount( async()=>{  
        LoadMyDATAS(Query,PerPage)
    });

    const LoadMyDATAS = (Query,subQuery,PerPage)=>{

      /* Query Seraching with multiple fields but not working */
      index.search(Query ? Query :'', {

        //similarQuery: subQuery ? subQuery :'' ,
        //facetFilters:Query,
        //attributesToRetrieve:MySearchData,
        //restrictSearchableAttributes:MyRSearchAttributes,
        relevancyStrictness: 100,
        filters:MyFilters ? MyFilters: '',
        hitsPerPage: PerPage ? PerPage : 3,
        //page: PerPage ? PerPage : 0,
        //offset: 0,


      }).then(({ hits }) => {
        // console.log(hits);
        MyFiterData = (hits);
      });
    };


</script>

{#if MyFiterData.length !== 0 }
<section id="PRSales">
<div class="container">

    <div class="row">
        <div class="col-lg-12 mb-5">
            <h3 class="text-uppercase">APARTMENTS FOR {Ad_Type} IN {projectName} </h3>
        </div>
    </div>   

    <div class="row">
        
        {#each MyFiterData as MFData }
        <div class="col-md-4 col-lg-4 col-12 mb-5">
            <a href="/{(MFData.Emirate).toLowerCase()}/{(MFData.Unit_Type).toLowerCase()}-for-{(MFData.Ad_Type).toLowerCase()}/{(MFData.Community.toLowerCase()).replaceAll(' ','-')}/{(MFData.Property_Name.toLowerCase()).replaceAll(' ','-')}/{MFData.Property_Ref_No}" class="MyProList">
                <div class="card">
                    <img class="card-img-top" src="{MFData.Images['image'][0]}" alt="{MFData.Property_Title}">
                    <div class="card-body">

                        <h6 class="card-title">
                            <i class="bx bxs-map-pin MyPin"></i>
                            {@html MFData.Property_Title ?  MFData.Property_Title : "Project Name Area"}
                        </h6>

                        <div class="row mb-3 mt-3">


                            <div class="col-12 mb-1 mt-1">
                                <h5>
                                    AED {covertToIntCurrancy(MFData.Price)} / {CurrancySBC(MFData.Price)} 
                                </h5>
                            </div>
                            
                            <div class="col-md-4 col-lg-4 col-6">
                                <i class="bx bx-building-house"></i> 
                                <!--i class="bx bxs-map-pin MyPin"></i-->
                                {@html MFData.No_of_Rooms ?  MFData.No_of_Rooms : MFData.Bedrooms ?  MFData.Bedrooms : "1"} Bedroom
                            </div>                          

                            <div class="col-md-5 col-lg-5 col-6">
                                <i class="bx bx-building-house"></i> 
                                <!--i class="bx bxs-map-pin MyPin"></i-->
                                {@html MFData.No_of_Bathroom ?  MFData.No_of_Bathroom : "1"}  Bathrooms
                            </div>

                        </div>

                    </div>
                </div> 
            </a>               
        </div>
        {/each}
    </div>

    <div class="row">
        <div class="col-lg-12 mt-3 mb-3">
            <span class="d-flex flex-row-reverse">
                <a href="/rentals/properties-for-rent/rent-apartments" class="btn-learn-more-two">More Apartments For Rent</a>
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