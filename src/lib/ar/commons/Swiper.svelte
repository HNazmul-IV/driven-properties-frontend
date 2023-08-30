<script>
    import { Swiper, SwiperSlide } from "swiper/svelte";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/lazy";
    import "swiper/css/pagination";
    import "swiper/css/navigation";    

    // import required modules
    import { Lazy, Parallax, Pagination, Navigation } from "swiper";
    let LazyLoadImgURL= "data:image/webp;base64,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";
  </script>

  <Swiper
    style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff" 
    speed={600} parallax={true} lazy={true}
    pagination={{ type: "fraction", clickable: true, }} 
    navigation={true} 
    modules={[Lazy,Parallax, Pagination, Navigation]} 
    class="mySwiper"
  >
    <SwiperSlide>
      <div class="overlay"></div>
      <div class="MySlider">
        <img src="{LazyLoadImgURL}" 
        data-src="/assets/img/home/sliders/1.png" class="swiper-lazy"  alt="dsf" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div class="overlay"></div>
      <div class="MySlider">
        <img src="{LazyLoadImgURL}" 
        data-src="/assets/img/home/sliders/2.jpg" class="swiper-lazy" alt="dsf-1" />
      </div>
    </SwiperSlide>
  </Swiper>

  <style>

    /* .swiper-wrapper{ height: 95vh !important;} 
    
    .swiper-button-next, .swiper-button-prev{ position:absolute; top:30% !important;}
    .swiper-button-prev, .swiper-rtl .swiper-button-next{ position:absolute; top:30% !important; left:10px; right:auto;}
    */
    .MySlider{ height: 100vh;}
    .MySlider > img{ width: 100vw; height: 100%;}
    
    @media only screen and (max-width: 768px) {
      .MySlider{ height: 86vh;}
      .MySlider > img{ width: 100%; max-height: 100%; height: 100vh;}
    }

  </style>
  