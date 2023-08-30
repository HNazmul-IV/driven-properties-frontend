<script>
    import { onMount } from 'svelte';  
    import { page } from '$app/stores';    
    import { spring } from "svelte/motion";

    import { Swiper, SwiperSlide } from "swiper/svelte";
    // Import Swiper styles
    import "swiper/css";
    //import "./style.css";


    import './assets/css/style.min.css';
    import './assets/css/global.css';
    
    console.log($page.params.projectName);
    //console.log($page);

    
    let MySrc = "http://landing.drivenproperties.com/theme/assets/images/properties/1648730607-cta-1.webp";
    const width = spring(2000, {
        stiffness: 0.01,
        damping: 0.1
    });
    const zoomIn = setInterval(() => {
        width.set(1900);
    }, 3000);
    const zoomOut = setInterval(() => {
        width.set(1800);
    }, 6000);    


    var locations = [ 
        ["Dubai", 25.1974379, 55.2751205, ""],
        ["Dubai Mall", 25.197197, 55.2738292, "20 Mints"],
    ];
</script>

<!-- Hi {$page.params.projectName} -->

<!-- <div class="project-hero image type-a" id="project-hero"></div>  -->
<Swiper class="mySwiper">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
</Swiper>
<!-- <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
        	<div class="image-container" style="background-image: url('https://assets.codepen.io/65984/unsplash-wezvLAEWSRc.jpeg')";></div>
        </div>
        <div class="swiper-slide">
        	<div class="image-container" style="background-image: url('https://assets.codepen.io/65984/unsplash-a-x96OSFHCM.jpeg');"></div>
        </div>
        <div class="swiper-slide">
        	<div class="image-container" style="background-image: url('https://assets.codepen.io/65984/unsplash-4k-U1Wp2d00.jpeg');"></div>
        </div>
    </div>
</div> -->

<!-- Banner Header End  -->





<div class="block block-concept project-concept " id="projectconcept">
    <div class="container">
        <div data-aos="fade-right">
            <h2 class="opacity-2 display-2 bolder uppercase px-3 px-lg-0" >Concept</h2>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide concept-item__slide is-bg ">
                <div class="concept-item">
                    <div class="concept-item__media" data-aos="fade-left">
                        <figure class="blur-media mb-0">
                            <picture class="picture">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" media="(min-width: 992px)">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg">
                            <img src="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" alt="Take a Deep" loading="lazy" class="blur-media__bg"> 
                            </picture>
                            <picture class="picture">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" media="(min-width: 992px)">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg">
                            <img src="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" alt="Take a Deep" loading="lazy" class="blur-media__image"> 
                            </picture>
                        </figure>
                    </div>
                    <div class="concept-item__body" data-aos="fade-up">
                        <div class="concept-item__content t--bg" style="background-color: #bcb164">
                            <h3 class="title-sub t--color" style="color: #ffffff"> <small style="color: #ffffff">Take a Deep</small> Breath Now! </h3>
                            <p class="concept-item__text" style="color: #505050"> A sustainable and luxurious architecture inspired by nature, a self-contained phantasy that brings together all life elements. A social way of life whenever you want, alone whenever you want. </p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="swiper-slide concept-item__slide is-bg ">
                <div class="concept-item">
                    <div class="concept-item__media" data-aos="fade-left">
                        <figure class="blur-media mb-0">
                            <picture class="picture">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" media="(min-width: 992px)">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg">
                            <img src="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" alt="Away from the Chaos" loading="lazy" class="blur-media__bg"> 
                            </picture>
                            <picture class="picture">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" media="(min-width: 992px)">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg">
                            <img src="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" alt="Away from the Chaos" loading="lazy" class="blur-media__image"> 
                            </picture>
                        </figure>
                    </div>
                    <div class="concept-item__body" data-aos="fade-up">
                        <div class="concept-item__content t--bg" style="background-color: #bcb164">
                            <h3 class="title-sub t--color" style="color: #ffffff"> <small style="color: #ffffff">Away from the Chaos</small> of the City </h3>
                            <p class="concept-item__text" style="color: #505050"> A social way of life whenever you want, alone whenever you want. </p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="swiper-slide concept-item__slide is-bg ">
                <div class="concept-item">
                    <div class="concept-item__media" data-aos="fade-left">
                        <figure class="blur-media mb-0">
                            <picture class="picture">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" media="(min-width: 992px)">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg">
                            <img src="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" alt="A Social Life " loading="lazy" class="blur-media__bg"> 
                            </picture>
                            <picture class="picture">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" media="(min-width: 992px)">
                            <source srcset="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg">
                            <img src="https://folkart.com.tr/upload/concept/concept_2021-11-04_16-00-33.jpg" alt="A Social Life " loading="lazy" class="blur-media__image"> 
                            </picture>
                        </figure>
                    </div>
                    <div class="concept-item__body" data-aos="fade-up">
                        <div class="concept-item__content t--bg" style="background-color: #b1bc64">
                            <h3 class="title-sub t--color" style="color: #ffffff"> <small style="color: #ffffff">A Social Life </small> in Every Breath </h3>
                            <p class="concept-item__text" style="color: #505050"> Folkart Nefes Istanbul's comfortable world of detached houses awaits you. </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="concept-item__direction">
                <div class="btn-swiper swiper-button-prev" role="button" aria-label="Önceki">
                <svg class="icon">
                    <use xlink:href="#icon-arrow-left"></use>
                </svg>
                </div>
                <div class="btn-swiper swiper-button-next" role="button" aria-label="Sonraki">
                <svg class="icon">
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Concept End -->

<div class="block block-location" id="map-location">
    <div class="row no-gutters bg-light">
        <div class="col-lg-6 d-flex align-items-center">
            <div class="inner-column p-3 py-lg-4 pr-4 py-xl-5 pr-xl-5 ml-auto" data-aos="fade-up">
                <h2 class="opacity-2 display-2 bolder uppercase">sdf</h2>
                <h3 class="title-sub t--color"> sdfsdf </h3>
                <p>dsfdf</p>
                <ul class="list-unstyled">
                <li class="d-flex justify-content-between"> 
                    <span class="mr-2">Dubai Mall</span> 
                    <strong>20 Mints</strong> 
                </li>
                </ul>
            </div>
        </div>
        <div class="col-lg-6">
            <div id="map" class="project-map" data-aos="fade-up"></div>
        </div>
    </div>
    </div>
    <!--Map End-->

    <div class="block block-gallery js-filter-gallery" id="Img-Gallery">
    <div class="container mb-3">
        <div class="row justify-content-between">
            <div class="col-md-6">
                <div data-aos="fade-right" class="aos-init aos-animate">
                    <h2 class="opacity-2 display-2 bolder uppercase">
                        Gallery
                    </h2>
                </div>
            </div>
            <div class="col-md-6 text-md-right z-index-9 aos-init aos-animate" data-aos="fade-left">
                <div class="select-custom-wrapper d-inline-flex project-select">
                    <div class="select-custom">
                        <div class="custom-select select-custom__trigger select-custom__trigger-more t--color bold">
                            <span>All Images</span> <input data-filter-type="input" data-filter="toggle" type="hidden" name="project__filter" value=""> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon select-custom__arrow ml-3" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path>
                            </svg>
                        </div>
                        <div class="select-custom-options"> 
                            <span class="select-custom-option selected" data-value="*">All Images</span> 
                            <span class="select-custom-option" data-value="outdoor-images">Outdoor Images</span> 
                            <!--span class="select-custom-option" data-value="bathroom">Bathroom</span> 
                            <span class="select-custom-option" data-value="kitchen">Kitchen</span> 
                            <span class="select-custom-option" data-value="living-room">Living Room</span> 
                            <span class="select-custom-option" data-value="living-room-2">Living Room 2</span> 
                            <span class="select-custom-option" data-value="bedroom">Bedroom</span> 
                            <span class="select-custom-option" data-value="social-area">Social Area</span> 
                            <span class="select-custom-option" data-value="sample-villa">Sample Villa</span---> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-container js-gallery swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                            <div class="swiper-slide outdoor-images swiper-slide-active" data-filter="item" style="margin-right: 2px;">
                    <a href="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" class="fancybox" data-fancybox="gallery">
                        <img src="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" alt="Outdoor Images" loading="lazy" class=" w-100"> 
                        <span class="overlay">
                            <svg class="icon icon-lg">
                                <use xlink:href="#icon-search"></use>
                            </svg>
                        </span>
                    </a>
                </div>
                    </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    <div class="container d-flex align-items-center justify-content-between pt-3 pt-lg-4 swiper-custom__buttons">
        <div class="btn-swiper swiper-button-prev swiper-button-disabled" role="button" aria-label="Previous slide" tabindex="0" aria-disabled="true">
            <svg class="icon">
                <use xlink:href="#icon-arrow-left"></use>
            </svg>
        </div>
        <div class="swiper-pagination h5 mb-0 t-first-color d-md-none swiper-pagination-fraction"><span class="swiper-pagination-current">1</span> / <span class="swiper-pagination-total">1</span></div>
        <div class="btn-swiper swiper-button-next swiper-button-disabled" role="button" aria-label="Next slide" tabindex="0" aria-disabled="true">
            <svg class="icon">
                <use xlink:href="#icon-arrow-right"></use>
            </svg>
        </div>
    </div>
</div>     
<!-- Gallery End -->

<div class="block block-vh align-items-stretch block-project-feature" id="cta">
    <picture class="picture project-feature__media">
        <source srcset="https://landing.drivenproperties.com/theme/assets/images/banners/1648729031-cta-2.webp" media="(min-width: 992px)">
        <source srcset="https://landing.drivenproperties.com/theme/assets/images/banners/1648729031-cta-2.webp">
        <img src="https://landing.drivenproperties.com/theme/assets/images/banners/1648729031-cta-2.webp" alt="Docs Demo" loading="lazy" class="slider-image"> 
    </picture>
    <div class="container d-flex">
        <div class="project-feature ml-auto aos-init aos-animate" data-aos="fade-up">
            <div class="project-feature__item">
                <h3 class="title-sub t--color">
                    <span style="color:#ffffff">
                        <small>CTA Title</small>CTA sub Title</span>
                </h3>
                <p style="color:#ffffff">
                    CTA Description (max-lenght 54-60 Words)*
                </p>
            </div>
                    </div>
    </div>
</div>
<!-- CTA End-->

<div class="block block-opportunity" id="Sfc">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="opportunity">
                    <div class="opportunity-heading aos-init aos-animate" data-aos="fade-up">
                        <h2 class="opacity-2 display-2 bolder uppercase">Social Facilities </h2>
                    </div>
                    <div class="opportunity-body aos-init aos-animate" data-aos="fade-up">
                        Social Facilities (max-lenght 54-60 Words)*
                        <div class="swiper-direction sfdirection">
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
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="swiper-container slider-opportunity swiper-container-initialized swiper-container-horizontal aos-init aos-animate" data-aos="fade-up">
                    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-504px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0">
                            <div class="opportunity-media">
                                <figure class="blur-media">
                                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/social-facilities/1648731505-sf-1.webp" alt="Indoor swimming pool" loading="lazy" class="blur-media__bg"> 
                                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/social-facilities/1648731505-sf-1.webp" alt="Indoor swimming pool" loading="lazy" class="blur-media__image"> 
                                    <figcaption class="opportunity-media__text">Indoor swimming pool</figcaption>
                                </figure>
                            </div>
                        </div>
                                                <div class="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0">
                            <div class="opportunity-media">
                                <figure class="blur-media">
                                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/social-facilities/1648731505-sf-1.webp" alt="Indoor swimming pool" loading="lazy" class="blur-media__bg"> 
                                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/social-facilities/1648731505-sf-1.webp" alt="Indoor swimming pool" loading="lazy" class="blur-media__image"> 
                                    <figcaption class="opportunity-media__text">Indoor swimming pool</figcaption>
                                </figure>
                            </div>
                        </div>
                                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0">
                            <div class="opportunity-media">
                                <figure class="blur-media">
                                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/social-facilities/1648731505-sf-1.webp" alt="Indoor swimming pool" loading="lazy" class="blur-media__bg"> 
                                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/social-facilities/1648731505-sf-1.webp" alt="Indoor swimming pool" loading="lazy" class="blur-media__image"> 
                                    <figcaption class="opportunity-media__text">Indoor swimming pool</figcaption>
                                </figure>
                            </div>
                        </div></div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </div>
    </div>
</div>    
<!--Social End-->

<div class="block-plan-stance py-3 py-lg-4 t--bg" id="masterplan">
    <div class="container">
        <h2 class="opacity-2 display-2 bolder uppercase mb-lg-4 d-lg-none">Project Features</h2>
        <div class="plan-stance">
            <div class="plan-stance__media">
                <figure class="blur-media mb-0 aos-init" data-aos="fade-right">
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/1648730458-3.webp" alt="" loading="lazy" class="blur-media__bg"> 
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/1648730458-3.webp" alt="" loading="lazy" class="blur-media__image"> 
                    <div class="stance-numbers t--color">
                                                    <div class="stance-number active" style="top: 30%;left: 54%;"><span>01</span></div>
                                            </div>
                </figure>
            </div>
            <div class="plan-stance__body aos-init aos-animate" data-aos="fade-up">
                <h2 class="opacity-2 display-2 bolder uppercase mb-lg-4 d-none d-lg-block">Project Features</h2>
                <h3 class="title-sub plan-stance__title">Situation plan</h3>
                <div class="swiper-container mb-2 mb-lg-4 slider-stance swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                    <div class="swiper-wrapper" style="transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" style="width: 555px; transition-duration: 0ms; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                <div class="plan-stance__content opacity-7 mb-lg-4">
                                    <p>Docs Demo</p>
                                </div>
                                <div class="plan-stance__bottom">
                                    <div class="plan-stance__number mb-3 mb-lg-4"> 01 <span>Docs - Demo</span> </div>
                                </div>
                            </div>
                                                    <div class="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 555px; transition-duration: 0ms; opacity: 1; transform: translate3d(-555px, 0px, 0px);">
                                <div class="plan-stance__content opacity-7 mb-lg-4">
                                    <p>Docs Demo</p>
                                </div>
                                <div class="plan-stance__bottom">
                                    <div class="plan-stance__number mb-3 mb-lg-4"> 01 <span>Docs - Demo</span> </div>
                                </div>
                            </div>
                                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" style="width: 555px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1110px, 0px, 0px);">
                                <div class="plan-stance__content opacity-7 mb-lg-4">
                                    <p>Docs Demo</p>
                                </div>
                                <div class="plan-stance__bottom">
                                    <div class="plan-stance__number mb-3 mb-lg-4"> 01 <span>Docs - Demo</span> </div>
                                </div>
                            </div></div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                <div class="swiper-direction mb-3">
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
                </div>
            </div>
        </div>
    </div>
</div>    
<!--Project Features End-->

<div class="block block-room" id="flatplan">
    <div class="container">
        <h3 class="title-sub mb-0 t--color aos-init aos-animate" data-aos="fade-right">
            <small>Flat</small>Plans
        </h3>
        <div class="row">
            <div class="col-lg-6">
                <div class="swiper-container block-room__main swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                    <div class="swiper-wrapper" style="transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                            <div class="plan-room aos-init aos-animate" data-aos="fade-up">
                                <div class="plan-room__head mb-3">
                                    <div class="plan-room__number t--color">Docs <small> 1 Bedroom</small></div>
                                    <a href="javascript:;" onclick="APP.fancy.open('#dfpQuickContact');" class="link-border link-border__left t--color"> <span>Pdf Download</span> </a> 
                                </div>
                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                        </div>
                                                <div class="swiper-slide swiper-slide-active swiper-slide-duplicate-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 1; transform: translate3d(-540px, 0px, 0px);">
                            <div class="plan-room aos-init aos-animate" data-aos="fade-up">
                                <div class="plan-room__head mb-3">
                                    <div class="plan-room__number t--color">Docs <small> 1 Bedroom</small></div>
                                    <a href="javascript:;" onclick="APP.fancy.open('#dfpQuickContact');" class="link-border link-border__left t--color"> <span>Pdf Download</span> </a> 
                                </div>
                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                        </div>
                                                
                        <style type="text/css">.plan-room__list li:before{ display:none }</style>
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1080px, 0px, 0px);">
                            <div class="plan-room aos-init aos-animate" data-aos="fade-up">
                                <div class="plan-room__head mb-3">
                                    <div class="plan-room__number t--color">Docs <small> 1 Bedroom</small></div>
                                    <a href="javascript:;" onclick="APP.fancy.open('#dfpQuickContact');" class="link-border link-border__left t--color"> <span>Pdf Download</span> </a> 
                                </div>
                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                        </div></div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
            <div class="col-lg-6">
                <div class="swiper-container block-room__media swiper-container-fade swiper-container-initialized swiper-container-horizontal aos-init aos-animate" data-aos="fade-left">
                    <div class="swiper-wrapper" style="transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 1; transform: translate3d(0px, 0px, 0px);">
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
                                                <!--div class="swiper-slide">
                            <div class="plan-room__media">
                                <figure class="blur-media mb-0" data-aos="fade-left"> <a href="https://landing.drivenproperties.com/theme/assets/upload/plan/plan_2021-11-05_14-00-54.png" class="fancybox" data-caption="3+1 <small>Duplex</small>" caption="3+1 <small>Duplex</small>" data-fancybox="plan"><img src="https://landing.drivenproperties.com/theme/assets/upload/plan/plan_2021-11-05_14-00-54.png" alt="3+1 <small>Duplex</small>" loading="lazy" class="blur-media__image" /></a> </figure>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="plan-room__media">
                                <figure class="blur-media mb-0" data-aos="fade-left"> <a href="https://landing.drivenproperties.com/theme/assets/upload/plan/plan_2021-11-05_14-08-43.png" class="fancybox" data-caption="4+1 Single" caption="4+1 Single" data-fancybox="plan"><img src="https://landing.drivenproperties.com/theme/assets/upload/plan/plan_2021-11-05_14-08-43.png" alt="4+1 Single" loading="lazy" class="blur-media__image" /></a> </figure>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="plan-room__media">
                                <figure class="blur-media mb-0" data-aos="fade-left"> <a href="https://landing.drivenproperties.com/theme/assets/upload/plan/plan_2021-11-05_14-16-24.png" class="fancybox" data-caption="6+1 Duplex" caption="6+1 Duplex" data-fancybox="plan"><img src="https://landing.drivenproperties.com/theme/assets/upload/plan/plan_2021-11-05_14-16-24.png" alt="6+1 Duplex" loading="lazy" class="blur-media__image" /></a> </figure>
                            </div>
                        </div-->
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-next" data-swiper-slide-index="0" style="width: 540px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1080px, 0px, 0px);">
                            <div class="plan-room__media">
                                <figure class="blur-media mb-0 aos-init aos-animate" data-aos="fade-left"> 
                                    <a href="https://landing.drivenproperties.com/theme/assets/images/properties/floorplats/1652170300-2.webp" class="fancybox" data-caption="Docs <small> 1 Bedroom</small>" caption="Docs <small> 1 Bedroom</small>" data-fancybox="plan">
                                        <img src="https://landing.drivenproperties.com/theme/assets/images/properties/floorplats/1652170300-2.webp" alt="Docs <small> 1 Bedroom</small>" loading="lazy" class="blur-media__image">
                                    </a> 
                                </figure>
                            </div>
                        </div></div>
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
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </div>
    </div>
</div>    
<!-- Floor Plan End -->

<div class="py-3 py-lg-4 bottom-contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 bottom-contact__buttons aos-init aos-animate" data-aos="fade-up">
                <div class="bottom-contact__body">
                <h3 class="headline mb-md-4 t--color opacity-7">
                    How Can We Help?               </h3>
                <div class="row gutter-half my-3 mb-lg-0">
                    <div class="col-6 col-xl-5"> 
                        <a href="tel:+97144297040" class="btn btn-primary btn-lg btn-block rounded-lg">
                            Contact                      </a> 
                    </div>
                    
                                        <div class="col-6 col-xl-5"> 
                        <a href="https://web.whatsapp.com/send?phone=971553658402&amp;text=Hi Driven, I need more information regarding. https://landing.drivenproperties.com/docs-demo"> 
                            <svg viewBox="0 0 32 32" class="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg>                        
                        </a> 
                    </div>
                    
                </div>
                </div>
            </div>
            <div class="col-lg-6 bottom-contact__phone aos-init aos-animate" data-aos="fade-up">
                <p class="home-contact__text t--color">
                    To make an appointment online            </p>
                <a href="tel:800374836" class="home-contact__phone t--color">
                    800 37 48 36            </a> 
            </div>
        </div>
    </div>
    </div>
<!--Contact US End-->

<footer class="py-3 py-lg-4 footer">
    <div class="container">
        <div class="row align-items-center pt-3 pt-lg-4 footer-bottom">
            <div class="col-md-12 copyright order-md-1">
                <div class=" row gutter-sm align-items-center">
                    <div class="col-auto border-right"> 
                        <a href="https://modernmedya.com/" target="_blank" class="mmg-logo"> 
                            <img src="https://landing.drivenproperties.com/theme/assets/img/favicon.png" alt="Driven Property Group" loading="lazy"> 
                        </a> 
                    </div>
                    <div class="col">Copyright 2022 © Driven Property. All Rights Reserved. </div>
                </div>
            </div>
        </div>
    </div>
</footer>    
<!--Footer End-->

<style>

.swiper-container {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.swiper-container .image-container {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  transition: 10s ease-out;
  transform: scale(1.1);
}
.swiper-container .swiper-slide.swiper-slide-active .image-container {
  transform: scale(1);
}

</style>

