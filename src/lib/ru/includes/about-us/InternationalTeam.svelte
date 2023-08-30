<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    import BreadCrumb from '$lib/ru/commons/breadcrumb.svelte';
    import { baseURL } from '../../../../base-url';
    
    let pageContent = [];
    let InternationalTeams = [];
    let GetURLFstNAme =[];
    let GetURLLstNAme = [];
    let pageSlug = $page.url.pathname.split('/');

    onMount(async () =>{

        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[3]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End

        const response1 = await fetch(`${baseURL}/getAllInternationalTeam`);
        const data1 = await response1.json();
        InternationalTeams = data1;
        //InternationalTeams API End
        
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

<BreadCrumb 
    LinkOne={pageSlug[2]} LinkTwo={pageSlug[3]}  Bdtype={2}
    FstName_Fr={GetURLFstNAme.name_ru} LstName_Fr={GetURLLstNAme.name_ru}
/>

<!--International Team -->
<section id="services" class="services section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        
        <div class="section-title mb-4">
            <h2>{pageContent.name_ru ? pageContent.name_ru :'Driven Properties International'}</h2>
        </div>
        
        <div class="row">            
            {#each InternationalTeams as internationalteams (internationalteams.id) }
                <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box">

                        <div class="icon">
                            <img src="{internationalteams.tmimgname ? "/l9images/teams/"+internationalteams.tmimgname : "/assets/img/team/gen_4066.jpg" }" alt="{internationalteams.fullname}" class="bx bxl-dribbble" />                        
                            <p>{@html internationalteams.tmslug_ru ? internationalteams.tmslug_ru :'China'}</p>
                        </div>

                        <div class="icon-msg">
                            <h4>{@html internationalteams.fullname_ru ? internationalteams.fullname_ru : 'Thomas Wan'}</h4> 
                            <p>{@html internationalteams.jobtitle_ru ? internationalteams.jobtitle_ru : 'Associate Partner'}</p>
                            <p><b>{@html internationalteams.tmphone ? internationalteams.tmphone : '+971 4 429 7040'}</b></p>
                            <p>{@html internationalteams.tmemail ? internationalteams.tmemail : 'thomasw@drivenproperties.com'}</p>
                        </div>
                    </div>
                </div>
                <!--International Team box {i} -->
            {/each}
        </div>
    </div>
</section>  
<!--International Team End -->  


<style>
    .section-title h2{font-size: 1.4rem;}
    .services .icon-box{ padding: 0px; margin: 0;}

    .services .icon-box .icon{margin:0; position: relative;}
    .services .icon-box > .icon img{ width: 100%;}
    .services .icon-box .icon > p {
        position: absolute; padding: 10px; color: #fff;
        bottom: 0; left: 0; right: 0; margin:0; 
        font-size: 1.1rem; font-weight: 400; letter-spacing: 0.5px;
    }

    .services .icon-box .icon-msg {padding: 10px;}
    .services .icon-box .icon-msg >h4{ font-size: 1.1rem; font-weight: 500 !important; margin-bottom:7px;}
    .services .icon-box .icon-msg >p{ font-weight: 400 !important;}
    
    @media only screen and (max-width: 768px) {

        section{ padding:0;}
        .services .icon-box{ padding: 0px; margin:7px 15px;}
    }
</style>
    