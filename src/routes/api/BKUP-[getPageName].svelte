<script>

    import { onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';
    import { page } from '$app/stores'

    let pgname;
    
    onMount( ()=>{
        console.log("OnMount Event", $page);
        pgname = $page.params.getPageName;

    });

    onDestroy( ()=>{
        console.log("onDestroy Event", $page);
        pgname = $page.params.getPageName;
    });
    
    beforeUpdate( ()=>{
        console.log("beforeUpdate Event", $page);
        pgname = $page.params.getPageName;
    });

    afterUpdate( ()=>{
        console.log("afterUpdate Event", $page);
        pgname = $page.params.getPageName;
    });

    console.clear();
    
</script>

<a href="/api/BKUP-zubair2201" >zubair2201</a>
<a href="/api/BKUP-zubair2202" >zubair2202</a>
<a href="/api/BKUP-zubair2203" >zubair2203</a>
<a href="/api/BKUP-zubair2204" >zubair2204</a>

<h1>My PAGE:{pgname}</h1>

<style>
    a{
        position: relative;
        top: 90px;
        display: block;
    }
    h1{ 
        margin: 0 auto; 
        padding: 2%;
    }
</style>
