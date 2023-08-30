<script>
  import { onMount } from "svelte";

  import { baseURL } from "../base-url";

  // import HomeClients from "$lib/ru/includes/home/client.svelte";
  import OffPlanProjects from "$lib/ru/includes/home/offplanprojects.svelte";
  import LuxuryProjects from "$lib/ru/includes/home/luxuryproperties.svelte";
  import SaleRentProperties from "$lib/ru/includes/home/salerentproperties.svelte";
  import HomeServices from "$lib/ru/includes/home/homeservices.svelte";
  import HomeMap from "$lib/ru/includes/home/homemap.svelte";
  import HomeFactNumbers from "$lib/ru/includes/home/factnumbers.svelte";
  import HomeTestimonials from "$lib/ru/includes/home/hometestimonials.svelte";
  // import Slider from "$lib/ru/headers/slider.svelte";

  let HomeClients;
  // let OffPlanProjects;
  // let LuxuryProjects;
  // let SaleRentProperties;
  // let HomeServices;
  // let HomeMap;
  // let HomeFactNumbers;
  // let HomeTestimonials;
  let Slider;

  let pageContent = [];
  let FactNumbers = [];
  let expired;

  // dynamic import
  onMount(async () => {
    HomeClients = (await import("$lib/ru/includes/home/client.svelte")).default;
    Slider = (await import("$lib/ru/headers/slider.svelte")).default;
  });

  onMount(async () => {
    // set cache lifetime in seconds
    const cachelife = 5000;

    //get cached data from local storage
    let cacheddata = localStorage.getItem("getHomeContent");

    if (cacheddata) {
      cacheddata = JSON.parse(cacheddata);
      expired = parseInt(Date.now() / 1000) - cacheddata.cachetime > cachelife;
    }

    //If cached data available and not expired return them.
    if (cacheddata && !expired) {
      pageContent = cacheddata.data;
    } else {
      //otherwise fetch data from api then save the data in localstorage
      const response3 = await fetch(`${baseURL}/getHomeContent`);
      const data = await response3.json();
      pageContent = data;
      const json = { data: data, cachetime: parseInt(Date.now() / 1000) };
      localStorage.setItem("getHomeContent", JSON.stringify(json));
    }

    const response3 = await fetch(`${baseURL}/getHomeAllFactNumbers`);
    const data3 = await response3.json();
    FactNumbers = data3;
  });

  onMount(() => {});
</script>

<svelte:head>
  <title>Driven Properties - Buy, Rent, Sell Property in Dubai UAE</title>
  <meta
    name="description"
    content="Driven Properties provides Property Management, Real Estate & Investment Advisory services for Residential and Commercial properties in Dubai - Apartments, Villas, Offices, Warehouses, Buildings, etc"
  />
</svelte:head>

<svelte:component this={Slider} />
<svelte:component this={HomeClients} />

<OffPlanProjects />
<LuxuryProjects />
<SaleRentProperties />
<HomeServices />
<HomeMap />
<HomeFactNumbers {pageContent} {FactNumbers} />
<HomeTestimonials />
