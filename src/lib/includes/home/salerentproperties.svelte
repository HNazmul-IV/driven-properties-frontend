<script> 
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import { onMount } from 'svelte';
    
    let isMobile=false;
    onMount(()=>{
        if(window.innerWidth < 768){
            isMobile = true
        }
    })
</script>
<!-- ======= sale-rent Section ======= -->
<section id="sale-rent" class="sale-rent services section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
            <h2>FIND PROPERTIES FOR SALE AND RENT</h2>
            <p>Driven Properties is an award-winning real estate brokerage and property management company headquartered in Dubai. 
            Since its inception in 2012, the company has been raising standards for the industry, and has grown into one of the 
            leading full-service real estate consultancies in the region. </p>
            <p>In a city that is synonymous with real estate, our deeply knowledgeable consultants are offering their expertise and 
            unparalleled service to most demanding clients from all over the world. </p>
            <p>Apart from the well-earned reputation for highly personalized service and immaculate customer experience, Driven 
            Properties is making its name as one of the most reliable sources when it comes to information on the property and 
            market trends in Dubai. </p>
            <p>Whether you are looking for a property in Dubai that is available for sale or for rent, we have a team of real estate 
            experts who can assist in finding the right property in popular Dubai areas. Apart from helping you find property in 
            Dubai we also offer a variety of real estate services that include property management, mortgage advisory, relocation 
            services, property investment, property valuation, property brokerage and more. </p>
        </div>

        {#if isMobile}
            <div class="embla" dir="ltr">
                <div class="embla__viewport">
                    <div class="sale-rent-home-container row SGAP g-10 embla" use:emblaCarouselSvelte>
                        <div class="embla__container">
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/sales/buy-sale-rent/sale-rent-apartments">
                                    <div class="icon-box">
                                        <div class="sale-rent-pro-container">
                                            <img alt="drvn" src="/assets/images/sale-rent-home-apartments.webp" class="img-fluid w-100 sale-rent-pro-img" />
                                            <div class="sale-rent-pro-title">
                                                <h6>APARTMENTS</h6> 
                                                <div class="sale-rent-row">
                                                    <div class="sale">For Sale</div>
                                                    <div class="divider">|</div>
                                                    <div class="rent">For Rent</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/sales/buy-sale-rent/sale-rent-apartments">
                                    <div class="icon-box">
                                        <div class="sale-rent-pro-container">
                                            <img alt="drvn" src="/assets/images/sale-rent-home-villas.webp" class="img-fluid w-100 sale-rent-pro-img" />
                                            <div class="sale-rent-pro-title">
                                                <h6>VILLAS</h6> 
                                                <div class="sale-rent-row">
                                                    <div class="sale">For Sale</div>
                                                    <div class="divider">|</div>
                                                    <div class="rent">For Rent</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/sales/buy-sale-rent/sale-rent-apartments">
                                    <div class="icon-box">
                                        <div class="sale-rent-pro-container">
                                            <img alt="drvn" src="/assets/images/sale-rent-home-offices.webp" class="img-fluid w-100 sale-rent-pro-img" />
                                            <div class="sale-rent-pro-title">
                                                <h6>OFFICES</h6> 
                                                <div class="sale-rent-row">
                                                    <div class="sale">For Sale</div>
                                                    <div class="divider">|</div>
                                                    <div class="rent">For Rent</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {:else}
            <div class="sale-rent-home-container row SGAP g-10">
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/sales/buy-sale-rent/sale-rent-apartments">
                        <div class="icon-box">
                            <div class="sale-rent-pro-container">
                                <img alt="drvn" src="/assets/images/sale-rent-home-apartments.webp" class="img-fluid w-100 sale-rent-pro-img" />
                                <div class="sale-rent-pro-title">
                                    <h6>APARTMENTS</h6> 
                                    <div class="sale-rent-row">
                                        <div class="sale">For Sale</div>
                                        <div class="divider">|</div>
                                        <div class="rent">For Rent</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/sales/buy-sale-rent/sale-rent-apartments">
                        <div class="icon-box">
                            <div class="sale-rent-pro-container">
                                <img alt="drvn" src="/assets/images/sale-rent-home-villas.webp" class="img-fluid w-100 sale-rent-pro-img" />
                                <div class="sale-rent-pro-title">
                                    <h6>VILLAS</h6> 
                                    <div class="sale-rent-row">
                                        <div class="sale">For Sale</div>
                                        <div class="divider">|</div>
                                        <div class="rent">For Rent</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/sales/buy-sale-rent/sale-rent-apartments">
                        <div class="icon-box">
                            <div class="sale-rent-pro-container">
                                <img alt="drvn" src="/assets/images/sale-rent-home-offices.webp" class="img-fluid w-100 sale-rent-pro-img" />
                                <div class="sale-rent-pro-title">
                                    <h6>OFFICES</h6> 
                                    <div class="sale-rent-row">
                                        <div class="sale">For Sale</div>
                                        <div class="divider">|</div>
                                        <div class="rent">For Rent</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        {/if}
    </div>

</section>
<!-- End About Us Section -->
<style>
.section-title {
    padding-bottom: 0px;
}
.sale-rent-pro-container {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 6px 2px #ccc;
}
.sale-rent-pro-title {
    padding: 1em;
    text-align: center;
    padding: 1em 0em 0.5em 0em;
}
a{
    color: black;
}
.services .icon-box {
    padding: 0px;
    margin: 0px 0px 0px 7px;
}
.sale-rent-row {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #d5d5d5;
    padding: 0.3em;
}
.sale-rent-row div{
    font-size: 15px;
    color: #666;
}
.sale-rent-row .divider{
    color: #d5d5d5;
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