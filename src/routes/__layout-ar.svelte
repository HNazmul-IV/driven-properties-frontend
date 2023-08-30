<!--Arabic Layout-->
<script>
    import { onMount } from 'svelte';
    import Header from '$lib/ar/headers/header.svelte';
    import Footer from '$lib/ar/footers/footer.svelte';
    import './styles/global-ar.css';  
    import { baseURL } from '../base-url';
    
    export let WBSettings = [];
    
    onMount(async () =>{

        const response = await fetch(`${baseURL}/getWBSetings`);
        const data = await response.json();
        WBSettings = data;
        //OurFounder API End

    });

</script>


<main id="main">
    <Header WBSettings={WBSettings}/>
        <slot />
    <Footer/>
</main>


<style>

</style>