<script context="module">
import algoliasearch from 'algoliasearch'

import Country from '$lib/countryPhoneCodes.json'


// Connect and authenticate with your Algolia app
const ALGOLIA_APP_ID = "48O3SXQXMR";
const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
const ALGOLIA_INDEX_NAME = "Drv_Svelte_2022";
const ALGOLIA_INDEX_TEST_NAME = 'tbl_country';
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);  
export let data;


const addObject = (Country) =>{
    index.saveObjects(Country);
}

const Serach = () =>{
    index.search().then(({ hits }) => {
        //console.log(hits);
        //return data = (hits);
        for(data of hits){ return data; }
    });    
}

const funtest = (val)=>{ console.log( val);}

</script>

<div>
    output must be here:<br/>
    
</div>
