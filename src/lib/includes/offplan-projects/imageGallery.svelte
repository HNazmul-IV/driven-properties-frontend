<script>

    //import { onMount } from 'svelte';  
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay, Lazy, Parallax, Pagination, Navigation,FreeMode,Thumbs } from "swiper";
    import { Fancybox } from "@fancyapps/ui";

    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/free-mode";
    import "swiper/css/navigation";
    import "swiper/css/thumbs";
    
    import "@fancyapps/ui/dist/fancybox.css";

    import './assets/css/custom.css';
    import './assets/css/myCss.css';

    // const Open = false;
    // const OptionFilter = (Open)=>{
    //     Open = true;
    // };
    export let baseUrl;
    export let gallery;

    let slides;

    $: gallery, getImgInArray();

    const getImgInArray = () => {
        slides = gallery ? gallery.split(','):'';
        console.log(slides);
    }
    
    Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
        return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
        );
    },
    });    
</script>

<section id="imgGallery">

    <div class="block block-gallery js-filter-gallery">
        <div class="container mb-3">
            <div class="row justify-content-between">
                <div class="col-md-12">
                    <div data-aos="fade-right" class="aos-init aos-animate">
                        <h2 class="opacity-2 display-2 bolder uppercase DLPFonts Mgaps">
                            Gallery
                        </h2>
                    </div>
                </div>                
            </div>
        </div>
                
        <Swiper class="swiper-container js-gallery swiper-container-initialized swiper-container-horizontal" 
        slidesPerView={1} spaceBetween={10} rewind={true} pagination={{ type: "fraction", }} navigation={true} 
        breakpoints={{ "640": { slidesPerView: 2, spaceBetween: 20, }, "768": 
        { slidesPerView: 4, spaceBetween: 40, }, "1024": { slidesPerView: 5, spaceBetween: 10, }, }} modules={[Pagination, Navigation]}>
            
            {#each slides as slide}
                <SwiperSlide>
                    <a href={`${baseUrl}${slide}`} class="fancybox" data-caption="First image" data-fancybox="gallery">
                        <img src={`${baseUrl}${slide}`} alt="Outdoor Images" loading="lazy" class=" w-100"> 
                        <span >
                            <svg class="icon icon-lg">
                                <use xlink:href="#icon-search"></use>
                            </svg>
                        </span>
                    </a>
                </SwiperSlide>
            {/each}
            
            <!-- <SwiperSlide>
                <a href="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" class="fancybox" data-caption="First image" data-fancybox="gallery">
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" alt="Outdoor Images" loading="lazy" class=" w-100"> 
                    <span class="overlay">
                        <svg class="icon icon-lg">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                    </span>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" class="fancybox" data-caption="First image" data-fancybox="gallery">
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" alt="Outdoor Images" loading="lazy" class=" w-100"> 
                    <span class="overlay">
                        <svg class="icon icon-lg">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                    </span>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" class="fancybox" data-caption="First image" data-fancybox="gallery">
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" alt="Outdoor Images" loading="lazy" class=" w-100"> 
                    <span class="overlay">
                        <svg class="icon icon-lg">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                    </span>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" class="fancybox" data-caption="First image" data-fancybox="gallery">
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" alt="Outdoor Images" loading="lazy" class=" w-100"> 
                    <span class="overlay">
                        <svg class="icon icon-lg">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                    </span>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" class="fancybox" data-caption="First image" data-fancybox="gallery">
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" alt="Outdoor Images" loading="lazy" class=" w-100"> 
                    <span class="overlay">
                        <svg class="icon icon-lg">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                    </span>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" class="fancybox" data-caption="First image" data-fancybox="gallery">
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" alt="Outdoor Images" loading="lazy" class=" w-100"> 
                    <span class="overlay">
                        <svg class="icon icon-lg">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                    </span>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" class="fancybox" data-caption="First image" data-fancybox="gallery">
                    <img src="https://landing.drivenproperties.com/theme/assets/images/properties/gallery/1648731393-1.webp" alt="Outdoor Images" loading="lazy" class=" w-100"> 
                    <span class="overlay">
                        <svg class="icon icon-lg">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                    </span>
                </a>
            </SwiperSlide> -->
        </Swiper>
        
        <!-- <div class="container d-flex align-items-center justify-content-between pt-3 pt-lg-4 swiper-custom__buttons">

            <div class="btn-swiper swiper-button-prev swiper-button-disabled" role="button" aria-label="Previous slide" tabindex="0" aria-disabled="true">
                <svg class="icon"> <use xlink:href="#icon-arrow-left"></use> </svg>
            </div>

            <div class="swiper-pagination h5 mb-0 t-first-color d-md-none swiper-pagination-fraction">
                <span class="swiper-pagination-current">1</span> / <span class="swiper-pagination-total">1</span>
            </div>

            <div class="btn-swiper swiper-button-next swiper-button-disabled" role="button" aria-label="Next slide" tabindex="0" aria-disabled="true">
                <svg class="icon"> <use xlink:href="#icon-arrow-right"></use> </svg>
            </div>
        </div>
         -->
    </div>     
    <!-- Gallery End -->
</section>