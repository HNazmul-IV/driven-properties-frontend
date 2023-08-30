<script>
    import { afterUpdate, onMount, tick } from 'svelte';

    import { page } from "$app/stores";   
    import { baseURL } from '../../../base-url';
    
    let FooterMenus =[];
    let POPULARDUBAIAREAS = [];
    let Noarrow = [11,17,18,19,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79];
    const d = new Date();
    let year = d.getFullYear();
    let pageProperties;
    let footerWidgetOne;
    let footerWidgetTwo;
    let pageSlugLength;
    
    afterUpdate( async()=>{
        
        let pageSlug = $page.url.pathname.split('/');
        pageSlugLength = pageSlug.length;
        const response = await fetch(`${baseURL}/getSignleHeaderMenu/${pageSlug[pageSlug.length-1]}`);
        const data = await response.json();
        pageProperties = data;
        // console.log(pageProperties);
        footerWidgetOne = pageProperties.footerWidgetOne;
        footerWidgetTwo = pageProperties.footerWidgetTwo;
        //getSignleHeaderMenu API End
    })

    onMount( async()=>{

        // console.log($page.url.pathname);
        
        const response = await fetch(`${baseURL}/getAllHeaderMenus`);
        const data = await response.json();
        FooterMenus = data;
        //getAllHeaderMenus API End

        const response1 = await fetch(`${baseURL}/getAllSubCommunities/1`);
        const data1 = await response1.json();
        POPULARDUBAIAREAS = data1;
        //getAllHeaderMenus API End

    });


    //
</script>

<!-- ======= Footer ======= -->
<footer id="footer">

    <div class="footer-newsletter">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="" method="post">
                        <input type="email" name="email"><input type="submit" value="Subscribe">
                    </form>
                </div>
            </div>
        </div>
    </div>


    <div class="footer-top">
        <div class="container">
            <div class="row" id="Dsk">

                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>POPULAR DUBAI AREAS</h4>
                    <ul>
                        {#each POPULARDUBAIAREAS as PDAS }
                            {#if PDAS.showPopularDubaiArea === 'Yes'}
                                <li><i class="bx bx-chevron-right"></i> <a sveltekit:reload href="/ru/explore/dubai-properties-areas/{PDAS.pcslug}"> {PDAS.pctitle}</a></li>
                            {/if}
                        {/each}

                        <!-- <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Marina</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Palm Jumeirah</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Land</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">City Walk</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai DIFC</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Village Circle</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Hills Estate</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Bluewaters Island</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Creek Harbour</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Downtown Dubai</a></li> -->
                    </ul>

                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>OFF PLAN VILLAS</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">District One Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Golf Links Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Lamborghini Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Murooj Al Furjan West</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Eden The Valley</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">La Mer by Meraas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Fairway Vistas at Dubai Hills Estate</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Jumeirah Luxury Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Creek Edge Waterfront Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">XV Villas</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/sales/buy-ready-properties/sale-apartments">Properties For Sale</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/rentals/properties-for-rent/rent-apartments">Properties For Rent</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/sales/seller/sell-property-in-dubai">Sell Your Property</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Buy & Rent Property Online</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Privacy Policy</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Terms & Conditions</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Sitemap</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>ABOUT COMPANY</h4>
                    <ul>
                        {#each FooterMenus as ACompany }
                            {#if ACompany.showAboutCompany === 'Yes'}
                                <li><i class="bx bx-chevron-right"></i> <a href="/ru/{ACompany.showAboutURL}"> {ACompany.name}</a></li>
                            {/if}
                        {/each}

                        <!--li><i class="bx bx-chevron-right"></i> <a href="/">Our Services</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Real Estate Brokerage</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Property Management</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Development Management</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Strategic Advisory & Consulting</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Leadership Team</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">The Driven Difference</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Awards</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Driven Properties International</a></li-->
                    </ul>
                </div>
            </div>

            <div class="row" id="Mob">

                <div class="col-lg-3 col-md-6 footer-links">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    POPULAR DUBAI AREAS
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <ul>

                                    {#each POPULARDUBAIAREAS as PDAS }
                                        {#if PDAS.showPopularDubaiArea === 'Yes'}
                                            <li><i class="bx bx-chevron-right"></i> <a sveltekit:reload href="/ru/explore/dubai-properties-areas/{PDAS.pcslug}"> {PDAS.pctitle}</a></li>
                                        {/if}
                                    {/each}

                                    <!-- <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Marina</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Palm Jumeirah</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Land</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">City Walk</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai DIFC</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Village Circle</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Hills Estate</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Bluewaters Island</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Creek Harbour</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Downtown Dubai</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>            
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    OFF PLAN VILLAS
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">District One Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Golf Links Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Lamborghini Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Murooj Al Furjan West</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Eden The Valley</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">La Mer by Meraas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Fairway Vistas at Dubai Hills Estate</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Jumeirah Luxury Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Creek Edge Waterfront Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">XV Villas</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>          
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    QUICK LINKS
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/sales/buy-ready-properties/sale-apartments">Properties For Sale</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/rentals/properties-for-rent/rent-apartments">Properties For Rent</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/sales/seller/sell-property-in-dubai">Sell Your Property</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Buy & Rent Property Online</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Privacy Policy</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Terms & Conditions</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/ru/">Sitemap</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    ABOUT COMPANY
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <ul>
                                    {#each FooterMenus as ACompany }
                                        {#if ACompany.showAboutCompany === 'Yes'}
                                            <li><i class="bx bx-chevron-right"></i> <a href="/ru/"> {ACompany.name}</a></li>
                                        {/if}
                                    {/each}

                                    <!--li><i class="bx bx-chevron-right"></i> <a href="/">Our Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Real Estate Brokerage</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Property Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Development Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Strategic Advisory & Consulting</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Leadership Team</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">The Driven Difference</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Awards</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Driven Properties International</a></li-->
                                </ul>            
                            </div>
                        </div>
                    </div>            
                </div>
            </div>

        </div>
    </div>

    <div class="container footer-bottom clearfix">
        <div class="copyright">

            <div class="footer-links d-flex flex-row bd-highlight">
                <div class="p-2 bd-highlight">
                    <h5>Follow Us :</h5>
                </div>
                <div class="p-2 bd-highlight">
                    <div class="social-links">
                        <a href="https://twitter.com/DrivenRE" target="DrvnPage" class="twitter"><i class="FSbx bx bxl-twitter"></i></a>            
                        <a href="https://www.youtube.com/c/DrivenPropertiesDubai/videos" target="DrvnPage" class="youtube"><i class="FSbx bx bxl-youtube"></i></a>
                        <a href="https://www.facebook.com/DrivenPropertiesDubai" target="DrvnPage" class="facebook"><i class="FSbx bx bxl-facebook-square"></i></a>
                        <a href="https://www.instagram.com/drivenproperties/" target="DrvnPage" class="instagram"><i class="FSbx bx bxl-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/driven-properties-real-estate?original_referer=https%3A%2F%2Fdev.drivenproperties.com%2F" target="DrvnPage" class="linkedin"><i class="FSbx bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="credits">
            <a href="tel:800374836">
                <img src="https://www.drivenproperties.com/assets/imgs/toll-free-driven-properties.png" alt="df" class="Fcallnow"/>
            </a>
        </div>
    </div>

    <div class="container footer-bottom clearfix">
        <div class="copyright text-center">
            &copy; {year} Copyright <strong><span>Driven Properties LLC</span></strong>. 
            All Rights Reserved. Partner with : <a href="https://houza.com/en/buy/driven-properties-for-sale" target="_blank" class="partners">houza.com</a>
        </div>      
    </div>


    
</footer>
<!-- End Footer -->
<style>
    @media(max-width: 768px){
        .float-icon-box {
            padding: 6px 9px;
            bottom: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            border-radius: 100px;
            font-size: 26px;
            color: #888;
            cursor: pointer;
            z-index: 1;
        }
        
        .form-close{
            color: red;
        }
        .bi, .bi-whatsapp{
            border-radius: 43px;
            padding: 6px 7px;
            color: #F7F4F5;
            font-size: 21px;
        }
        .bi-x-lg{
            color: red !important;
        }
        span.float-text-icon {
            font-size: 18px;
            margin-left: 5px;
            color: white;
        }
        .icon-container {
            background: #00000085;
            height: 50px;
            width: 100%;
            position: fixed;
            bottom: -1px;
            z-index: 1;
            display: flex;
            justify-content: space-evenly;
        }
        .bi-card-heading:before, .bi-whatsapp::before, .bi-x-lg:before{
            font-size: 18px;
        }
        .bi-whatsapp::before {
            color: white;
            content: "\f618";
            background: #47C357 !important;
            border-radius: 101px;
        }
        .bi-card-heading:before{
            background-color: #4167B1;
            color:white
        }
    }
    @media(min-width: 769px){
        .float-icon-box{
            display: none;
        }
    }
</style>