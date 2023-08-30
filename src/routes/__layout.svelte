<!-- Old Verson Layout -->
<script>
  import { onMount } from "svelte";
  import Header from "$lib/ru/headers/bkup/header.svelte";
  import Footer from "$lib/footers/footer.svelte";
  import "./styles/global-ru.css";
  import { baseURL } from "../base-url";

  let WBSettings = [];
  let expired;

  onMount(async () => {
    
    // set cache lifetime in seconds
    const cacheLife = 5000;

    //get cached data from local storage
    let cacheddata = localStorage.getItem("getWBSetings");

    if (cacheddata) {
      cacheddata = JSON.parse(cacheddata);
      expired = parseInt(Date.now() / 1000) - cacheddata.cachetime > cacheLife;
    }

    //If cached data available and not expired return them.
    if (cacheddata && !expired) {
      WBSettings = cacheddata.data;
    } else {
      const res = await fetch(`${baseURL}/getWBSetings`);
      const data = await res.json();
      WBSettings = data;
      const json = { data: data, cachetime: parseInt(Date.now() / 1000) };
      localStorage.setItem("getWBSetings", JSON.stringify(json));
    }
  });
</script>

<main id="main">
  <Header {WBSettings} />
  <slot />
</main>

<style>
</style>
