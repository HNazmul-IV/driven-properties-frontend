<script>
    import Chart from "chart.js/auto";
    import { afterUpdate } from "svelte";

    export let modifiedDataWorth;
    var myChart;

    const changeDateFormat = (date) =>{
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const d = new Date(date).getDate();
        const m = month[new Date(date).getMonth()];
        return `${d} ${m}`;
    }

    const createChart = () => {
        if (myChart) myChart.destroy();
        var ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: modifiedDataWorth.map((item) => changeDateFormat(item.transaction_date) ),
                datasets: [
                    {
                        label: "Value of Transactions",
                        data: modifiedDataWorth.map(
                            (item) => item.actual_worth
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
