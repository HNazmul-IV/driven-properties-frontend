<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    
    import LeadFormLeft from '$lib/fr/commons/LeadFormLeft.svelte'
    import BreadCrumb from '$lib/fr/commons/breadcrumb.svelte';
    import { baseURL } from '../../../../../base-url';

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');

    let GetURLFstNAme =[];
    let GetURLLstNAme = [];

    onMount(async () =>{

        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[4]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End

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
        imgbg = {"/l9images/banners/"+pageContent.imgname} LinkOne={pageSlug[1]} 
        LinkTwo={pageSlug[2]} LinkThree={pageSlug[3]} headings={pageContent.name_fr} Bdtype={1}
        FstName_Fr={GetURLFstNAme.name_fr} LstName_Fr={GetURLLstNAme.name_fr}
    />
    <LeadFormLeft/>
</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        <!--div class="section-title">
            <h2>{@html pageContent.name_fr ? pageContent.name_fr : "Real Estate Brokerage" }</h2>
        </div-->

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0">
                {@html pageContent.description_fr ? pageContent.description_fr : "Content Required" } 
            </div>
        </div>
        
    </div>
</section>
<!-- End About Us Section -->