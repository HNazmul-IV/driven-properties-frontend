<script>
    import {onMount, onDestory, beforeUpdate, afterUpdate} from 'svelte';
    
    
    onMount(()=>{
        console.log('onMount');
    });
    
    beforeUpdate(()=>{
        console.log('beforeUpdate');
    });
    
    afterUpdate(()=>{
        console.log('afterUpdate');
    });
    
    onDestory(()=>{
        console.log('onDestory');
    });
    
    let counter =0;	
    function update(){
        counter++;
    }	
        
    </script>
    
    <button on:click={update} > ADD </button>
    {counter}