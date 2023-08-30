<script>

    import { onMount } from 'svelte';    
    export let data=[];

    let markerHighlight;

    onMount(async () => { 
        
        markerHighlight = (ID)=>{
            //console.log(ID);
        };
        //markerHighlight();

        const ListID = document.querySelector('.MarkerLinks');
        //console.log(ListID);

    });
    // End onMount

</script>

<div class="container">
    <div class="row">
        <div class="" style="height:500px; overflow-y:scroll;">
            {#each data as MyDb (MyDb.objectID) }
                <div class="listings" id="listings"></div>
                <!--a class="MarkerLinks" href="!#" id="ListID-{MyDb.objectID}" on:mouseenter={markerHighlight(MyDb.objectID)} >{MyDb.objectID}</a-->
            {/each}
        </div>
    </div>
</div>

<style>
    .MarkerLinks{ color:inherit;}
    
</style>

    


    



