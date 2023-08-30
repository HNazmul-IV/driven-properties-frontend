<script>
    import { onMount } from 'svelte';
    import { baseURL } from '../../../base-url';
    
    let FooterMenus =[];
    let Noarrow = [11,17,18,19,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79];
    
    const d = new Date();
    let year = d.getFullYear();
    
    onMount( async()=>{
        
        const response = await fetch(`${baseURL}/getAllHeaderMenus`);
        const data = await response.json();
        FooterMenus = data;
        //getAllHeaderMenus API End

    });
    
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
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Marina</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Palm Jumeirah</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Land</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">City Walk</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai DIFC</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Village Circle</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Hills Estate</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Bluewaters Island</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Creek Harbour</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Downtown Dubai</a></li>
                    </ul>

                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>OFF PLAN VILLAS</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">District One Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Golf Links Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Lamborghini Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Murooj Al Furjan West</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Eden The Valley</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">La Mer by Meraas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Fairway Vistas at Dubai Hills Estate</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Luxury Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Creek Edge Waterfront Villas</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">XV Villas</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Properties For Sale</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Properties For Rent</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Sell Your Property</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Buy & Rent Property Online</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Privacy Policy</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Terms & Conditions</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Sitemap</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>ABOUT COMPANY</h4>
                    <ul>
                        {#each FooterMenus as ACompany }
                            {#if ACompany.showAboutCompany === 'Yes'}
                                <li><i class="bx bx-chevron-right"></i> <a href="/ar"> {ACompany.name_ar}</a></li>
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
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Marina</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Palm Jumeirah</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Land</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">City Walk</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai DIFC</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Village Circle</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Hills Estate</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Bluewaters Island</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Dubai Creek Harbour</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Downtown Dubai</a></li>
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
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">District One Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Golf Links Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Lamborghini Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Murooj Al Furjan West</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Eden The Valley</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">La Mer by Meraas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Fairway Vistas at Dubai Hills Estate</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Jumeirah Luxury Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Creek Edge Waterfront Villas</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">XV Villas</a></li>
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
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Properties For Sale</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Properties For Rent</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Sell Your Property</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Buy & Rent Property Online</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Privacy Policy</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Terms & Conditions</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Sitemap</a></li>
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
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Our Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Real Estate Brokerage</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Property Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Development Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Strategic Advisory & Consulting</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Leadership Team</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">The Driven Difference</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Awards</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="/">Driven Properties International</a></li>
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
                    <h5>
                        تابعنا
                        :
                    </h5>
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
            © {year} درڤن للعقارات ش.ذ.م.م. جميع الحقوق محفوظة. شريك مع
            : 
            <a href="https://houza.com/en/buy/driven-properties-for-sale" target="_blank" class="partners">houza.com</a>
        </div>      
    </div>

</footer>
<!-- End Footer -->
