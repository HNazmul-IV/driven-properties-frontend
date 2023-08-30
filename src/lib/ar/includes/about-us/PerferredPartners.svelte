<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    import { baseURL } from '../../../../base-url';

    let preferredPartners = [];
    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');

    onMount(async () =>{
        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End

        const response1 = await fetch(`${baseURL}/getAllPreferredPartners`);
        const data1 = await response1.json();
        preferredPartners = data1;
        //getAllPreferredPartners API End

    });
    //console.log(pageSlug);

</script>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">
    <div class="container ">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex flex-row bd-highlight">
                <!--a href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-whatsapp"></i></a-->
                <li class="breadcrumb-item bd-highlight"><a class="text-center" href="/"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                <li class="breadcrumb-item bd-highlight"><a href="/">About Us</a></li>
                <li class="breadcrumb-item bd-highlight active" aria-current="page">{@html pageContent.name_ar ? pageContent.name_ar : "Preferred Partners" }
            </ol>
        </nav>            
    </div>
</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
            <h2>{@html pageContent.name ? pageContent.name_ar : "Preferred Partners" }</h2>
        </div>

        <div class="row">
            {#each preferredPartners as PreferredPartners (PreferredPartners.id) }
            <div class="mb-4 col-lg-4 col-xl-4 col-md-6 d-flex flex-row justify-content-center align-items-stretch order-2 order-lg-1 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                <div class="content"> 
                    <div class="content-overlay"></div> 
                    <img class="content-image" alt src="{PreferredPartners.pfpimgname ? "/l9images/preferred-partners/"+PreferredPartners.pfpimgname : "/assets/img/preferred-partners/gen_4413127.jpg" }" />
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">{PreferredPartners.pfpname_ar}</h3>
                        <p class="content-text">
                            <i class="fa fa-map-marker"></i>
                            {@html PreferredPartners.pfpdescription_ar}
                        </p>
                        <a href="{PreferredPartners.pfpslug}"  target="DrvnPage">
                            إكتشف
                        </a>
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
