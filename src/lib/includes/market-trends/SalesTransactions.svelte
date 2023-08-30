<script>
    import { saleTransaction } from "./store.js";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { fade } from "svelte/transition";

    // baseURL =  local Url or Server Url access
    import { baseURL } from "../../../base-url";

    import LeadFormLeft from "$lib/commons/LeadFormLeft.svelte";
    import BreadCrumb from "$lib/commons/breadcrumb.svelte";

    // export let searcheddData = [];
    let searcheddData = [];
    let searchedKey = [];

    // Sales Transaction url variables
    const sturl = `${baseURL}/findResultsaleTransaction`;
    const stkurl = `${baseURL}/searchKeywordsaleTransaction`;

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
            `${sturl}/${
                $saleTransaction.location !== ""
                    ? $saleTransaction.location
                    : " "
            }/${$saleTransaction.propertyType}/${$saleTransaction.bedrooms}/${
                $saleTransaction.transactionType
            }/${$saleTransaction.status}/${$saleTransaction.norows}`
        );
        const data = await response.json();
        searcheddData = data;
        //getSignleHeaderMenu API End
    });

    // get result data when submit button clicked
    const handleServiceChargeForm = async () => {
        const response = await fetch(
            `${sturl}/${
                $saleTransaction.location !== ""
                    ? $saleTransaction.location
                    : " "
            }/${$saleTransaction.propertyType}/${$saleTransaction.bedrooms}/${
                $saleTransaction.transactionType
            }/${$saleTransaction.status}/${$saleTransaction.norows}`
        );
        const data = await response.json();
        console.log(data);
        searcheddData = data;
    };

    // get search keyword when fill input box
    const handleKeywordSearch = async (e) => {

        document.onclick = function () {
            document.getElementById("search-container").style.display = "none";
        };

        let value = e.target.value;
        const response = await fetch(`${stkurl}/${value}`);

        if (value !== "") {
            document.getElementById("search-container").style.display = "block";
        } else {
            document.getElementById("search-container").style.display = "none";
        }

        const searchKey = await response.json();
        searchedKey = searchKey;
    };

    const handleSearchClicked = async (e) => {
        const searchClickedText = e.target.innerText;
        document.getElementById("location-input").value = searchClickedText;
        $saleTransaction.location = searchClickedText;
        document.getElementById("search-container").style.display = "none";
    };

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
    <div
        class="container service-charge-index aos-init aos-animate"
        data-aos="fade-up"
    >
        <div id="search-container" onblur="onblur()">
            {#each searchedKey as item}
                <div class="search-key" on:click={handleSearchClicked} transition:fade>
                    {item.community} - {item.building_name}
                </div>
            {/each}
        </div>
        <form>
            <div class="form-group location-container">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Location</label>
                <i class="bi bi-search location-search" />
                <input
                    type="text"
                    class="form-control location-input"
                    id="location-input"
                    bind:value={$saleTransaction.location}
                    on:keyup={handleKeywordSearch}
                    placeholder="Location / Property Name"
                />
            </div>

            <div class="form-group col-sm-12 col-md-6 mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div><label>Property Type</label></div>
                <!-- <input type="text"  class="form-control" bind:value={$serviceFee.propertyType} /> -->
                <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                >
                    <input
                        type="radio"
                        class="btn-check"
                        bind:group={$saleTransaction.propertyType}
                        value="all"
                        id="all"
                        autocomplete="off"
                        check
                    />
                    <label class="btn btn-secondary" for="all">All</label>

                    <input
                        type="radio"
                        class="btn-check"
                        bind:group={$saleTransaction.propertyType}
                        value="apartment"
                        id="apartment"
                        autocomplete="off"
                    />
                    <label class="btn btn-secondary" for="apartment"
                        >Apartment</label
                    >

                    <input
                        type="radio"
                        class="btn-check"
                        bind:group={$saleTransaction.propertyType}
                        value="villa"
                        id="villa"
                        autocomplete="off"
                    />
                    <label class="btn btn-secondary" for="villa">Villa</label>

                    <input
                        type="radio"
                        class="btn-check"
                        bind:group={$saleTransaction.propertyType}
                        value="land"
                        id="land"
                        autocomplete="off"
                    />
                    <label class="btn btn-secondary" for="land">Land</label>

                    <input
                        type="radio"
                        class="btn-check"
                        bind:group={$saleTransaction.propertyType}
                        value="commercial"
                        id="commercial"
                        autocomplete="off"
                    />
                    <label class="btn btn-secondary" for="commercial"
                        >Commercial</label
                    >
                </div>
            </div>

            <div class="form-group col-sm-12 col-md-6 mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Bedrooms</label>
                <!-- <input type="text"  class="form-control" bind:value={$saleTransaction.bedrooms} /> -->
                <div class="btn-bed">
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.bedrooms}
                            value="all"
                            id="all1"
                            autocomplete="off"
                            check
                        />
                        <label class="btn btn-secondary" for="all1">All</label>

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.bedrooms}
                            value="Studio"
                            id="studio"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="studio"
                            >Studio</label
                        >

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.bedrooms}
                            value="1 Bedroom"
                            id="1bedroom"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="1bedroom"
                            >1 Bed</label
                        >

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.bedrooms}
                            value="2 Bedroom"
                            id="2bedroom"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="2bedroom"
                            >2 Bed</label
                        >

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.bedrooms}
                            value="3 Bedroom"
                            id="3bedroom"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="3bedroom"
                            >3 Bed</label
                        >

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.bedrooms}
                            value="4 Bedroom"
                            id="4bedroom"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="4bedroom"
                            >4 Bed</label
                        >

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.bedrooms}
                            value="5 Bedroom"
                            id="5bedroom"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="5bedroom"
                            >5 Bed</label
                        >

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.bedrooms}
                            value="6 Bedroom"
                            id="6bedroom"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="6bedroom"
                            >6 Bed</label
                        >
                    </div>
                </div>
            </div>

            <div class="row-transactiontype-status">
                <div class="form-group col-sm-12 col-md-6 mt-2">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <div><label>Transaction Type</label></div>
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.transactionType}
                            value="all"
                            id="all2"
                            autocomplete="off"
                            check
                        />
                        <label class="btn btn-secondary" for="all2">All</label>

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.transactionType}
                            value="sale"
                            id="sales"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="sales"
                            >Sales</label
                        >

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.transactionType}
                            value="mortgage"
                            id="mortgage"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="mortgage"
                            >Mortgage</label
                        >
                    </div>
                </div>

                <div class="form-group col-sm-12 col-md-6 mt-2">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>Status</label>
                    <div>
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic radio toggle button group"
                        >
                            <input
                                type="radio"
                                class="btn-check"
                                bind:group={$saleTransaction.status}
                                value="all"
                                id="all3"
                                autocomplete="off"
                                check
                            />
                            <label class="btn btn-secondary" for="all3"
                                >All</label
                            >

                            <input
                                type="radio"
                                class="btn-check"
                                bind:group={$saleTransaction.status}
                                value="ready"
                                id="ready"
                                autocomplete="off"
                            />
                            <label class="btn btn-secondary" for="ready"
                                >Ready</label
                            >

                            <input
                                type="radio"
                                class="btn-check"
                                bind:group={$saleTransaction.status}
                                value="offplan"
                                id="offplan"
                                autocomplete="off"
                            />
                            <label class="btn btn-secondary" for="offplan"
                                >Offplan</label
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>View number of records</label>

                <div>
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.norows}
                            value="50"
                            id="50"
                            autocomplete="off"
                            check
                        />
                        <label class="btn btn-secondary" for="50">50</label>

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.norows}
                            value="100"
                            id="100"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="100">100</label>

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.norows}
                            value="200"
                            id="200"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="200">200</label>

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.norows}
                            value="500"
                            id="500"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="500">500</label>

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.norows}
                            value="1000"
                            id="1000"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="1000">1000</label>

                        <input
                            type="radio"
                            class="btn-check"
                            bind:group={$saleTransaction.norows}
                            value="1200"
                            id="1200"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="1200">1200</label>
                    </div>
                </div>
            </div>
            <div class="mt-4 mb-3">
                <button
                    type="submit"
                    on:click|preventDefault={handleServiceChargeForm}
                    class="d-grid btn btn-primary search-btn"
                    ><i class="bi bi-search" /> Search</button
                >
            </div>
        </form>
        <!-- <p>{JSON.stringify($saleTransaction)}</p> -->

        <hr />
        <!-- Show results -->
        <div class="row content">
            <div class="col-lg-12 pt-4 pt-lg-0" id="collapse1">
                <table class="table table-hover  result-container">
                    <thead>
                        <tr class="table-head">
                            <th scope="col" class="table-heac-th">S.No</th>
                            <th scope="col" class="table-heac-th">Date</th>
                            <th scope="col" class="table-heac-th">Location</th>
                            <th scope="col" class="table-heac-th"
                                >Property Name</th
                            >
                            <th scope="col" class="table-heac-th">Procedure</th>
                            <th scope="col" class="table-heac-th">Status</th>
                            <th scope="col" class="table-heac-th">Type</th>
                            <th scope="col" class="table-heac-th">Bedrooms</th>
                            <th scope="col" class="table-heac-th">Price AED</th>
                            <th scope="col">Size <br />Sq.Ft.</th>
                            <th scope="col">Price AED <br />Per Sq.Ft.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {#each searcheddData as item, i}
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.trans_date}</td>
                                <td>{item.community}</td>
                                <td>{item.building_name}</td>
                                <td>{item.property_type}</td>
                                <td>{item.status}</td>
                                <td>{item.property_category}</td>
                                <td>{item.bedrooms}</td>
                                <td>{item.property_price}</td>
                                <td>{item.total_area}</td>
                                <td
                                    >{(
                                        item.property_price / item.total_area
                                    ).toFixed(2)}</td
                                >
                            </tr>
                        {:else}
                            <tr>
                                <td class="no-result" colspan="11"
                                    >No result found!</td
                                >
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="container para-container">
        <div class="para">
            <p>
                All information posted is merely for educational and
                informational purposes. It is not intended as a substitute for
                professional advice. Should you decide to act upon any
                information on this website, you do so at your own risk.
            </p>

            <p>
                While the information on the website has been verified to the
                best of our abilities, we cannot guarantee that here are no
                mistakes or errors.
            </p>

            <p>
                We reserve the right to change this policy at any given time, of
                which you will be promptly updated. If you want to make sure
                that you are up to date with the latest changes, we advise you
                to frequently visit the page.
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
    .table td,
    .table th,
    .table tr {
        font-size: 14px;
    }
    .table td,
    .table th {
        border: 1px solid #f1f1f1;
        text-align: center;
    }
    .service-charge-index label {
        font-weight: bold;
        margin: 2px 0;
    }
    .btn-group > .btn {
        position: relative;
        flex: 1 1 auto;
        font-size: 14px;
        padding: 6px 10px;
        height: 36px;
        border: 1px solid #ccc;
        border-radius: 0px;
        min-width: 125px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .btn-check:checked + .btn-secondary {
        color: #fff;
        background-color: #4167b1;
    }
    .container.service-charge-index.aos-init.aos-animate {
        background: #f5f5f5;
        padding: 16px;
        border-radius: 4px;
        position: relative;
    }
    .result-container {
        background-color: white;
    }
    .location-container {
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
    .table-heac-th {
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
        top: 81px;
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
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
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
    .row-transactiontype-status {
        display: flex;
    }
    .no-result {
        font-weight: bold;
        text-align: center;
        padding: 10px;
    }
    @media (max-width: 768px) {
        .btn-group > .btn {
            font-size: 10px;
            padding: 2px 3px;
            height: 20px;
            min-width: 56px;
        }
        .btn-bed .btn-group>.btn{
            min-width: 44px;
        }
        .table-heac-th {
            vertical-align: middle;
        }
        #collapse1 {
            overflow: scroll;
            height: 700px;
            width: 97%;
        }
    }
</style>
