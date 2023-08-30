<script>
    import Chart from "chart.js/auto";
    import { afterUpdate } from "svelte";

    export let modifiedDataMDP;

    var myChart1;
    
    const createChart = () => {
        if (myChart1) myChart1.destroy();
        var ctx = document.getElementById("myChart1");
        myChart1 = new Chart(ctx, {
            type: "bar",
            data: {
                labels: modifiedDataMDP.map((item) => item.building_name),
                datasets: [
                    {
                        label: "Projects in Demand",
                        data: modifiedDataMDP.map(
                            (item) => +item.projects
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

        // if(myChart1) myChart1.destroy();

    }

    afterUpdate(createChart);
</script>

<canvas id="myChart1" width="700px" height="300px" />
