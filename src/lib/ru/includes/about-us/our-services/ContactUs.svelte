<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    
    import LeadFormLeft from '$lib/ru/commons/LeadFormLeft.svelte'
    import { baseURL } from '../../../../../base-url';

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');
    onMount(async () =>{

        console.log(pageSlug);
        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[3]}`);
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
        <h1>{@html pageContent.name_ru ? pageContent.name_ru : "Contact Us" }</h1>
    </div>
    <div class="hero-imgbanner" style="background-image:url({pageContent.imgname ? "/l9images/banners/"+pageContent.imgname : "/assets/images/gen_4081.jpg" });"></div>
    <LeadFormLeft/>
</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        <!--div class="section-title">
            <h2>{@html pageContent.name_ru ? pageContent.name_ru : "Real Estate Brokerage" }</h2>
        </div-->

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0">
                {@html pageContent.description_ru ? pageContent.description_ru : "Content Required" } 
            </div>
        </div>
        
    </div>
</section>
<!-- End About Us Section -->
