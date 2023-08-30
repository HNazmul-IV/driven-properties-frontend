<script>

    import { onMount, afterUpdate } from 'svelte';  
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay, Lazy, Parallax, Pagination, Navigation,FreeMode,Thumbs } from "swiper";
    import Saos from "saos";

    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/free-mode";
    import "swiper/css/navigation";
    import "swiper/css/thumbs";
        
    import './assets/css/custom.css';
    import './assets/css/myCss.css';

    export let baseUrl;
    export let pc_main_title;
    export let pc_desc;
    export let pc_subtitle;
    export let pc_image;
    let slides, subtitle, description;
    let dataArray = [];

    $: pc_image, getImgInArray();
    const getImgInArray = () => {
        slides = pc_image ? pc_image.split(','):'';
        console.log(slides);
    }

    $: pc_subtitle, getSubtitleInArray();
    const getSubtitleInArray = () => {
        subtitle = pc_subtitle ? pc_subtitle.split('@'):'';
    }

    $: pc_desc, getDescriptionInArray();
    const getDescriptionInArray = () => {
        description = pc_desc ? pc_desc.split('@'):'';
    }

    afterUpdate(()=>{
        for(let i=0; i<subtitle.length; i++){
            dataArray = [...dataArray, {'subtitle':subtitle[i], 'description':description[i], 'slides':slides[i]}];
        }
        console.log(dataArray);
    })

</script>

<section id="projectConcept">

    <div class="block block-concept project-concept">
        <div class="container">

            <Saos animation={"from-right 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <div data-aos="fade-right" class="aos-init aos-animate">
                    <h2 class="opacity-2 display-2 bolder uppercase px-3 px-lg-0 DLPFonts Mgaps" >{pc_main_title ? pc_main_title : 'Welcome To Dubai!'}</h2>
                </div>
            </Saos>

            <Swiper class="projectConcept swiper-container"  navigation={true} modules={[Navigation]}>
                
                {#each dataArray as data}
                    <SwiperSlide class="concept-item__slide is-bg">
                        <div class="concept-item">
                            <div class="concept-item__media aos-init aos-animate" data-aos="fade-left">
                                <figure class="blur-media mb-0">
                                    <picture class="picture">
                                    <img src={`${baseUrl}${data.slides}`} alt="Take a Deep" loading="lazy" class="blur-media__image"> 
                                    </picture>
                                </figure>
                            </div>
                            <div class="concept-item__body aos-init aos-animate" data-aos="fade-up">
                                <div class="concept-item__content t--bg" style="background-color: #bcb164">
                                    <h3 class="title-sub t--color" style="color: #ffffff"><small style="color: #ffffff">{data.subtitle ? data.subtitle : ''} </h3>
                                    <p class="concept-item__text" style="color: #505050">{data.description ? data.description : ''}</p>
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


</style>
