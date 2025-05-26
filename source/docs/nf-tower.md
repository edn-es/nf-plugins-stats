---
title: nf-tower
description: nf-tower
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# nf-tower plugin

Nextflow plugin implementing the support for [Nextflow Tower](https://tower.nf/). 

This repository only holds plugin artefacts. Source code is available at [this link](https://github.com/nextflow-io/nextflow/tree/master/plugins/nf-tower). 


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  1.11.2                                              | 2025-04-08                                          | 1028                                               | pditommaso                                         |
 |  1.11.1                                              | 2025-04-05                                          | 20                                                 | pditommaso                                         |
 |  1.11.0                                              | 2025-03-18                                          | 84                                                 | pditommaso                                         |
 |  1.10.0                                              | 2025-02-12                                          | 707                                                | pditommaso                                         |
 |  1.9.4                                               | 2025-01-20                                          | 75                                                 | pditommaso                                         |
 |  1.9.3                                               | 2024-10-27                                          | 20834                                              | pditommaso                                         |
 |  1.9.2                                               | 2024-08-05                                          | 3042                                               | pditommaso                                         |
 |  1.6.3-patch1                                        | 2024-05-28                                          | 940                                                | pditommaso                                         |
 |  1.9.1                                               | 2024-05-13                                          | 24105                                              | pditommaso                                         |
 |  1.9.0                                               | 2024-04-15                                          | 1478                                               | pditommaso                                         |
 |  1.8.1                                               | 2024-03-10                                          | 852                                                | pditommaso                                         |
 |  1.8.0                                               | 2024-02-05                                          | 3597                                               | pditommaso                                         |
 |  1.7.0                                               | 2023-11-24                                          | 3955                                               | pditommaso                                         |
 |  1.6.3                                               | 2023-10-10                                          | 25100                                              | pditommaso                                         |
 |  1.6.2                                               | 2023-09-27                                          | 332                                                | pditommaso                                         |
 |  1.6.1                                               | 2023-08-17                                          | 4834                                               | pditommaso                                         |
 |  1.6.0                                               | 2023-08-05                                          | 911                                                | pditommaso                                         |
 |  1.5.15                                              | 2023-07-22                                          | 151                                                | pditommaso                                         |
 |  1.5.14                                              | 2023-06-14                                          | 1475                                               | pditommaso                                         |
 |  1.5.13                                              | 2023-05-15                                          | 807                                                | pditommaso                                         |
 |  1.5.12                                              | 2023-04-15                                          | 12577                                              | pditommaso                                         |
 |  1.5.7-patch0                                        | 2023-04-13                                          | 741                                                | pditommaso                                         |
 |  1.5.6.1                                             | 2023-04-13                                          | 4                                                  | pditommaso                                         |
 |  1.5.11                                              | 2023-04-01                                          | 757                                                | pditommaso                                         |
 |  1.5.10                                              | 2023-02-21                                          | 760                                                | pditommaso                                         |
 |  1.5.9                                               | 2023-01-14                                          | 120                                                | pditommaso                                         |
 |  1.5.8                                               | 2022-12-13                                          | 424                                                | pditommaso                                         |
 |  1.5.7                                               | 2022-11-29                                          | 75                                                 | pditommaso                                         |
 |  1.5.6                                               | 2022-11-13                                          | 10606                                              | pditommaso                                         |
 |  1.5.5                                               | 2022-10-03                                          | 14874                                              | pditommaso                                         |
 |  1.5.4                                               | 2022-09-20                                          | 598                                                | pditommaso                                         |
 |  1.5.3                                               | 2022-09-19                                          | 84                                                 | pditommaso                                         |
 |  1.5.2                                               | 2022-09-01                                          | 286                                                | pditommaso                                         |
 |  1.5.1                                               | 2022-08-11                                          | 509                                                | pditommaso                                         |
 |  1.5.0                                               | 2022-08-01                                          | 369                                                | pditommaso                                         |
 |  1.4.0                                               | 2022-02-07                                          | 13528                                              | pditommaso                                         |
 |  1.3.0                                               | 2021-10-28                                          | 10712                                              | pditommaso                                         |
 |  1.2.0                                               | 2021-08-06                                          | 442                                                | pditommaso                                         |
 |  1.1.1                                               | 2021-05-28                                          | 134                                                | pditommaso                                         |
 |  1.1.0                                               | 2021-03-24                                          | 9452                                               | pditommaso                                         |
 |  1.0.2                                               | 2021-03-05                                          | 149                                                | pditommaso                                         |
 |  1.0.1                                               | 2021-01-15                                          | 365                                                | pditommaso                                         |
 |  1.0.0                                               | 2021-01-04                                          | 94                                                 | pditommaso                                         |


<script>

(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 94,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 365,
            y: '1.0.1' },

        {
            date: `2021-03-05`,
            count: 149,
            y: '1.0.2' },

        {
            date: `2021-03-24`,
            count: 9452,
            y: '1.1.0' },

        {
            date: `2021-05-28`,
            count: 134,
            y: '1.1.1' },

        {
            date: `2021-08-06`,
            count: 442,
            y: '1.2.0' },

        {
            date: `2021-10-28`,
            count: 10712,
            y: '1.3.0' },

        {
            date: `2022-02-07`,
            count: 13528,
            y: '1.4.0' },

        {
            date: `2022-08-01`,
            count: 369,
            y: '1.5.0' },

        {
            date: `2022-08-11`,
            count: 509,
            y: '1.5.1' },

        {
            date: `2022-09-01`,
            count: 286,
            y: '1.5.2' },

        {
            date: `2022-09-19`,
            count: 84,
            y: '1.5.3' },

        {
            date: `2022-09-20`,
            count: 598,
            y: '1.5.4' },

        {
            date: `2022-10-03`,
            count: 14874,
            y: '1.5.5' },

        {
            date: `2022-11-13`,
            count: 10606,
            y: '1.5.6' },

        {
            date: `2022-11-29`,
            count: 75,
            y: '1.5.7' },

        {
            date: `2022-12-13`,
            count: 424,
            y: '1.5.8' },

        {
            date: `2023-01-14`,
            count: 120,
            y: '1.5.9' },

        {
            date: `2023-02-21`,
            count: 760,
            y: '1.5.10' },

        {
            date: `2023-04-01`,
            count: 757,
            y: '1.5.11' },

        {
            date: `2023-04-13`,
            count: 4,
            y: '1.5.6.1' },

        {
            date: `2023-04-13`,
            count: 741,
            y: '1.5.7-patch0' },

        {
            date: `2023-04-15`,
            count: 12577,
            y: '1.5.12' },

        {
            date: `2023-05-15`,
            count: 807,
            y: '1.5.13' },

        {
            date: `2023-06-14`,
            count: 1475,
            y: '1.5.14' },

        {
            date: `2023-07-22`,
            count: 151,
            y: '1.5.15' },

        {
            date: `2023-08-05`,
            count: 911,
            y: '1.6.0' },

        {
            date: `2023-08-17`,
            count: 4834,
            y: '1.6.1' },

        {
            date: `2023-09-27`,
            count: 332,
            y: '1.6.2' },

        {
            date: `2023-10-10`,
            count: 25100,
            y: '1.6.3' },

        {
            date: `2023-11-24`,
            count: 3955,
            y: '1.7.0' },

        {
            date: `2024-02-05`,
            count: 3597,
            y: '1.8.0' },

        {
            date: `2024-03-10`,
            count: 852,
            y: '1.8.1' },

        {
            date: `2024-04-15`,
            count: 1478,
            y: '1.9.0' },

        {
            date: `2024-05-13`,
            count: 24105,
            y: '1.9.1' },

        {
            date: `2024-05-28`,
            count: 940,
            y: '1.6.3-patch1' },

        {
            date: `2024-08-05`,
            count: 3042,
            y: '1.9.2' },

        {
            date: `2024-10-27`,
            count: 20834,
            y: '1.9.3' },

        {
            date: `2025-01-20`,
            count: 75,
            y: '1.9.4' },

        {
            date: `2025-02-12`,
            count: 707,
            y: '1.10.0' },

        {
            date: `2025-03-18`,
            count: 84,
            y: '1.11.0' },

        {
            date: `2025-04-05`,
            count: 20,
            y: '1.11.1' },

        {
            date: `2025-04-08`,
            count: 1028,
            y: '1.11.2' },

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