<script>
    
    import { onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';
    import { page } from '$app/stores';

    import SListing from '$lib/fr/includes/sales/main.svelte'
    import ContentByPageFr from '$lib/fr/includes/rentals/commercial-for-sale/ContentByPageFr.svelte'

    let pageName = '';
    let pageSlug = $page.url.pathname.split('/');

    //$: pageSlug = $page.params.getByPageName;
    //console.log(pageSlug);
    
    const NIPages = ['staff-accommodation-for-rent', 'office-spaces-for-rent', 'executive-housing-for-rent'];
    //NIPages.includes("Mango")
</script>


    <svelte:head>
        <title>Sales - Buy Ready Properties Listing</title>
        <meta name="description" content="About Us Page app" />
    </svelte:head>
    
    {#if pageName !== ''}
        <SListing pgname={pageName}/>
    <!--AddAlgolia/-->
    {:else if NIPages.includes($page.params.getByPageName)}
        <ContentByPageFr/>
    {/if}

    