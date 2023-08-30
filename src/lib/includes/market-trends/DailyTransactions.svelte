<script>
    import { dailyTransactions } from "./store.js";
    import BarChart from "./chartjs/DailyTransactions/BarChart.svelte";
    import LineChart from "./chartjs/DailyTransactions/LineChart.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    // baseURL =  local Url or Server Url access
    import { baseURL } from "../../../base-url";

    import LeadFormLeft from "$lib/commons/LeadFormLeft.svelte";
    import BreadCrumb from "$lib/commons/breadcrumb.svelte";

    $: modifiedDataWorth = [];
    $: modifiedDataNot = [];

    // Sales Transaction url variables
    const dtwurl = `${baseURL}/getTransactionStatistics`; // daily transaction worth

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
    const amountMergebyDate = (data) => {
        const items = [];
        data.forEach((item) => {
            const index = items.findIndex(
                (i) => i.transaction_date === item.transaction_date
            );
            if (index !== -1) {
                items[index].actual_worth += +item.actual_worth;
            } else {
                const updatedObj = {
                    ...item,
                    actual_worth: +item.actual_worth,
                };
                items.push(updatedObj);
            }
        });
        return items.splice(0, 10).reverse();
    };

    const notMergebyDate = (data) => {
        const items = [];
        data.forEach((item) => {
            if (items.length > 0) {
                const index = items.findIndex(
                    (i) => i.transaction_date === item.transaction_date
                );
                if (index !== -1) {
                    items[index].actual_worth.push(item.actual_worth);
                } else {
                    const newItem = { ...item };
                    newItem.actual_worth = [item.actual_worth];
                    items.push(newItem);
                }
            } else {
                const newItem = { ...item };
                newItem.actual_worth = [item.actual_worth];
                items.push(newItem);
            }
        });
        return items.reverse();
    };

    // get result data on load
    // Transaction Value Worth by Date
    onMount(async () => {
        const response = await fetch(
            `${dtwurl}/${$dailyTransactions.worthprocedure}/${$dailyTransactions.worthstatus}`
        );
        const data = await response.json();
        modifiedDataWorth = amountMergebyDate(data);
        //getSignleHeaderMenu API End
    });

    // Number of transaction by Date
    onMount(async () => {
        const response = await fetch(
            `${dtwurl}/${$dailyTransactions.notprocedure}/${$dailyTransactions.notstatus}`
        );
        const data = await response.json();
        modifiedDataNot = notMergebyDate(data);
        //getSignleHeaderMenu API End
    });

    const changeWorth = async (e) => {
        
        if (
            e.currentTarget.value === "sales" ||
            e.currentTarget.value === "mortgages"
        ) {
            $dailyTransactions.worthprocedure = e.currentTarget.value;
        } else if (e.currentTarget.id === "all1") {
            $dailyTransactions.worthprocedure = "all";
        }
        if (
            e.currentTarget.value === "ready" ||
            e.currentTarget.value === "offplan"
        ) {
            $dailyTransactions.worthstatus = e.currentTarget.value;
        } else if (e.currentTarget.id === "all2") {
            $dailyTransactions.worthstatus = "all";
        }

        console.log(
            $dailyTransactions.worthprocedure,
            $dailyTransactions.worthstatus
        );
        const response = await fetch(
            `${dtwurl}/${$dailyTransactions.worthprocedure}/${$dailyTransactions.worthstatus}`
        );
        const data = await response.json();
        console.log(data);
        modifiedDataWorth = amountMergebyDate(data);
    };

    const changenot = async (e) => {
        if (
            e.currentTarget.value === "sales" ||
            e.currentTarget.value === "mortgages"
        ) {
            $dailyTransactions.notprocedure = e.currentTarget.value;
        } else if (e.currentTarget.id === "all3") {
            $dailyTransactions.notprocedure = "all";
        }
        if (
            e.currentTarget.value === "ready" ||
            e.currentTarget.value === "offplan"
        ) {
            $dailyTransactions.notstatus = e.currentTarget.value;
        } else if (e.currentTarget.id === "all4") {
            $dailyTransactions.notstatus = "all";
        }

        console.log(
            $dailyTransactions.notprocedure,
            $dailyTransactions.notstatus
        );
        const response = await fetch(
            `${dtwurl}/${$dailyTransactions.notprocedure}/${$dailyTransactions.notstatus}`
        );
        const data = await response.json();
        modifiedDataNot = notMergebyDate(data); //not (number of transaction by date)
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
<div class="col-md-12 container statistics-conatiner">
    <div class="statistics-title">REAL ESTATE 2022 STATISTICS</div>
    <div class="statistics-inner-container">
        <div class="statistics-box left-box">
            <div class="icons"><i class="bi bi-cash" /></div>
            <div class="inner-title">Property Sales Value</div>
            <div class="inner-title-data">AED 305 Billion</div>
            <div class=""><strong>2021</strong> : AED 213 Billion</div>
        </div>
        <div class="statistics-box right-box">
            <div class="icons"><i class="bi bi-graph-up" /></div>
            <div class="inner-title">Sales Volume</div>
            <div class="inner-title-data">115,610 Transactions</div>
            <div class=""><strong>2021</strong> : 83,575 Transactions</div>
        </div>
    </div>
</div>
<section id="service-charge-index-section" class="service-charge-index-section">
    <div class="container">
        <div class="row-transactiontype">
            <h4>VALUE OF DAILY TRANSACTIONS</h4>
            <div class="row-transactiontype-worth">
                <div class="form-group col-sm-12 col-md-6 mt-2 tab-container">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            on:change={changeWorth}
                            class="btn-check"
                            bind:group={$dailyTransactions.worthprocedure}
                            value="all"
                            id="all1"
                            autocomplete="off"
                            check
                        />
                        <label class="btn btn-secondary" for="all1">All</label>

                        <input
                            type="radio"
                            on:change={changeWorth}
                            class="btn-check"
                            bind:group={$dailyTransactions.worthprocedure}
                            value="sales"
                            id="sales"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="sales"
                            >Sales</label
                        >

                        <input
                            type="radio"
                            on:change={changeWorth}
                            class="btn-check"
                            bind:group={$dailyTransactions.worthprocedure}
                            value="mortgages"
                            id="mortgage"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="mortgage"
                            >Mortgage</label
                        >
                    </div>
                </div> 

                <div class="form-group col-sm-12 col-md-6 mt-2 tab-container">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <div>
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic radio toggle button group"
                        >
                            <input
                                type="radio"
                                on:change={changeWorth}
                                class="btn-check"
                                bind:group={$dailyTransactions.worthstatus}
                                value="all"
                                id="all2"
                                autocomplete="off"
                                check
                            />
                            <label class="btn btn-secondary" for="all2"
                                >All</label
                            >

                            <input
                                type="radio"
                                on:change={changeWorth}
                                class="btn-check"
                                bind:group={$dailyTransactions.worthstatus}
                                value="ready"
                                id="ready"
                                autocomplete="off"
                            />
                            <label class="btn btn-secondary" for="ready"
                                >Ready</label
                            >

                            <input
                                type="radio"
                                on:change={changeWorth}
                                class="btn-check"
                                bind:group={$dailyTransactions.worthstatus}
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
            <BarChart {modifiedDataWorth} />
        </div>
        <!-- End  row-transactiontype -->

        <div class="row-transactiontype mt-5">
            <h4>NUMBER OF DAILY TRANSACTIONS</h4>
            <div class="row-transactiontype-number">
                <div class="form-group col-sm-12 col-md-6 mt-2 tab-container">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            on:change={changenot}
                            class="btn-check"
                            bind:group={$dailyTransactions.notprocedure}
                            value="all"
                            id="all3"
                            autocomplete="off"
                            check
                        />
                        <label class="btn btn-secondary" for="all3">All</label>

                        <input
                            type="radio"
                            on:change={changenot}
                            class="btn-check"
                            bind:group={$dailyTransactions.notprocedure}
                            value="sales"
                            id="sales1"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="sales1"
                            >Sales</label
                        >

                        <input
                            type="radio"
                            on:change={changenot}
                            class="btn-check"
                            bind:group={$dailyTransactions.notprocedure}
                            value="mortgages"
                            id="mortgages1"
                            autocomplete="off"
                        />
                        <label class="btn btn-secondary" for="mortgages1"
                            >Mortgage</label
                        >
                    </div>
                </div>

                <div class="form-group col-sm-12 col-md-6 mt-2 tab-container">
                    <div>
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic radio toggle button group"
                        >
                            <input
                                type="radio"
                                on:change={changenot}
                                class="btn-check"
                                bind:group={$dailyTransactions.notstatus}
                                value="all"
                                id="all4"
                                autocomplete="off"
                                check
                            />
                            <label class="btn btn-secondary" for="all4"
                                >All</label
                            >

                            <input
                                type="radio"
                                on:change={changenot}
                                class="btn-check"
                                bind:group={$dailyTransactions.notstatus}
                                value="ready"
                                id="ready2"
                                autocomplete="off"
                            />
                            <label class="btn btn-secondary" for="ready2"
                                >Ready</label
                            >

                            <input
                                type="radio"
                                on:change={changenot}
                                class="btn-check"
                                bind:group={$dailyTransactions.notstatus}
                                value="offplan"
                                id="offplan2"
                                autocomplete="off"
                            />
                            <label class="btn btn-secondary" for="offplan2"
                                >Offplan</label
                            >
                        </div>
                    </div>
                </div>
            </div>
            <LineChart {modifiedDataNot} />
        </div>
        <!-- End  row-transactiontype -->
    </div>
    <!-- <p>{JSON.stringify($dailyTransactions)}</p> -->

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
    .statistics-conatiner {
        background-color: #dedede;
        padding: 3em;
        text-align: center;
    }
    .statistics-inner-container {
        display: flex;
        justify-content: center;
    }
    .statistics-box {
        background: #fff;
        padding: 2em;
        margin: 1em;
        border-radius: 30px;
    }
    .statistics-title {
        font-size: 24px;
        font-weight: bold;
    }
    .icons {
        font-size: 36px;
        color: #4167b1;
    }
    .inner-title-data {
        font-size: 24px;
        font-weight: 900;
    }
    .statistics-box {
        min-width: 328px;
    }

    @media (max-width: 768px) {
        .btn-group > .btn {
            font-size: 14px;
            padding: 6px 10px;
        }
        .statistics-inner-container{
            flex-direction: column;
        }
        .row-transactiontype-worth, .row-transactiontype-number {
            flex-direction: column;
            text-align: center;
        }
        .statistics-conatiner {
            padding: 3em 0;
        }
    }
</style>
