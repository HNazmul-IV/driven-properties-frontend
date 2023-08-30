<!-- <script context="module">
    export async function load({fetch}) {
        const res = await fetch(
            `${baseURL}/findResultServiceFeeDubai/Palace/Residential/2020/5`
        );
        console.log(res);
        const { results } = await res.json();

        // if (res.ok) {
            return {
                props: {
                    searcheddData: results,
                },
            };
        // }
    }
</script> -->

<script>
    import { serviceFee } from "./store.js";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { fade } from 'svelte/transition';
    
    // baseURL =  local Url or Server Url access
    import { baseURL } from "../../../base-url"; 

    import LeadFormLeft from "$lib/commons/LeadFormLeft.svelte";
    import BreadCrumb from "$lib/commons/breadcrumb.svelte";

    // export let searcheddData = [];
    let searcheddData = [];
    let searchedKey = [];

    const sfdurl=`${baseURL}/findResultServiceFeeDubai`;
    const skurl = `${baseURL}/searchKeywordServiceFeeDubai`;

    
    
    let pageContent = [];
    let pageSlug = $page.url.pathname.split("/");
    onMount(async () => {
        const response = await fetch(
            `${baseURL}/getSignleHeaderMenu/${pageSlug[2]}`
        );
        const data = await response.json();
        pageContent = data;
        //getSignleHeaderMenu API End
    });

    // get result data on load 
    onMount(async () => {
        const response = await fetch(
            `${sfdurl}/${($serviceFee.location !== "") ? $serviceFee.location:' '}/${$serviceFee.propertyType}/${$serviceFee.year}/${$serviceFee.norows}`
        );
        const data = await response.json();
        console.log(data);
        searcheddData = data;
        //getSignleHeaderMenu API End
    });
        
    // get result data when submit button clicked
    const handleServiceChargeForm = async() => {
        const response = await fetch(
            `${sfdurl}/${($serviceFee.location !== "") ? $serviceFee.location:' '}/${$serviceFee.propertyType}/${$serviceFee.year}/${$serviceFee.norows}`
        );
        const data = await response.json();
        console.log(data);
        searcheddData = data;
    }

    // get search keyword when fill input box
    const handleKeywordSearch = async(e) => {
        
        document.onclick = function () {
            document.getElementById("search-container").style.display = "none";
        };
        
        let value = e.target.value;
        const response = await fetch( `${skurl}/${value}` );
        
        if(value !== ""){
            document.getElementById('search-container').style.display = "block";
        }else{
            document.getElementById('search-container').style.display = "none";
        }

        const searchKey = await response.json();
        console.log(searchKey);
        searchedKey = searchKey;
    }

    const handleSearchClicked = async(e) => {
        const searchClickedText = e.target.innerText;
        document.getElementById('location-input').value = searchClickedText;
        $serviceFee.location = searchClickedText;
        document.getElementById('search-container').style.display = "none";
    }

    //console.log(pageSlug);
</script>

<!-- ======= Hero Section ======= -->
<section id="hero-noimage" class="d-flex align-items-center" />
<!-- End Hero -->

<section id="drv-bread" class="section-bg">
    <BreadCrumb
        imgbg={"/l9images/banners/" + pageContent.imgname}
        LinkOne={pageSlug[1]}
        LinkTwo={pageSlug[2]}
        LinkThree={pageSlug[2]}
        headings={pageContent.name}
        Bdtype={1}
    />
    <LeadFormLeft />
</section>


<!-- ======= Service charge index Section ======= -->
<section id="service-charge-index-section" class="service-charge-index-section">
    <div class="container service-charge-index aos-init aos-animate" data-aos="fade-up">
        <h3>SERVICE FEE IN DUBAI</h3>
        <div id="search-container" >
            {#each searchedKey as item}
                <div class="search-key" on:click={handleSearchClicked} transition:fade>{item.address}</div>
            {/each}
        </div>
        <form>
            <div class="form-group location-container">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Location</label>
                <i class="bi bi-search location-search"></i>
                <input type="text" class="form-control location-input" id="location-input" bind:value={$serviceFee.location} 
                on:keyup={handleKeywordSearch} placeholder="Location / Property Name">
            </div>

            <div class="second-row-type-year">
                <div class="form-group col-sm-12 col-md-6 mt-2">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <div><label>Property Type</label></div>
                    <!-- <input type="text"  class="form-control" bind:value={$serviceFee.propertyType} /> -->
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        
                        <input type="radio" class="btn-check"  bind:group={$serviceFee.propertyType} value="all" id="all" autocomplete="off" check> 
                        <label class="btn btn-secondary" for="all">All</label>
                        
                        <input type="radio" class="btn-check"  bind:group={$serviceFee.propertyType} value="residential" id="residential" autocomplete="off"> 
                        <label class="btn btn-secondary" for="residential">Residential</label>
                        
                        <input type="radio" class="btn-check"  bind:group={$serviceFee.propertyType} value="commercial" id="commercial" autocomplete="off">
                        <label class="btn btn-secondary" for="commercial">Commercial</label>
                        
                        <input type="radio" class="btn-check"  bind:group={$serviceFee.propertyType} value="retail" id="retail" autocomplete="off">
                        <label class="btn btn-secondary" for="retail">Retail</label>
                    </div>
                </div>

                <div class="form-group col-sm-12 col-md-6 mt-2">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>Year</label>
                    <!-- <input type="text"  class="form-control" bind:value={$serviceFee.year} /> -->
                    <div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        
                            <input type="radio" class="btn-check"  bind:group={$serviceFee.year} value="all" id="all1" autocomplete="off" check> 
                            <label class="btn btn-secondary" for="all1">All</label>
                            
                            <input type="radio" class="btn-check"  bind:group={$serviceFee.year} value="2022" id="2022" autocomplete="off"> 
                            <label class="btn btn-secondary" for="2022">2022</label>
                            
                            <input type="radio" class="btn-check"  bind:group={$serviceFee.year} value="2021" id="2021" autocomplete="off">
                            <label class="btn btn-secondary" for="2021">2021</label>
                            
                            <input type="radio" class="btn-check"  bind:group={$serviceFee.year} value="2020" id="2020" autocomplete="off">
                            <label class="btn btn-secondary" for="2020">2020</label>
    
                            <input type="radio" class="btn-check"  bind:group={$serviceFee.year} value="2019" id="2019" autocomplete="off">
                            <label class="btn btn-secondary" for="2019">2019</label>
    
                            <input type="radio" class="btn-check"  bind:group={$serviceFee.year} value="2018" id="2018" autocomplete="off">
                            <label class="btn btn-secondary" for="2018">2018</label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-group mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>View number of records</label>
                <!-- <input type="text"  class="form-control" bind:value={$serviceFee.norows} /> -->

                <div>
                    
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            
                        <input type="radio" class="btn-check"  bind:group={$serviceFee.norows} value="50" id="50" autocomplete="off" check> 
                        <label class="btn btn-secondary" for="50">50</label>
                        
                        <input type="radio" class="btn-check"  bind:group={$serviceFee.norows} value="100" id="100" autocomplete="off"> 
                        <label class="btn btn-secondary" for="100">100</label>
                        
                        <input type="radio" class="btn-check"  bind:group={$serviceFee.norows} value="200" id="200" autocomplete="off">
                        <label class="btn btn-secondary" for="200">200</label>
                        
                        <input type="radio" class="btn-check"  bind:group={$serviceFee.norows} value="500" id="500" autocomplete="off">
                        <label class="btn btn-secondary" for="500">500</label>

                        <input type="radio" class="btn-check"  bind:group={$serviceFee.norows} value="1000" id="1000" autocomplete="off">
                        <label class="btn btn-secondary" for="1000">1000</label>

                        <input type="radio" class="btn-check"  bind:group={$serviceFee.norows} value="1200" id="1200" autocomplete="off">
                        <label class="btn btn-secondary" for="1200">1200</label>
                    </div>
                </div>
            </div>
            <div class="mt-4 mb-3">
                <button type="submit" on:click|preventDefault={handleServiceChargeForm} 
                class="d-grid btn btn-primary search-btn"><i class="bi bi-search"></i> Search</button>
            </div>
          </form>
          <!-- <p>{JSON.stringify($serviceFee)}</p> -->

          <hr/>
          <!-- Show results -->
        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0"  id="collapse1">
                <table class="table table-hover  result-container" >
                    <thead>
                        <tr class="table-head">
                            <th width="5%" scope="col" class="table-heac-th" >S.No</th>
                            <th width="35%" scope="col" class="table-heac-th" >Location</th>
                            <th width="25%" scope="col" class="table-heac-th" >Property Name</th>
                            <th width="10%" scope="col" class="table-heac-th" >Year</th>
                            <th width="10%" scope="col" class="table-heac-th" >Type</th>
                            <th width="15%" scope="col">Service Charge <br/>AED / Sq.Ft.</th>
                        </tr>
                    </thead>
                
                    <tbody>
                        {#each searcheddData as item, i}
                        <tr >
                            <td width="5%">{i+1}</td>
                            {#if item.address.split(',').length == 2 }
                                <td >{item.address.split(',')[1]}</td>
                                <td >{item.address.split(',')[0]}</td>
                            {/if}
                            {#if item.address.split(',').length == 3 }
                                <td >{item.address.split(',')[0]}, <br/><strong>{item.address.split(',')[1]}</strong></td>
                                <td >{item.address.split(',')[2]}</td>
                            {/if}
                            <td width="10%">{item.year}</td>
                            <td width="10%">{item.type}</td>
                            <td width="15%">{item.total_charge_sqft}</td>
                        </tr>
                        {:else}
                        <tr>
                            <td class="no-result" colspan="6">No result found!</td>
                        </tr>
                        {/each}
                    </tbody>
                </table>

                
            </div>
        </div>
    </div>
    <div class="container para-container">
        <div class="para">
            <p>All information posted is merely for educational and informational purposes. It is not intended as a substitute for professional advice. Should you decide to act upon any information on this website, you do so at your own risk.

            While the information on the website has been verified to the best of our abilities, we cannot guarantee that here are no mistakes or errors.
            
            We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit the page.
            </p>
        </div>
        <div class="para">
            <h3>DUBAI SERVICE CHARGES</h3>
            <p>The Dubai service Charges are paid towards the maintenance of the property and amenities. These charges are paid to the Dubai Land Department. The maintenance charge is based on the RERA service and maintenance index. These fees are charged on a square foot basis and can range anywhere from AED 3 to AED 30 per month or more depending upon the area / Dubai community.

                Service charges apply to each property owner who owns a property in Dubai. The service charge is calculated on a per square foot basis, with the amount varying between project developments depending on factors such as which floor the apartment is located on, whether it has a terrace or balcony, etc.
                
                Property buyers must pay additional fees for buying property in Dubai in the form of this Dubai Service charges. However, there are many fees aside from the property service charges, such as property transfer and registration fees, agency fees, security deposit, insurance fees, and Dubai electricity and water authority fees which also needs to be considered while planning to buy an apartment in Dubai.
                
                Apart from these, Developers also charge something known as a Sinking Fund. The sinking fund for properties in Dubai acts as reserve funds which are set aside for any major repairs or maintenance that may be required in the future. This Sinking fund is also payable by the homeowner and will cover items such as repair, renovation, or replacement of the roof, external cladding, fire alarms, safety systems, A/C systems in the common areas, windows, balconies, parking areas, elevators, and so on. Other service charges that add-on to the total cost includes utilities for chiller-free and district cooling units if available within the Community.
            </p>
        </div>
    </div>
</section>
<!-- End About Us Section -->

<style>
tr.table-head {
    background: #333;
    color: #f1f1f1;
}
.table td, .table th, .table tr{
    font-size: 14px;
}
.table td, .table th{
    border: 1px solid #f1f1f1;
    text-align: center;
}
.second-row-type-year{
    display: flex;
    justify-content: space-between;
}
.service-charge-index label{
    font-weight: bold;
    margin: 2px 0;
}
.btn-group>.btn {
    position: relative;
    flex: 1 1 auto;
    font-size: 14px;
    padding: 6px 31px;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 0px;
}
.btn-check:checked+.btn-secondary{
    color: #fff;
    background-color: #4167b1;
}
.container.service-charge-index.aos-init.aos-animate {
    background: #f5f5f5;
    padding: 16px;
    border-radius: 4px;
    position: relative;
}
.result-container{
    background-color: white;
}
.location-container{
    position: relative;
}
.search-btn {
    width: 100%;
    background-color: #4167b1;
    display: flex !important;
    text-align: center;
    justify-content: center;
}
i.bi.bi-search {
    margin-right: 10px;
}
i.bi.bi-search.location-search {
    position: absolute;
    top: 29px;
    left: 1px;
    background: #4167b1;
    padding: 6px 8px;
    color: white;
}
input#location-input {
    padding-left: 40px;
}
.btn-secondary {
    color: #080808;
    background-color: #fff;
    border-color: #6c757d;
}
.table-heac-th{
    vertical-align: middle;
}
div#search-container {
    background: white;
    font-size: 14px;
    padding: 0 11px;
    position: absolute;
    border: 1px solid #ccc;
    border-top: 0px;
    z-index: 11;
    top: 123px;
    width: auto;
    left: 48px;
    min-width: 50%;
}
div#search-container .search-key {
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    padding: 5px;
    cursor: pointer;
}
div#search-container .search-key:hover {
    background-color: #f5f5f5;
}

.para {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    padding: 14px;
    margin-bottom: 20px;
    border: 1px solid #e5e5e5;
    font-size: 16px;
    border-radius: 4px;
    background-color: white;
}
.para-container {
    padding: 15px 0px;
}
.no-result{
    font-weight: bold;
    text-align:center;
    padding: 10px;
}
@media(max-width: 768px){
    .second-row-type-year{
        display: block;
    }
    .btn-group>.btn {
        font-size: 14px;
        padding: 6px 10px;
    }
    .table-heac-th{
        vertical-align: middle;
    }
    #collapse1{
        overflow: scroll;
        height: 700px;
        width: 97%;
    }
}
</style>
