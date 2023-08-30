<script>
    import HomeClients from '$lib/fr/includes/home/client.svelte'
    import HomeAbout from '$lib/fr/includes/home/about.svelte'
    import HomeWhyUs from '$lib/fr/includes/home/whyus.svelte'
    import HomeServices from '$lib/fr/includes/home/services.svelte'
    import HomeFactNumbers from '$lib/fr/includes/home/factnumbers.svelte'
    import Slider from '$lib/fr/headers/slider.svelte';
</script>
    <svelte:head>
        <title>Driven Properties - Buy, Rent, Sell Property in Dubai UAE</title>
        <meta name="description" content="Driven Properties provides Property Management, Real Estate & Investment Advisory services for Residential and Commercial properties in Dubai - Apartments, Villas, Offices, Warehouses, Buildings, etc" />
    </svelte:head>
    
    <Slider/>
    <HomeClients />
    <HomeAbout />
    <HomeWhyUs />
    <HomeServices />
    <HomeFactNumbers />