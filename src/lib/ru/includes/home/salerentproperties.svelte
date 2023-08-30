<script>
  import { onMount } from "svelte";

  let emblaCarouselSvelte;
  let isMobile = false;
  onMount(async () => {
    if (window.innerWidth < 768) {
      emblaCarouselSvelte = (await import("embla-carousel-svelte")).default;
      isMobile = true;
    }
  });
</script>

<!-- ======= sale-rent Section ======= -->
<section id="sale-rent" class="sale-rent services section-bg">
  <div class="container aos-init aos-animate" data-aos="fade-up">
    <div class="section-title">
      <h2>IMMOBILIEN ZUM KAUF UND ZUR MIETE FINDEN</h2>
      <p>
        Driven Properties ist ein preisgekröntes Immobilienmakler- und Immobilienmanagementunternehmen mit Hauptniederlassung in Dubai. Seit seiner Gründung im Jahr 2012 setzt das Unternehmen neue
        Maßstäbe für die Branche und hat sich zu einem der führenden Full-Service-Immobilienberatungsunternehmen in der Region entwickelt.
      </p>
      <p>In einer Stadt, die ein Synonym für Immobilien ist, bieten unsere sachkundigen Berater ihr Fachwissen und ihren unvergleichlichen Service den anspruchsvollsten Kunden aus aller Welt an.</p>
      <p>
        Abgesehen von dem wohlverdienten Ruf für einen sehr persönlichen Service und eine makellose Kundenerfahrung hat sich Driven Properties einen Namen als eine der zuverlässigsten Quellen gemacht,
        wenn es um Informationen über Immobilien und Markttrends in Dubai geht.
      </p>
      <p>
        Ganz gleich, ob Sie eine Immobilie in Dubai zum Kauf oder zur Miete suchen, wir haben ein Team von Immobilienexperten, das Sie bei der Suche nach der richtigen Immobilie in beliebten Gegenden
        Dubais unterstützt. Wir helfen Ihnen nicht nur bei der Suche nach einer Immobilie in Dubai, sondern bieten auch eine Vielzahl von Immobiliendienstleistungen an, darunter Immobilienmanagement,
        Hypothekenberatung, Umzugsdienste, Immobilieninvestitionen, Immobilienbewertung, Immobilienvermittlung und vieles mehr.
      </p>
    </div>

    {#if isMobile}
      <div class="embla" dir="ltr">
        <div class="embla__viewport">
          <div class="sale-rent-home-container row SGAP g-10 embla" use:emblaCarouselSvelte>
            <div class="embla__container">
              <div class="embla__slide col-lg-6 col-xl-6 col-md-12 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1">
                <a href="/de/sales/buy-ready-properties/sale-apartments">
                  <div class="icon-box">
                    <div class="sale-rent-pro-container">
                      <img alt="drvn" src="/assets/images/shutterstock_2052298703.webp" class="img-fluid w-100 sale-rent-pro-img" />
                      <div class="sale-rent-pro-title">
                        <h6>APARTMENTS</h6>
                        <div class="sale-rent-row">
                          <div class="sale">Zum Verkauf</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="embla__slide col-lg-6 col-xl-6 col-md-12 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1">
                <a href="/de/sales/buy-ready-properties/sale-villas">
                  <div class="icon-box">
                    <div class="sale-rent-pro-container">
                      <img alt="drvn" src="/assets/images/shutterstock_1711133503.webp" class="img-fluid w-100 sale-rent-pro-img" />
                      <div class="sale-rent-pro-title">
                        <h6>VILLEN</h6>
                        <div class="sale-rent-row">
                          <div class="sale">Zum Verkauf</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {:else}
      <div class="sale-rent-home-container row SGAP g-10">
        <div class="col-lg-6 col-xl-6 col-md-12 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1">
          <a href="/de/sales/buy-ready-properties/sale-apartments">
            <div class="icon-box">
              <div class="sale-rent-pro-container">
                <img alt="drvn" src="/assets/images/shutterstock_2052298703.webp" class="img-fluid w-100 sale-rent-pro-img" />
                <div class="sale-rent-pro-title">
                  <h6>APARTMENTS</h6>
                  <div class="sale-rent-row">
                    <div class="sale">Zum Verkauf</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-12 d-flex flex-column justify-content-start align-items-stretch order-2 order-lg-1">
          <a href="/de/sales/buy-ready-properties/sale-villas">
            <div class="icon-box">
              <div class="sale-rent-pro-container">
                <img alt="drvn" src="/assets/images/shutterstock_1711133503.webp" class="img-fluid w-100 sale-rent-pro-img" />
                <div class="sale-rent-pro-title">
                  <h6>VILLEN</h6>
                  <div class="sale-rent-row">
                    <div class="sale">Zum Verkauf</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- End About Us Section -->
<style>
  .section-title {
    padding-bottom: 0px;
  }
  .sale-rent-pro-container {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 6px 2px #ccc;
  }
  .sale-rent-pro-title {
    padding: 1em;
    text-align: center;
    padding: 1em 0em 0.5em 0em;
  }
  a {
    color: black;
  }
  .services .icon-box {
    padding: 0px;
    margin: 0px 0px 0px 7px;
  }
  .sale-rent-row {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #d5d5d5;
    padding: 0.3em;
  }
  .sale-rent-row div {
    font-size: 15px;
    color: #666;
  }

  /* Embla css */

  .embla__container {
    display: flex;
    flex-direction: row;
    height: auto;
    margin-left: calc(var(--slide-spacing) * -1);
  }
  .embla__slide {
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
    position: relative;
  }
</style>
