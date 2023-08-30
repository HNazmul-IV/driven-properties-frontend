<script>

    //import { onMount } from 'svelte';  
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay, Lazy, Parallax, Pagination, Navigation,FreeMode,Thumbs } from "swiper";

    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/free-mode";
    import "swiper/css/navigation";
    import "swiper/css/thumbs";
    
    import './assets/css/global.css';
    import './assets/css/custom.css';
    import './assets/css/myCss.css';

    export let floor_Plan;
    export let baseUrl;

</script>


<section id="FlatPlan">
    <div class="block block-room">
        <div class="container">            
            <h3 class="title-sub mb-0 t--color aos-init aos-animate" data-aos="fade-right"> <small>Flat</small>Plans </h3>            
            <div class="row">
                
                <div class="col-lg-6">
                    <div class="swiper-container block-room__main swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                        <div class="swiper-wrapper" style="transition-duration: 0ms;">
                            
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                <div class="plan-room aos-init aos-animate" data-aos="fade-up">
                                    <div class="plan-room__head mb-3">
                                        <div class="plan-room__number t--color">Docs <small> 1 Bedroom</small></div>
                                        <!-- <a href="javascript:;" onclick="APP.fancy.open('#dfpQuickContact');" class="link-border link-border__left t--color"> <span>Pdf Download</span> </a>  -->
                                        <a href={baseUrl+floor_Plan} class="link-border link-border__left t--color"> <span>Pdf Download</span> </a> 
                                    </div>

                                </div>
                            </div>
                            
                            <div class="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 1; transform: translate3d(-540px, 0px, 0px);">
                                <div class="plan-room aos-init aos-animate" data-aos="fade-up">
                                    <div class="plan-room__head mb-3">
                                        <div class="plan-room__number t--color">Docs <small> 1 Bedroom</small></div>
                                        <!-- <a href="javascript:;" onclick="APP.fancy.open('#dfpQuickContact');" class="link-border link-border__left t--color"> <span>Pdf Download</span> </a>  -->
                                        <a href={baseUrl+floor_Plan} class="link-border link-border__left t--color"> <span>Pdf Download</span> </a> 
                                    </div>
                                </div>
                            </div>

                            <style type="text/css">.plan-room__list li:before{ display:none }</style>
                            
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1080px, 0px, 0px);">
                                <div class="plan-room aos-init aos-animate" data-aos="fade-up">
                                    <div class="plan-room__head mb-3">
                                        <div class="plan-room__number t--color">Docs <small> 1 Bedroom</small></div>
                                        <!-- <a href="javascript:;" onclick="APP.fancy.open('#dfpQuickContact');" class="link-border link-border__left t--color"> <span>Pdf Download</span> </a>  -->
                                        <a href={baseUrl+floor_Plan} class="link-border link-border__left t--color"> <span>Pdf Download</span> </a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="swiper-container block-room__media swiper-container-fade swiper-container-initialized swiper-container-horizontal aos-init aos-animate" data-aos="fade-left">
                        <div class="swiper-wrapper" style="transition-duration: 0ms;">
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                <div class="plan-room__media">
                                    <figure class="blur-media mb-0 aos-init aos-animate" data-aos="fade-left"> 
                                        <a href="https://landing.drivenproperties.com/theme/assets/images/properties/floorplats/1652170300-2.webp" class="fancybox" data-caption="Docs <small> 1 Bedroom</small>" caption="Docs <small> 1 Bedroom</small>" data-fancybox="plan">
                                            <img src="https://landing.drivenproperties.com/theme/assets/images/properties/floorplats/1652170300-2.webp" alt="Docs <small> 1 Bedroom</small>" loading="lazy" class="blur-media__image">
                                        </a> 
                                    </figure>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 1; transform: translate3d(-540px, 0px, 0px);">
                                <div class="plan-room__media">
                                    <figure class="blur-media mb-0 aos-init aos-animate" data-aos="fade-left"> 
                                        <a href="https://landing.drivenproperties.com/theme/assets/images/properties/floorplats/1652170300-2.webp" class="fancybox" data-caption="Docs <small> 1 Bedroom</small>" caption="Docs <small> 1 Bedroom</small>" data-fancybox="plan">
                                            <img src="https://landing.drivenproperties.com/theme/assets/images/properties/floorplats/1652170300-2.webp" alt="Docs <small> 1 Bedroom</small>" loading="lazy" class="blur-media__image">
                                        </a> 
                                    </figure>
                                </div>
                            </div>
                            
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1080px, 0px, 0px);">
                                <div class="plan-room__media">
                                    <figure class="blur-media mb-0 aos-init aos-animate" data-aos="fade-left"> 
                                        <a href="https://landing.drivenproperties.com/theme/assets/images/properties/floorplats/1652170300-2.webp" class="fancybox" data-caption="Docs <small> 1 Bedroom</small>" caption="Docs <small> 1 Bedroom</small>" data-fancybox="plan">
                                            <img src="https://landing.drivenproperties.com/theme/assets/images/properties/floorplats/1652170300-2.webp" alt="Docs <small> 1 Bedroom</small>" loading="lazy" class="blur-media__image">
                                        </a> 
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div class="btn-swiper swiper-button-prev t--btn-outline" role="button" aria-label="Previous slide" tabindex="0">
                            <svg class="icon">
                            <use xlink:href="#icon-arrow-left"></use>
                            </svg>
                        </div>
                        <div class="btn-swiper swiper-button-next t--btn-outline" role="button" aria-label="Next slide" tabindex="0">
                            <svg class="icon">
                            <use xlink:href="#icon-arrow-right"></use>
                            </svg>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>    
    <!-- Floor Plan End -->
</section>
<!-- FlatPlan End -->
