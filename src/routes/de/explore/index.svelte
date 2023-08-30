<script>
    
    import { onMount } from 'svelte';  
    import { page } from '$app/stores';

    import HomeClients from '$lib/fr/includes/home/client.svelte'
    import HomeAbout from '$lib/fr/includes/home/about.svelte'
    import HomeWhyUs from '$lib/fr/includes/home/whyus.svelte'
    import HomeServices from '$lib/fr/includes/home/services.svelte'
    import HomeFactNumbers from '$lib/fr/includes/home/factnumbers.svelte'
    import Slider from '$lib/fr/headers/slider.svelte';
    import { baseURL } from '../../../base-url';

    let DAGs =[];
    let pageContent = [];
    let AllHomeServices =[];

    //let pageSlug = $page.url.pathname.split('/');

    onMount(async () =>{
        
        const cachelife = 5000;
        
        //get cached data from local storage
        let cacheddata = localStorage.getItem('getHomePDA');

        if(cacheddata){
            cacheddata = JSON.parse(cacheddata);
            expired = parseInt(Date.now() / 1000) - cacheddata.cachetime > cachelife;
        }

        //If cached data available and not expired return them.
        if (cacheddata  && !expired){
            DAGs = cacheddata.data;
        }else{
            //otherwise fetch data from api then save the data in localstorage 
            const response = await fetch(`${baseURL}/getHomePDA`);
            const data = await response.json();
            DAGs = data;
            const json = {data: data, cachetime: parseInt(Date.now() / 1000)}
            localStorage.setItem('getHomePDA', JSON.stringify(json));
        }

        const response1 = await fetch(`${baseURL}/getHomeContent`);
        const data1 = await response1.json();
        pageContent = data1;
        //pageContent API End

        const response2 = await fetch(`${baseURL}/getHomeAllServices`);
        const data2 = await response2.json();
        AllHomeServices = data2;
        //AllHomeServices API End
    });


</script>
    <svelte:head>
        <title>Driven Properties - Buy, Rent, Sell Property in Dubai UAE</title>
        <meta name="description" content="Driven Properties provides Property Management, Real Estate & Investment Advisory services for Residential and Commercial properties in Dubai - Apartments, Villas, Offices, Warehouses, Buildings, etc" />
    </svelte:head>
    


    <Slider/>
    <HomeClients />
    <HomeAbout  pageContent={pageContent} />
    <HomeWhyUs DAGs={DAGs} />
    <HomeServices  pageContent={pageContent} AllHomeServices={AllHomeServices}/>
    <HomeFactNumbers pageContent={pageContent} />