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

    export let main_banner;
    export let baseUrl;

</script>

<section id="BannerHero">

    <Swiper class="BannerHero swiper-container">
        <SwiperSlide>
            <!-- <div class="image-container type-a" 
            style="background-image: url('http://landing.drivenproperties.com/theme/assets/images/properties/1648730607-cta-1.webp')">
            </div>             -->
            {#if main_banner}
                <div class="image-container type-a" style={`background: url(${baseUrl}${main_banner})`}></div>
            {:else}
                <div class="image-container type-a" style="background-image: url('http://landing.drivenproperties.com/theme/assets/images/properties/1648730607-cta-1.webp')"></div>
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
</style>