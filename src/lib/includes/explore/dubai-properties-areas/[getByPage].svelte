<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import LeadFormLeft from '$lib/commons/LeadFormLeft.svelte';
    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import SEOTools from '$lib/commons/SEOText.svelte';

    import ForSales from '$lib/includes/explore/dubai-properties-areas/ForSale.svelte';
    import ForRents from '$lib/includes/explore/dubai-properties-areas/ForRent.svelte';
    import ReadyProjects from '$lib/includes/explore/dubai-properties-areas/ReadyProject.svelte';
    import OffPlan from '$lib/includes/explore/dubai-properties-areas/OffPlan.svelte';
    
    import Maps from '$lib/includes/explore/dubai-properties-areas/maps.svelte';
    import { baseURL } from '../../../../base-url';
    

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');
    let showHeight = true;
    
    onMount(async () =>{

        const response = await fetch(`${baseURL}/getAllSubCommunityByAreas/${pageSlug[3]}`);
        const data = await response.json();
        pageContent = data;
        console.log(pageContent);
        //getSignleProject API End
    });
    //console.log(pageSlug);
    
</script>

<SEOTools MetaTitle ={pageContent.pctitle} MetaDescription ={pageContent.pctitle}/>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">

    <BreadCrumb 
        imgbg = {"/l9images/community/"+pageContent.pcbgimg} LinkOne={pageSlug[1]} 
        LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} headings={pageContent.pctitle ? pageContent.pctitle : pageSlug[3]} Bdtype={5}
    />
    <LeadFormLeft/>
        
</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <!--div class="section-title">
            <h2>{@html pageContent.name ? pageContent.name : "Corporate Occupier Services" }</h2>
        </div-->

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0" class:showHeight>
                {@html pageContent.pcdescription ? pageContent.pcdescription : "Content Required" } 
            </div>

            <!-- <div class="btnfixtop"> -->
            <div id="read-more-container">
                <span class="d-flex flex-row-reverse">
                    <button class="btn-learn-more-two" on:click="{() => showHeight = !showHeight}">{showHeight?'Read More':'Read Less'}</button>
                </span>
            </div>
        </div>
    </div>
</section>
<!-- End About Us Section -->

<!-- Listing according types -->
<ForSales MyCommunity={pageContent.pctitle ? pageContent.pctitle : pageSlug[3]} Ad_Type = 'Sale'  Unit_Type='Apartments' />

<ForRents MyCommunity={pageContent.pctitle ? pageContent.pctitle : pageSlug[3]} Ad_Type = 'Rent'  Unit_Type='Apartments' />

<ReadyProjects MyCommunity={pageContent.pctitle ? pageContent.pctitle : pageSlug[3]} searchKey="ready-projects" />
<OffPlan MyCommunity={pageContent.pctitle ? pageContent.pctitle : pageSlug[3]} searchKey2="new-development" />

<!-- Video Section -->
{#if pageContent.pcvideoid !== null }
<section id="ytube">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="text-uppercase mb-5 mt-5">Video</h4>
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/{pageContent.pcvideoid}?rel=0"  allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>
{/if}

<!-- Map Section -->
<Maps lng={pageContent.pclog} lat={pageContent.pclat} MyCommunity={pageContent.pctitle ? pageContent.pctitle : pageSlug[3]} Unit_Type='Apartments' />

<style>
    #about{padding:60px 0 0 0;}
    #ytube{ padding: 0px 0 60px 0;}
    .showHeight{ height: 320px;}
    .btnfixtop { position:absolute; top:0;} 
    div#read-more-container {
        width: 100%;
        background: white;
        padding: 10px 0 30px 0px;
    }
    div#read-more-container {
        width: 100%;
        background: white;
        padding: 10px 0 30px 0px;
        margin-top: 15px;
    }
    button.btn-learn-more-two {
        text-align: center;
        margin: auto;
        border-radius: 100px;
        width: 200px;
        margin-top: 25px;
    }
    .btn-learn-more-two {
        margin-top: 15px;
        box-shadow: 0px 0px 4px 1px #ccc;
        border: none;
    }
    @media only screen and (min-width: 769px){
        .btn-learn-more-two {
            border-radius: 42px !important;
        }  
    }
</style>
