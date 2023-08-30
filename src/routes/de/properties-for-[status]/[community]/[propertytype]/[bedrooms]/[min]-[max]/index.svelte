<script>
    import { onMount, afterUpdate, onDestroy } from "svelte";
    import { page } from "$app/stores";
    import PropertyListingForm from "$lib/ru/includes/property-listings/PropertyListingForm.svelte";
    import PropertyListingResults from "$lib/ru/includes/property-listings/PropertyListingResults.svelte";

    $: dynamicUrl = "";
    // $: dynamicUrl1 = "";
    let pageSlug;
   
    afterUpdate(()=> {
        console.log('russia sale index');
        pageSlug = $page.url.pathname.split("/");
        console.log("pageslug "+pageSlug);
        let status = String(pageSlug[2]).replaceAll("-", " ").split(" ")[2];
        let community = String(pageSlug[3]).replaceAll("-", " ");
        let property = String(pageSlug[4]).replaceAll("-", " ");
        let bed = String(pageSlug[5]).replaceAll("-", " ");
        let minPrice = String(pageSlug[6]).split("-")[0];
        let maxPrice = String(pageSlug[6]).split("-")[1];
        dynamicUrl = {
            'status' : status,
            'community' : community,
            'property' : property,
            'bed' : bed,     
            'minPrice' : minPrice,
            'maxPrice' : maxPrice
        }
        console.log(dynamicUrl);
    })
   
</script>

<svelte:head>
    <title>Property for {dynamicUrl.status}</title>
    <meta name="description" content="Properties For Rent" />
</svelte:head>

<PropertyListingForm />
<PropertyListingResults dynamicUrl={dynamicUrl}  />
