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
                            ГАЛЕРЕЯ
                        </h2>
                    </div>
                </div>                
            </div>
        </div>
                
        <Swiper class="swiper-container js-gallery swiper-container-initialized swiper-container-horizontal" 
        slidesPerView={1}  rewind={true}  navigation={true} 
        breakpoints={{ "640": { slidesPerView: 1, spaceBetween: 20, }, "768": 
        { slidesPerView: 4, spaceBetween: 40, }, "1024": { slidesPerView: 4, spaceBetween: 10, }, }} 
        modules={[Pagination, Navigation]}>
            
            {#each slides as slide}
                <SwiperSlide class="concept-item__slide is-bg">
                    <a href={`${baseUrl}${slide}`} class="fancybox" data-caption="First image" data-fancybox="gallery">
                        <img src={`${baseUrl}${slide}`} alt="Outdoor Images" loading="lazy" class=" w-100"> 
                    </a>
                </SwiperSlide>
            {/each}
        </Swiper>
        
    </div>     
    <!-- Gallery End -->
</section>