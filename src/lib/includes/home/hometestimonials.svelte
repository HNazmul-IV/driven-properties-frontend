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
            <h2>Testimonials</h2>
        </div>

        {#if isMobile}
        <div class="embla" dir="ltr">
            <div class="embla__viewport">
                <div class="offplan-home-container row SGAP g-10 embla" use:emblaCarouselSvelte>
                    <div class="embla__container">
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                            <div class="icon-box">
                                <div class="testimonial-pro-container">
                                    <div class="testimonial-content">Lina Allaoa, the Partner of Driven Properties, is always accessible. She delivers excellent options for you and your family. 
                                        She is very professional and highly - skilled agent and guide you with ever...</div> 
                                    <div class="testimonial-client-info">
                                        <div class="client-img"><img alt="drvn" src="/assets/images/t1.jpg" class="testimonial-pro-img" /></div>
                                        <div class="client-name">Lina Allaoa</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                            <div class="icon-box">
                                <div class="testimonial-pro-container">
                                    <div class="testimonial-content">Raj is one of a kind. I rented one apartment in the Motor City, I lost my job, and he helped me to move out early 
                                        without paying me any penalty to the landlord.  I will remember his help whole of...</div> 
                                    <div class="testimonial-client-info">
                                        <div class="client-img"><img alt="drvn" src="/assets/images/t2.jpg" class="testimonial-pro-img" /></div>
                                        <div class="client-name">Raj Deo Singh</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                            <div class="icon-box">
                                <div class="testimonial-pro-container">
                                    <div class="testimonial-content">Leila Shugri is a highly-skilled consultant, who co-ordinated the deal from Driven Properties. She worked extremely 
                                        hard, and went out of the way to ensure a smooth transaction, and ensured that the i...</div> 
                                    <div class="testimonial-client-info">
                                        <div class="client-img"><img alt="drvn" src="/assets/images/t3.jpg" class="testimonial-pro-img" /></div>
                                        <div class="client-name">Leila Shugri</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {:else}
            <div class="offplan-home-container row SGAP">
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <div class="icon-box">
                        <div class="testimonial-pro-container">
                            <div class="testimonial-content">Lina Allaoa, the Partner of Driven Properties, is always accessible. She delivers excellent options for you and your family. 
                                She is very professional and highly - skilled agent and guide you with ever...</div> 
                            <div class="testimonial-client-info">
                                <div class="client-img"><img alt="drvn" src="/assets/images/t1.jpg" class="testimonial-pro-img" /></div>
                                <div class="client-name">Lina Allaoa</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <div class="icon-box">
                        <div class="testimonial-pro-container">
                            <div class="testimonial-content">Raj is one of a kind. I rented one apartment in the Motor City, I lost my job, and he helped me to move out early 
                                without paying me any penalty to the landlord.  I will remember his help whole of...</div> 
                            <div class="testimonial-client-info">
                                <div class="client-img"><img alt="drvn" src="/assets/images/t2.jpg" class="testimonial-pro-img" /></div>
                                <div class="client-name">Raj Deo Singh</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <div class="icon-box">
                        <div class="testimonial-pro-container">
                            <div class="testimonial-content">Leila Shugri is a highly-skilled consultant, who co-ordinated the deal from Driven Properties. She worked extremely 
                                hard, and went out of the way to ensure a smooth transaction, and ensured that the i...</div> 
                            <div class="testimonial-client-info">
                                <div class="client-img"><img alt="drvn" src="/assets/images/t3.jpg" class="testimonial-pro-img" /></div>
                                <div class="client-name">Leila Shugri</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</section>

<!-- End About Us Section -->
<style>
.section-title h2{
    padding: .8em;
    margin-bottom: 0px;
}
.testimonial-pro-container {
    border-radius: 15px;
    overflow: hidden;
    /* box-shadow: 0px 0px 6px 2px #ccc; */
}
.testimonial-client-info {
    display: flex;
    padding: 1em;
}
.services .icon-box {
    padding: 0px;
    margin: 0px 0px 0px 7px;
    box-shadow: 0px 0 4px 0px rgb(0 0 0 / 10%);
}
.testimonial-content {
    font-size: 14px;
    padding: 1em;
    text-align: justify;
}
.client-img img{
    width: 80px;
    height: 80px;
    margin-right: 2em;
    border-radius: 50%;
}
.client-name {
    display: flex;
    align-items: center;
}
.icon-box{
    box-shadow: 0px 0px 3px 8px #f5f5f5 !important;
    border: 1px solid #ddd;
    border-radius: 10px;
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