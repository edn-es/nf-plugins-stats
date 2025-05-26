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
 |  1.2.1                                               | 2025-04-05                                          | 51                                                 | pditommaso                                         |
 |  1.2.0                                               | 2025-03-18                                          | 12                                                 | pditommaso                                         |
 |  1.1.5                                               | 2025-01-20                                          | 13                                                 | pditommaso                                         |
 |  1.1.4                                               | 2024-08-05                                          | 722                                                | pditommaso                                         |
 |  1.0.6-patch1                                        | 2024-05-28                                          | 22                                                 | pditommaso                                         |
 |  1.1.3                                               | 2024-05-20                                          | 532                                                | pditommaso                                         |
 |  1.1.2                                               | 2024-05-13                                          | 24                                                 | pditommaso                                         |
 |  1.1.1                                               | 2024-03-10                                          | 44                                                 | pditommaso                                         |
 |  1.1.0                                               | 2024-02-05                                          | 28                                                 | pditommaso                                         |
 |  1.0.7                                               | 2023-11-24                                          | 28                                                 | pditommaso                                         |
 |  1.0.6                                               | 2023-05-15                                          | 792                                                | pditommaso                                         |
 |  1.0.5                                               | 2023-01-14                                          | 899                                                | pditommaso                                         |
 |  1.0.4                                               | 2022-09-19                                          | 821                                                | pditommaso                                         |
 |  1.0.3                                               | 2021-05-28                                          | 1456                                               | pditommaso                                         |
 |  1.0.2                                               | 2021-03-05                                          | 657                                                | pditommaso                                         |
 |  1.0.1                                               | 2021-01-15                                          | 75                                                 | pditommaso                                         |
 |  1.0.0                                               | 2021-01-04                                          | 29                                                 | pditommaso                                         |


<script>

(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 29,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 75,
            y: '1.0.1' },

        {
            date: `2021-03-05`,
            count: 657,
            y: '1.0.2' },

        {
            date: `2021-05-28`,
            count: 1456,
            y: '1.0.3' },

        {
            date: `2022-09-19`,
            count: 821,
            y: '1.0.4' },

        {
            date: `2023-01-14`,
            count: 899,
            y: '1.0.5' },

        {
            date: `2023-05-15`,
            count: 792,
            y: '1.0.6' },

        {
            date: `2023-11-24`,
            count: 28,
            y: '1.0.7' },

        {
            date: `2024-02-05`,
            count: 28,
            y: '1.1.0' },

        {
            date: `2024-03-10`,
            count: 44,
            y: '1.1.1' },

        {
            date: `2024-05-13`,
            count: 24,
            y: '1.1.2' },

        {
            date: `2024-05-20`,
            count: 532,
            y: '1.1.3' },

        {
            date: `2024-05-28`,
            count: 22,
            y: '1.0.6-patch1' },

        {
            date: `2024-08-05`,
            count: 722,
            y: '1.1.4' },

        {
            date: `2025-01-20`,
            count: 13,
            y: '1.1.5' },

        {
            date: `2025-03-18`,
            count: 12,
            y: '1.2.0' },

        {
            date: `2025-04-05`,
            count: 51,
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