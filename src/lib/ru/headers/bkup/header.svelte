<script>
  import { onMount, afterUpdate } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import BannerSearchForm from "../banner-search-form.svelte";
  import { baseURL } from "../../../../base-url";
  import BannerSearchFormMob from "./banner-search-form-mob.svelte";
  // import LeadFormLeft from "$lib/ru/commons/LeadFormLeft.svelte";

  let HeaderMenus = [];
  let Noarrow = [11, 17, 18, 19, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
  let DropdownActive = false;
  let SbDropdownActive = false;
  let pgid;
  let sbpgid;
  let pageSlug;
  let pagelength;
  let MyActiveLink = $page.url.pathname.split("/");
  let MyActiveLinks = "/" + MyActiveLink[3];
  let searchData = "";
  let isNavOpen = false;
  let isHomeRu = false;
  let isDynamicListPage = false;
  let expired;
  let LeadFormLeft;

  let isShow = true;
  let isMobile = false;

  const formToggle = () => {
    isShow = !isShow;
    isNavOpen = !isNavOpen;
  };

  const formToggleBottom = () => {
    isShow = !isShow;
  };

  const closePopUpForm = () => {
    isShow = !isShow;
  };

  export let WBSettings;
  $: WBSettings, checkInfo();

  const checkInfo = () => {
    console.log(WBSettings);
  };

  afterUpdate(() => {
    pageSlug = $page.url.pathname; // '/'
    if (pageSlug === "/de" || pageSlug === "/") {
      isHomeRu = true;
    } else {
      isHomeRu = false;
    }
    pagelength = $page.url.pathname.split("/");
    pagelength.length === 7 ? (isDynamicListPage = true) : (isDynamicListPage = false);
  });

  onMount(async () => {
    LeadFormLeft = (await import("$lib/ru/commons/LeadFormLeft.svelte")).default;
  });

  onMount(async () => {
    const cachelife = 5000;

    //get cached data from local storage
    let cacheddata = localStorage.getItem("headerMenus");

    if (cacheddata) {
      cacheddata = JSON.parse(cacheddata);
      expired = parseInt(Date.now() / 1000) - cacheddata.cachetime > cachelife;
    }

    //If cached data available and not expired return them.
    if (cacheddata && !expired) {
      HeaderMenus = cacheddata.data;
    } else {
      //otherwise fetch data from api then save the data in localstorage
      const res = await fetch(`${baseURL}/getAllHeaderMenus`);
      const data = await res.json();
      HeaderMenus = data;
      const json = { data: data, cachetime: parseInt(Date.now() / 1000) };
      localStorage.setItem("headerMenus", JSON.stringify(json));
    }

    if (window.innerWidth < 768) {
      isMobile = false;
    } else {
      isMobile = true;
    }
  });

  const cleanHightlighter = () => {
    const arraysOfId = ["/sales", "/explore", "/rentals", "/market-trends", "/about-us", "/our-services", "/properties-for-rent", "/landlord-services"];

    for (let i = 0; i < arraysOfId.length; i++) {
      document.getElementById(arraysOfId[i]).style.backgroundColor = "transparent";
      document.getElementById(arraysOfId[i]).style.color = "black";
      document.getElementById(arraysOfId[i]).style.fontWeight = "normal";
    }
  };

  const EventDropdownActive = (e) => {
    cleanHightlighter();
    pgid = e.target.id;
    document.getElementById(e.target.id).style.backgroundColor = "#ccc";
    document.getElementById(e.target.id).style.fontWeight = "bold";
    DropdownActive = !DropdownActive;
  };

  const EventDropdownInActive = (e) => {
    cleanHightlighter();
    DropdownActive = false;
  };

  const SBEventDropdownActive = (e) => {
    sbpgid = e.target.id;
    console.log(e);
    SbDropdownActive = !SbDropdownActive;
  };

  const NavToggle = () => {
    console.log("outside");
    if (window.screen.width < 768) {
      isNavOpen = !isNavOpen;
    }
  };

  const onAddChanges = ({ detail }) => {
    searchData = detail;
    console.log("onAddChanges =", searchData);
    const status = searchData.Ad_Type ? String(searchData.Ad_Type) : "sale"; // Sale
    const community = searchData.Property_Title.agserach ? String(searchData.Property_Title.agserach).replaceAll(" ", "-") : "any"; // Palm Jumeirah
    const property = searchData.Unit_Type ? String(searchData.Unit_Type).replaceAll(" ", "-") : "any"; // apartment
    const bed = searchData.No_of_Rooms ? searchData.No_of_Rooms : 2; // 3
    const minPrice = searchData.minPrice ? searchData.minPrice : 0; // 0
    const maxPrice = searchData.maxPrice ? searchData.maxPrice : 150000000; // 150000000

    console.log(status.toLowerCase(), community.toLowerCase(), property.toLowerCase(), bed, minPrice, maxPrice);
    goto(`/de/properties-for-${status.toLowerCase()}/${community.toLowerCase()}/${property.toLowerCase()}/${bed}/${minPrice}-${maxPrice}`);
  };

  const onBannerForm = () => {};
</script>

<!-- ======= Header ======= -->

<header id="header" class={isHomeRu ? "header-home" : "not-home"}>
  <div class="container d-flex align-items-center">
    <a data-sveltekit-prefetch href="/" class="logo me-auto">
      <img alt="drvn" src="/assets/images/Driven-Forbes-05-1024x269.png" class="img-fluid" />
    </a>

    <nav id="navbar" class="navbar {isNavOpen && !isMobile ? 'navbar-mobile' : ''}">
      <ul class="navbar-ul">
        {#each HeaderMenus as ParentMenu (ParentMenu.id)}
          <!-- {ParentMenu.pid} -->
          {#if ParentMenu.pid === 0}
            {#if ParentMenu.name !== "Home"}
              <li class="dropdown {DropdownActive && pgid === ParentMenu.slug ? 'dropdown-active-list' : ''} ">
                <a id={ParentMenu.slug} class={ParentMenu.slug} on:click|preventDefault={EventDropdownActive}>
                  <span>{@html ParentMenu.name_de}</span>
                  <i class="bi bi-chevron-down" />
                </a>
                <ul class={DropdownActive && pgid === ParentMenu.slug ? "dropdown-active dropdown-two-level" : ""}>
                  {#each HeaderMenus as ChildMenu (ChildMenu.id)}
                    {#if ParentMenu.id === ChildMenu.pid}
                      <div class="twoLevelMenu">
                        <span class="two-level-main-menu">Main Menu</span>
                        <span class="cancel-two-level-menu" on:click|preventDefault={EventDropdownInActive}> Main Menu </span>
                      </div>
                      {#if Noarrow.includes(ChildMenu.id)}
                        <a class={ChildMenu.slug} href="/de{ParentMenu.slug}{ChildMenu.slug}">
                          <li on:click={NavToggle}>
                            {@html ChildMenu.name_de}
                          </li>
                        </a>
                      {:else}
                        <li class="dropdown {SbDropdownActive && sbpgid === ChildMenu.slug ? 'dropdown-three-level-active-list' : ''}">
                          <a class={ChildMenu.slug} id={ChildMenu.slug} on:click|preventDefault={SBEventDropdownActive}>
                            <span>{@html ChildMenu.name_de}</span>
                            {#if SbDropdownActive && sbpgid === ChildMenu.slug}
                              <i class="bi bi-chevron-down" />
                            {:else}
                              <span class="three-level-menu">
                                <i class="bi bi-chevron-right" />
                              </span>
                            {/if}
                          </a>
                          <ul class={SbDropdownActive && sbpgid === ChildMenu.slug ? "dropdown-active dropdown-three-level" : ""}>
                            {#each HeaderMenus as SubChildMenu (SubChildMenu.id)}
                              {#if ChildMenu.id === SubChildMenu.pid}
                                {#if MyActiveLinks === SubChildMenu.slug}
                                  <a class={SubChildMenu.slug} sveltekit:reload href="/de{ParentMenu.slug}{ChildMenu.slug}{SubChildMenu.slug}">
                                    <li on:click={NavToggle}>
                                      {@html SubChildMenu.name_de}
                                    </li>
                                  </a>
                                {:else}
                                  <a class={SubChildMenu.slug} sveltekit:prefetch href="/de{ParentMenu.slug}{ChildMenu.slug}{SubChildMenu.slug}">
                                    <li on:click={NavToggle}>
                                      {@html SubChildMenu.name_de}
                                    </li>
                                  </a>
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
        {/each}
        <li id="languageSwitcherRussia" class="nav-item dropdown px-3 px-lg-0 desk-lang">
          <img alt="france-flag" src="/assets/images/germany-flag.png" class="img-fluid" />
        </li>

        <li id="social-container">
          <div class="d-flex flex-row justify-content-around social p-3 bd-highlight">
            <div class="p-0 bd-highlight">
              <a data-sveltekit-prefetch href="tel:971522491227" class="phone text-center">
                <i class="FSbx bx bi-telephone" />
              </a>
            </div>
            <!-- {#if !isHomeRu&&isMobile} -->
            <div class="p-0 bd-highlight">
              <a
                data-sveltekit-prefetch
                href="https://api.whatsapp.com/send?phone=971522491227&text=Добрый%20день,%20хотел%20бы%20узнать%20больше%20об%20одном%20из%20ваших%20объектов"
                class="whatsapp text-center"><i class="FSbx bx bi-whatsapp" /></a
              >
            </div>
            <!-- {/if} -->
            {#if !isHomeRu}
              <div class="p-0 bd-highlight">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a data-sveltekit-prefetch href="#" on:click={formToggle} class="whatsapp text-center form-icon form-open">
                  <!-- <i class="bi bi-envelope {!isShow? 'envelop-clicked':''}"></i> -->
                  <i class="bi bi-card-text {!isShow ? 'envelop-clicked' : ''}" />
                </a>
              </div>
            {/if}
          </div>
        </li>
      </ul>
      <i on:click={NavToggle} class="bi bi-list mobile-nav-toggle {isNavOpen ? 'bi-x' : 'bi-list'}" />
    </nav>
  </div>

  {#if pageSlug === "/de" || pageSlug === "/"}
    <div class="container flex-column align-items-center home-header-container">
      <div class="d-flex justify-content-center1">
        <h2>Die beste Immobilienagentur in Dubai</h2>
      </div>

      <div class="tabs-container">
        <Tabs>
          <TabList>
            <Tab>Verkauf</Tab>
            <Tab>Miete</Tab>
          </TabList>
          <TabPanel>
            <BannerSearchForm status={"Sale"} on:frmOnChanges={onBannerForm} />
          </TabPanel>
          <TabPanel>
            <BannerSearchForm status={"Offplan"} on:frmOnChanges={onBannerForm} />
          </TabPanel>
        </Tabs>
      </div>

      <div class="mob-search-container">
        <Tabs>
          <TabList>
            <Tab>Verkauf</Tab>
            <Tab>Miete</Tab>
          </TabList>
          <TabPanel>
            <BannerSearchFormMob status={"Sale"} on:frmOnChanges={onBannerForm} />
          </TabPanel>
          <TabPanel>
            <BannerSearchFormMob status={"Offplan"} on:frmOnChanges={onBannerForm} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  {/if}

  {#if !isShow}
    <div class={isHomeRu ? "home-lead-form header-section" : "other-pages-form other-pages-section"}>
      <span on:click={closePopUpForm}><i class="bi bi-x-lg" /></span>
      <LeadFormLeft />
    </div>
  {/if}

  {#if !isHomeRu}
    <div class="icon-container">
      <div class="p-0 bd-highlight float-icon-box float-icon-box-left">
        <a
          data-sveltekit-prefetch
          style="color: black;"
          href="https://api.whatsapp.com/send?phone=971522491227&text=Добрый%20день,%20хотел%20бы%20узнать%20больше%20об%20одном%20из%20ваших%20объектов"
          class="text-center"
        >
          <i class="FSbx bx bi-whatsapp" /><span class="float-text-icon">Whatsapp</span>
        </a>
      </div>

      <div class="float-icon-box float-icon-box-right">
        {#if !isMobile}<a href="#home-lead-form" style="color: black;">
            <div class="form-icon form-open" id="form-open" on:click={formToggleBottom}>
              <i class="bi bi-card-heading" /><span class="float-text-icon">Message</span>
            </div>
          </a>{/if}
        {#if isMobile}<div class="form-icon form-close" on:click={formToggle}>
            <i class="bi bi-x-lg" /><span class="float-text-icon">Message</span>
          </div>{/if}
      </div>
    </div>
  {/if}
</header>

<style>
  #header {
    padding: 0px 0;
    background: #000000cc;
    position: absolute;
    width: 100vw;
  }
  a.logo.me-auto {
    filter: brightness(0) invert(1);
  }
  .home-lead-form.header-section {
    position: relative;
    top: 115px;
  }
  .bi-x-circle-fill::before {
    content: "\f622";
    position: absolute;
    left: 52vw;
    top: 1vh;
    z-index: 1111;
    cursor: pointer;
    color: white;
  }
  .bi-x-lg::before {
    content: "\f659";
    position: absolute;
    left: 53vw;
    top: 1vh;
    z-index: 1111;
    cursor: pointer;
  }
  .envelop-clicked {
    color: yellow;
  }
  .close-btn {
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
  .bi-card-text::before {
    font-size: 30px;
  }
  .bi-x-circle-fill:before {
    font-size: 30px;
    color: white;
  }
  li#languageSwitcherRussia img {
    border-radius: 100% !important;
    height: 30px !important;
  }
  .desk-lang {
    display: block;
  }
  .mob-lang {
    display: none;
  }
  .navbar-mobile .dropdown > .dropdown-active {
    display: block;
    height: 100vh !important;
  }
  .navbar a i,
  .navbar a:focus i {
    font-size: 10px;
    line-height: 0;
    margin-left: 6px;
    margin-right: 10px;
  }
  .justify-content-center1 {
    justify-content: center !important;
    width: 100%;
    padding: 4em 0 4em;
    color: white;
  }
  .absolute-top {
    position: absolute;
    left: 0;
    right: 0;
  }
  .tabs-container {
    padding: 2em;
    position: relative;
    z-index: 11;
  }

  @media (min-width: 769px) {
    .navbar .dropdown ul {
      padding: 10px 10px;
    }
    .bd-social-icons a .FSbx {
      font-size: 1.2em !important;
    }
    li.dropdown a {
      font-size: 0.9em;
    }
    .navbar a,
    .navbar a:focus {
      padding: 10px 0 10px 15px;
    }
    #header {
      padding: 0px 0;
      background: #0000009e;
    }
    .mob-search-container {
      display: none;
    }
  }
  @media (max-width: 768px) {
    ul li.dropdown,
    li.dropdown li {
      border-top: 1px solid #efefef;
    }
    #social-container .social {
      background: #ccc;
    }
    .desk-lang {
      display: none;
    }
    .mob-lang {
      display: block;
    }
    #header {
      padding: 15px 0;
      background: #4f5c61;
    }
    .justify-content-center1 {
      height: 30vh;
      text-align: center;
    }

    #header {
      padding: 15px 0;
      background: #000;
    }
    .header-home {
      position: relative;
    }
    .not-home {
      position: fixed !important;
    }
    #hero {
      height: 100vh !important;
      text-align: center;
    }
    .tabs-container {
      display: none;
    }
    .icon-container {
      display: flex;
      justify-content: space-around;
      position: fixed;
      bottom: 0;
      background: #000000ab;
      left: 0;
      right: 0;
      padding: 3px 0;
      line-height: 44px;
    }
    .bi-card-heading:before,
    .bi-whatsapp::before,
    .bi-x-lg:before {
      font-size: 18px;
    }
    .bi-whatsapp::before {
      color: white;
      content: "\f618";
      background: #47c357 !important;
      border-radius: 101px;
    }
    .bi-card-heading:before {
      background-color: #4167b1;
      color: white;
    }
    .form-close {
      color: red;
    }
    .bi,
    .bi-whatsapp {
      border-radius: 43px;
      padding: 6px 7px;
      color: #f7f4f5;
      font-size: 21px;
    }
    .bi-x-lg {
      color: red !important;
    }
    span.float-text-icon {
      font-size: 18px;
      margin-left: 5px;
      color: white;
    }
  }

  @media (min-width: 769px) {
    .float-icon-box {
      display: none;
    }
  }
</style>
