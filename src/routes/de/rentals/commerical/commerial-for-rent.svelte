<script>
    import SListing from '$lib/fr/includes/sales/main.svelte'
    import { page } from '$app/stores';
    
    let pageSlug = $page.url.pathname.split('/');
    
    let pageName;
    $: pageName = pageSlug[4].replaceAll('-',' ');
    $: pageName = pageName.replaceAll('for','');

</script>

<svelte:head>
    <title>Rent - Buy Ready Properties Listing</title>
    <meta name="description" content="About Us Page app" />
    <meta content="" name="keywords">
</svelte:head>    

<SListing pgname={pageName}/>
<!--AddAlgolia/-->
