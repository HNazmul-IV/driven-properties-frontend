<script>
    
    import { onMount } from 'svelte';

	//import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Lazy, Parallax, Pagination, Navigation } from "swiper";    
    
    
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    
    //import "./style.css";
    


    export let title = 'Exclusive | All-New | The Best Deal | City Walk';  
    export let slug;  
    export let Community = 'Building 10 - City Walk';
    export let building = 'Full Building';
    export let noOfBeds = '4 Bedroom';
    export let noOfBaths = '3 Bath';
    export let price = 'AED 4,300,000';
    export let CsPrice = 'AED 430K';
    export let agentNumber = null;
    export let images = [];
    export let objectID;
    let baseurl = '';

    //$: agentNumber.text().replace(" ", "");

    onMount(()=>{
        baseurl = window.location.origin;
        if(slug === null){
            slug='demo';
        }
    })

    const options = {
		pagination: true,
		arrows: true
	};
    let LazyLoadImgURL= "/assets/images/265x230.jpg";
    
</script>


<div class="row no-gutters" id="MyDetails">
    <div class="col-lg-5 col-md-6 DetailsBox">
        <a href={baseurl+"/dubai/off-plan-projects/"+slug} target="_blank">
            <Swiper lazy={true} rewind={true} navigation={true} pagination={{ dynamicBullets: true, }} modules={[Lazy,Pagination,Navigation]}  class="mySwiper">
                <!--{#each images['image'] as pic}
                <SwiperSlide>
                    <img src={pic} alt={title+' vista'} />      
                </SwiperSlide>
                {/each}  
                data-src="{images['image'][0]}"
                -->
                <SwiperSlide>
                    <img data-src="/l9images/community/{images}" src="{LazyLoadImgURL}" class="swiper-lazy" alt={title }/>
                </SwiperSlide>
            </Swiper>
        </a>
    </div>
            
    <div class="col-lg-7  col-md-6 ">
        <div class="card-body">
            <h5 class="card-title HPrice"><a href={baseurl+"/dubai/off-plan-projects/"+slug} target="_blank">{@html title }</a></h5>

            <div class="card-text d-flex flex-row bd-highlight Bxinfo">
                <i class="bx bxs-map-pin MyPin"></i> 
                <span class="DTxtlm">{@html Community}</span>
            </div>

            <!-- <div class="card-text d-flex flex-row bd-highlight">
                
                <div class="p-0 bd-highlight BDINFO">
                    <i class="bx bx-building-house"></i> 
                    <span class="DTxtSm">{@html building}</span>
                </div>

                <div class="p-0 bd-highlight BDINFO">
                    <i class="bx bx-building-house"></i> 
                    <span class="DTxtSm">{@html noOfBeds}</span>
                </div>

                <div class="p-0 bd-highlight BDINFO">
                    <i class="bx bx-building-house"></i> 
                    <span class="DTxtSm">{@html noOfBaths}</span>
                </div>

            </div> -->

            <div class="card-text d-flex flex-row bd-highlight Bxinfo">
                {#if price}
                    <h3 class="HPrice">AED {price} / {CsPrice} </h3>
                {:else}
                    <h5 class="mt-1 mb-4">Enquire for Price</h5>
                {/if}
            </div>

            <div class="card-text d-flex flex-row bd-highlight Bxinfo">
                <div class="p-0 bd-highlight">
                    <a href="tel:{agentNumber}" class="telephone" ><i class="bx bi-telephone"></i> Call Now </a> 
                </div>
                <div class="p-0 bd-highlight">
                    <a href="https://web.whatsapp.com/send?phone=971553658402&text=Hi Driven, I need more information regarding {title}." class="whatsapp"> 
                        <i class="bx bi-whatsapp"></i> 
                        WhatsApp
                    </a>
                </div>
            </div>
            
        </div>
    </div>
</div>

<span style="display:none;">PropertyID: {objectID}</span>

<style>
    
    .DetailsBox{ padding: 0px 10px  0px 0px;}
    #MyDetails { 
        margin-bottom: 0rem !important;
        padding: 0rem 0;
        display: flex;
        flex-direction: row;  
        height: 230px !important;
    }
    .DetailsBox{
        display: flex;
        justify-content: center;
        margin-top: -9px;
        height: 230px !important;
    }

    @media(max-width: 768px){
        .DetailsBox{
            height: auto !important;
        }   
        #MyDetails{
            height: auto !important;
        }
    }
    #MyDetails .card-body{ padding: 0;}
    .DetailsBox img{ width:100%; max-height: 230px; height: auto;}
    #MyDetails .MyPin{ line-height: 28px !important; font-size: 1.4rem; margin: 0px 8px 8px 8px;}
    #MyDetails span.DTxtlm {font-weight: 400 !important; font-size: 1.1rem;}
    #MyDetails h5.HPrice{ font-weight: 500 !important; font-size: 1.1rem; padding:0px 0px 12px 0px; border-bottom: 0.5px solid #A8A8A8;}    
    #MyDetails h3.HPrice{ font-weight: 500 !important; font-size: 1.1rem; padding: 10px 10px 20px 10px;}
    #MyDetails a{padding: 12px 18px; color:#fff;}
    #MyDetails a.telephone {background-color:#263977;}
    #MyDetails a.whatsapp {background-color:#22D672;}
    h5 a{
        color: black !important;
        padding: 0 !important;
    }

   
    /* Swiper slider */
      #MyDetails .swiper-wrapper > .swiper-button-next:after, .swiper-button-prev:after{font-size:1rem !important;}
    /* Swiper slider End */

    @media only screen and (max-width: 768px) {

        #MyDetails .MyPin{ line-height: 26px !important; font-size: 1.1rem; margin-right: 6px; margin-left: 0px;}
        #MyDetails span.DTxtlm {font-weight: 400 !important; font-size: 1.1rem;}
        #MyDetails h5.HPrice{ font-weight: 500 !important; font-size: 1.2rem; padding:15px 0px 15px 0px; border-bottom: 0.5px solid #A8A8A8;}    
        #MyDetails h3.HPrice{ font-weight: 500 !important; font-size: 1.2rem; padding:0px 0px 10px 0px;}
        #MyDetails a{ padding: 12px 39px; color: #fff; margin: 0px 6px 0px 0px; }
        #MyDetails a.telephone {background-color:#263977;}
        #MyDetails a.whatsapp {background-color:#22D672;}
        .Bxinfo{ margin: 10px 0;}

        #MyDetails {
            --scrollbarBG: #CFD8DC;
            --thumbBG: #90A4AE;
        }
        #MyDetails::-webkit-scrollbar {
            width: 11px;
        }
        #MyDetails {
            scrollbar-width: thin;
            scrollbar-color: var(--thumbBG) var(--scrollbarBG);
        }
        #MyDetails::-webkit-scrollbar-track {
            background: var(--scrollbarBG);
        }
        #MyDetails::-webkit-scrollbar-thumb {
            background-color: var(--thumbBG) ;
            border-radius: 6px;
            border: 3px solid var(--scrollbarBG);
        }        
    }
    
</style>