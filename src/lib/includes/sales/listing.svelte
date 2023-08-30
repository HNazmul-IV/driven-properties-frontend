<script>
	//import { Splide, SplideSlide } from '@splidejs/svelte-splide';

    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Lazy, Parallax, Pagination, Navigation } from "swiper";    
    import {covertToIntCurrancy, CurrancySBC} from '$lib/includes/others';
    import { page } from '$app/stores';
    
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import { afterUpdate } from "svelte";
    
    //import "./style.css";
    


    export let title = 'Exclusive | All-New | The Best Deal | City Walk';
    export let mapMarker = 'Building 10 - City Walk';
    export let Community = 'Building 10 - City Walk';
    export let building = 'Full Building';
    export let noOfBeds = '4 Bedroom';
    export let noOfBaths = '3 Bath';
    export let price = 'AED 4,300,000';
    export let agentNumber = null;
    export let images = [];
    export let objectID;
    export let Emirate ='dubai';
    export let PropertyStatus='sale';
    export let propertyTitle = '';
    export let published='';
    let thumb;

    let pageSlug = $page.url.pathname.split('/');
    $: images, getImages();
    
    //$: agentNumber.text().replace(" ", "");

    // afterUpdate(()=> {
    //     console.log(pageSlug);
    // })

    const getImages = () => {
        // console.log(images);
        // setTimeout(()=> {
        //     thumb = images.image[0];
        // }, 1000)
    }

    const options = {
		pagination: true,
		arrows: true
	};
    let LazyLoadImgURL= "/assets/images/265x230.jpg";
    
</script>

<!-- <div id="listings" class="listings"></div> -->

<div class="row no-gutters" id="InnerMyDetails">

    <div class="col-lg-5 col-md-6 DetailsBox">
        <Swiper lazy={true} rewind={true} navigation={true} pagination={{ dynamicBullets: true, }} modules={[Lazy,Pagination,Navigation]}  class="mySwiper">
            <!--{#each images['image'] as pic}
            <SwiperSlide>
                <img src={pic} alt={title+' vista'} />      
            </SwiperSlide>
            {/each}  
            data-src="{images['image'][0]}"
            -->
            {#if pageSlug[3]==='sale-commercial' || pageSlug[3]==='sale-industrial' || pageSlug[3]==='commerial-for-rent' || pageSlug[3]==='industrial-for-rent'}
                <!-- <div class="published">{published==='No'?'SOLD':''}</div> -->
                {#if published==='No'}
                    <div class="published">SOLD</div>
                {/if}
            {/if}
            <SwiperSlide>
                <a href="/{(Emirate).toLowerCase()}/{(building).toLowerCase()}-for-{(PropertyStatus).toLowerCase()}/{((Community).toLowerCase()).replaceAll(' ','-')}/{((propertyTitle).toLowerCase()).replaceAll(' ','-')}/{(objectID).toLowerCase()}" id="MyLksImg" >
                    <img data-src="{images.image[0]}" src="{LazyLoadImgURL}" class="swiper-lazy img-fluid" alt={title}/>
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
                    
    <div class="col-lg-7  col-md-6">
        <div class="card-body">

            <h5 class="card-title HPrice">
                <a href="/{(Emirate).toLowerCase()}/{(building).toLowerCase()}-for-{(PropertyStatus).toLowerCase()}/{((Community).toLowerCase()).replaceAll(' ','-')}/{((propertyTitle).toLowerCase()).replaceAll(' ','-')}/{(objectID).toLowerCase()}" class="MyLkstxt">
                    {@html title }
                </a>
            </h5>

            <div class="card-text d-flex flex-row bd-highlight Bxinfo">
                <i class="bx bxs-map-pin MyPin"></i> 
                <span class="DTxtlm">{@html Community}</span>
            </div>

            <div class="card-text d-flex flex-row bd-highlight">
                
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

            </div>

            <div class="card-text d-flex flex-row bd-highlight Bxinfo">
                <h3 class="HPrice">AED {covertToIntCurrancy(price)} / {CurrancySBC(price)} </h3>
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
    
    .DetailsBox{ padding: 0px 10px  0px 0px; position: relative;} 
    .BDINFO{ margin: 8px;}
    #InnerMyDetails { margin-bottom:3.5rem !important;  }
    #InnerMyDetails .card{ border:0; border-radius:0;}
    #InnerMyDetails .card-body{ padding: 0;}
    .DetailsBox img{ width:100%; height: auto;}
    #InnerMyDetails .MyPin{ line-height: 28px !important; font-size: 1.4rem; margin: 0px 8px 8px 8px;}
    #InnerMyDetails span.DTxtlm {font-weight: 400 !important; font-size: 1.1rem;}
    #InnerMyDetails span.DTxtSm{ font-weight: 200 !important; font-size: 0.9rem !important;}
    #InnerMyDetails h5.HPrice{ font-weight: 500 !important; font-size: 1.1rem; padding:0px 0px 12px 0px; border-bottom: 0.5px solid #A8A8A8;}    
    #InnerMyDetails h3.HPrice{ font-weight: 500 !important; font-size: 1.1rem; padding: 10px 10px 20px 10px;}
    #InnerMyDetails a{padding: 12px 18px; color:#fff;}
    #InnerMyDetails a.telephone {background-color:#263977;}
    #InnerMyDetails a.whatsapp {background-color:#22D672;}
    h5.HPrice > a.MyLkstxt{color:#444444 !important; padding: 0 !important;}
    .published {
        position: absolute;
        left: 18px;
        z-index: 11111;
        color: white;
        background: #000;
        padding: 2px 7px;
        font-weight: bold;
        font-size: 12px;
    }
   
    /* Swiper slider */
      #InnerMyDetails .swiper-wrapper > .swiper-button-next:after, .swiper-button-prev:after{font-size:1rem !important;}
    /* Swiper slider End */

    @media only screen and (max-width: 768px) {

        #InnerMyDetails{padding: 0;}
        #InnerMyDetails .DetailsBox{ padding: 0px 12px  0px 12px;}
        #InnerMyDetails .DetailsBox img{ width:100%; height: auto; border-radius: 7px;}
        #InnerMyDetails .MyPin{ line-height: 26px !important; font-size: 1.1rem; margin-right: 6px; margin-left: 0px;}
        #InnerMyDetails span.DTxtlm {font-weight: 600 !important; font-size: 1rem;}
        #InnerMyDetails span.DTxtSm{ font-weight: 200 !important; font-size: 0.9rem !important; padding-right: 1.8rem; line-height:2.2rem;}
        #InnerMyDetails h5.HPrice{ font-weight: 500 !important; font-size: 1rem; padding:15px 0px 15px 0px; border-bottom: 0.5px solid #A8A8A8;}    
        #InnerMyDetails h3.HPrice{ font-weight: 500 !important; font-size: 1.3rem; padding:0px 0px 10px 0px;}
        #InnerMyDetails a{ padding: 12px 34px; color: #fff; margin: 0px 6px 0px 0px; }
        #InnerMyDetails a.telephone {background-color:#263977;}
        #InnerMyDetails a.whatsapp {background-color:#22D672;}
        .Bxinfo{ margin: 18px 0 0px 0;}
        .BDINFO{ margin: 2px 0;}
        /* #InnerMyDetails .card-body{ padding: 2px;} */

        #InnerMyDetails {
            --scrollbarBG: #CFD8DC;
            --thumbBG: #90A4AE;
        }
        #InnerMyDetails::-webkit-scrollbar {
            width: 11px;
        }
        #InnerMyDetails {
            scrollbar-width: thin;
            scrollbar-color: var(--thumbBG) var(--scrollbarBG);
        }
        #InnerMyDetails::-webkit-scrollbar-track {
            background: var(--scrollbarBG);
        }
        #InnerMyDetails::-webkit-scrollbar-thumb {
            background-color: var(--thumbBG) ;
            border-radius: 6px;
            border: 3px solid var(--scrollbarBG);
        }   
        #MyLksImg {padding: 0 !important;}
        h5.HPrice > a.MyLkstxt{color:inherit !important; padding: 0 !important;}
    }
    div#InnerMyDetails {
        height: 230px;
    }
    
</style>