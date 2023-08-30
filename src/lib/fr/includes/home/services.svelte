<script>
    export let pageContent; 
    export let AllHomeServices;
</script>
<!-- ======= Services Section ======= -->
<section id="services" class="services">
    <div class="container" data-aos="fade-up">

        <div class="section-title">
            <!--h2 class="S-h2-title">Services</h2>
            <p>Driven Properties offers the full scope of real estate services, creating the perfect one-stop solution when it comes to all your real estate questions and needs. Whether it is full management of your property, help with financing, interior design or turning your property to a holiday home, our team can assist you every step of the way.</p>
            <p>Since 2012, Driven Properties has grown as one of the leading real estate agencies in Dubai and offers an array of real estate services that include real estate property brokerage, commercial brokerage, real estate property management, investment and different types of consultancy. Reach out today to have all your questions answered.</p-->

            {@html pageContent.description2_fr}
        </div>

        <div class="row SGAP g-0">

            {#each  AllHomeServices as AHServices (AHServices.id) }
                <div class="col-lg-4 col-xl-4 col-md-6 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100">
                    <a href="/fr/about-us/our-services{AHServices.slug}">
                        <div class="icon-box">
                            <img alt="drvn" src="{AHServices.thimgname ? "/l9images/banners/"+AHServices.thimgname :"/assets/img/home/services/service-1.jpg"}" width="100%"/>
                            <h4>{@html AHServices.metatitle_fr ? AHServices.metatitle_fr : 'Property Management'}</h4>
                        </div>
                    </a>
                </div>
            {/each}           
        </div>

        <div class="row">
            <div class="col-lg-12 col-xl-12 col-md-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <span class="d-flex flex-row-reverse">
                    <a href="/fr/" class="btn-learn-more-two">Plus de services</a>
                </span>
            </div>

        </div>

    </div>
</section>
<!-- End Services Section -->

