<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    //import LeadFormRight from '$lib/commons/LeadFormRight.svelte';
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

<SEOTools MetaTitle ={pageContent.metatitle} MetaDescription ={pageContent.metadescription}/>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">
    <BreadCrumb 
        imgbg = {"/l9images/banners/"+pageContent.imgname} 
        LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} 
        LinkThree={pageSlug[3]} headings={pageContent.name}     
        Bdtype ={2}
    />
</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0"> 
                {@html pageContent.description ? pageContent.description : "Content Required" }
            </div>            
        </div>
        
    </div>
</section>
<!-- End About Us Section -->

<style>

section{padding: 10px 0 100px 0;}
#about .content {
    border:1px solid #cbcbcb; margin: 1px; padding: 20px 10px 60px 10px; background-color: #f8f8f8;
}
.content div.section-title >h5{ font-size: 1.4rem; font-weight: 900 !important; margin-bottom:15px; }
.section-title{ padding-top: 20px;}
.hero-imgbanner{ 
    width: 100%; height:auto; margin: 1.5rem 0 0.5rem 0;
}

@media only screen and (max-width: 768px) {
    
}
</style>