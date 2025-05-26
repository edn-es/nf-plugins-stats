---
title: yellowdog
description: yellowdog
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# YellowDog NextFlow plugin

## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  1.0.1                                               | 2024-03-15                                          | 183                                                | YellowDogMachine                                   |
 |  1.0.0                                               | 2024-02-08                                          | 164                                                | YellowDogMachine                                   |
 |  0.1.0                                               | 2024-02-08                                          | 1                                                  | YellowDogMachine                                   |


<script>

(async function() {
    const data = [

        {
            date: `2024-02-08`,
            count: 1,
            y: '0.1.0' },

        {
            date: `2024-02-08`,
            count: 164,
            y: '1.0.0' },

        {
            date: `2024-03-15`,
            count: 183,
            y: '1.0.1' },

    ];

    new Chart(
        document.getElementById('releases'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.y),
                datasets: [
                    {
                        label: 'Donwloads',
                        data: data,
                        parsing: {
                            xAxisKey: 'count'
                        }
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                plugins: {
                    tooltip:{
                        enabled: true,
                        callbacks: {
                            beforeLabel: function (tooltipData) {
                                const labels =
                                    tooltipData.dataset.label.toString();
                                const values =
                                    tooltipData.dataset.data[tooltipData.dataIndex];

                                return `Released (${values.date})`;
                            },
                            label: function (tooltipData) {
                                const labels =
                                    tooltipData.dataset.label.toString();
                                const values =
                                    tooltipData.dataset.data[tooltipData.dataIndex];

                                return `${labels} : ${values.count}`;
                            },
                        },
                    }                    
                }
            },
        }
    );
})();
</script>