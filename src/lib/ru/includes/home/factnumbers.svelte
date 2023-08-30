<script>
    import { onMount } from "svelte";

    export let pageContent;  
    export let FactNumbers; 

    onMount(()=>{
        console.log(FactNumbers);
    })
</script>

{#if FactNumbers !== ""}
<!-- ======= FACT NUMBERS Section ======= -->
<section id="fact-numbers" class="fact-numbers section-bg">
    <div class="container" data-aos="fade-up">

        <div class="section-title">
            <h2 class="h2-title">FAKTENZAHLEN</h2>
        </div>

        <div class="row mb-5 FNGAP g-0">  

            <!-- {#each  FactNumbers as FNumbers } -->
                <!-- <div class="col-lg-3 col-xl-3 col-md-6 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box text-center">
                        <img alt="drvn" src="{FNumbers.fnpimgname ? "/l9images/factnumbers/"+FNumbers.fnpimgname :"/assets/img/home/factnumbers/award.png"}" class="FNimg"/>
                        <h4>{FNumbers.fnpname}</h4>
                        <p>{FNumbers.fnptitlename}</p>
                    </div>
                </div> -->
            <!-- {/each} -->
            <div class="col-lg-4 col-xl-4 col-sm-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box text-center">
                    <img alt="drvn" src="/l9images/factnumbers/1666133745-award.png" class="FNimg"/>
                    <h4>50+</h4>
                    <p>AUSZEICHNUNGEN</p>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box text-center">
                    <img alt="drvn" src="/l9images/factnumbers/1666134001-googlereviews.png" class="FNimg"/>
                    <h4>900+</h4>
                    <p>GOOGLE-BEWERTUNGEN</p>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box text-center">
                    <img alt="drvn" src="/l9images/factnumbers/1666134960-salevalue.png" class="FNimg"/>
                    <h4>AED 20 Milliarden</h4>
                    <p>VERKAUFSWERT</p>
                </div>
            </div>
            
        </div>

        <div class="section-title">
            <h2 class="h2-title-2">IMMOBILIENINVESTITIONSMÖGLICHKEITEN IN DUBAI MIT IMMOBILIEN VON DRIVEN</h2>
            <p>Driven Properties ist einer der renommiertesten und angesehensten Namen auf dem Immobilienmarkt in Dubai. Wir verfügen über die größte Auswahl an Immobilien in Dubai, von prächtigen Villen und hochmodernen Apartments bis hin zu preisgünstigen Optionen für unsere kostenbewussten Käufer und Mieter.</p>
            <p>Der Immobilienmarkt in Dubai hat sich sowohl für einheimische als auch für ausländische Investoren als eine der lukrativsten und vielfältigsten Investitionsmöglichkeiten etabliert. Wenn Sie planen, Immobilien in Dubai zu kaufen, ist Driven Properties Ihr perfekter Partner, um sichere, attraktive und gründlich recherchierte Optionen vorzustellen. Sie können sich darauf verlassen, dass Sie es mit einem Unternehmen zu tun haben, das über einen tadellosen Ruf und weitreichende Referenzen verfügt. Das Portfolio von Driven Properties umfasst zum Verkauf stehende Immobilien in beliebten Gegenden und sicheren Communities. Wenn Sie auf der Suche nach Immobilieninvestitionen in Dubai sind, dann sind Sie bei Driven Properties genau richtig, um Ihre Anforderungen zu erfüllen und zu übertreffen.</p>
            <!-- {@html pageContent.description3} -->
        </div>

    </div>
</section>
<!-- End FACT NUMBERS Section -->

<style>
    
</style>
{/if}