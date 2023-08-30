<script>

    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    import {GetLastFiveYear} from '$lib/helpers';    
    import BreadCrumb from '$lib/ru/commons/breadcrumb.svelte';
    import { baseURL } from '../../../../../base-url';

    let pageContent = [];
    let Awards = [];
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

        const response1 = await fetch(`${baseURL}/getAllAwards`);
        const data1 = await response1.json();
        Awards = data1;
        //Awards API End
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
        LinkThree={pageSlug[3]} headings={pageSlug[4]+" - "+pageContent.name_ru}
        FstName_Fr={GetURLFstNAme.name_ru} LstName_Fr={GetURLLstNAme.name_ru}
        Bdtype ={3}
    />
</section>

<!--International Team -->
<section id="services" class="services section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">
        
        <div class="section-title mb-4">
            <h2>{@html pageContent.name_ru ? pageContent.name_ru : "Best Real Estate Company"}</h2>
        </div>
        
        <div class="row">
            {#each Awards as awards (awards.id)}
                {#if (awards.awdyear >= LFYears) && (awards.awdimgname !== null) }
                    <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                        <div class="icon-box">

                            <div class="icon">
                                <img src="{awards.awdimgname ? "/l9images/awards/"+awards.awdimgname :'/assets/img/awards/gen_4413139.jpg'}" alt="as" class="bx bxl-dribbble" />
                                <!--p>Property Finder - 2021</p-->
                            </div>

                            <div class="icon-msg">
                                <h4>{@html awards.awdtitle_ru ? awards.awdtitle_ru: 'Dubai Large, No 1 Best Quality Brokerage'}</h4> 
                                <p>
                                    {@html awards.awdcompany_ru ? awards.awdcompany_ru: 'Property Finder'}
                                    - 
                                    {@html awards.awdyear ? awards.awdyear: '2021'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--International Team box {awards.id}-->
                {/if}
            {/each}            
        </div>
    </div>
</section>  
<!--International Team End -->


<section id="why-us" class="why-us section-bg">
    <div class="container">
        <div class="row">
            <div class="accordion-list">
                <ul>
                    {#each Array(StrtYears) as _, curYear (curYear) }
                        <li>
                            <a data-bs-toggle="collapse" href="/" class="collapse collapsed" data-bs-target="#accordion-list-{date.getFullYear() - curYear}" aria-expanded="false">
                                <span>{date.getFullYear() - curYear  }</span> 
                                <i class="bx bx-plus icon-show"></i>
                                <i class="bx bx-minus icon-close"></i>
                            </a>
                            <div id="accordion-list-{date.getFullYear() - curYear }" class="collapse" data-bs-parent=".accordion-list" style="">
                                <ul class="MyAwards">
                                    {#each Awards as awards (awards.id)}
                                        {#if (awards.awdyear == date.getFullYear() - curYear)}
                                            <li>
                                                {@html awards.awdtitle_ru ? awards.awdtitle_ru: 'Appreciation Award '}
                                                - 
                                                <em>
                                                    {@html awards.awdcompany_ru ? awards.awdcompany_ru: 'Nshama'}
                                                </em>
                                            </li>
                                        {/if}
                                    {/each}
                                </ul>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>


<style>
    .section-title h2{font-size: 1.4rem;}
    .services .icon-box{ padding: 0px; margin: 0;}

    .services .icon-box .icon{margin:0; position: relative;}
    .services .icon-box > .icon img{ width: 100%;}
        /*
            .services .icon-box .icon > p {
                position: absolute; padding: 10px; color: inherit;
                bottom: 0; left: 0; right: 0; margin:0; 
                font-size: 1.1rem; font-weight: 400; letter-spacing: 0.5px;
            }
        */
    .services .icon-box .icon-msg {padding: 10px;}
    .services .icon-box .icon-msg >h4{ 
        font-size: 0.9rem; font-weight: 700 !important; margin-bottom: 7px; 
        border-bottom: 1px solid #dcdcdc; line-height: 1.6rem;
    }
    .services .icon-box .icon-msg >p{ font-weight: 400 !important;}
    
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
    