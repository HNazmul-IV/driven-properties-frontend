<script>
    import SListing from '$lib/fr/includes/sales/main.svelte'
    //import AddAlgolia from '$lib/fr/libs/Addvalue.svelte';
    //import OldSListing from '$lib/fr/includes/sales/bkup/Main.svelte' 
     let pageName = 'sale-commercial';  
</script>
    
    <svelte:head>
        <title>Sales - Buy Ready Properties Listing</title>
        <meta name="description" content="About Us Page app" />
        <meta content="" name="keywords">
    </svelte:head>    

    <SListing pgname={pageName}/>
    <!--AddAlgolia/-->