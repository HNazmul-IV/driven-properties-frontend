<script>
    import HomeClients from '$lib/includes/home/client.svelte'
    import HomeAbout from '$lib/includes/home/about.svelte'
    import HomeWhyUs from '$lib/includes/home/whyus.svelte'
    import HomeServices from '$lib/includes/home/services.svelte'
    import HomeFactNumbers from '$lib/includes/home/factnumbers.svelte'
    import Slider from '$lib/headers/slider.svelte';
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