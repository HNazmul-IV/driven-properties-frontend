<script>
    export let lists=[];
    export let WebContent;
</script>

<div class="g-0 container">
    <div class="row">
        
        <div class="col-sm-12">
            <h3>Property Overview</h3>
         </div>
         
    </div>
</div>

<div class="container mt-4 mb-4" id="DPTxtBg">
    
    {#if lists.length > 0 }
        <div class="row">
            <div id="Facilities">
                <ul>
                    {#each lists as myLists, i }
                        <li>
                            {@html myLists}
                        </li>
                    {/each}  
                </ul>
            </div>      
        </div>
    {/if}

    <div class="row mt-4" id="DPTxtContent">

        <div class="col-sm-12">
            {@html WebContent}
         </div>

    </div>
</div>        
