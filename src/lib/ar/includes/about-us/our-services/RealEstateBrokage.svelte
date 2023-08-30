<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    
    import LeadFormLeft from '$lib/ar/commons/LeadFormLeft.svelte'
    import { baseURL } from '../../../../../base-url';

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');
    onMount(async () =>{


        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[4]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End

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
                <li class="breadcrumb-item bd-highlight"><a href="/">Our Services</a></li>
                <li class="breadcrumb-item bd-highlight active" aria-current="page">{@html pageContent.name_ar ? pageContent.name_ar : "Real Estate Brokerage" }</li>
            </ol>
        </nav>
        <h1>{@html pageContent.name_ar ? pageContent.name_ar : "Real Estate Brokerage" }</h1>
    </div>
    <div class="hero-imgbanner" style="background-image:url({pageContent.imgname ? "/l9images/banners/"+pageContent.imgname : "/assets/images/gen_4081.jpg" });"></div>
    <LeadFormLeft/>
</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        <!--div class="section-title">
            <h2>{@html pageContent.name_ar ? pageContent.name_ar : "Real Estate Brokerage" }</h2>
        </div-->

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0">
                {@html pageContent.description_ar ? pageContent.description_ar : "Content Required" } 
            </div>
        </div>
        
    </div>
</section>
<!-- End About Us Section -->
