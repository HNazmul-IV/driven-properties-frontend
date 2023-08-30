<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    import BreadCrumb from '$lib/ru/commons/breadcrumb.svelte';
    import { baseURL } from '../../../../base-url';
    
    let pageSlug = $page.url.pathname.split('/');
    let pageContent = [];
    let preferredPartners = [];
    let GetURLFstNAme =[];
    let GetURLLstNAme = [];

    onMount(async () =>{
        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[3]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End

        const response1 = await fetch(`${baseURL}/getAllPreferredPartners`);
        const data1 = await response1.json();
        preferredPartners = data1;
        //getAllPreferredPartners API End
        
        const getFstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[2]}`);
        const dataFstFr = await getFstNameFr.json();
        GetURLFstNAme = dataFstFr;

        const getLstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[3]}`);
        const dataLstFr = await getLstNameFr.json();
        GetURLLstNAme = dataLstFr;

    });
    //console.log(pageSlug[2]);

</script>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<BreadCrumb 
    LinkOne={pageSlug[2]} LinkTwo={pageSlug[3]}  Bdtype={2}
    FstName_Fr={GetURLFstNAme.name_ru} LstName_Fr={GetURLLstNAme.name_ru}
/>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
            
            <h2>{@html pageContent.name_ru ? pageContent.name_ru : "Preferred Partners" }</h2>
        </div>

        <div class="row">
            {#each preferredPartners as PreferredPartners (PreferredPartners.id) }
            <div class="mb-4 col-lg-4 col-xl-4 col-md-6 d-flex flex-row justify-content-center align-items-stretch order-2 order-lg-1 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                <div class="content"> 
                    <div class="content-overlay"></div> 
                    <img class="content-image" alt src="{PreferredPartners.pfpimgname ? "/l9images/preferred-partners/"+PreferredPartners.pfpimgname : "/assets/img/preferred-partners/gen_4413127.jpg" }" />
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">{PreferredPartners.pfpname_ru}</h3>
                        <p class="content-text">
                            <i class="fa fa-map-marker"></i>
                            {@html PreferredPartners.pfpdescription_ru}
                        </p>
                        <a href="{PreferredPartners.pfpslug}"  target="DrvnPage">Explore</a>
                    </div>
                    
                </div>
            </div>
            <!--Box  Image End-->            
            {/each}

        </div>
    </div>
</section>
<!-- End About Us Section -->

<style>
/*
.title{
    color: #1a1a1a;
    text-align: left;
    margin-bottom: 10px
}
*/
.content{
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: auto;
    overflow: hidden
}
.content .content-overlay{
    background: rgba(0,0,0,0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s
}
.content:hover .content-overlay{
    opacity: 1
}
.content-image{
    width: 100%
}
img{
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 1px
}
.content-details{
    position: absolute;
    text-align: left;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s
}
.content:hover .content-details{
    top: 50%;
    left: 50%;
    opacity: 1;
}
.content-details h3{
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.12rem !important;
    margin-bottom: 0.5rem !important;
    text-transform: uppercase;

}
.content-details p{
    color: #fff;
    font-size: 1.1em;
    margin-bottom: 2.5rem;
}

.content-details a{
    border-radius: 2px;
    border: 1px solid #fff;
    padding: 8px 40px;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #fff;    
}

.fadeIn-bottom{
    top: 80%;
}

@media only screen and (max-width: 768px) {

    section{ padding:0;}
    
    .content-details h3{
        font-weight: 500;
        letter-spacing: 0.01rem !important;
        margin-bottom: 0.8rem !important;
        text-transform: uppercase;
    }

    .content-details p{
        font-size: 0.9rem;
        margin-bottom: 2.5rem;
    }
  
}


</style>
