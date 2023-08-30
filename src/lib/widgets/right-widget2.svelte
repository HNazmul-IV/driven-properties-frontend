<script>

    import { page } from "$app/stores"; 
    import { afterUpdate, onMount } from "svelte";
    import algoliasearch from "algoliasearch";

    let status="";
    let status1;

    afterUpdate(()=>{
        const exploreBaseUrl='/explore/dubai-properties-areas/';
        let pageSlug = $page.url.pathname.split('/');
        status = pageSlug[1].split('-')[2];
        status1 = pageSlug[1]
    })

</script>

<div id="right-widget2" class="widget-container">
    <div class="container">
        <h3>POPULAR SEARCHES</h3>
        <div class="row">
            <div class="col-sm-12 column">
                {#if status === 'sale' || status==="" || status1==='sales'}
                    <div class="sale-container right-widget2">
                        <a href={`/properties-for-sale/any/apartments/1/0-150000000`}>
                            <div class="link-text">1 Bedroom Apartment For Sale in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/any/apartments/4/0-150000000`}>
                            <div>4 Bedroom Apartment For Sale in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/dubai-creek-harbour/apartments/2/0-150000000`}>
                            <div>Dubai Creek Harbour Apartments For Sale</div>
                        </a>
                        <a href={`/properties-for-sale/jumeirah-beach-residence/apartments/2/0-150000000`}>
                            <div>Apartments For Sale in Jumeirah Beach Residence</div>
                        </a>
                        <a href={`/properties-for-sale/any/any/2/0-150000000`}>
                            <div>Houses For Sale in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/any/any/2/0-150000000`}>
                            <div>Dubai Properties For Sale	</div>
                        </a>
                        <a href={`/properties-for-sale/any/apartments/2/0-150000000`}>
                            <div>2 Bedroom Apartment For Sale in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/difc/apartments/2/0-150000000`}>
                            <div>DIFC Apartments For Sale</div>
                        </a>
                        <a href={`/properties-for-sale/silicon-oasis/apartments/2/0-150000000`}>
                            <div>Silicon Oasis Dubai Apartments For Sale</div>
                        </a>
                        <a href={`/properties-for-sale/palm-jumeirah/apartments/2/0-150000000`}>
                            <div>Palm Jumeirah Apartments For Sale</div>
                        </a>
                        <a href={`/properties-for-sale/any/apartments/2/0-150000000`}>
                            <div>Buy House in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/any/apartments/2/0-150000000`}>
                            <div>Properties For Sale in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/any/apartments/3/0-150000000`}>
                            <div>3 Bedroom Apartment For Sale in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/downtown-dubai/apartments/2/0-150000000`}>
                            <div>Downtown Dubai Apartments For Sale</div>
                        </a>
                        <a href={`/properties-for-sale/jumeirah-beach-residence/apartments/2/0-150000000`}>
                            <div>JBR Dubai Apartments For Sale</div>
                        </a>
                        <a href={`/properties-for-sale/any/apartments/2/0-150000000`}>
                            <div>Luxury Apartments For Sale in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/any/apartments/2/0-150000000`}>
                            <div>Buy Property in Dubai</div>
                        </a>
                        <a href={`/properties-for-sale/any/apartments/2/0-150000000`}>
                            <div>Apartments For Sale in Dubai</div>
                        </a>
                    </div> <!-- sale container-->
                {/if}
                {#if status==='rent' || status==="" || status1==='rentals'}
                    <div class="rent-container right-widget2">
                        <a href={`/properties-for-rent/any/apartments/2/0-150000000`}>
                            <div>1 Bedroom Apartments For Rent in Dubai</div>
                        </a>
                        <a href={`/properties-for-rent/any/apartments/2/0-150000000`}>
                            <div>2 Bedroom Apartments For Rent in Dubai</div>
                        </a>
                        <a href={`/properties-for-rent/any/apartments/2/0-150000000`}>
                            <div>3 Bedroom Apartments For Rent in Dubai</div>
                        </a>
                        <a href={`/properties-for-rent/any/apartments/2/0-150000000`}>
                            <div>4 Bedroom Apartments For Rent in Dubai</div>
                        </a>
                    </div>
                {/if}
            </div> <!--col-sm-12-->
        </div> <!--row-->
    </div> <!--conatiner-->
</div>
<style>
    div#right-widget2 {
        padding: 0 0 3em 4em;
    }
    div#right-widget2 .column a div {
        padding: .7em;
        background: #fff;
        margin: .7em 0;
        text-align: center;
        border-radius: 28px;
        box-shadow: 1px 1px 1px 2px #ddd;
    }
    div#right-widget2 .column a div{
        color: #333 !important;
    }
    div#right-widget2 .column a div:hover, div#right-widget2 .column a div a:hover{
        background-color: #333;
        color: white !important;
    }

    /* div#right-widget2 .column div:hover{
        background-color: #333;
        color: white;
    } */

</style>
