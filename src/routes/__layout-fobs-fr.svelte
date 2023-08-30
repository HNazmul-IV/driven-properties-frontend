<!-- Old Verson Layout -->
<script>
    import { onMount } from 'svelte';
    import Header from '$lib/headers/header-fobs.svelte';
    import Footer from '$lib/footers/footer-fobs.svelte';
    import './styles/global.css';  
    import { baseURL } from '../base-url';

    let WBSettings = [];

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

French fobs
