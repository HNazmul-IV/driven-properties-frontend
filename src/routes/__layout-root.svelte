<!-- Rooot Layout -->
<script>
    import Header from '$lib/headers/header.svelte';
    import Footer from '$lib/footers/footer.svelte';
    import './styles/global.css';   
</script>


<main id="main">
    <Header/>
        <slot />
    <Footer/>
</main>


<style>

</style>