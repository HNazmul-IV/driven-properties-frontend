<script>
    import Chart from "chart.js/auto";
    import { afterUpdate } from "svelte";

    export let modifiedDataTPC;

    var myChart;
    
    const createChart = () => {
        if (myChart) myChart.destroy();
        var ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: modifiedDataTPC.map((item) => item.community),
                datasets: [
                    {
                        label: "# Community Transactions",
                        data: modifiedDataTPC.map(
                            (item) => item.property_price.length
                        ),
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        // if(myChart) myChart.destroy();

    }

    afterUpdate(createChart);
</script>

<canvas id="myChart" width="700px" height="300px" />
