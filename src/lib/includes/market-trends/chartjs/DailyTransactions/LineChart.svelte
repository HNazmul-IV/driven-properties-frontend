<script>
    import Chart from "chart.js/auto";
    import { afterUpdate } from "svelte";

    export let modifiedDataNot;

    var myChart1;
    
    const changeDateFormat = (date) =>{
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const d = new Date(date).getDate();
        const m = month[new Date(date).getMonth()];
        return `${d} ${m}`;
    }

    const createChart = () => {
        if (myChart1) myChart1.destroy();
        var ctx = document.getElementById("myChart1");
        myChart1 = new Chart(ctx, {
            type: "line",
            data: {
                labels: modifiedDataNot.map((item) => changeDateFormat(item.transaction_date)),
                // labels: ['1 dec', '2 dec', '3 dec', '4 dec', '5 dec', '6 dec', '7 dec', '8 dec', '9 dec', '10 dec'],
                datasets: [
                    {
                        label: "Number of Transactions",
                        data: modifiedDataNot.map(
                            (item) => item.actual_worth.length
                        ),
                        // data: [150, 300, 250, 200, 350, 150, 350, 400, 250, 225, 150, 400, 250, 200, 350, 200, 350, 400, 250, 270, 150, 200, 250, 200, 350, 270, 350, 400, 250, 500],
                        borderWidth: 1,
                        fill: false,
                        lineTension: .6
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


    }

    afterUpdate(createChart);
</script>

<canvas id="myChart1" width="500px" height="200px" />
