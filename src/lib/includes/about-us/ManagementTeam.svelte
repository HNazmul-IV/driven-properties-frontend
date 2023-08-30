<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import BreadCrumb from '$lib/commons/breadcrumb.svelte';
    import SEOTools from '$lib/commons/SEOText.svelte';
    import { baseURL } from '../../../base-url';

    let OurFounder = [];
    let WBSettings = [];
    let LocalTeams = [];
    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');
    
    onMount(async () =>{

        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End

        const response1 = await fetch(`${baseURL}/getFounder`);
        const data1 = await response1.json();
        OurFounder = data1;
        //OurFounder API End

        const response2 = await fetch(`${baseURL}/getAllLocalTeam`);
        const data2 = await response2.json();
        LocalTeams = data2;
        //LocalTeams API End

        const response3 = await fetch(`${baseURL}/getWBSetings`);
        const data3 = await response3.json();
        WBSettings = data3;
        //OurFounder API End
    });

    $: linkphone = WBSettings.mobile;    
        
</script>

<SEOTools MetaTitle ={pageContent.name} MetaDescription ={pageContent.name}/>

<BreadCrumb LinkOne={pageSlug[1]} LinkTwo={pageContent.name} Bdtype={2} />

<!--International Team -->
<section id="services" class="services section-bg">

    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title mb-4">
            <h1>{pageContent.name ? pageContent.name : "Leadership Team" }</h1>
        </div>

        <div class="row">
            <div class="mb-4 col-12 col-md-3 aos-animate" data-aos="zoom-in" data-aos-delay="200">

                <div class="icon-box">
                    <div class="icon">
                        <img src="{OurFounder.tmimgname ? "/l9images/teams/"+OurFounder.tmimgname : "" }" alt="{OurFounder.fullname}" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>{@html OurFounder.fullname ? OurFounder.fullname : 'Abdullah Alajaji'}</h4> 
                        <p>{@html OurFounder.jobtitle ? OurFounder.jobtitle : 'Founder'}</p>
                    </div>
                </div>
                
            </div>

            <div class="mb-4 col-12 col-md-6 aos-animate txtContent" data-aos="zoom-in" data-aos-delay="200">
                {@html OurFounder.jobdescription ? OurFounder.jobdescription : "Content Required" } 
            </div>

            <div class="mb-4 col-12 col-md-3 aos-animate" data-aos="zoom-in" data-aos-delay="200">

                <div class="icon-box">
                    <div class="icon">
                        <img src="{pageContent.imgname ? "/l9images/banners/"+pageContent.imgname :'/assets/img/team/gen_4_4061.jpg'}" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>
                            <a href="tel:{linkphone}">
                                {@html WBSettings.mobile ? WBSettings.mobile: '+971 44 297 040' }
                            </a>
                        </h4> 
                        <p>
                            <a href="mailto:{WBSettings.email}">
                                {@html WBSettings.email ? WBSettings.email: 'info@drivenproperties.com' }
                            </a>
                        </p>
                        <div class="col MysocialLink">

                            <div class="btn-group btn-group-sm">
                                <a href="{WBSettings.twitterlk ? WBSettings.twitterlk: 'https://twitter.com/DrivenRE'}" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-twitter"></i></a>
                                <a href="{WBSettings.youtubelk ? WBSettings.youtubelk: 'https://www.youtube.com/c/DrivenPropertiesDubai/videos'}" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-youtube"></i></a>
                                <a href="{WBSettings.facebooklk ? WBSettings.facebooklk: 'https://www.facebook.com/DrivenPropertiesDubai'}" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-facebook-square"></i></a>
                                <a href="{WBSettings.instagramlk ? WBSettings.instagramlk: 'https://www.instagram.com/drivenproperties/'}" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-instagram"></i></a>
                                <a href="{WBSettings.linkedinlk ? WBSettings.linkedinlk: 'https://www.linkedin.com/company/driven-properties-real-estate/?original_referer=https%3A%2F%2Fdev.drivenproperties.com%2F'}" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    <div class="container aos-init aos-animate mt-5" data-aos="fade-up">
        
        <div class="section-title mb-4">
            <h3>Driven Properties Management</h3>
        </div>
        
        <div class="row">
            {#each LocalTeams as locteams, i }
                <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div class="icon-box">

                        <div class="icon">
                            <img src="{locteams.tmimgname ? "/l9images/teams/"+locteams.tmimgname : "/assets/img/team/gen_747.jpg" }" alt="{locteams.fullname}" class="bx bxl-dribbble" />
                        </div>

                        <div class="icon-msg">
                            <h4>{@html locteams.fullname ? locteams.fullname : 'Khadija El Otmani'}</h4> 
                            <p>{@html locteams.jobtitle ? locteams.jobtitle : 'Managing Partner of Driven Holiday Homes'}</p>
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
    .services .icon-box .icon-msg p > a{color:#222;}
    .services .icon-box .icon-msg p > a:hover{text-decoration:underline;}

    .services .icon-box .icon-msg div.MysocialLink .btn-group-sm>.btn, .btn-sm{ padding: 0;}
    .services .icon-box .icon-msg div.MysocialLink a i.FSbx {
        color:#6a6a6a; padding:5px 5px 5px 0px;
    }
    
    @media only screen and (max-width: 768px) {

        section{ padding:0;}
        .services .icon-box{ padding: 0px; margin:7px 15px;}
        .services .txtContent{ padding:0px 20px;}
        .txtContent > p {}
    }
</style>
    