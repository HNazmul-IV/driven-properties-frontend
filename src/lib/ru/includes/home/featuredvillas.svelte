<script> 
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import { onMount } from 'svelte';
    import algoliasearch from "algoliasearch";
    import {CurrancySBC} from '$lib/includes/others';
    import { createFallbackableCache } from '@algolia/cache-common';
    import { version } from '@algolia/client-common';
    import { createInMemoryCache } from '@algolia/cache-in-memory';
    import { createBrowserLocalStorageCache } from '@algolia/cache-browser-local-storage';

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_TEST_NAME = 'tbl_properties';

    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

    let isMobile=false;
    let result=[];


    onMount(()=>{

        index.search(['sale'], {
        hostsCache: createFallbackableCache({
            caches: [
            createBrowserLocalStorageCache({ key: `${version}-${appId}` }),
            createInMemoryCache(),
            ],
        }), // or createNullCache(), createInMemoryCache()
        }, {
            hitsPerPage: 3,
        }).then((hits) => {
            result=(hits.hits);
            console.log(result);
        });

        if(window.innerWidth < 768){
            isMobile = true
        }
    })
    </script>
    <!-- ======= Offplan Section ======= -->
    <section id="home-featured" class="home-featured services section-bg">
        <div class="container aos-init aos-animate" data-aos="fade-up">
    
            <div class="section-title">
                <h2>FEATURED PROPERTIES FOR SALE</h2>
            </div>
    
            <div class="featured-villas-container">
                {#each result as item}
                    {#if isMobile}
                        <div class="embla" dir="ltr">
                            <div class="embla__viewport">
                                <div class="featured-home-container row SGAP g-10 embla" use:emblaCarouselSvelte>
                                    <div class="embla__container">
                                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                            <a href="/sales/buy-featured/featured-apartments">
                                                <div class="icon-box">
                                                    <div class="featured-pro-container">
                                                        <div class="featured">Featured</div>
                                                        <img alt="drvn" src="{item.Images.image[0]}" class="img-fluid w-100 featured-pro-img" />
                                                        <div class="featured-pro-title">
                                                            <!-- <div>{@html item.Property_Title}</div>  -->
                                                            <div><strong></strong> {item.Community} </div>
                                                            <div><strong></strong> {item.Property_Name}</div>
                                                            <div><strong></strong> {CurrancySBC(item.Price*.27)} USD</div>
                                                            <div><strong></strong> {item.Unit_Type} - {item.Bedrooms.replace(/-/g, " ")} - {item.Unit_Builtup_Area} {item.unit_measure}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div><!-- embla__container-->
                                </div>
                            </div>
                        </div><!--embla ltr-->
                    {:else}
                        <div class="featured-home-container row SGAP g-10">
                            <div class="col-sm-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/{(item.Emirate).toLowerCase()}/{(item.Unit_Type).toLowerCase()}-for-{(item.Ad_Type).toLowerCase()}/{((item.Community).toLowerCase()).replaceAll(' ','-')}/{((item.Property_Title).toLowerCase()).replaceAll(' ','-')}/{(item.Property_Ref_No).toLowerCase()}" id="MyLksImg" >
                                    <div class="icon-box">
                                        <div class="featured-pro-container">
                                            <div class="featured">Featured</div>
                                            <img alt="drvn" src="{item.Images.image[0]}" class="img-fluid w-100 featured-pro-img" />
                                            <div class="featured-pro-title">
                                                <!-- <div>{@html item.Property_Title}</div>  -->
                                                <div><strong></strong> {item.Community} </div>
                                                <div><strong></strong> {item.Property_Name}</div>
                                                <div><strong></strong> {CurrancySBC(item.Price *0.27)} USD</div>
                                                <div><strong></strong> {item.Unit_Type} - {item.Bedrooms.replace(/-/g, " ")} - {item.Unit_Builtup_Area} {item.unit_measure}</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    {/if}
                {/each}
            </div>
    
        </div><!--container aos-init aos-animate-->
    </section>
    <!-- End About Us Section -->
    
    <style>
    .section-title {
        padding-bottom: 0px;
    }
    .featured-villas-container {
        display: flex;
    }
    .featured-pro-container {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0px 0px 6px 2px #ccc;
    }
    .featured-pro-container .featured {
        position: absolute;
        padding: 0.2em 0.4em;
        background: black;
        margin: 0.8em;
        border-radius: 4px;
        color: white;
        font-size: 14px;
    }
    .featured-pro-title {
        position: relative;
        padding: 1em;
        /* text-align: center; */
    }
    .featured-pro-title div{
        font-size: 14px;
    }
    strong{
        font-weight: 600;
        font-size: 14px;
    }
    a{
        color: black;
    }
    .services .icon-box {
        padding: 0px;
        margin: 0px 0px 0px 7px;
    }
    
    
    /* Embla css */
    
    .embla__container {
      display: flex;
      flex-direction: row;
      height: auto;
      margin-left: calc(var(--slide-spacing) * -1);
    }
    .embla__slide {
      flex: 0 0 var(--slide-size);
      min-width: 0;
      padding-left: var(--slide-spacing);
      position: relative;
    }
    
    </style>