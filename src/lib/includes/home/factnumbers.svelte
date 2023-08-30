<script>
    export let pageContent;  
    export let FactNumbers; 
</script>

{#if FactNumbers !== ""}
<!-- ======= FACT NUMBERS Section ======= -->
<section id="fact-numbers" class="fact-numbers section-bg">
    <div class="container" data-aos="fade-up">

        <div class="section-title">
            <h2 class="h2-title">FACT NUMBERS</h2>
        </div>

        <div class="row mb-5 FNGAP g-0">  

            {#each  FactNumbers as FNumbers }
                <div class="col-lg-3 col-xl-3 col-md-6 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box text-center">
                        <img alt="drvn" src="{FNumbers.fnpimgname ? "/l9images/factnumbers/"+FNumbers.fnpimgname :"/assets/img/home/factnumbers/award.png"}" class="FNimg"/>
                        <h4>{FNumbers.fnpname}</h4>
                        <p>{FNumbers.fnptitlename}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="section-title">
            <!--h2 class="h2-title-2">DUBAI REAL ESTATE INVESTMENT OPPORTUNITIES WITH DRIVEN PROPERTIES</h2>
            <p>Driven Properties is one of the most prestigious and esteemed names in the Dubai real estate market. We have the widest variety of properties in Dubai, from magnificent villas and state-of-the-art apartments to the budget options to suit our cost-conscious buyers and renters.</p>
            <p>Dubai's property market established itself as one of the most lucrative and diverse investment options for both local and expat investors. If you’re planning on buying properties in Dubai, Driven Properties is your perfect partner to introduce safe, attractive, and thoroughly researched options. You can rest comfortably knowing that you are dealing with a company with an impeccable reputation and a long trail of testimonials. Driven Properties portfolio includes properties for sale in popular areas and secure communities. If you are seeking for Dubai properties investment, then look no further than Driven Properties to meet and exceed your needs.</p-->
            {@html pageContent.description3}
        </div>

    </div>
</section>
<!-- End FACT NUMBERS Section -->

<style>
    
</style>
{/if}