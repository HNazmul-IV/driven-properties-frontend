<script>

    import { onMount,createEventDispatcher } from 'svelte';

    
    let MySquery = 'Dubai';
    const dispatch = createEventDispatcher();
    let btnCallingMap;


    onMount(async () => { });

    btnCallingMap = ()=>{
        let query = {
            'Community': MySquery,
        }
        dispatch('MySerachingBtn', query);
        //console.log(MySquery);
    };

</script>

<div class="container">
    <div class="row mt-5 mb-2">

        <div class="col-md-2 mb-2">
            <input type="text" class="form-control" placeholder="For Rent/Sale" />
        </div>

        <div class="col-md-10  mb-2">
            <div class="g-0 row">
                <div class="g-0 col-md-10">
                    <input type="text" class="form-control" id="Community" bind:value={MySquery} placeholder="Searching here ...." />
                </div>

                <div class="g-0 col-md-2">
                    <button type="button" on:click={btnCallingMap} id="mySearch" class="btn btn-dark w-100 text-uppercase">Search</button>
                </div>

            </div>
        </div>

    </div>

    <div class="row mt-2 mb-5">
    
        <div class="col-sm  mb-2">
            <input type="text" class="form-control" placeholder="Apartment, Villa, Townhouses, etc" />
        </div>

        <div class="col-sm mb-2">
            <input type="text" class="form-control" placeholder="Bedroom Types" />
        </div>

        <div class="g-0 col-sm mb-2">
            <div class="g-0 row">
                
                <div class="col-sm">
                    <input type="text" class="form-control" placeholder="Min Price"/>
                </div>

                <div class="col-sm">
                    <input type="text" class="form-control" placeholder="Max Price"/>
                </div>

            </div>            
        </div>

    </div>
</div>

<style>
    .form-control{ border-radius: 0 !important; height: 55px;}
    .btn{ border-radius: 0 !important; height: 55px;}
    
</style>