<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import LeadFormRight from '$lib/commons/LeadFormRight.svelte';
    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import SEOTools from '$lib/commons/SEOText.svelte';
    import { baseURL } from '../../../../base-url';

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');
    onMount(async () =>{

        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[3]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End
    });
    //console.log(pageSlug);

</script>

<SEOTools MetaTitle ={pageContent.name} MetaDescription ={pageContent.name}/>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">

    <BreadCrumb 
        imgbg = {"/l9images/banners/"+pageContent.imgname} LinkOne={pageSlug[1]} 
        LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} headings={pageContent.name} Bdtype={1}
    />
    <LeadFormRight/>
    
</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <!--div class="section-title">
            <h2>{@html pageContent.name ? pageContent.name : "Corporate Occupier Services" }</h2>
        </div-->

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0">
                {@html pageContent.description ? pageContent.description : "Content Required" } 
            </div>
        </div>
    </div>
</section>
<!-- End About Us Section -->
