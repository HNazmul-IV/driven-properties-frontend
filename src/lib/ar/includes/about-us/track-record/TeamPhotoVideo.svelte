<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
    import { baseURL } from '../../../../../base-url';

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
                <li class="breadcrumb-item bd-highlight"><a href="/">Track Record</a></li>
                <li class="breadcrumb-item bd-highlight active" aria-current="page">{ pageContent.titlename ? pageContent.titlename : "Driven Properties Team" }</li>
            </ol>
        </nav>
        <h1 class="text-uppercase">{ pageContent.titlename ? pageContent.titlename : "Driven Properties Team" }</h1>
    </div>

    <div class="container">
        <img class="hero-imgbanner" src="{pageContent.imgname ? "/l9images/banners/"+pageContent.imgname : "/assets/images/driven-group-image.png" }" alt="asd" />
    </div>   

</section>

<!-- ======= About Us Section ======= -->
<section id="about" class="about section-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0"> 
                {@html pageContent.description ? pageContent.description : "Content Required" }
            </div>            
        </div>
        
    </div>
</section>
<!-- End About Us Section -->

<style>

section{padding: 10px 0 100px 0;}
#about .content {
    border:1px solid #cbcbcb; margin: 1px; padding: 20px 10px 60px 10px; background-color: #f8f8f8;
}
.content div.section-title >h5{ font-size: 1.4rem; font-weight: 900 !important; margin-bottom:15px; }
.section-title{ padding-top: 20px;}
.hero-imgbanner{ 
    width: 100%; height:auto; margin: 1.5rem 0 0.5rem 0;
}

@media only screen and (max-width: 768px) {
    
}
</style>