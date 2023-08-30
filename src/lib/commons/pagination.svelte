<script>
    import { spring } from 'svelte/motion';

    
    export let TotalRecords;

    let counters = 1;
    let showREIP = 20; //Show Records in Page = showREIP;
    $: TotalPages  = Math.ceil( TotalRecords.length / showREIP);
    $: pageOffset = (counters - 1) * showREIP;
    
    const displayed_count = spring();
    $: displayed_count.set(counters);
    $: offset = modulo($displayed_count, 1);

    export const myNext = ()=>{

      if(counters === TotalPages){ active = "disabled"; return false; }
      counters = counters + 1;
      //console.log(data.length);
      //console.log(Query, searchKey, counters);
      //MyPaginationNavigation(Query, searchKey, counters);

    };
    // End myNext
    
   export const myPrevious = ()=>{

      if(counters === 1){ active = "disabled"; return false;}
      counters = counters - 1;
      //console.log(Query, searchKey, counters);
      //MyPaginationNavigation(Query, searchKey, counters);

    };
    // End myPrevious
    
    const modulo =(n, m)=>{
      // handle negative numbers
      return ((n % m) + m) % m;
    };
    // End modulo

</script>

<div class="container mt-5 mb-5">
    <div class="row">
        {pageOffset} - {TotalPages} - {TotalRecords.length}
        <!--Pagination Start-->
        <div class="col-md-12 col-lg-12 col-sm col-12">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center" id="PDPAGE">
                    <li class="page-item"><a sveltekit:prefetch class="page-link btn {counters === 1 ? 'disabled':''}" id="prevButton" on:click={myPrevious}>Previous</a></li>
                    
                    <li class="page-item w-100">
                        <a class="page-link btn disabled" href="!#">
                        <div class="counter-viewport">
                            <div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
                                                                                
                            <strong class="hidden" aria-hidden="true">
                                {Math.floor($displayed_count + 1)} 
                                Page(s) : {Math.floor($displayed_count + 1) * showREIP } - {showREIP} Records
                            </strong>
                                
                            <strong>
                                {Math.floor($displayed_count)} 
                                {#if Math.floor($displayed_count) !== 0}
                                    {#if counters === 1}
                                        Page(s) : {(Math.floor($displayed_count) * 1) } -  {(Math.floor($displayed_count) * showREIP) + 0 }  Records
                                    {:else}
                                        <!-- Page(s) : {(Math.floor($displayed_count) * 50) } -  -->
                                        Page(s) : {(Math.floor($displayed_count * showREIP) - showREIP + 1) } - {(Math.floor($displayed_count) * showREIP)}  Records
                                    {/if}
                                {:else}
                                    Page(s) : {(Math.floor($displayed_count) * showREIP)} - {showREIP} Records
                                {/if}
                            </strong>
        
                            </div>
                        </div>	                        
                        </a>
                    </li>
                    
                    <li class="page-item"><a sveltekit:prefetch class="page-link btn {counters === TotalPages ? 'disabled':''}" id="nextButton" on:click={myNext}>Next</a></li>
                </ul>
            </nav>
        </div>        
        <!--Pagination End--> 

    </div>
</div>


<style>

#PDPAGE .page-link{border-radius: 0 !important;}
    #PDPAGE .page-item:not(:first-child) .page-link {margin-left:1px;}
    #PDPAGE .btn{ color: #444;}
    
    #MyCustomCount {
        width:100%;
    }

    .counter-viewport {
        width: auto;
        height: 20.7px;
        overflow: hidden;
        text-align: center;
        position: relative;
    }

    .counter-viewport strong {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        font-weight: 400;
        color: var(--color-theme-1);
        font-size: 1rem;
        align-items: center;
        justify-content: center;
    }

    .counter-digits {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .hidden {
        top: -100%;
        user-select: none;
    }	

    @media only screen and (max-width: 768px) {

        #Pgnton{ position: relative; top:92px;}

        #PDPAGE .btn {
        height: 32px;
        font-size: 0.7rem;
        }
        #PDPAGE .counter-viewport strong {
        font-size: 0.7rem; font-weight: 600;
        }
    }


</style>