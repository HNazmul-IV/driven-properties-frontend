<!--Frach Layout-->
<script>
    import { onMount } from 'svelte';
    import Header from '$lib/fr/headers/bkup/header.svelte';
    import Footer from '$lib/fr/footers/footer.svelte';
    import './styles/global.css'; 
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