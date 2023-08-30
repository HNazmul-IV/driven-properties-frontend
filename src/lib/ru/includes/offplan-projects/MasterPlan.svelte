<script>

    //import { onMount } from 'svelte';  
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { EffectFade, Autoplay, Lazy, Parallax, Pagination, Navigation,FreeMode,Thumbs } from "swiper";
    import Saos from "saos";

    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/free-mode";
    import "swiper/css/navigation";
    import "swiper/css/thumbs";
    
        
    import './assets/css/custom.css';
    import './assets/css/myCss.css';
    import { afterUpdate } from "svelte";

    export let pf_title;
    export let pf_image;
    export let pf_description;
    export let pf_subtitle;
    export let baseUrl;

    let title, subtitle, description, slides, count=0;
    let dataArray = [];

    $: pf_title, getTitleInArray();
    const getTitleInArray = () => {
        title = pf_title ? pf_title.split('@'):'';
    }

    $: pf_subtitle, getSubtitleInArray();
    const getSubtitleInArray = () => {
        subtitle = pf_subtitle ? pf_subtitle.split('@'):'';
    }

    $: pf_description, getDescriptionInArray();
    const getDescriptionInArray = () => {
        description = pf_description ? pf_description.split('@'):'';
    }

    $: pf_image, getImageInArray();
    const getImageInArray = () => {
        slides = pf_image ? pf_image.split(','):'';
        console.log(slides);
    }

    
    afterUpdate(()=>{
        for(let i=0; i<title.length; i++){
            dataArray = [...dataArray, {'title':title[i], 'subtitle':subtitle[i], 'description':description[i], 'slides':slides[i], 'count':i+1}];
        }
    })


</script>


<section id="MasterPlan">

    <div class="block-plan-stance py-3 py-lg-4 t--bg">
        <div class="container">
            
            <Swiper class="projectConcept swiper-container"  navigation={true} modules={[Navigation]}>
                
                {#each dataArray as data}
                    <SwiperSlide class="concept-item__slide is-bg" style="width: 555px; transition-duration: 0ms; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                        <div class="concept-item">
                            <div class="concept-item__media aos-init aos-animate" data-aos="fade-left">
                                <figure class="blur-media mb-0">
                                    <picture class="picture">
                                    <img src={`${baseUrl}${data.slides}`} alt="Take a Deep" loading="lazy" class="blur-media__image"> 
                                    </picture>
                                </figure>
                            </div>
                            <div class="concept-item__body aos-init aos-animate" data-aos="fade-up">
                                <div class="concept-item__content t--bg">
                                    <h2 class="opacity-2 display-2 bolder uppercase mb-lg-4">Project Features</h2>
                                    <!-- <h3 class="title-sub plan-stance__title">{data.title ? data.title : ''}</h3> -->
                                    <div class="col-12 plan-stance__content opacity-7 mb-lg-4" style="color: #ffffff">
                                        <small style="color: #ffffff">{data.subtitle ? data.subtitle : ''} 
                                    </div>
                                    <div class="col-12 plan-stance__bottom">
                                        <div class="plan-stance__number mb-3 mb-lg-4"> 0{data.count} <span>{data.description ? data.description: ''}</span> </div>
                                    </div>
                                </div>
                            </div>

                        </div>                    
                    </SwiperSlide>
                {/each}


            </Swiper>

        </div>
    </div>
    <!-- Concept End -->
    
</section>
<!-- projectConcept End -->

<style>

@keyframes -global-from-right {
  0% {
    transform: rotateX(0deg) translateX(-90vw) skewX(0deg);
    opacity: 1;
  }
  10% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}

@keyframes -global-from-left {
  0% {
    transform: rotateX(0deg) translateX(-90vw) skewX(0deg);
    opacity: 1;
  }
  10% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}

.display-2{
    font-size: 3rem;
}


</style>
