<script>

    //import { onMount } from 'svelte';  
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay, Lazy, Parallax, Pagination, Navigation,FreeMode,Thumbs } from "swiper";

    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/free-mode";
    import "swiper/css/navigation";
    import "swiper/css/thumbs";
    
        
    import './assets/css/custom.css';
    import './assets/css/myCss.css';

    export let sfc;
    export let sfcSlides;
    export let baseUrl;

    let slides;

    $: sfcSlides, getImgInArray();

    const getImgInArray = () => {
        slides = sfcSlides ? sfcSlides.split(','):'';
        console.log(slides, sfc);
    }

</script>


<section id="Sfc">

    <div class="block block-opportunity">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="opportunity">
                        <div class="opportunity-heading aos-init aos-animate" data-aos="fade-up">
                            <h2 class="opacity-2 display-2 bolder uppercase">Social Facilities </h2>
                        </div>
                        <div class="opportunity-body aos-init aos-animate" data-aos="fade-up">
                            {sfc ? sfc: ''}
                            <!-- <div class="swiper-direction sfdirection">
                                <div class="btn-swiper swiper-button-prev" role="button" aria-label="Previous slide" tabindex="0">
                                    <svg class="icon">
                                    <use xlink:href="#icon-arrow-left"></use>
                                    </svg>
                                </div>
                                <div class="btn-swiper swiper-button-next" role="button" aria-label="Next slide" tabindex="0">
                                    <svg class="icon">
                                    <use xlink:href="#icon-arrow-right"></use>
                                    </svg>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <!-- <div class="swiper-container slider-opportunity swiper-container-initialized swiper-container-horizontal aos-init aos-animate" data-aos="fade-up">
                        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-504px, 0px, 0px);"> -->
                            <Swiper class="projectConcept swiper-container"  navigation={true} modules={[Navigation]}>
                                
                                {#each slides as slide}
                                    <SwiperSlide class="concept-item__slide is-bg">
                                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0">
                                            <div class="opportunity-media">
                                                <figure class="blur-media">
                                                    <!-- <img src="https://landing.drivenproperties.com/theme/assets/images/properties/social-facilities/1648731505-sf-1.webp" alt="Indoor swimming pool" loading="lazy" class="blur-media__bg"> 
                                                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/social-facilities/1648731505-sf-1.webp" alt="Indoor swimming pool" loading="lazy" class="blur-media__image">  -->
                                                    <!-- svelte-ignore a11y-missing-attribute -->
                                                    <img src={`${baseUrl}${slide}`} loading="lazy" />
                                                    <figcaption class="opportunity-media__text">Indoor swimming pool</figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                {/each}
                                
                            </Swiper>
                        <!-- </div> -->
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    <!-- </div>  -->
                </div> <!--col-lg-6-->
            </div>
        </div>
    </div>    
    <!--Social Life Style End-->
    
</section>
<!-- Sfc End -->

<style>
    /* #sfc #projectConcept .swiper-button-next:after, #sfc .swiper-button-prev:after {
        font-size: 2rem !important;
        color: #002e43;
    }
    #sfc #projectConcept .swiper-button-next.swiper-button-disabled, #sfc .swiper-button-prev.swiper-button-disabled {
        opacity: 1;
        background-color: #fff0;
        border: none;
    }
    #sfc .swiper-button-next:after, #sfc .swiper-rtl .swiper-button-prev:after {
        content: 'next';
        font-size: 1em;
        color: black;
    }
    #sfc .swiper-button-next, #sfc .swiper-button-prev, #sfc .swiper-rtl .swiper-button-prev {
        right: 11px;
        font-size: 2em;
        background: #fff;
        padding: 0.7em;
        border-radius: 35px;
        box-shadow: 1px 1px 1px 1px #ccc;
    } */
</style>
