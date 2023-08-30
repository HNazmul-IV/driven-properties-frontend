<script>

    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay, Lazy, Parallax, Pagination, Navigation,FreeMode,Thumbs } from "swiper";    
            
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/free-mode";
    import "swiper/css/navigation";
    import "swiper/css/thumbs";
    

    export let images;
    export let title;

    let LazyLoadImgURL= "/assets/images/265x230.jpg";
    let thumbsSwiper = null;

    const setThumbsSwiper = (e) => {
        const [swiper] = e.detail;
        // set Thumbs swiper instance
        setTimeout(() => {
            thumbsSwiper = swiper;
        });
    };
</script>

<div class="g-0 container">
    <div class="g-0 row">
        <div class="g-0 col-sm">

            <!-- <Swiper lazy={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} rewind={true} navigation={true} pagination={{ dynamicBullets: true, }} 
                loop={true} spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} modules={[Autoplay,Lazy,Pagination,Navigation,FreeMode,Thumbs]}  class="mySwiper"> -->

            <div id="MyImgGallery">
                <Swiper lazy={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} rewind={true} navigation={true} pagination={{ dynamicBullets: true, }} 
                loop={true} spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} modules={[Autoplay,Lazy,Pagination,Navigation,FreeMode,Thumbs]}  class="mySwiper">
                    {#each images.image as mySlider, i}                        
                        <SwiperSlide>
                            <img data-src="{mySlider}" src="{LazyLoadImgURL}" class="swiper-lazy" alt={title} />
                        </SwiperSlide>
                    {/each}
                </Swiper>
            </div>
            
            <div id="MyImgThub">
                <Swiper
                    on:swiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={8}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Navigation,FreeMode,Thumbs]}
                    class="mySwiper2"
                >
                    {#each images['image'] as mySlider, i}
                    <SwiperSlide>
                        <img src="{mySlider}" class="swiper-lazy" alt={title} />
                    </SwiperSlide>
                    {/each}
                </Swiper>
            </div>

        </div>
    </div>
</div>

<style>
    
</style>
