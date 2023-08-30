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
<!-- ======= blog Section ======= -->
<section id="home-blog" class="home-blog services section-bg">
    
    <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-title">
            <h2>LATEST BLOG</h2>
        </div>

        {#if isMobile}

        <div class="embla" dir="ltr">
            <div class="embla__viewport">
                <div class="blog-home-container row SGAP g-2 embla" use:emblaCarouselSvelte>
                    <div class="embla__container">
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                            <a href="/sales/buy-blog/blog-apartments">
                                <div class="icon-box">
                                    <div class="blog-pro-container">
                                        <img alt="drvn" src="/assets/images/homeblog1.jpg" class="img-fluid w-100 blog-pro-img" />
                                        <div class="blog-pro-content">
                                            <h6>RAMADAN UAE DUBAI COMPLETE GUID...</h6>
                                            <p>Ramadan is just around the corner–two weeks, in fact. According to one astronomer, 
                                                Ramadan 2023 will beg... <strong>Read more</strong> </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                            <a href="/sales/buy-blog/blog-apartments">
                                <div class="icon-box">
                                    <div class="blog-pro-container">
                                        <img alt="drvn" src="/assets/images/homeblog2.jpg" class="img-fluid w-100 blog-pro-img" />
                                        <div class="blog-pro-content">
                                            <h6>VETERINARY CLINICS IN DUBAI</h6>
                                            <p>Welcome to the blog about veterinarians in Dubai! Dubai is one of the most rapidly growing cities in the world... <strong>Read more</strong> </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                            <a href="/sales/buy-blog/blog-apartments">
                                <div class="icon-box">
                                    <div class="blog-pro-container">
                                        <img alt="drvn" src="/assets/images/homeblog3.jpg" class="img-fluid w-100 blog-pro-img" />
                                        <div class="blog-pro-content">
                                            <h6>14 BEST INDIAN SCHOOLS IN DUBAI</h6>
                                            <p>Looking for a school in Dubai with an Indian curriculum? Then you've come to the right place! In this blog... <strong>Read more</strong> </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                            <a href="/sales/buy-blog/blog-apartments">
                                <div class="icon-box">
                                    <div class="blog-pro-container">
                                        <img alt="drvn" src="/assets/images/homeblog4.jpg" class="img-fluid w-100 blog-pro-img" />
                                        <div class="blog-pro-content">
                                            <h6>COWORKING SPACES DUBAI</h6>
                                            <p>If you want to work in Dubai differently from your home or a traditional office, you have options. You could w... <strong>Read more</strong> </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                            <a href="/sales/buy-blog/blog-apartments">
                                <div class="icon-box">
                                    <div class="blog-pro-container">
                                        <img alt="drvn" src="/assets/images/homeblog5.jpg" class="img-fluid w-100 blog-pro-img" />
                                        <div class="blog-pro-content">
                                            <h6>LUXURY SPA EXPERIENCES IN DUBAI</h6>
                                            <p>Visiting a luxury spa in Dubai can benefit your mind and body. Relaxation and stress relief, physical and ment... <strong>Read more</strong> </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="embla__slide col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                            <a href="/sales/buy-blog/blog-apartments">
                                <div class="icon-box">
                                    <div class="blog-pro-container">
                                        <img alt="drvn" src="/assets/images/homeblog6.jpg" class="img-fluid w-100 blog-pro-img" />
                                        <div class="blog-pro-content">
                                            <h6>DAYCATIONS IN DUBAI</h6>
                                            <p>There are plenty of ways to relax and escape the hustle and bustle of city life in Dubai. One of the best ways... <strong>Read more</strong> </p>
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
            <div class="blog-home-container row SGAP g-5 justify-content-between">
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                    <a href="/sales/buy-blog/blog-apartments">
                        <div class="icon-box">
                            <div class="blog-pro-container">
                                <img alt="drvn" src="/assets/images/homeblog1.jpg" class="img-fluid w-100 blog-pro-img" />
                                <div class="blog-pro-content">
                                    <h6>RAMADAN UAE DUBAI COMPLETE GUID...</h6>
                                    <p>Ramadan is just around the corner–two weeks, in fact. According to one astronomer, 
                                        Ramadan 2023 will beg... <strong>Read more</strong> </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                    <a href="/sales/buy-blog/blog-apartments">
                        <div class="icon-box">
                            <div class="blog-pro-container">
                                <img alt="drvn" src="/assets/images/homeblog2.jpg" class="img-fluid w-100 blog-pro-img" />
                                <div class="blog-pro-content">
                                    <h6>VETERINARY CLINICS IN DUBAI</h6>
                                    <p>Welcome to the blog about veterinarians in Dubai! Dubai is one of the most rapidly growing cities in the world... <strong>Read more</strong> </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                    <a href="/sales/buy-blog/blog-apartments">
                        <div class="icon-box">
                            <div class="blog-pro-container">
                                <img alt="drvn" src="/assets/images/homeblog3.jpg" class="img-fluid w-100 blog-pro-img" />
                                <div class="blog-pro-content">
                                    <h6>14 BEST INDIAN SCHOOLS IN DUBAI</h6>
                                    <p>Looking for a school in Dubai with an Indian curriculum? Then you've come to the right place! In this blog... <strong>Read more</strong> </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                    <a href="/sales/buy-blog/blog-apartments">
                        <div class="icon-box">
                            <div class="blog-pro-container">
                                <img alt="drvn" src="/assets/images/homeblog4.jpg" class="img-fluid w-100 blog-pro-img" />
                                <div class="blog-pro-content">
                                    <h6>COWORKING SPACES DUBAI</h6>
                                    <p>If you want to work in Dubai differently from your home or a traditional office, you have options. You could w... <strong>Read more</strong> </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                    <a href="/sales/buy-blog/blog-apartments">
                        <div class="icon-box">
                            <div class="blog-pro-container">
                                <img alt="drvn" src="/assets/images/homeblog5.jpg" class="img-fluid w-100 blog-pro-img" />
                                <div class="blog-pro-content">
                                    <h6>LUXURY SPA EXPERIENCES IN DUBAI</h6>
                                    <p>Visiting a luxury spa in Dubai can benefit your mind and body. Relaxation and stress relief, physical and ment... <strong>Read more</strong> </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-12 d-flex flex-column justify-content-start align-items-stretch  order-2 order-lg-1 pb-5">
                    <a href="/sales/buy-blog/blog-apartments">
                        <div class="icon-box">
                            <div class="blog-pro-container">
                                <img alt="drvn" src="/assets/images/homeblog6.jpg" class="img-fluid w-100 blog-pro-img" />
                                <div class="blog-pro-content">
                                    <h6>DAYCATIONS IN DUBAI</h6>
                                    <p>There are plenty of ways to relax and escape the hustle and bustle of city life in Dubai. One of the best ways... <strong>Read more</strong> </p>
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
#home-blog{
    padding-top: 4em;
}
.section-title h2{
    padding-bottom: 0px;
    margin-bottom: 0px;
}
.blog-pro-container {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 6px 2px #ccc;
    margin-right: 1em;
}
.blog-home-container>div{
    width: 30% !important;
}
.blog-pro-content {
    padding: 1em;
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
.row{
    --bs-gutter-x: 0rem;
}
@media(max-width: 768px){
    .blog-home-container>div{
        width: 100% !important;
    }   
}

.blog-home-container.row.SGAP {
    margin-right: 1em;
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
  /* padding-left: var(--slide-spacing); */
  position: relative;
}
</style>