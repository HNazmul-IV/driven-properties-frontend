<script>

    import { onMount, afterUpdate } from 'svelte';  
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

    export let sfc;
    export let sfcSlides;
    export let sfcCaption;

    let slides;
    let dataArray = [];
    let isMobile = false;
    let captions;

    $: sfcSlides, getImgInArray();
    $: sfcCaption, getCaptionArray();

    const getCaptionArray = () => {
        captions = sfcCaption ? sfcCaption.split('@'):'';
        console.log(captions);
    }

    const getImgInArray = () => {
        slides = sfcSlides ? sfcSlides.split(','):'';
        console.log(slides, sfc);
    }

    afterUpdate(()=>{
        for(let i=0; i<slides.length; i++){
            dataArray = [...dataArray, {'captions':captions[i]?captions[i]:'',  'slides':slides[i]}];
        }
        console.log(dataArray);
    })

    onMount(()=> {
        if(window.innerWidth < 768){
            isMobile = false;
        }else{
            isMobile = true;
        }
    })
       
</script>

<section id="Sfc">

    {#if isMobile}
        
        <div class="block block-opportunity">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="opportunity">
                            <div class="opportunity-heading aos-init aos-animate" data-aos="fade-up">
                                <h2 class="opacity-2 display-2 bolder uppercase">УДОБСТВА</h2>
                            </div>
                            <div class="opportunity-body aos-init aos-animate" data-aos="fade-up">
                                {sfc ? sfc: ''}
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <Swiper class="projectConcept swiper-container"  navigation={true} modules={[Navigation]}>
                        
                            {#each dataArray as data}
                                <SwiperSlide class="concept-item__slide is-bg">
                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0">
                                        <div class="opportunity-media">
                                            <figure class="blur-media">
                                                <img src={`${baseUrl}${data.slides}`} alt={data.slides} loading="lazy"> 
                                                <figcaption class="opportunity-media__text">{data.captions}</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            {/each}
                            
                        </Swiper>
                        
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
            </div>
        </div>      
        <!-- Gallery End -->

    {:else}
        <div>
            <div class="opportunity">
                <div class="opportunity-heading aos-init aos-animate" data-aos="fade-up">
                    <h2 class="opacity-2 display-2 bolder uppercase">УДОБСТВА</h2>
                </div>
                <div class="opportunity-body aos-init aos-animate" data-aos="fade-up">
                    {sfc ? sfc: ''}
                </div>
            </div>
            <Swiper class="projectConcept swiper-container"  navigation={true} modules={[Navigation]}>
                {#each dataArray as data}
                <SwiperSlide class="concept-item__slide is-bg">
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev" data-swiper-slide-index="0">
                        <div class="opportunity-media">
                            <figure class="blur-media">
                                <img src={`${baseUrl}${data.slides}`} alt={data.slides} loading="lazy"> 
                                <figcaption class="opportunity-media__text">{data.captions}</figcaption>
                            </figure>
                        </div>
                    </div>
                </SwiperSlide>
                {/each}
            </Swiper>
        </div>
    {/if}
</section>

<style>
    #Sfc{
        background-color: #f5f5f5;
    }
    @media(max-width: 768px){
        .opportunity {
            text-align: center;
        }
    }
</style>