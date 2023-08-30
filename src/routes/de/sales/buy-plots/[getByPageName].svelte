<script context="module">
    export async function load(page, fetch, session, context){
        return { 
            props: { pageName: page.params.GetByPageName } 
        }
    }
</script>

<script>

    
    import SListing from '$lib/fr/includes/sales/main.svelte'
    //import AddAlgolia from '$lib/libs/Addvalue.svelte';
    //import OldSListing from '$lib/includes/sales/bkup/Main.svelte'

    //import { page } from '$app/stores';
    
    export let pageName; 
    //console.log(pageName)
    

</script>

    <svelte:head>
        <title>Sales - Buy Ready Properties Listing | {pageName}</title>
        <meta name="description" content="About Us Page app" />
        <meta content="" name="keywords">
    </svelte:head>
    
    <SListing/>
    <!--AddAlgolia/-->
    