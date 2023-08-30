<!-- ======= Header ======= -->
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">
        <a sveltekit:prefetch href="/" class="logo me-auto">
            <img alt="drvn" src="/assets/images/Group-973.png" class="img-fluid">
        </a>

        <div class="d-inline-flex justify-content-start ">
            <div class="offcanvas offcanvas-bottom" id="s-demo">
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title">Heading</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Some text lorem ipsum.</p>
                    <p>Some text lorem ipsum.</p>
                    <p>Some text lorem ipsum.</p>
                    <button class="btn btn-secondary" type="button">A Button</button>
                </div>
            </div>
            <button class="SearchBtn s-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#s-demo">
                <i class="bi-search"></i>
            </button>
        </div>

        <nav id="navbar" class="navbar">
            <ul>
                <li class="dropdown"><a sveltekit:prefetch href="/"><span>ABOUT US</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li class="dropdown"><a sveltekit:prefetch href="/"><span>Our Services</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/about-us/our-services/real-estate-brokage">Reals Estate Brokage</a></li>
                                <li><a sveltekit:prefetch href="/about-us/our-services/property-management">Property Management</a></li>
                                <li><a sveltekit:prefetch href="/about-us/our-services/development-management">Development Management</a></li>
                                <li><a sveltekit:prefetch href="/about-us/our-services/strategic-advisory-and-consulting">Strategic Adviosry & Consulting</a></li>
                                <li><a sveltekit:prefetch href="/about-us/our-services/exclusive-sales-and-marketing">Exclusive Sales & Marketing</a></li>
                                <li><a sveltekit:prefetch href="/about-us/our-services/development-consultancy">Development Consultancy</a></li>
                                <li><a sveltekit:prefetch href="/about-us/our-services/corporate-occupier-services">Corporate Occupier Services</a></li>
                            </ul>
                        </li>
                        <li><a sveltekit:prefetch href="/about-us/management">Leadership Team</a></li>
                        <li class="dropdown"><a sveltekit:prefetch href="/"><span>Track Record</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/">The Driven Difference</a></li>
                                <li><a sveltekit:prefetch href="/about-us/track-record/driven-team">Team Photo / Video</a></li>
                                <li><a sveltekit:prefetch href="/about-us/track-record/awards">Awards</a></li>
                                <li><a sveltekit:prefetch href="/about-us/track-record/client-testimonials">Testimonials</a></li>
                            </ul>
                        </li>
                        <li><a sveltekit:prefetch href="/about-us/driven-properties-international">Driven Properties International</a></li>
                        <li><a sveltekit:prefetch href="/about-us/preferred-partners">Preferred Partners</a></li>
                        <li><a sveltekit:prefetch href="/">Contact Us</a></li>
                    </ul>
                </li>
                
                <li class="dropdown"><a sveltekit:prefetch href="/"><span>SALES</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li class="dropdown"><a sveltekitPrefetch href="/sales/buy-ready-properties/sale-apartments"><span>Buy Ready Property </span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a  href="/sales/buy-ready-properties/sale-apartments">Ready Apartments</a></li>
                                <li><a sveltekit:prefetch href="/sales/buy-ready-properties/sale-villas">Ready Villas</a></li>
                                <li><a sveltekit:prefetch href="/sales/buy-ready-properties/sale-townhouses">Ready Townhouses</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a sveltekit:prefetch href="/sales/buy-offplan/offplan-apartments"><span>Buy Off Plan</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/sales/buy-offplan/offplan-apartments">Off Plan Apartments</a></li>
                                <li><a sveltekit:prefetch href="/sales/buy-offplan/offplan-villa">Off Plan Villas</a></li>
                                <li><a sveltekit:prefetch href="/sales/buy-offplan/offplan-townhouses">Off Plan Townhouses</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a sveltekit:prefetch href="/sales/buy-plots/sale-land"><span>Buy Plots</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/sales/buy-plots/sales-land">Land Plots</a></li>
                                <li><a sveltekit:prefetch href="/">Villa Plots</a></li>
                                <li><a sveltekit:prefetch href="/">Waterfront Plots</a></li>
                                <li><a sveltekit:prefetch href="/">Townhouses Plots</a></li>
                                <li><a sveltekit:prefetch href="/">Building Plots</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a sveltekit:prefetch href="/sales/commercial-for-sale/sale-commercial"><span>Commercial</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/sales/commercial-for-sale/sale-commercial">Commerical For Sale</a></li>
                                <li><a sveltekit:prefetch href="/sales/industrial-for-sale/sale-industrial">Industrial For Sale</a></li>
                                <li><a sveltekit:prefetch href="/">Staff Accommodation</a></li>
                                <li><a sveltekit:prefetch href="/">Retail Shops</a></li>
                                <li><a sveltekit:prefetch href="/">Office Spaces</a></li>
                                <li><a sveltekit:prefetch href="/">Executive Housing</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a sveltekit:prefetch href="/"><span>Seller</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/sales/seller/why-list-with-driven">How to Sell Property?</a></li>
                                <li><a sveltekit:prefetch href="/sales/seller/sell-property-in-dubai">Why list with Driven?</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="dropdown"><a sveltekit:prefetch href="/"><span>RENTAL</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li class="dropdown"><a sveltekit:prefetch href="/rentals/properties-for-rent/rent-apartments"><span>Residential</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/rentals/properties-for-rent/rent-apartments">Rent Apartments</a></li>
                                <li><a sveltekit:prefetch href="/rentals/properties-for-rent/rent-villas">Rent Villas</a></li>
                                <li><a sveltekit:prefetch href="/rentals/properties-for-rent/rent-townhouses">Rent Townhouses</a></li>
                                <li><a sveltekit:prefetch href="/rentals/properties-for-rent/short-term-rentals">Short Term Rental</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a sveltekit:prefetch href="/rentals/commerial-for-rent/rent-commercial"><span>Commerical</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/rentals/commerial-for-rent/rent-commercial">Commerial For Rent</a></li>
                                <li><a sveltekit:prefetch href="/rentals/industrial-for-rent/rent-industrial">Industrail For Rent</a></li>
                                <li><a sveltekit:prefetch href="/">Staff Accommodation</a></li>
                                <li><a sveltekit:prefetch href="/">Retail Shops</a></li>
                                <li><a sveltekit:prefetch href="/">Office Spaces</a></li>
                                <li><a sveltekit:prefetch href="/">Executive Housing</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a sveltekit:prefetch href="/"><span>Landlord Services</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a sveltekit:prefetch href="/">Landlord Representation</a></li>
                                <li><a sveltekit:prefetch href="/">Why list with Driven?</a></li>
                                <li><a sveltekit:prefetch href="/">Property Management</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="dropdown"><a sveltekit:prefetch href="/"><span>EXPLORE</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a sveltekit:prefetch href="/explore/why-dubai">Why Dubai?</a></li>
                        <li><a sveltekit:prefetch href="/explore/real-estate-investment-in-dubai">Investing in Dubai Real Estate</a></li>
                        <li><a sveltekit:prefetch href="/explore/dubai-properties-areas">Area Guides</a></li>
                        <li><a sveltekit:prefetch href="/explore/abu-dhabi-projects">Abu Dhabi Projects</a></li>
                        <li><a sveltekit:prefetch href="/">New Development Dubai</a></li>
                        <li><a sveltekit:prefetch href="/">Exclusive Projects</a></li>
                        <li><a sveltekit:prefetch href="/">Ready Projects</a></li>
                        <li><a sveltekit:prefetch href="/">Luxury Property</a></li>
                        <li><a sveltekit:prefetch href="/">Blog</a></li>
                    </ul>
                </li>

                <li class="dropdown"><a sveltekit:prefetch href="/"><span>MARKET TRENDS</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a sveltekit:prefetch href="/">Daily Transactions</a></li>
                        <li><a sveltekit:prefetch href="/">Sales Transactions</a></li>
                        <li><a sveltekit:prefetch href="/">Market Guide</a></li>
                        <li><a sveltekit:prefetch href="/">Rental Transactions</a></li>
                        <li><a sveltekit:prefetch href="/">Service Charge Index</a></li>
                    </ul>
                </li>

                <li>
                    <div class="d-flex flex-row justify-content-center bd-highlight">
                        <div class="p-0 bd-highlight">
                            <a sveltekit:prefetch href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-telephone"></i></a>
                        </div>
                        <div class="p-0 bd-highlight">
                            <a sveltekit:prefetch href="tel:+97144297040" class="whatsapp text-center"><i class="FSbx bx bi-whatsapp"></i></a>
                        </div>
                    </div>            

                </li>
                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0">
                    <a class="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ENGLISH 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                    </a>
                    <ul id="lang" class="dropdown-menu dropdown-menu-end border-0 shadow-lg" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/">ENGLISH 🏴󠁧󠁢󠁥󠁮󠁧󠁿</a></li>
                        <li><a class="dropdown-item" href="/">العربية 🇦🇪</a></li>
                        <li><a class="dropdown-item" href="/">French 🇫🇷</a></li>
                        <!--li><a class="dropdown-item" href="/">RU 🇷🇺</a></li-->
                    </ul>                  
                </li>          

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>

        </nav>
        <!-- .navbar -->

    </div>
</header>
<!-- End Header -->
