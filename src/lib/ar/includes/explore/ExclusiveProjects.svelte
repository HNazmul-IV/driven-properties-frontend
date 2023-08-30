<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    
    import LeadFormLeft from '$lib/commons/LeadFormLeft.svelte'
    import BreadCrumb from '$lib/fr/commons/breadcrumb.svelte';
    import { baseURL } from '../../../../base-url';

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');

    let GetURLFstNAme =[];
    let GetURLLstNAme = [];

    onMount(async () =>{

        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[3]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End

        const getFstNameAr = await fetch(`${baseURL}/getBrdCums/${pageSlug[2]}`);
        const dataFstAr = await getFstNameAr.json();
        GetURLFstNAme = dataFstAr;

        const getLstNameAr = await fetch(`${baseURL}/getBrdCums/${pageSlug[3]}`);
        const dataLstAr = await getLstNameAr.json();
        GetURLLstNAme = dataLstAr;        


    });
    //console.log(pageSlug);

</script>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">

    <BreadCrumb 
        imgbg={pageContent.imgname ? "/l9images/banners/"+pageContent.imgname : "/assets/images/gen_3917.jpg"}
        LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} 
        headings={pageContent.name_ar}
        FstName_Ar={GetURLFstNAme.name_ar} LstName_Ar={GetURLLstNAme.name_ar}
        Bdtype ={1}
    />
    <LeadFormLeft/>
</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        
        {#if pageContent.videoid !==null && pageContent.titlename !==null }
            <div class="section-title">
                <h2>{@html pageContent.titlename_ar ? pageContent.titlename_ar : "WHY INVEST IN DUBAI?" }</h2>
            </div>

            <div>
                <div class="col-12 pt-4 pt-lg-0">
                    <p>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/{pageContent.Ytvideoid_ar ? pageContent.Ytvideoid_ar : pageContent.Ytvideoid }?rel=0" title="#AskDriven: Why invest in Dubai?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
            </div>
        {/if}

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0"> 
                {@html pageContent.description_ar ? pageContent.description_ar : "Content Required" }
            </div>            
        </div>
        
    </div>
</section>
<!-- End About Us Section -->
