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
<!-- ======= luxury Section ======= -->
<section id="home-luxury" class="home-luxury services">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
            <h2>Luxusimmobilien</h2>
            <p>Off-Plan-Immobilien in Dubai sind die beliebteste Wahl bei Investoren. Driven Properties bietet die besten im Bau befindlichen Projekte in Dubai von Top-Entwicklern wie Meraas, Emaar, Dubai Properties und vielen anderen sowie hervorragende Zahlungspläne. Wenn Sie auf der Suche nach Off-Plan-Immobilien in Dubai sind, die Sie als Investition oder zum Kauf für sich selbst nutzen möchten, wenden Sie sich an unsere Experten für Immobilieninvestitionen.
            </p>
        </div>

        {#if isMobile}
            <div class="embla" dir="ltr">
                <div class="embla__viewport">
                    <div class="luxury-home-container row SGAP g-10 embla" use:emblaCarouselSvelte>
                        <div class="embla__container">
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/de/dubai/off-plan-projects/canal-front-residences">
                                    <div class="icon-box">
                                        <div class="luxury-pro-container">
                                            <img alt="drvn" src="/assets/images/1Canal_Front_Residences_Page_08_Image_0001 Resized 1800x1200.jpg" class="img-fluid w-100 luxury-pro-img" />
                                            <div class="luxury-pro-title">
                                                <div>Canal Front Residences</div> 
                                                <strong>Al Wasl</strong>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/de/dubai/off-plan-projects/port-de-la-mer">
                                    <div class="icon-box">
                                        <div class="luxury-pro-container">
                                            <img alt="drvn" src="/assets/images/2wveafv-min.jpg" class="img-fluid w-100 luxury-pro-img" />
                                            <div class="luxury-pro-title">
                                                <div>Port De La Mer</div> 
                                                <strong>Jumeirah</strong>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                                <a href="/de/dubai/off-plan-projects/laurel-city-walk">
                                    <div class="icon-box">
                                        <div class="luxury-pro-container">
                                            <img alt="drvn" src="/assets/images/3MqrtL5idqgye9BRXV0HY9BnvJsx8HFUocy1LYgTs-min.jpg" class="img-fluid w-100 luxury-pro-img" />
                                            <div class="luxury-pro-title">
                                                <div>Laurel Central Park City Walk</div> 
                                                <strong>Citywalk</strong>
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
            <div class="luxury-home-container row SGAP g-10">
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/de/dubai/off-plan-projects/canal-front-residences">
                        <div class="icon-box">
                            <div class="luxury-pro-container">
                                <img alt="drvn" src="/assets/images/1Canal_Front_Residences_Page_08_Image_0001 Resized 1800x1200.jpg" class="img-fluid w-100 luxury-pro-img" />
                                <div class="luxury-pro-title">
                                    <div>Canal Front Residences</div> 
                                    <strong>Al Wasl</strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/de/dubai/off-plan-projects/port-de-la-mer">
                        <div class="icon-box">
                            <div class="luxury-pro-container">
                                <img alt="drvn" src="/assets/images/2wveafv-min.jpg" class="img-fluid w-100 luxury-pro-img" />
                                <div class="luxury-pro-title">
                                    <div>Port De La Mer</div> 
                                    <strong>Jumeirah</strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1">
                    <a href="/de/dubai/off-plan-projects/laurel-city-walk">
                        <div class="icon-box">
                            <div class="luxury-pro-container">
                                <img alt="drvn" src="/assets/images/3MqrtL5idqgye9BRXV0HY9BnvJsx8HFUocy1LYgTs-min.jpg" class="img-fluid w-100 luxury-pro-img" />
                                <div class="luxury-pro-title">
                                    <div>Laurel Central Park City Walk</div> 
                                    <strong>Citywalk</strong>
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
.luxury-pro-container {
    position: relative;
    box-shadow: 0px 0px 6px 2px #ccc;
}
.luxury-pro-title {
    padding: 1em;
    text-align: center;
    position: absolute;
    bottom: 0;
    color: white;
    background-color: #0000005e;
    left: 0;
    right: 0;
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
.luxury-pro-img{
    height: 500px;
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