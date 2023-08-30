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
    //console.log(pageSlug);
</script>

<SEOTools MetaTitle ={pageContent.name} MetaDescription ={pageContent.name}/>

<BreadCrumb 
    LinkOne={pageSlug[1]} 
    LinkTwo={pageContent.name} 
    imgbg={pageContent.imgname ? "/l9images/banners/"+pageContent.imgname : "/assets/images/gen_3917.jpg"}
    headings ={pageContent.name ? pageContent.name : "Investing in Dubai Real Estate"}
    Bdtype={1}
/>

<LeadFormLeft/>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        {#if pageContent.videoid !==null && pageContent.titlename !==null}
            <div class="section-title">
                <h2>{@html pageContent.titlename ? pageContent.titlename : "WHY INVEST IN DUBAI?"}</h2>
            </div>

            <div>
                <div class="col-12 pt-4 pt-lg-0">
                    <p>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/{pageContent.videoid}?rel=0" title="#AskDriven: Why invest in Dubai?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

    /*====================================== #About Section ======================================*/

    #about table tr th.BDR{ border-left: 1px solid #cdd0d4; width: 50%; text-align: center;}
    #about table tr td.BDR{ border-left: 1px solid #cdd0d4; width: 50%; text-align: center;}

    table {
    border-collapse: collapse;
    width: 100%;
    }

    th, td {
    text-align: left;
    padding: 8px;
    }
    tbody, td, tfoot, th, thead, tr{ }
    tr:nth-child(even) {background-color: #f2f2f2;}

    /*====================================== #About Section End ======================================*/

    @media only screen and (max-width: 768px) {
        .hero-imgbanner{ height: 70vh !important;}
    }
</style>