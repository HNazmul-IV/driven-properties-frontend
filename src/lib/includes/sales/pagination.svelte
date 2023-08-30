<script>
    import { onMount, tick } from 'svelte';

    export let DataForPage;
    let totalRecords= DataForPage ? DataForPage: 4500; 
    let LimitPerpages=50;
    let totalPages;
    totalPages = Math.ceil(totalRecords/LimitPerpages);
    
    onMount(async ()=>{
        console.log(totalPages, DataForPage);
    });
    
</script>

<div class="container mt-5 mb-5">
    <div class="row">

        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-start">
                <li class="page-item"><a class="page-link" id="prevButton" href="!#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="!#">1 Page(s) : 0 - 50 Records </a></li>
                <li class="page-item"><a class="page-link" id="prevButton" href="!#">Next</a></li>


                <!-- <li class="page-item"><a class="page-link" id="prevButton" href="!#">Previous</a></li> -->
                <!-- <li class="page-item"><a class="page-link" href="!#">1</a></li>   -->
                <!-- <li class="page-item"><a class="page-link" href="!#">2</a></li>
                <li class="page-item"><a class="page-link" href="!#">3</a></li> -->
                <!-- <li class="page-item"><a class="page-link" id="prevButton" href="!#">Next</a></li> -->
            </ul>
        </nav>        
    </div>
</div>


<style>

</style>