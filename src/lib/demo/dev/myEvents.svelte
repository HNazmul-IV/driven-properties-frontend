<script>

    import SearchForm from '$lib/demo/dev/sForm.svelte';
    import LeftListing from '$lib/demo/dev/leftListing.svelte';
    import RightMaps from '$lib/demo/dev/rightMap.svelte';
    
    let id; 
    let markerHeighlited = (e)=>{
        console.log(e.detail);
        id = e.detail.ID;
    };
</script>

<LeftListing on:markerHeighlited/>
<RightMaps markerHeighlited={id}/>
<!--SearchForm /-->
