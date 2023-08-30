<script>
    import SListing from '$lib/ru/includes/sales/main.svelte';
     let pageName = 'sale-apartments';  
</script>
    
    <svelte:head>
        <title>Sales - Buy Ready Properties Listing</title>
        <meta name="description" content="About Us Page app" />
        <meta content="" name="keywords">
    </svelte:head>    

    <SListing pgname={pageName}/>
    <!--AddAlgolia/-->