<script>

    //import { onMount } from 'svelte';  
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay, Lazy, Parallax, Pagination, Navigation,FreeMode,Thumbs } from "swiper";
    import Loader from '$lib/loader/loader.svelte';
    import LeadFormLeft from '$lib/ru/commons/LeadFormLeft.svelte';

    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/free-mode";
    import "swiper/css/navigation";
    import "swiper/css/thumbs";
    
    import './assets/css/custom.css';
    import './assets/css/myCss.css';

    export let main_banner;
    export let baseUrl;
    export let title;
    $: title, titleCheck();

    const titleCheck = () => {
        console.log(title);
    }

</script>

<section id="BannerHero">

    

    {#if !main_banner}
        <div class="landing-banner-loader">
            <Loader />
        </div>
    {/if}
    <Swiper class="BannerHero swiper-container">
        <SwiperSlide>
            <!-- <div class="image-container type-a" 
            style="background-image: url('http://landing.drivenproperties.com/theme/assets/images/properties/1648730607-cta-1.webp')">
            </div>             -->
            <div class="banner-title">{title? title: ''}</div>
            <LeadFormLeft />
            {#if main_banner}
                <div class="image-container type-a" style={`background: url(${baseUrl}${main_banner})`}></div>
            <!-- {:else}
                <div class="image-container type-a" style="background-image: url('http://landing.drivenproperties.com/theme/assets/images/properties/1648730607-cta-1.webp')"></div> -->
            {/if}            
        </SwiperSlide>        
    </Swiper>
    
</section>
<!--BannerHero End-->

<style>
    #BannerHero .image-container{
        background-size: cover !important;
        background-repeat: no-repeat !important;
    }
    .banner-title{
        position: absolute;
        z-index: 111111111;
        top: 40vh;
        color: white;
        font-size: 4em;
        font-weight: bold;
        display: flex;
        text-align: center;
        left: 15vw;
        text-shadow: 1px 1px 3px #000;
        left: 15vw;
    }
    .landing-banner-loader {
        margin: auto;
        text-align: center;
        position: absolute;
        left: 45vw;
        top: 40vh;
    }
    @media(max-width: 768px){
        .banner-title{
            font-size: 4em;
            font-weight: bold;
            display: flex;
            text-align: center;
            text-shadow: 1px 1px 3px #000;
            left: 0vw;
        }
    }
</style>