<script>
    import { marketGuide } from "./store.js";
    import BarChart from "./chartjs/MarketGuide/BarChartTPC.svelte";
    import BarChartMDP from "./chartjs/MarketGuide/BarChartMDP.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    // baseURL =  local Url or Server Url access
    import { baseURL } from "../../../base-url";

    import LeadFormLeft from "$lib/commons/LeadFormLeft.svelte";
    import BreadCrumb from "$lib/commons/breadcrumb.svelte";

    $: modifiedDataMDP = [];
    $: modifiedDataTPC = [];
    let uniqueCommunities = [];
    let avg_price_Data = [];
  
    // Sales Transaction url variables
    const tpc_url = `${baseURL}/getMarketGuideTPC`; // Market Guide TPC(top performing communities)
    const mdp_url = `${baseURL}/getMarketGuideMDP`; // Market Guide MDP(Most Demand Projects)
    const get_communities = `${baseURL}/getMarketGuideCommunity`; // get all communities
    const get_avg_price_data = `${baseURL}/getAvgPriceData`; // get avg price data and change percentage in table

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

    const TPC_Mergeby_communities = (data) => {
        const items = [];
        data.forEach((item) => {
            if (items.length > 0) {
                const index = items.findIndex(
                    (i) => i.community === item.community
                );
                if (index !== -1) {
                    items[index].property_price.push(item.property_price);
                } else {
                    const newItem = { ...item };
                    newItem.property_price = [item.property_price];
                    items.push(newItem);
                }
            } else {
                const newItem = { ...item };
                newItem.property_price = [item.property_price];
                items.push(newItem);
            }
        });
        // console.log(items);
        items.sort((a,b) => b.property_price.length - a.property_price.length)
        return items.slice(0, 6);
    };

    onMount(async()=> {
        const response = await fetch(get_communities);
        const communities = await response.json();
        let communityArr = [];
        communities.forEach((item)=> {
            if (communityArr.length > 0) {
                const index = communityArr.findIndex( (i) => i.community === item.community);
                if (index === -1) {
                    const newItem = { ...item };
                    communityArr.push(newItem);
                }
            } else {
                const newItem = { ...item };
                communityArr.push(newItem);
            }
        })
        uniqueCommunities = communityArr;
    })

    // Top performed Communities
    onMount(async () => {
        const response = await fetch(
            `${tpc_url}/${$marketGuide.TPC_propCategory}/${$marketGuide.TPC_status}`
        );
        const data = await response.json();
        // console.log($marketGuide.TPC_propCategory, $marketGuide.TPC_status);
        modifiedDataTPC = TPC_Mergeby_communities(data);
    });

    // Most in demand projects
    onMount(async () => {
        const response = await fetch(
            `${mdp_url}/${$marketGuide.MDP_community}/${$marketGuide.MDP_status}`
        );
        const data = await response.json();
        data.sort((a,b) => +b.projects - +a.projects)
        modifiedDataMDP = data.slice(0, 6);
    });

    // Get data from avg. price table
    onMount(async () => {
        const response = await fetch(get_avg_price_data);
        const data = await response.json();
        avg_price_Data = data;
    });

    // Get Market Guide TPC(top performing communities)
    const marketguide_tpc = async (e) => {
        if (e.currentTarget.value === "apartment" || e.currentTarget.value === "villa") {
            $marketGuide.TPC_propCategory = e.currentTarget.value;
        } else if (e.currentTarget.id === "all1") {
            $marketGuide.TPC_propCategory = "all";
        }
        if (e.currentTarget.value === "ready" ||e.currentTarget.value === "offplan") {
            $marketGuide.TPC_status = e.currentTarget.value;
        } else if (e.currentTarget.id === "all2") {
            $marketGuide.TPC_status = "all";
        }

        // console.log($marketGuide.TPC_propCategory,$marketGuide.TPC_status);

        const response = await fetch(
            `${tpc_url}/${$marketGuide.TPC_propCategory}/${$marketGuide.TPC_status}`
        );
        const data = await response.json();
        modifiedDataTPC = TPC_Mergeby_communities(data);
    };

    // Market Guide MDP(Most Demand Projects)
    const marketguide_mdp = async (e) => {
        if(e.currentTarget.value !== "ready" && e.currentTarget.value !== "offplan" && e.currentTarget.value !== "all" ){
            if (e.currentTarget.value !== "select" ) {
                $marketGuide.MDP_community = e.currentTarget.value;
            } else if(e.currentTarget.value === "select" ){
                $marketGuide.MDP_community = "select";
            }
        }

        if (e.currentTarget.value === "ready" || e.currentTarget.value === "offplan") {
            $marketGuide.MDP_status = e.currentTarget.value;
        } else if (e.currentTarget.id === "all4") {
            $marketGuide.MDP_status = "all";
        }
        // console.log($marketGuide.MDP_community,$marketGuide.MDP_status);
        
        const response = await fetch(
            `${mdp_url}/${$marketGuide.MDP_community}/${$marketGuide.MDP_status}`
        );
        const data = await response.json();
        data.sort((a,b) => +b.projects - +a.projects);
        modifiedDataMDP = data.slice(0, 6);
    };
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
    <div class="container">
        <div class="row-transactiontype">
            <h4>TOP PERFORMING COMMUNITIES</h4>
            <div class="row-transactiontype-worth">
                <div class="form-group col-sm-12 col-md-6 mt-2 tab-container">
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                        <input type="radio" on:change={marketguide_tpc} class="btn-check" bind:group={$marketGuide.TPC_propCategory}
                            value="all" id="all1" autocomplete="off" check/>
                        <label class="btn btn-secondary" for="all1">All</label>

                        <input type="radio" on:change={marketguide_tpc} class="btn-check" bind:group={$marketGuide.TPC_propCategory}
                            value="apartment" id="apartment" autocomplete="off" />
                        <label class="btn btn-secondary" for="apartment" >Apartments</label>

                        <input type="radio" on:change={marketguide_tpc} class="btn-check" bind:group={$marketGuide.TPC_propCategory}
                            value="villa" id="villa" autocomplete="off" />
                        <label class="btn btn-secondary" for="villa">Villas</label>
                    </div>
                </div>

                <div class="form-group col-sm-12 col-md-6 mt-2 tab-container">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            
                            <input type="radio" on:change={marketguide_tpc} class="btn-check" bind:group={$marketGuide.TPC_status}
                                value="all" id="all2" autocomplete="off" check />
                            <label class="btn btn-secondary" for="all2">All</label>

                            <input type="radio" on:change={marketguide_tpc} class="btn-check" bind:group={$marketGuide.TPC_status}
                                value="ready" id="ready" autocomplete="off" />
                            <label class="btn btn-secondary" for="ready">Ready</label>

                            <input type="radio" on:change={marketguide_tpc} class="btn-check" bind:group={$marketGuide.TPC_status}
                                value="offplan" id="offplan" autocomplete="off" />
                            <label class="btn btn-secondary" for="offplan">Offplan</label>
                        
                        </div>
                    </div>
                </div>
            </div>
            <BarChart {modifiedDataTPC} />
        </div>
        <!-- End  row-transactiontype -->

        <div class="row-transactiontype mt-5">
            <h4>MOST IN DEMAND PROJECTS</h4>
            <div class="row-transactiontype-number">
                <div class="form-group col-sm-12 col-md-6 mt-2 tab-container">
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                        <select on:change={marketguide_mdp} name="community" id="community">
                            <option value="select">Select Community</option>
                            {#each uniqueCommunities as item}
                                <option value={item.community}>{item.community}</option>
                            {/each}
                        </select>
                        
                    </div>
                </div>

                <div class="form-group col-sm-12 col-md-6 mt-2 tab-container">
                    <div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            
                            <input type="radio" on:change={marketguide_mdp} class="btn-check" bind:group={$marketGuide.MDP_status}
                                value="all" id="all4" autocomplete="off" check />
                            <label class="btn btn-secondary" for="all4" >All</label>

                            <input type="radio" on:change={marketguide_mdp} class="btn-check" bind:group={$marketGuide.MDP_status}
                                value="ready" id="ready2" autocomplete="off" />
                            <label class="btn btn-secondary" for="ready2" >Ready</label>

                            <input type="radio" on:change={marketguide_mdp} class="btn-check" bind:group={$marketGuide.MDP_status}
                                value="offplan" id="offplan2" autocomplete="off" />
                            <label class="btn btn-secondary" for="offplan2" >Offplan</label >

                        </div>
                    </div>
                </div>
            </div>
            <BarChartMDP {modifiedDataMDP} />
        </div>
        <!-- End  row-transactiontype -->
        <div class="price-compare-container mt-5 mb-2">
            <h4>AVERAGE PRICE / SQ. FT. ( 2020 - 2021 )</h4>

            <div class="col-lg-12 pt-4 pt-lg-0"  id="collapse1">
                <table class="table table-hover  result-container" >
                    <thead>
                        <tr class="table-head">
                            <th scope="col" class="table-heac-th" >Area</th>
                            <th  scope="col" class="table-heac-th" >Type</th>
                            <th  scope="col" class="table-heac-th" >Avg Price / Sq.Ft - 2020</th>
                            <th  scope="col" class="table-heac-th" >Avg Price / Sq.Ft - 2021</th>
                            <th  scope="col" class="table-heac-th" >Change %</th>
                        </tr>
                    </thead>
                
                    <tbody>
                        {#each avg_price_Data as item, i}
                        <tr >
                            <td >{item.area}</td>
                            <td >{item.property_type}</td>
                            <td >{item.avg_price_2020}</td>
                            <td >{item.avg_price_2021}</td>
                            <td >{#if (((+item.avg_price_2021 - +item.avg_price_2020)/+item.avg_price_2020)*100) < 0}
                                    <i class="bi bi-arrow-down-circle-fill"></i>
                                {:else}
                                    <i class="bi bi-arrow-up-circle-fill"></i>
                                {/if} 
                                {(((+item.avg_price_2021 - +item.avg_price_2020)/+item.avg_price_2020)*100).toFixed(2)}
                            </td>
                        </tr>
                        {:else}
                        <tr>
                            <td class="no-result" colspan="9">No result found!</td>
                        </tr>
                        {/each}
                    </tbody>
                    
                </table>

                
            </div>
        </div>
    </div>
    <!-- <p>{JSON.stringify($marketGuide)}</p> -->



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

    .btn-secondary {
        color: #080808;
        background-color: #fff;
        border-color: #6c757d;
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
    .row-transactiontype-number {
        display: flex;
        justify-content: space-between;
    }
    .row-transactiontype-worth {
        display: flex;
        justify-content: space-between;
    }
    .tab-container {
        width: auto;
    } 
    select {
        padding: 4px 10px;
    }
    .bi-arrow-down-circle-fill{
        color: red;
    }
    .bi-arrow-up-circle-fill{
        color: green;
    }
    .table-heac-th{
        vertical-align: middle;
        background-color: #333;
        color: white;
    }
    @media (max-width: 768px) {
        .row-transactiontype-worth, .row-transactiontype-number {
            flex-direction: column;
            text-align: center;
        }
        .btn-group>.btn {
            font-size: 10px;
            padding: 7px 10px;
            min-width: 80px;
            height: 31px;
        }
        #collapse1 {
            overflow: scroll;
            height: 700px;
            width: 97%;
        }
        
    }
</style>
