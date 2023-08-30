<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    
    import LeadFormLeft from '$lib/commons/LeadFormLeft.svelte'
    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import SEOTools from '$lib/commons/SEOText.svelte';
    import { baseURL } from '../../../base-url';
    
    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');
    
    onMount(async () =>{

        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End        
    });

</script>

<SEOTools MetaTitle ={pageContent.metatitle} MetaDescription ={pageContent.metadescription}/>

<BreadCrumb 
    LinkOne={pageSlug[1]} 
    LinkTwo={pageContent.name} 
    imgbg={pageContent.imgname ? "/l9images/banners/"+pageContent.imgname : "/assets/images/gen_3917.jpg"}
    headings ={pageContent.name ? pageContent.name : "Why Dubai?" }
    Bdtype={1}
/>
<LeadFormLeft/>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        
        {#if pageContent.videoid !==null && pageContent.titlename !==null }
            <div class="section-title">
                <h2>{@html pageContent.titlename ? pageContent.titlename : "Forbes Global Properties" }</h2>
            </div>

            <div>
                <div class="col-12 pt-4 pt-lg-0">
                    <p>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/{pageContent.Ytvideoid}?rel=0" title="#AskDriven: Why invest in Dubai?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
            </div>
        {/if}

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0"> 
                {@html pageContent.description ? pageContent.description : "Content Required" }
            </div>            
        </div>
        
    </div>
</section>
<!-- End About Us Section -->

<style>
    @media only screen and (max-width: 768px) {
        .hero-imgbanner{ height: 70vh !important;}
    }
</style>