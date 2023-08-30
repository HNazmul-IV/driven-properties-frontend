<!-- <script>
    import SListing from '$lib/demo/searchOptions/main.svelte';
     let pageName = 'sale-apartments';
</script>
    
    <svelte:head>
        <title>Sales - Buy Ready Properties Listing</title>
        <meta name="description" content="About Us Page app" />
        <meta content="" name="keywords">
    </svelte:head>    

    <SListing pgname={pageName}/>
    AddAlgolia/ -->


    <script>
        import AlgoliaList from '$lib/demo/ag.svelte';
        import MyListing from '$lib/demo/myListing.svelte';

        
    </script>
    
    <svelte:head>
        <title>About Us</title>
        <meta name="description" content="About Us Page app" />
    </svelte:head>
    
    
    <!-- <MyListing/> -->
    <AlgoliaList/>
