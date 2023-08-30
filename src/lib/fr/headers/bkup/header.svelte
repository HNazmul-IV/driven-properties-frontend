<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import HeaderSearchForm from '../search.svelte';
    import { baseURL } from '../../../../base-url';

    let HeaderMenus =[];
    let pageName = 'rent-apartments'; 
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
    let searchData = "";
    let isNavOpen = false;
    let removeLangPath;

    export let WBSettings;

    onMount( async()=>{
        
        const response = await fetch(`${baseURL}/getAllHeaderMenus`);
        const data = await response.json();
        HeaderMenus = data;

        removeLangPath = $page.url.pathname.substring(3);
        console.log($page.url.pathname, removeLangPath);
        //getAllHeaderMenus API End
        
    });

    const cleanHightlighter = () => {
        const arraysOfId = ['/sales', '/explore', '/rentals', '/market-trends', '/about-us', '/our-services', 
        '/properties-for-rent', '/landlord-services'];

        for(let i=0; i<arraysOfId.length; i++){
            document.getElementById(arraysOfId[i]).style.backgroundColor = 'transparent';
            document.getElementById(arraysOfId[i]).style.color = 'black';
            document.getElementById(arraysOfId[i]).style.fontWeight = 'normal';
        }
    }
    
    const EventDropdownActive = (e)=>{
        cleanHightlighter();
        pgid = e.target.id;
        document.getElementById(e.target.id).style.backgroundColor = '#ccc';
        document.getElementById(e.target.id).style.fontWeight = 'bold';
        DropdownActive = !DropdownActive;
    };

    const EventDropdownInActive = (e) => {
        cleanHightlighter();
        DropdownActive = false;
    }
    
    const SBEventDropdownActive = (e)=>{
        sbpgid = e.target.id;
        console.log(e);
        SbDropdownActive = !SbDropdownActive;
    };

    const NavToggle = () => {
        console.log('outside');
        if (window.screen.width<768) {
            isNavOpen = !isNavOpen;
        }
    }


    const onAddChanges = ({detail}) => {
        searchData = detail;
        // console.log(searchData);
        const status = searchData.Ad_Type ? String(searchData.Ad_Type) : 'sale'; // Sale
        const community = searchData.Property_Title.agserach ? String(searchData.Property_Title.agserach).replaceAll(' ', '-'): 'any'; // Palm Jumeirah
        const property = searchData.Unit_Type ? String(searchData.Unit_Type).replaceAll(' ', '-'): 'any'; // apartment
        const bed = searchData.No_of_Rooms ? searchData.No_of_Rooms: 2; // 3
        const minPrice = searchData.minPrice ? searchData.minPrice: 0; // 0
        const maxPrice = searchData.maxPrice ? searchData.maxPrice: 150000000; // 150000000

        console.log(status.toLowerCase(), community.toLowerCase(), property.toLowerCase(), bed, minPrice, maxPrice);
        goto(`/properties-for-${status.toLowerCase()}/${community.toLowerCase()}/${property.toLowerCase()}/${bed}/${minPrice}-${maxPrice}`);
    }

    $: MyWhatsapp = WBSettings.whatsapp;

</script>

<!-- ======= Header ======= -->
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">
        <a data-sveltekit-prefetch href="/fr" class="logo me-auto">
            <img alt="drvn" src="/assets/images/Group-973.png" class="img-fluid">
        </a>

        <div class="d-inline-flex justify-content-start ">
            <div class="offcanvas offcanvas-top" id="s-demo">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close close-btn" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body container">
                    <Tabs>
                        <TabList>
                            <Tab>à vendre</Tab>
                            <Tab>a louer</Tab>
                        </TabList>
                        <TabPanel>
                            <HeaderSearchForm status={"Sale"} on:frmOnChanges={onAddChanges} />
                        </TabPanel>
                        <TabPanel>
                            <HeaderSearchForm status={"Rent"} on:frmOnChanges={onAddChanges} />
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
            <button class="SearchBtn s-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#s-demo">
                <i class="bi-search"></i>
            </button>
        </div>

        <nav id="navbar" class="navbar {isNavOpen?'navbar-mobile':''}" >            
            <ul class="navbar-ul">
                {#each  HeaderMenus as ParentMenu (ParentMenu.id)}
                <!-- {ParentMenu.pid} -->
                    {#if ParentMenu.pid === 0}
                        {#if ParentMenu.name !== "Home"}
                            <li class="dropdown {DropdownActive && pgid === ParentMenu.slug ? 'dropdown-active-list': ''} " >
                                <a id="{ParentMenu.slug}" on:click|preventDefault="{EventDropdownActive}">
                                    <span>{@html ParentMenu.name_fr}</span>
                                    <i class="bi bi-chevron-down"></i>
                                </a>
                                <ul class="{DropdownActive && pgid === ParentMenu.slug ? 'dropdown-active dropdown-two-level': ''}">
                                    {#each HeaderMenus as ChildMenu (ChildMenu.id)}
                                        {#if ParentMenu.id === ChildMenu.pid}
                                            <div class="twoLevelMenu">
                                                <span class="two-level-main-menu">Main Menu</span>
                                                <span class="cancel-two-level-menu" on:click|preventDefault="{EventDropdownInActive}">
                                                    Main Menu
                                                </span>
                                            </div>
                                            {#if Noarrow.includes(ChildMenu.id)}
                                                <li on:click={NavToggle}><a class="nodrop" href="/fr{ParentMenu.slug}{ChildMenu.slug}">{@html ChildMenu.name_fr}</a></li> 
                                            {:else}
                                                <li class="dropdown {SbDropdownActive && sbpgid === ChildMenu.slug ? 'dropdown-three-level-active-list': ''}">
                                                    <a id="{ChildMenu.slug}" on:click|preventDefault="{SBEventDropdownActive}">
                                                        <span>{@html ChildMenu.name_fr}</span> 
                                                        {#if SbDropdownActive && sbpgid === ChildMenu.slug}
                                                            <i class="bi bi-chevron-down"></i>
                                                        {:else}
                                                            <span class="three-level-menu">
                                                                <i class="bi bi-chevron-right"></i>
                                                            </span>
                                                        {/if}
                                                    </a>
                                                    <ul class="{SbDropdownActive && sbpgid === ChildMenu.slug ? 'dropdown-active dropdown-three-level': ''}">
                                                        {#each HeaderMenus as SubChildMenu (SubChildMenu.id)}
                                                            {#if ChildMenu.id === SubChildMenu.pid}
                                                                {#if MyActiveLinks === SubChildMenu.slug} 
                                                                    <li on:click={NavToggle}>
                                                                        <a class="nodrop1" sveltekit:reload href="/fr{ParentMenu.slug}{ChildMenu.slug}{SubChildMenu.slug}">
                                                                            {@html SubChildMenu.name_fr}
                                                                        </a>
                                                                    </li>                                                                    
                                                                {:else}                                                                    
                                                                    <li on:click={NavToggle}>
                                                                        <a class="nodrop" sveltekit:prefetch  href="/fr{ParentMenu.slug}{ChildMenu.slug}{SubChildMenu.slug}">
                                                                            {@html SubChildMenu.name_fr}
                                                                        </a>
                                                                    </li>
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
                
                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0 desk-lang">
                    <a class="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium" sveltekit:reload href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        French <img alt="france-flag" src="/assets/images/france-flag.png" class="img-fluid">
                    </a>
                    <ul id="lang" class="dropdown-menu dropdown-menu-end d-flex flex-column justify-content-around social p-1 bd-highlight" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" sveltekit:reload href="{removeLangPath}">English <img alt="usa-flag" src="/assets/images/usa-flag.png" class="img-fluid"></a></li>
                        <li><a class="dropdown-item" sveltekit:reload href="/ar{removeLangPath && removeLangPath}">العربية <img alt="uae-flag" src="/assets/images/uae-flag.png" class="img-fluid"></a></li>
                        <!-- <li><a class="dropdown-item" sveltekit:reload href="/fr{removeLangPath}">French <img alt="france-flag" src="/assets/images/france-flag.png" class="img-fluid"></a></li> -->
                        <!--li><a class="dropdown-item" href="/">RU 🇷🇺</a></li-->
                    </ul>
                </li>   
                <li id="languageSwitcher" class="nav-item dropdown px-3 px-lg-0 mob-lang">
                    <div id="lang" class="d-flex flex-row justify-content-around social p-3 bd-highlight" style="border-radius:0.3rem;" aria-labelledby="navbarDropdown">
                        <div><a sveltekit:reload href="{removeLangPath}">English <img alt="usa-flag" src="/assets/images/usa-flag.png" class="img-fluid"></a></div>
                        <div><a sveltekit:reload href="/ar{removeLangPath && removeLangPath}">العربية <img alt="uae-flag" src="/assets/images/uae-flag.png" class="img-fluid"></a></div>
                        <!-- <div><a sveltekit:reload href="/fr{removeLangPath && removeLangPath}">French <img alt="france-flag" src="/assets/images/france-flag.png" class="img-fluid"></a></div> -->
                    </div>
                </li>          
                <li id="social-container">
                    <div class="d-flex flex-row justify-content-around social py-3 px-0 bd-highlight">
                        <div class="p-0 bd-highlight bd-social-icons">
                            <a data-sveltekit-prefetch href="{WBSettings.telephone}" class="phone text-center">
                                <i class="FSbx bx bi-telephone"></i>
                            </a>
                        </div>
                        <div class="p-0 bd-highlight bd-social-icons">
                            <a data-sveltekit-prefetch href="https://api.whatsapp.com/send?phone={MyWhatsapp}&text=Hi%20Driven,%20I%20need%20more%20information" class="whatsapp text-center">
                                <i class="FSbx bx bi-whatsapp"></i>
                            </a>
                        </div>
                        <div class="p-0 bd-highlight bd-social-icons">
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a data-sveltekit-prefetch href="#" class="whatsapp text-center">
                                <i class="FSbx bi bi-envelope"></i>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            <i on:click={NavToggle} class="bi bi-list mobile-nav-toggle {isNavOpen?'bi-x':'bi-list'}"></i>
        </nav>
        <!-- .navbar -->

    </div>


</header>
<!-- End Header -->

<!-- global.css 85 -->
<!-- #hero-noimage {
    height: auto;
    background-color: #222223;
    padding: 44px 0;
  } -->

<style>
    .close-btn{
        position: absolute;
        right: 10px;
    }
    .offcanvas-body {
        margin-top: -40px;
        margin-bottom: 6px;
    }
    .bi-envelope::before {
        content: "\f32f";
        font-size: 30px;
    }
    #lang img, #languageSwitcher img {
        height: 15px;
        margin: 5px;
    }
    .desk-lang{
        display: block;
    }
    .mob-lang{
        display: none;
    }
    .navbar-mobile .dropdown > .dropdown-active {
        display: block;
        height: 100vh !important;
    }
    .navbar a, .navbar a:focus {
        padding: 10px 0 10px 15px;
    }
    .navbar a i, .navbar a:focus i {
        font-size: 10px;
        line-height: 0;
        margin-left: 5px;
        margin-right: 10px;
    }
    li.dropdown a span{
        text-transform: lowercase;
    }
    li.dropdown a span::first-letter{
        text-transform: capitalize;
    }
    
    @media(min-width: 769px){
        .navbar .dropdown ul{
            padding: 10px 10px;
        }
        .bd-social-icons a {
            margin: 0;
            padding-left: 0 !important;
        }
        .bd-social-icons a .FSbx, .bd-social-icons a .bi-envelope::before {
            font-size: 1.2em !important;
        }
        li.dropdown a {
            font-size: .9em;
        }
        #header {
            padding: 5px 0;
            background: #0000009e;
        }    
    }
    @media(max-width: 768px){
        ul li.dropdown, li.dropdown li {
            border-top: 1px solid #666;
        }
        li#languageSwitcher{
            border-top: 1px solid;
        }
        #social-container .social {
            background: #ccc;
        }
        .desk-lang{
            display: none;
        }
        .mob-lang{
            display: block;
        }
        #header {
            padding: 15px 0;
            background: #000;
        }
    }
</style>