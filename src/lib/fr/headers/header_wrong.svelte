<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { baseURL } from '../../../base-url';
    let HeaderMenus =[];
    let level=0;
    let parent=0;
    let activeaccordion = true;
    let Noarrow = [11,17,18,19,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79];
    
    onMount( async()=>{
        const response = await fetch(`${baseURL}/getAllHeaderMenus`);
        const data = await response.json();
        HeaderMenus = data;
        //getAllHeaderMenus API End

    });
    

    /*
    function ParentMenu($parent=0, $level=0){
    $res =  DB::table('tbl_menus')->where(['pid'=>$parent])->get();
    foreach($res as $rows):
        
    echo "<option value='".$rows->id."'> 
    <b> ".str_repeat('-',$level).' </b> '
    .$rows->name."</option>";    
    ParentMenu($rows->id, $level+1);
    endforeach;
    }
    // ParentMenu End
    */
    
    const ParentMenu = (Menudata ,parent, level)=>{
        //console.log(Menudata);
        //$res =  Menudata;
    };
</script>
{ ParentMenu(HeaderMenus, parent, level) ? ParentMenu(HeaderMenus, parent, level) :"" }
<!-- ======= Header ======= -->
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">
        <a data-sveltekit-prefetch href="/fr" class="logo me-auto">
            <img alt="drvn" src="/assets/images/Group-973.png" class="img-fluid">
        </a>

        <div class="d-inline-flex justify-content-start ">
            <div class="offcanvas offcanvas-bottom" id="s-demo">
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title">Heading</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Some text lorem ipsumadfca.</p>
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
            
            <ul id="DrvnDesktop">
                {#each  HeaderMenus as ParentMenu (ParentMenu.id)}
                    {#if ParentMenu.pid === 0}
                        {#if ParentMenu.name !== "Home"}
                            <li class="dropdown"><a data-sveltekit-prefetch href="/fr{ParentMenu.slug}"><span>{@html ParentMenu.name_fr}</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    {#each HeaderMenus as ChildMenu (ChildMenu.id)}
                                        <!--li><a data-sveltekit-prefetch href="/about-us/management">{ChildMenu.name}</a></li-->
                                        {#if ParentMenu.id === ChildMenu.pid}
                                            <li class="dropdown">
                                                <a data-sveltekit-prefetch href="/fr{ParentMenu.slug}{ChildMenu.slug}"><span>{@html ChildMenu.name_fr}</span>
                                                    {#if Noarrow.includes(ChildMenu.id)} <i class=""></i> {:else} <i class="bi bi-chevron-right"></i> {/if}
                                                </a>
                                                <ul>
                                                    {#each HeaderMenus as SubChildMenu (SubChildMenu.id)}
                                                        {#if ChildMenu.id === SubChildMenu.pid}
                                                            <li><a data-sveltekit-prefetch href="/fr{ParentMenu.slug}{ChildMenu.slug}{SubChildMenu.slug}">{@html SubChildMenu.name_fr}</a></li>
                                                            <!-- SubChildMenu End -->
                                                        {/if}
                                                    {/each}
                                                </ul>
                                            </li>
                                            <!-- ChildMenu End -->
                                        {/if}
                                    {/each}
                                </ul>
                            </li>
                            <!-- ParentMenu End -->
                        {/if}
                    {/if}
                {/each }               
                
                <li>
                    <div class="d-flex flex-row justify-content-center bd-highlight">
                        <div class="p-0 bd-highlight">
                            <a data-sveltekit-prefetch href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-telephone"></i></a>
                        </div>
                        <div class="p-0 bd-highlight">
                            <a data-sveltekit-prefetch href="tel:+97144297040" class="whatsapp text-center"><i class="FSbx bx bi-whatsapp"></i></a>
                        </div>
                    </div>            

                </li>
                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0">
                    <a class="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium" sveltekit:reload href="/fr/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        French 🇫🇷
                    </a>
                    <ul id="lang" class="dropdown-menu dropdown-menu-end border-0 shadow-lg" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown">
                        {#if $page.url.pathname === '/fr'} 
                            <li><a class="dropdown-item" sveltekit:reload href="/">ENGLISH🏴󠁧󠁢󠁥󠁮󠁧󠁿</a></li>
                            <li><a class="dropdown-item" sveltekit:reload href="/ar">العربية 🇦🇪</a></li>
                            <li><a class="dropdown-item" sveltekit:reload href="/fr">French 🇫🇷</a></li>
                        {:else if $page.url.pathname !== 'fr' }
                            <li><a class="dropdown-item" sveltekit:reload href="/{$page.url.pathname.replaceAll('/fr/','')}"> ENGLISH 🏴󠁧󠁢󠁥󠁮󠁧󠁿</a></li>
                            <li><a class="dropdown-item" sveltekit:reload href="/ar/{$page.url.pathname.replaceAll('/fr/','')}">العربية 🇦🇪</a></li>
                            <li><a class="dropdown-item" sveltekit:reload href="/fr/{$page.url.pathname.replaceAll('/fr/','')}">French 🇫🇷</a></li>
                            <!--li><a class="dropdown-item" href="/">RU 🇷🇺</a></li-->
                        {/if}
                    </ul>
                </li>
            </ul>

            <!--Moblie Menus-->
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="DrvnMobileMenu" aria-labelledby="DrvnMobileMenu">
                
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                        <a data-sveltekit-prefetch href="/" class="logo me-auto">
                            <img alt="drvn" src="/assets/images/Group-973.png" class="img-fluid">
                        </a>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <!-- Mobile Parent Menus-->
                    <div class="accordion" id="DrvnMobileAccordion">
                        {#each  HeaderMenus as ParentMenu (ParentMenu.id)}
                            <div class="accordion-item">
                                {#if ParentMenu.pid === 0}
                                    {#if ParentMenu.name !== 'Home'}
                                        <h2 class="accordion-header" id="headingMenu-{ParentMenu.id}">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu-{ParentMenu.id}" aria-expanded="false" aria-controls="collapseMenu-{ParentMenu.id}">
                                                {ParentMenu.name}
                                            </button>
                                        </h2>
                                        <div id="collapseMenu-{ParentMenu.id}" class="accordion-collapsed collapse" aria-labelledby="headingMenu-{ParentMenu.id}" data-bs-parent="#AccordionChidMenu">
                                            <div class="accordion-body">
                                                {#each  HeaderMenus as ChildMenu (ChildMenu.id)}
                                                <!-- Mobile Chid Menus-->
                                                <div class="accordion" id="AccordionChidMenu">
                                                    {#if ParentMenu.id === ChildMenu.pid }
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="headingChildMenu-{ChildMenu.id}">
                                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChildMenu-{ChildMenu.id}" aria-expanded="false" aria-controls="collapseChildMenu-{ChildMenu.id}">
                                                                    {ChildMenu.name}
                                                                </button>
                                                            </h2>
                                                            <div id="collapseChildMenu-{ChildMenu.id}" class="accordion-collapse collapse" aria-labelledby="headingChildMenu-{ChildMenu.id}" data-bs-parent="#AccordionChidMenu">
                                                                <div class="accordion-body">
                                                                    {#each  HeaderMenus as SubChildMenu (SubChildMenu.id)}
                                                                        {#if ChildMenu.id == SubChildMenu.pid}
                                                                            <p><a data-sveltekit-prefetch href="!#">Link One</a></p>
                                                                        {/if}
                                                                    {/each}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/if}
                                                </div>
                                                <!-- Mobile Chid Menus End-->
                                                {/each}
                                            </div>
                                        </div>
                                    {/if}
                                {/if}
                            </div>
                        {/each}
                    </div>                    
                    <!--End Mobile Parent Menus-->
                </div>
            </div>

            <div id="DrvnbtnControl">
                <button class="btn btn-primary bi bi-list" id="DrvnMobileBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#DrvnMobileMenu" aria-controls="DrvnMobileMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!--Mobile Menu End-->
            </div>
            
        </nav>
        <!-- .navbar -->

    </div>
</header>
<!-- End Header -->