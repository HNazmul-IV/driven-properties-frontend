<script>
    import SListing from '$lib/ru/includes/sales-php/main.svelte'
    //import AddAlgolia from '$lib/libs/Addvalue.svelte';
    //import OldSListing from '$lib/includes/sales/bkup/Main.svelte' 
     let pageName = 'offplan-villa';
</script>
    
    <svelte:head>
        <title>Sales - Buy Ready Properties Listing</title>
        <meta name="description" content="About Us Page app" />
        <meta content="" name="keywords">
    </svelte:head>    

    <SListing pgname2={pageName}/>
    <!--AddAlgolia/-->