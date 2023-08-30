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
    //console.log($page.url);
</script>

<!-- ======= Header ======= -->
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">
        <a data-sveltekit-prefetch href="/" class="logo me-auto">
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
                {#each  HeaderMenus as ParentMenu (ParentMenu.id)}
                    {#if ParentMenu.pid === 0}
                        {#if ParentMenu.name !== "Home"}
                            <li class="dropdown">
                                <!-- <a data-sveltekit-prefetch href="{ParentMenu.slug}"> -->
                                <a href="#">
                                    <span>{@html ParentMenu.name}</span> 
                                    <i class="bi bi-chevron-down"></i>
                                </a>
                                <ul>
                                    {#each HeaderMenus as ChildMenu (ChildMenu.id)}
                                        <!--li><a data-sveltekit-prefetch href="/about-us/management">{ChildMenu.name}</a></li-->
                                        {#if ParentMenu.id === ChildMenu.pid}
                                            <li class="dropdown">
                                                <a data-sveltekit-prefetch href="{ParentMenu.slug}{ChildMenu.slug}"><span>{@html ChildMenu.name}</span>
                                                    {#if Noarrow.includes(ChildMenu.id)} <i class=""></i> {:else} <i class="bi bi-chevron-right"></i> {/if}
                                                </a>
                                                <ul>
                                                    {#each HeaderMenus as SubChildMenu (SubChildMenu.id)}
                                                        {#if ChildMenu.id === SubChildMenu.pid}
                                                            <li><a data-sveltekit-prefetch href="{ParentMenu.slug}{ChildMenu.slug}{SubChildMenu.slug}">{@html SubChildMenu.name}</a></li>
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
                    <a class="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium" sveltekit:reload href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ENGLISH 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                    </a>
                    <ul id="lang" class="dropdown-menu dropdown-menu-end border-0 shadow-lg" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" sveltekit:reload href="{$page.url.pathname}">ENGLISH 🏴󠁧󠁢󠁥󠁮󠁧󠁿</a></li>
                        <li><a class="dropdown-item" sveltekit:reload href="/ar{$page.url.pathname}">العربية 🇦🇪</a></li>
                        <li><a class="dropdown-item" sveltekit:reload href="/fr{$page.url.pathname}">French 🇫🇷</a></li>
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