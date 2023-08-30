<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import LeadFormLeft from '$lib/fr/commons/LeadFormLeft.svelte';
    import BreadCrumb from '$lib/fr/commons/breadcrumb.svelte';

    import ForSales from '$lib/fr/includes/explore/dubai-properties-areas/ForSale.svelte';
    import ForRents from '$lib/fr/includes/explore/dubai-properties-areas/ForRent.svelte';
    import Maps from '$lib/fr/includes/explore/dubai-properties-areas/maps.svelte';
    import { baseURL } from '../../../../../base-url';
    

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');
    let showHeight = true;
    
    let GetURLFstNAme =[];
    let GetURLLstNAme = [];
    
    onMount(async () =>{
        const response = await fetch(`${baseURL}/getAllSubCommunityByAreas/${pageSlug[4]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleProject API End

        const getFstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[2]}`);
        const dataFstFr = await getFstNameFr.json();
        GetURLFstNAme = dataFstFr;

        const getLstNameFr = await fetch(`${baseURL}/getBrdCums/${pageSlug[3]}`);
        const dataLstFr = await getLstNameFr.json();
        GetURLLstNAme = dataLstFr;

    });
    //console.log(pageSlug);
    
</script>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">

    <BreadCrumb 
        imgbg = {"/l9images/community/"+pageContent.pcbgimg} LinkOne={pageSlug[2]} 
        LinkTwo={pageSlug[3]} LinkThree={pageSlug[4]} 
        headings={pageContent.pctitle_fr ? pageContent.pctitle_fr : pageSlug[4]} Bdtype={5}
        FstName_Fr={GetURLFstNAme.name_fr} LstName_Fr={GetURLLstNAme.name_fr}

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
                {@html pageContent.pcdescription_fr ? pageContent.pcdescription_fr : "Content Required" } 
            </div>

            <div class="btnfixtop">
                <span class="d-flex flex-row-reverse">
                    <button class="btn-learn-more-two" on:click="{() => showHeight = !showHeight}">Read More</button>
                </span>
            </div>
        </div>
    </div>
</section>
<!-- End About Us Section -->

<ForSales MyCommunity={pageContent.pctitle ? pageContent.pctitle : pageSlug[4]} Ad_Type = 'Sale'  Unit_Type='Apartments' />

<ForRents MyCommunity={pageContent.pctitle ? pageContent.pctitle : pageSlug[4]} Ad_Type = 'Rent'  Unit_Type='Apartments' />

{#if pageContent.pcvideoid !== ""}
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

<Maps MyCommunity={pageContent.pctitle ? pageContent.pctitle : pageSlug[4]} Unit_Type='Apartments' />

<style>
    #about{padding:60px 0 0 0;}
    #ytube{ padding: 0px 0 60px 0;}
    .showHeight{ height: 320px;}
    .btnfixtop { position:absolute; top:0;} 
       
</style>
