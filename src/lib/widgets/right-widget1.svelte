<script>
    import algoliasearch from "algoliasearch";
    import { page } from "$app/stores"; 
    import { afterUpdate, onMount } from "svelte";

    const ALGOLIA_APP_ID = "48O3SXQXMR";
    const ALGOLIA_API_KEY = "ec1af9fe04b917db992f934e4b96b695";
    const ALGOLIA_INDEX_TEST_NAME = "tbl_properties";
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_TEST_NAME);

    let status;
    let status1;
    afterUpdate(()=>{
        const exploreBaseUrl='/explore/dubai-properties-areas/';
        let pageSlug = $page.url.pathname.split('/');
        status = pageSlug[1].split('-')[2];
        status1 = pageSlug[1]
        console.log(status, status1);
    })

    const dataSales = [
        {'link':'/explore/dubai-properties-areas/dubai-marina', 'community': 'Dubai Marina', 'hits': 87},
        {'link':'/explore/dubai-properties-areas/dubai-international-financial-centre', 'community': 'DIFC', 'hits': 53},
        {'link':'/explore/dubai-properties-areas/dubai-creek-harbour', 'community': 'Dubai Creek Harbour', 'hits': 150},
        {'link':'/explore/dubai-properties-areas/discovery-gardens', 'community': 'Discovery Gardens', 'hits': 0},
        {'link':'/explore/dubai-properties-areas/springs-dubai', 'community': 'Springs Dubai', 'hits': 0},
        {'link':'/explore/dubai-properties-areas/al-barsha', 'community': 'Al Barsha', 'hits': 5},
        {'link':'/explore/dubai-properties-areas/palm-jumeirah', 'community': 'Palm Jumeirah', 'hits': 66},
        {'link':'/explore/dubai-properties-areas/jumeirah-village-circle', 'community': 'Jumeirah Village Circle - JVC', 'hits': 0},
        {'link':'/explore/dubai-properties-areas/downtown-dubai', 'community': 'Downtown Dubai', 'hits': 271},
        {'link':'/explore/dubai-properties-areas/dubai-silicon-oasis', 'community': 'Silicon Oasis', 'hits': 28},
        {'link':'/explore/dubai-properties-areas/business-bay', 'community': 'Business Bay', 'hits': 271},
        {'link':'/explore/dubai-properties-areas/dubai-land', 'community': 'Dubai Land', 'hits': 27},
        {'link':'/explore/dubai-properties-areas/dubai-hills-estate', 'community': 'Dubai Hills Estate', 'hits': 156},
        {'link':'/explore/dubai-properties-areas/jumeirah-bay-island', 'community': 'Jumeirah Bay Island', 'hits': 87},
        {'link':'/explore/dubai-properties-areas/akoya-oxygen', 'community': 'Akoya Oxygen', 'hits': 2},
        {'link':'/explore/dubai-properties-areas/damac-hills', 'community': 'Damac Hills', 'hits': 47},
        {'link':'/explore/dubai-properties-areas/jebel-ali-free-zone', 'community': 'Jebel Ali Free Zone (JAFZA)', 'hits': 0},
    ];
    const dataRent = [
        {'link': '/explore/dubai-properties-areas/dubai-marina', 'community': 'Dubai Marina', 'hits': 84},
        {'link':'/explore/dubai-properties-areas/dubai-international-financial-centre', 'community': 'DIFC', 'hits': 94},
        {'link':'/explore/dubai-properties-areas/dubai-creek-harbour', 'community': 'Dubai Creek Harbour', 'hits': 145},
        {'link':'/explore/dubai-properties-areas/discovery-gardens', 'community': 'Discovery Gardens', 'hits': 7},
        {'link':'/explore/dubai-properties-areas/springs-dubai', 'community': 'Springs Dubai', 'hits': 0},
        {'link':'/explore/dubai-properties-areas/al-barsha', 'community': 'Al Barsha', 'hits': 42},
        {'link':'/explore/dubai-properties-areas/palm-jumeirah', 'community': 'Palm Jumeirah', 'hits': 34},
        {'link':'/explore/dubai-properties-areas/jumeirah-village-circle', 'community': 'Jumeirah Village Circle - JVC', 'hits': 0},
        {'link':'/explore/dubai-properties-areas/downtown-dubai', 'community': 'Downtown Dubai', 'hits': 147},
        {'link':'/explore/dubai-properties-areas/dubai-silicon-oasis', 'community': 'Silicon Oasis', 'hits': 14},
        {'link':'/explore/dubai-properties-areas/business-bay', 'community': 'Business Bay', 'hits': 212},
        {'link':'/explore/dubai-properties-areas/dubai-land', 'community': 'Dubai Land', 'hits': 6},
        {'link':'/explore/dubai-properties-areas/dubai-hills-estate', 'community': 'Dubai Hills Estate', 'hits': 66},
        {'link':'/explore/dubai-properties-areas/jumeirah-bay-island', 'community': 'Jumeirah Bay Island', 'hits': 0},
        {'link':'/explore/dubai-properties-areas/akoya-oxygen', 'community': 'Akoya Oxygen', 'hits': 5},
        {'link':'/explore/dubai-properties-areas/damac-hills', 'community': 'Damac Hills', 'hits': 35},
        {'link':'/explore/dubai-properties-areas/jebel-ali-free-zone', 'community': 'Jebel Ali Free Zone (JAFZA)', 'hits': 0},
    ];

</script>
<div id="right-widget1" class="widget-container">
    {#if status === 'sale' || status1 === 'sales'}
        <div class="container sale-container">
            <h3>Popular Areas - For Sale</h3>
            <div class="row">
                <div class="col-sm-12 column">
                    
                    {#each dataSales as item}                        
                        <div class="row-container">
                            <div class="link-text"><a href={item.link}><i class="bi bi-chevron-right"></i> {item.community}</a> </div>
                            <div class="badge">{item.hits}</div>
                        </div>
                    {/each}

                </div>
            </div> <!-- end row -->
        </div> <!-- end sale-container -->
    {/if}

    {#if status === 'rent' || status1 === 'rentals'}
        <div class="container rent-container">
            <h3>Popular Areas - For Rent</h3>
            <div class="row">
                <div class="col-sm-12 column">
                    
                    {#each dataRent as item}                        
                        <div class="row-container">
                            <div class="link-text"><i class="bi bi-chevron-right"></i> {item.community} </div>
                            <div class="badge">{item.hits}</div>
                        </div>
                    {/each}

                </div>
            </div> <!-- end row -->
        </div> <!-- end rent-container -->
    {/if}
</div>
<style>
    div#right-widget1 {
        padding: 3em 0em 3em 4em;
    }
    .link-text a {
        color: #333;
    }
    div#right-widget1 .column div {
        padding: 0.3em;
        margin: 0.5em 0;
        transition-duration: .3s;
        background: #f5f5f5;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
    }
    .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .fa-angle-right:before {
        content: "\f105";
        font-family: FontAwesome;
    }
    .badge {
        color: white;
        background: #6565cc !important;
        line-height: 20px;
        height: 30px;
        width: 40px;
        text-align: center;
        display: block !important;
    }
</style>
