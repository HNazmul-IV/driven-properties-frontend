<script>

    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    import {GetLastFiveYear} from '$lib/helpers';    
    import BreadCrumb from '$lib/fr/commons/breadcrumb.svelte';
    import { baseURL } from '../../../../../base-url';

    let pageContent = [];
    let Testimonials = [];
    let pageSlug = $page.url.pathname.split('/');
    
    let GetURLFstNAme =[];
    let GetURLLstNAme = [];
    
    let date = new Date();
    let LFYears = GetLastFiveYear(5);

    let curYear = GetLastFiveYear(date.getFullYear());
    let StrtYears = GetLastFiveYear(2013);
    
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


        const response1 = await fetch(`${baseURL}/getAllTestimonials`);
        const data1 = await response1.json();
        Testimonials = data1;
        //Testimonials API End
    });

    //$: UYears = GetUniqueYears(awards.awdyear);

    //console.log(pageSlug);


</script>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">
    <BreadCrumb 
        LinkOne={pageSlug[1]} LinkTwo={pageSlug[2]} 
        LinkThree={pageSlug[3]} headings={pageContent.name_fr}
        FstName_Fr={GetURLFstNAme.name_fr} LstName_Fr={GetURLLstNAme.name_fr}
        Bdtype ={3}
    />
</section>


<!-- ======= Teams Section ======= -->
<section id="team" class="team section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
            <h2><h2>{@html pageContent.name_fr ? pageContent.name_fr : "CLIENT TESTIMONIALS"}</h2></h2>
        </div>

        <div class="row mt-5">            
            {#each Testimonials as testimonials (testimonials.id)}
                <div class="mb-5 col-lg-6 col-md-6 col-12 text-center aos-animate" data-aos="zoom-in" data-aos-delay="{testimonials.id}00">
                    <div class="icon-box">

                        <div class="icon">                            
                            <img src="{testimonials.tsimgname ? "/l9images/testimonials/"+ testimonials.tsimgname :'/assets/img/testimonials/gen_1067.jpg'}"  alt="{testimonials.clientname}" />
                            <!--p>Property Finder - 2021</p-->
                        </div>

                        <div class="icon-msg">
                            <p> 
                                <span><i class="FSbx bx bxs-quote-left"></i></span>
                                {@html testimonials.tsjobdescription_fr ? testimonials.tsjobdescription_fr:'Neena from Driven Properties is very professional in finding what we are exactly looking. She is highly skilled, and I will surely recommend her!'} 
                                <span><i class="FSbx bx bxs-quote-right"></i></span>
                            </p>
                            <h4>{testimonials.clientname_fr ? testimonials.clientname_fr :'Neena Dordevic'}</h4> 
                        </div>
                    </div>
                </div>
                <!--CLIENT TESTIMONIALS box 1-->
            {/each}
        </div>
                
    </div>
</section>
<!-- End Team Section -->


<style>
    .section-title h2{font-size: 1.4rem;}
    #team .icon-box{ margin: 0; background:#f4f4f4; padding: 30px 0; border-radius: 3px; min-height: 450px; height: 100%;}

    #team .icon-box .icon{margin:0 auto; width: 120px; height: 120px; border-radius:50%; overflow: hidden; border: 4px solid #fff;}
    #team  .icon-box > .icon img{ width:120px;}
        /*
            .services .icon-box .icon > p {
                position: absolute; padding: 10px; color: inherit;
                bottom: 0; left: 0; right: 0; margin:0; 
                font-size: 1.1rem; font-weight: 400; letter-spacing: 0.5px;
            }
        */
    #team .icon-box .icon-msg {padding: 10px;}
    #team .icon-box .icon-msg >p{ font-weight: 400 !important; border-bottom: 1px solid #dcdcdc; padding-bottom: 20px;}
    #team .icon-box .icon-msg p span i.FSbx{color:#222; }
    #team .icon-box .icon-msg >h4{ 
        font-size: 1.2rem; font-weight: 700 !important; margin-top: 10px; 
        line-height: 1.6rem;
    }


    
    .accordion-list{padding: 0;}
    .why-us .accordion-list li{ background-color: #dcdcdc;}
    .why-us .accordion-list { color: #222232;}
    .why-us .accordion-list span{ color: #222232; font-size: 1.7rem; font-weight:400;}
    .why-us .accordion-list a.collapsed:hover{ color: #222232;}
    .why-us .accordion-list i{ color: #222232; font-size: 1.7rem; font-weight:400;}
    ul.MyAwards{ list-style-type: disc;}
    ul.MyAwards >li {padding:0px; margin:25px; line-height:2px; font-size:1.1rem; font-weight: 300;}
    ul.MyAwards li > em{font-size:1rem; font-weight: 300; color:#222232;} 



    @media only screen and (max-width: 768px) {

        section{ padding:0;}
        .services .icon-box{ padding: 0px; margin:7px 15px;}

        ul.MyAwards >li {margin: 7px 20px; line-height: 25px; font-size: 0.9rem;}
        ul.MyAwards li > em{font-size:0.9rem;} 

    }
</style>
