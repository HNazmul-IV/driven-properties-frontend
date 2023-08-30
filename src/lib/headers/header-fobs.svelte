<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import {ReplaceTxt} from './../helpers';
    import { baseURL } from '../../base-url';

    let HeaderMenus =[];
    let level=0;
    let parent=0;
    let activeaccordion = true;
    let Noarrow = [11,17,18,19,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79];
    let DropdownActive = false;
    let SbDropdownActive=false;
    let pgid;
    let sbpgid
    let MyActiveLink = $page.url.pathname.split('/');
    let MyActiveLinks = "/"+MyActiveLink[3];

    export let WBSettings;

    onMount( async()=>{
        
        

        const response = await fetch(`${baseURL}/getAllHeaderMenus`);
        const data = await response.json();
        HeaderMenus = data;
        //getAllHeaderMenus API End
        
        
    });

    //console.log($page.url);

    const EventDropdownActive = (e)=>{

        pgid = e.target.id;
        console.log(e.target.id);
        DropdownActive = !DropdownActive;
        
    };


    const SBEventDropdownActive = (e)=>{
        
        sbpgid = e.target.id;
        console.log(e.target.id);
        SbDropdownActive = !SbDropdownActive;
        
    };

    $: MyWhatsapp = WBSettings.whatsapp;


    //console.log(MyActiveLink[3], MyActiveLinks);
    
</script>

<!-- ======= Header ======= -->
<header id="header" class="fixed-top ">
    <div class="container">
        
        <div class="row" id="Forbes">

           <div class="col-md-4 col-lg-4 col-10">

                <div class="row">

                    <div class="col-md-2 col-lg-2 col-3">
                        <a data-sveltekit-prefetch href="/" class="logo me-auto">
                            <img alt="drvn" src="/assets/images/favicon-96x96.png" class="img-fluid">
                        </a>
                    </div>

                    <div class="col-md-10 col-lg-10 col-9">
                        <a data-sveltekit-prefetch href="/">
                            <h1 class="Fobstxt">Forbes Global Properties</h1>
                        </a>
                    </div>

                </div>            
           </div> 
           <!--Logo & Heading TextContent Area End-->

           <div class="col-md-8 col-lg-8 col-2">
            
                <div class="row">

                    <div class="col-sm">

                        <!--div class="d-inline-flex justify-content-start ">
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
                        </div-->

                        <nav id="navbar" class="navbar">
                            <ul>
                                {#each  HeaderMenus as ParentMenu (ParentMenu.id)}
                                    {#if ParentMenu.pid === 0}
                                        {#if ParentMenu.name !== "Home"}
                                            <li class="dropdown">
                                                <a id="{ParentMenu.slug}" on:click|preventDefault="{EventDropdownActive}">
                                                    <span>{@html ParentMenu.name}</span>
                                                    <i class="bi bi-chevron-down"></i> 
                                                </a>
                                                <ul class="{DropdownActive && pgid === ParentMenu.slug ? 'dropdown-active': ''}">
                                                    {#each HeaderMenus as ChildMenu (ChildMenu.id)}
                                                        {#if ParentMenu.id === ChildMenu.pid}
                                                            {#if Noarrow.includes(ChildMenu.id)}
                                                                <li><a href="{ParentMenu.slug}{ChildMenu.slug}">{@html ChildMenu.name}</a></li> 
                                                            {:else}
                                                                <li class="dropdown">
                                                                    <a id="{ChildMenu.slug}" on:click|preventDefault="{SBEventDropdownActive}">
                                                                        <span>{@html ChildMenu.name}</span> 
                                                                        <i class="bi bi-chevron-right"></i>
                                                                    </a>
                                                                    <ul class="{SbDropdownActive && sbpgid === ChildMenu.slug ? 'dropdown-active': ''}">
                                                                        {#each HeaderMenus as SubChildMenu (SubChildMenu.id)}
                                                                            {#if ChildMenu.id === SubChildMenu.pid}
                                                                                {#if MyActiveLinks === SubChildMenu.slug} 
                                                                                    <li><a sveltekit:reload href="{ParentMenu.slug}{ChildMenu.slug}{SubChildMenu.slug}">{@html SubChildMenu.name}</a></li>                                                                    
                                                                                {:else}                                                                    
                                                                                    <li><a sveltekit:prefetch  href="{ParentMenu.slug}{ChildMenu.slug}{SubChildMenu.slug}">{@html SubChildMenu.name}</a></li>
                                                                                {/if} 
                                                                                <!-- SubChildMenu End -->
                                                                            {/if}
                                                                        {/each}
                                                                    </ul>
                                                                </li>
                                                            {/if}
                                                        {/if}
                                                    {/each}                                   
                                                </ul>
                                            </li>
                                        {/if}
                                    {/if}
                                {/each }

                                <li>
                                    <div class="d-flex flex-row justify-content-start bd-highlight">
                                        <div class="p-0 bd-highlight">
                                            <a data-sveltekit-prefetch href="tel:+97144297040" class="phone text-center"><i class="FSbx bx bi-telephone"></i></a>
                                        </div>
                                        <div class="p-0 bd-highlight">
                                            <a data-sveltekit-prefetch href="https://api.whatsapp.com/send?phone=971553658402&text=Forbes+Global+Properties" class="whatsapp text-center"><i class="FSbx bx bi-whatsapp"></i></a>
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
                            <i class="bi bi-list mobile-nav-toggle" on:click|preventDefault="{()=>{DropdownActive = false; SbDropdownActive= false; }}"></i>
                        </nav>
                        <!-- .navbar -->
                    </div>

                </div>            
           </div> 
           <!--Navigation Area End-->
            
        </div>
    </div>
</header>
<!-- End Header -->

