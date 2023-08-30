<script>
import {onMount} from 'svelte'   
import algoliasearch from 'algoliasearch/lite';

const ALGOLIA_APP_ID = "SV7HZL8LU4";
const ALGOLIA_API_KEY = "61d16254658101399d10d304dabba3de";
const ALGOLIA_INDEX_NAME = "DrivenPropertiesIndex";
const ALGOLIA_INDEX_TEST_NAME = 'DrivenTest'

let Serachclient;
let index;
let query ='';
let hits ='';

onMount( async ()=>{

    Serachclient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    index = Serachclient.initIndex(ALGOLIA_INDEX_TEST_NAME);

    // only query string
    index.search({query}).then(console.log()); 
    //index.search(serach()).then(console.log(hits))
    //console.log(serach())

});

async function serach(){ 
    let abc = query;
    const res = await index.search(abc);
    hits = res.hits;
    console.log({hits});
    //const res = await index.serach({query}).then(console.log(hits));
    //hits = res.hits;
};

</script>

<div>
    <input type="text" bind:value={query} on:keyup={serach} />
    <p>{query}</p>
    
    <br/><br/><br/>
    {#each hits as MyData }
    <p>{MyData.Property_Name}</p>
    {:else}
        <p>No Records found</p>
    {/each}

</div>

<style>
    div{ position: relative; margin-top:50px;}
</style>
