<script>
    import { Swiper, SwiperSlide } from "swiper/svelte";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/lazy";
    import "swiper/css/pagination";
    import "swiper/css/navigation";    

    // import required modules
    import { Lazy, Parallax, Pagination, Navigation } from "swiper";
    import { onMount } from "svelte";
    let LazyLoadImgURL= "/assets/images/265x230.jpg";
    let isMobile = false;

    onMount(()=> {
      if(window.innerWidth < 768){
          console.log('desktop script');
          isMobile = false;
      }else{
          console.log('mobile script');
          isMobile = true;
      }
    })

  </script>

  
  <Swiper
    style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff" 
    speed={600} parallax={true} lazy={true}
    pagination={{ type: "fraction", clickable: true, }} 
    navigation={true} 
    modules={[Lazy,Parallax, Pagination, Navigation]} 
    class="mySwiper">

    {#if !isMobile}
      {console.log('desktop')}
      <SwiperSlide>
        <div class="overlay"></div>
        <div class="MySlider">
          <img src="{LazyLoadImgURL}" 
          data-src="/assets/img/home/sliders/shutterstock_686604058.webp" class="swiper-lazy"  alt="dsf" /> 
        </div>
      </SwiperSlide>
    {:else}
      {console.log('mobile')}
      <SwiperSlide>
        <div class="overlay"></div>
        <div class="MySlider">
          <!-- <img src="{LazyLoadImgURL}" 
          data-src="/assets/img/home/sliders/shutterstock_686604058.jpg" class="swiper-lazy"  alt="dsf" />  -->
        </div>
      </SwiperSlide>
    {/if}

    <!-- <SwiperSlide>
      <div class="overlay"></div>
      <div class="MySlider">
        <img src="{LazyLoadImgURL}" 
        data-src="/assets/img/home/sliders/2.jpg" class="swiper-lazy" alt="dsf-1" />
      </div>
    </SwiperSlide> /assets/img/home/sliders/1.png-->
  </Swiper>

  <style>

    /* .swiper-wrapper{ height: 95vh !important;} 
    
    .swiper-button-next, .swiper-button-prev{ position:absolute; top:30% !important;}
    .swiper-button-prev, .swiper-rtl .swiper-button-next{ position:absolute; top:30% !important; left:10px; right:auto;}
    */
    .MySlider{ 
      height: 100vh; 
      background-image: url('/assets/img/home/sliders/shutterstock_686604058.webp');
      background-size: cover;
      margin-left: -80px !important;
      background-repeat: no-repeat;
    }
    .MySlider > img{ width: 100vw; height: 100%;}
    
    @media only screen and (max-width: 768px) {
      .MySlider{ height: 100vh;}
      .MySlider > img{ width: 100%; max-height: 100%; height: 100vh;}
    }

  </style>
  