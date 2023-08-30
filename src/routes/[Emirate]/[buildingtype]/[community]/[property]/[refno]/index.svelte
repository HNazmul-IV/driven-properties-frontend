<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    
    import algoliasearch from "algoliasearch";

    import {capitalizeFirstLetter} from '$lib/helpers';
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import SEOTools from '$lib/commons/SEOText.svelte';

    import DSliders from '$lib/includes/property-details/leftSlide/sliders.svelte';
    import PropertySpcs from '$lib/includes/property-details/leftSlide/propertyspcs.svelte';
    import PropertTxtContent from '$lib/includes/property-details/leftSlide/propertContent.svelte';
    import PropertVisit from '$lib/includes/property-details/leftSlide/propertVisit.svelte';
    import Agents from '$lib/includes/property-details/rightSide/agents.svelte';
    import SimilarProperty from '$lib/includes/property-details/rightSide/similarProperty.svelte';
    

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties'
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

    let pageSlug = $page.url.pathname.split('/');
    //let MyFilters =pageSlug[5]; 
    let data=[];


    onMount(async () =>{
       
        index.search(pageSlug[5] , {
            //filters:MyFilters ? MyFilters:'',
            hitsPerPage: 1,
        })
        .then(({hits}) => {
            data=(hits);
            //console.log(data);
        });
        // Query one
    });
    //console.log(pageSlug);

</script>

<!-- <SEOTools MetaTitle ={`${(capitalizeFirstLetter(pageSlug[2]))} ${capitalizeFirstLetter(pageSlug[4])}`} MetaDescription ={`${capitalizeFirstLetter(pageSlug[2])} ${capitalizeFirstLetter(pageSlug[3])} ${capitalizeFirstLetter(pageSlug[4])} ${pageSlug[5]}`}/> -->

<BreadCrumb LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} LinkFour={pageSlug[4]} LinkFive={pageSlug[5]} Bdtype={6} />
<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    
    <div class="container aos-init aos-animate" data-aos="fade-up">

        {#each data as SingleData (SingleData.objectID) }
        <SEOTools
            MetaTitle = {SingleData.Property_Title && SingleData.Property_Ref_No ? `${SingleData.Property_Title} DIP - ${SingleData.Property_Ref_No}` : '' } 
            MetaDescription ={`Driven Properties are pleased to offer for ${SingleData.Ad_Type} this brand new property in ${SingleData.Sub_Community} - ${SingleData.Community}. Details: ${SingleData.Property_Title}  - Ref No: ${SingleData.Property_Ref_No}`}/>
            <div class="section-title">

                <h2>
                    {@html SingleData.Property_Title ? SingleData.Property_Title : 'Property Title' }                    
                </h2>
            </div>

            <div class="row mb-5">

                <div class="col-sm-9">
                    {@html (SingleData.Sub_Community && SingleData.Community) ? SingleData.Sub_Community +" - "+ SingleData.Community : 'Property Name' }
                </div>

                <div class="col-sm-3">
                    Reference:
                    <strong>{@html SingleData.Property_Ref_No ? SingleData.Property_Ref_No : 'Dp-S-40015' }</strong>
                </div>

            </div>
            <!--Section One End-->

            <div class="row">

                <div class="col-sm-9">

                    <DSliders images={SingleData.Images} title={SingleData.Property_Title}  />

                    <PropertySpcs Price={SingleData.Price} Beds={SingleData.Bedrooms} 
                    bathroom={SingleData.No_of_Bathroom} AreaSize={SingleData.Unit_Builtup_Area+ " "+ SingleData.unit_measure}/>
                    
                    <PropertTxtContent lists={(SingleData.Facilities) ? SingleData.Facilities['facility']: '' }  WebContent={SingleData.Web_Remarks} />

                    <PropertVisit/>
                    
                </div>

                <div class="col-sm-3">
                    
                    <Agents 
                        agentimage={SingleData.Listing_Agent_Photo} agentName={SingleData.Listing_Agent}
                        agentEmail={SingleData.Listing_Agent_Email} agentPhone={(SingleData.Listing_Agent_Phone.replaceAll('++',''))}
                        title={SingleData.Property_Title} RefNo={SingleData.Property_Ref_No}
                    />

                    <SimilarProperty agentName={SingleData.Listing_Agent} agentPhone={SingleData.Listing_Agent_Phone} 
                        QueryCommunity={SingleData.Community}
                    />

                </div>
                
            </div>
            <!--Section Two End-->
        {/each}

    </div>
</section>
<!-- End About Us Section -->

<style>
/*
.title{
    color: #1a1a1a;
    text-align: left;
    margin-bottom: 10px
}
*/
#about{ padding:20px 0 100px 0;}
.content{
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: auto;
    overflow: hidden
}
.content .content-overlay{
    background: rgba(0,0,0,0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s
}
.content:hover .content-overlay{
    opacity: 1
}
.content-image{
    width: 100%
}
img{
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 1px
}
.content-details{
    position: absolute;
    text-align: left;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s
}
.content:hover .content-details{
    top: 50%;
    left: 50%;
    opacity: 1;
}
.content-details h3{
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.12rem !important;
    margin-bottom: 0.5rem !important;
    text-transform: uppercase;

}
.content-details p{
    color: #fff;
    font-size: 1.1em;
    margin-bottom: 2.5rem;
}

.content-details a{
    border-radius: 2px;
    border: 1px solid #fff;
    padding: 8px 40px;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #fff;    
}

.fadeIn-bottom{
    top: 80%;
}

@media only screen and (max-width: 768px) {

    section{ padding:0;}
    .content{max-width: 95%;}
    .content-details h3{
        font-weight: 500;
        letter-spacing: 0.01rem !important;
        margin-bottom: 0.8rem !important;
        text-transform: uppercase;
    }

    .content-details p{
        font-size: 0.9rem;
        margin-bottom: 2.5rem;
    }
  
}


</style>