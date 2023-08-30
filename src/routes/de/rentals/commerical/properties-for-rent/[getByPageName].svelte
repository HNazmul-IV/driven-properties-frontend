<!--script context="module">
    export async function load({fetch, params}){
        console.log(params.getbyname);
    } 
</script-->

<script>
    import SListing from '$lib/fr/includes/sales/main.svelte'
    //import AddAlgolia from '$lib/libs/Addvalue.svelte';
    //import OldSListing from '$lib/includes/sales/bkup/Main.svelte'
</script>
    <svelte:head>
        <title>Sales - Buy Ready Properties Listing</title>
        <meta name="description" content="About Us Page app" />
    </svelte:head>
    
    <SListing/>
    <!--AddAlgolia/-->
    