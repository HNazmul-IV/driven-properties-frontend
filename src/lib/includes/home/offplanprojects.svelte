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
<!-- ======= Offplan Section ======= -->
<section id="home-offplan" class="home-offplan services section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
            <h2>OFF PLAN PROJECTS</h2>
            <p>Off-plan properties in Dubai are the most popular choice among investors. Driven Properties offers the best under-construction 
                projects in Dubai from top developers such as Meraas, Emaar, Dubai Properties, and many others, as well as amazing payment 
                plans. If you are looking for Dubai off plan properties for an investment or to buy for yourself, get in touch with our 
                property investment experts.
            </p>
        </div>


        {#if isMobile}
            <div class="embla" dir="ltr">
                <div class="embla__viewport">
                    <div class="offplan-home-container row SGAP g-10 embla" use:emblaCarouselSvelte>
                        <div class="embla__container">
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/sales/buy-offplan/offplan-apartments">
                                    <div class="icon-box">
                                        <div class="offplan-pro-container">
                                            <img alt="drvn" src="/assets/images/offplan11.jpg" class="img-fluid w-100 offplan-pro-img" />
                                            <div class="offplan-pro-title">
                                                <div>Canal Front Residences</div> 
                                                <strong>Al Wasl</strong>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/sales/buy-offplan/offplan-apartments">
                                    <div class="icon-box">
                                        <div class="offplan-pro-container">
                                            <img alt="drvn" src="/assets/images/offplan2.jpg" class="img-fluid w-100 offplan-pro-img" />
                                            <div class="offplan-pro-title">
                                                <div>Palace Residence North</div> 
                                                <strong>Dubai Creek Harbour</strong>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/sales/buy-offplan/offplan-apartments">
                                    <div class="icon-box">
                                        <div class="offplan-pro-container">
                                            <img alt="drvn" src="/assets/images/offplan3.jpg" class="img-fluid w-100 offplan-pro-img" />
                                            <div class="offplan-pro-title">
                                                <div>The Resicence Burj Khalifa</div> 
                                                <strong>Downtown Dubai</strong>
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
            <div class="offplan-home-container row SGAP g-10">
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/sales/buy-offplan/offplan-apartments">
                        <div class="icon-box">
                            <div class="offplan-pro-container">
                                <img alt="drvn" src="/assets/images/offplan11.jpg" class="img-fluid w-100 offplan-pro-img" />
                                <div class="offplan-pro-title">
                                    <div>Canal Front Residences</div> 
                                    <strong>Al Wasl</strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/sales/buy-offplan/offplan-apartments">
                        <div class="icon-box">
                            <div class="offplan-pro-container">
                                <img alt="drvn" src="/assets/images/offplan2.jpg" class="img-fluid w-100 offplan-pro-img" />
                                <div class="offplan-pro-title">
                                    <div>Palace Residence North</div> 
                                    <strong>Dubai Creek Harbour</strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/sales/buy-offplan/offplan-apartments">
                        <div class="icon-box">
                            <div class="offplan-pro-container">
                                <img alt="drvn" src="/assets/images/offplan3.jpg" class="img-fluid w-100 offplan-pro-img" />
                                <div class="offplan-pro-title">
                                    <div>The Resicence Burj Khalifa</div> 
                                    <strong>Downtown Dubai</strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        {/if}

    </div><!--container aos-init aos-animate-->
</section>
<!-- End About Us Section -->

<style>
.section-title {
    padding-bottom: 0px;
}
.offplan-pro-container {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 6px 2px #ccc;
}
.offplan-pro-title {
    padding: 1em;
    text-align: center;
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