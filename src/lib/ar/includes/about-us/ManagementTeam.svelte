<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    import { baseURL } from '../../../../base-url';

    let pageContent = [];
    let pageSlug = $page.url.pathname.split('/');
    onMount(async () =>{

        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[3]}`);
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End

    });
    //console.log(pageSlug);
</script>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center"> </section>
<!-- End Hero -->

<section id="drv-bread" class="section-bg">
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex flex-row bd-highlight">
                <!--a href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-whatsapp"></i></a-->
                <li class="breadcrumb-item bd-highlight"><a class="text-center" href="/"><i class="BrdFSbx bx bi-house-fill"></i></a></li>
                <li class="breadcrumb-item bd-highlight"><a href="/">About Us</a></li>
                <li class="breadcrumb-item bd-highlight active" aria-current="page">{@html pageContent.name_ar ? pageContent.name_ar : "Leadership Team" }</li>
            </ol>
        </nav>            
    </div>
</section>

<!--International Team -->
<section id="services" class="services section-bg">

    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title mb-4">
            <h1>{pageContent.name_ar ? pageContent.name_ar : "Leadership Team" }</h1>
        </div>

        <div class="row">
            <div class="mb-4 col-12 col-md-3 aos-animate" data-aos="zoom-in" data-aos-delay="200">

                <div class="icon-box">
                    <div class="icon">
                        <img src="/assets/img/team/gen_3_4061.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Abdullah Alajaji</h4> 
                        <p>Founder</p>
                    </div>
                </div>
                
            </div>

            <div class="mb-4 col-12 col-md-6 aos-animate txtContent" data-aos="zoom-in" data-aos-delay="200">
                {@html pageContent.description_ar ? pageContent.description_ar : "Content Required" } 
            </div>

            <div class="mb-4 col-12 col-md-3 aos-animate" data-aos="zoom-in" data-aos-delay="200">

                <div class="icon-box">
                    <div class="icon">
                        <img src="/assets/img/team/gen_4_4061.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4><a href="tel:+97144297040">+971 44 297 040</a></h4> 
                        <p><a href="mailto:info@drivenproperties.com">info@drivenproperties.com</a></p>
                        <div class="col MysocialLink">

                            <div class="btn-group btn-group-sm">
                                <a href="https://twitter.com/DrivenRE" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-twitter"></i></a>
                                <a href="https://www.youtube.com/c/DrivenPropertiesDubai/videos" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-youtube"></i></a>
                                <a href="https://www.facebook.com/DrivenPropertiesDubai" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-facebook-square"></i></a>
                                <a href="https://www.instagram.com/drivenproperties/" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/driven-properties-real-estate/?original_referer=https%3A%2F%2Fdev.drivenproperties.com%2F" target="DrvnPage" class="btn twitter"><i class="FSbx bx bxl-linkedin"></i></a>
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
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_747.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Khadija El Otmani</h4> 
                        <p>Managing Partner of Driven Holiday Homes</p>
                    </div>
                </div>
            </div>
            <!--International Team box 1-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="300">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_707.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Salman Einavi</h4> 
                        <p>Associate Partner</p>
                    </div>
                </div>
            </div>
            <!--International Team box 2-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="400">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_730.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Kianoush Darban</h4> 
                        <p>Associate Partner</p>
                    </div>
                </div>
            </div>
            <!--International Team box 3-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="500">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_1694.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Mohammed Abdulrahman</h4> 
                        <p>Associate Partner</p>
                    </div>
                </div>
            </div>
            <!--International Team box 4-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="600">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_949.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Lina Allaoa</h4> 
                        <p>Associate Partner</p>
                    </div>
                </div>
            </div>
            <!--International Team box 5-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="700">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_4413016.jpg" alt="" class="bx bxl-dribbble" />                        
                    </div>

                    <div class="icon-msg">
                        <h4>Hadi Hamra</h4> 
                        <p>Sales Director</p>
                    </div>
                </div>
            </div>
            <!--International Team box 6-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="800">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_607.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Marcela Herrera</h4> 
                        <p>Director of New Business Development</p>
                    </div>
                </div>
            </div>
            <!--International Team box 7-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="900">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_630.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Manju Radhamma</h4> 
                        <p>Director - Industrial Properties</p>
                    </div>
                </div>
            </div>
            <!--International Team box 8-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="1000">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_4413157.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Paul Musson</h4> 
                        <p>Sales Manager</p>
                    </div>
                </div>
            </div>
            <!--International Team box 9-->
            
            <div class="mb-4 col-lg-3 col-xl-3 col-md-6 aos-animate" data-aos="zoom-in" data-aos-delay="1100">
                <div class="icon-box">

                    <div class="icon">
                        <img src="/assets/img/team/gen_4413021.jpg" alt="" class="bx bxl-dribbble" />
                    </div>

                    <div class="icon-msg">
                        <h4>Ahlam Azzaoui</h4> 
                        <p>Business Development Manager</p>
                    </div>
                </div>
            </div>
            <!--International Team box 10-->
             
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
    