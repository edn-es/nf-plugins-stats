---
title: nf-console
description: nf-console
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# nf-console
Console plugin for Nextflow


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  1.2.1                                               | 2025-04-05                                          | 87                                                 | pditommaso                                         |
 |  1.2.0                                               | 2025-03-18                                          | 14                                                 | pditommaso                                         |
 |  1.1.5                                               | 2025-01-20                                          | 15                                                 | pditommaso                                         |
 |  1.1.4                                               | 2024-08-05                                          | 750                                                | pditommaso                                         |
 |  1.0.6-patch1                                        | 2024-05-28                                          | 23                                                 | pditommaso                                         |
 |  1.1.3                                               | 2024-05-20                                          | 540                                                | pditommaso                                         |
 |  1.1.2                                               | 2024-05-13                                          | 27                                                 | pditommaso                                         |
 |  1.1.1                                               | 2024-03-10                                          | 45                                                 | pditommaso                                         |
 |  1.1.0                                               | 2024-02-05                                          | 32                                                 | pditommaso                                         |
 |  1.0.7                                               | 2023-11-24                                          | 30                                                 | pditommaso                                         |
 |  1.0.6                                               | 2023-05-15                                          | 795                                                | pditommaso                                         |
 |  1.0.5                                               | 2023-01-14                                          | 901                                                | pditommaso                                         |
 |  1.0.4                                               | 2022-09-19                                          | 825                                                | pditommaso                                         |
 |  1.0.3                                               | 2021-05-28                                          | 1457                                               | pditommaso                                         |
 |  1.0.2                                               | 2021-03-05                                          | 658                                                | pditommaso                                         |
 |  1.0.1                                               | 2021-01-15                                          | 77                                                 | pditommaso                                         |
 |  1.0.0                                               | 2021-01-04                                          | 31                                                 | pditommaso                                         |


<script>

(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 31,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 77,
            y: '1.0.1' },

        {
            date: `2021-03-05`,
            count: 658,
            y: '1.0.2' },

        {
            date: `2021-05-28`,
            count: 1457,
            y: '1.0.3' },

        {
            date: `2022-09-19`,
            count: 825,
            y: '1.0.4' },

        {
            date: `2023-01-14`,
            count: 901,
            y: '1.0.5' },

        {
            date: `2023-05-15`,
            count: 795,
            y: '1.0.6' },

        {
            date: `2023-11-24`,
            count: 30,
            y: '1.0.7' },

        {
            date: `2024-02-05`,
            count: 32,
            y: '1.1.0' },

        {
            date: `2024-03-10`,
            count: 45,
            y: '1.1.1' },

        {
            date: `2024-05-13`,
            count: 27,
            y: '1.1.2' },

        {
            date: `2024-05-20`,
            count: 540,
            y: '1.1.3' },

        {
            date: `2024-05-28`,
            count: 23,
            y: '1.0.6-patch1' },

        {
            date: `2024-08-05`,
            count: 750,
            y: '1.1.4' },

        {
            date: `2025-01-20`,
            count: 15,
            y: '1.1.5' },

        {
            date: `2025-03-18`,
            count: 14,
            y: '1.2.0' },

        {
            date: `2025-04-05`,
            count: 87,
            y: '1.2.1' },

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