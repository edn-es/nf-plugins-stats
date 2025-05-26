---
title: nf-codecommit
description: nf-codecommit
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# nf-codecommit
Amazon CodeCommit plugin for Nextflow


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  0.2.3                                               | 2025-01-20                                          | 38                                                 | pditommaso                                         |
 |  0.2.2                                               | 2024-08-05                                          | 1926                                               | pditommaso                                         |
 |  0.2.1                                               | 2024-08-01                                          | 238                                                | pditommaso                                         |
 |  0.1.5-patch2                                        | 2024-07-30                                          | 160                                                | pditommaso                                         |
 |  0.1.5-patch1                                        | 2024-05-28                                          | 171                                                | pditommaso                                         |
 |  0.2.0                                               | 2024-02-05                                          | 214                                                | pditommaso                                         |
 |  0.1.6                                               | 2023-11-24                                          | 204                                                | pditommaso                                         |
 |  0.1.5                                               | 2023-05-15                                          | 5399                                               | pditommaso                                         |
 |  0.1.4                                               | 2023-04-15                                          | 5986                                               | pditommaso                                         |
 |  0.1.3                                               | 2023-01-14                                          | 966                                                | pditommaso                                         |
 |  0.1.2                                               | 2022-06-17                                          | 6640                                               | pditommaso                                         |
 |  0.1.1                                               | 2022-06-16                                          | 2                                                  | pditommaso                                         |
 |  0.1.0                                               | 2022-06-09                                          | 269                                                | pditommaso                                         |


<script>

(async function() {
    const data = [

        {
            date: `2022-06-09`,
            count: 269,
            y: '0.1.0' },

        {
            date: `2022-06-16`,
            count: 2,
            y: '0.1.1' },

        {
            date: `2022-06-17`,
            count: 6640,
            y: '0.1.2' },

        {
            date: `2023-01-14`,
            count: 966,
            y: '0.1.3' },

        {
            date: `2023-04-15`,
            count: 5986,
            y: '0.1.4' },

        {
            date: `2023-05-15`,
            count: 5399,
            y: '0.1.5' },

        {
            date: `2023-11-24`,
            count: 204,
            y: '0.1.6' },

        {
            date: `2024-02-05`,
            count: 214,
            y: '0.2.0' },

        {
            date: `2024-05-28`,
            count: 171,
            y: '0.1.5-patch1' },

        {
            date: `2024-07-30`,
            count: 160,
            y: '0.1.5-patch2' },

        {
            date: `2024-08-01`,
            count: 238,
            y: '0.2.1' },

        {
            date: `2024-08-05`,
            count: 1926,
            y: '0.2.2' },

        {
            date: `2025-01-20`,
            count: 38,
            y: '0.2.3' },

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