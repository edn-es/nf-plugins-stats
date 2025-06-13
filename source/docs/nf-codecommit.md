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
 |  0.2.3                                               | 2025-01-20                                          | 46                                                 | pditommaso                                         |
 |  0.2.2                                               | 2024-08-05                                          | 2142                                               | pditommaso                                         |
 |  0.2.1                                               | 2024-08-01                                          | 263                                                | pditommaso                                         |
 |  0.1.5-patch2                                        | 2024-07-30                                          | 169                                                | pditommaso                                         |
 |  0.1.5-patch1                                        | 2024-05-28                                          | 178                                                | pditommaso                                         |
 |  0.2.0                                               | 2024-02-05                                          | 222                                                | pditommaso                                         |
 |  0.1.6                                               | 2023-11-24                                          | 212                                                | pditommaso                                         |
 |  0.1.5                                               | 2023-05-15                                          | 5407                                               | pditommaso                                         |
 |  0.1.4                                               | 2023-04-15                                          | 6029                                               | pditommaso                                         |
 |  0.1.3                                               | 2023-01-14                                          | 974                                                | pditommaso                                         |
 |  0.1.2                                               | 2022-06-17                                          | 6649                                               | pditommaso                                         |
 |  0.1.1                                               | 2022-06-16                                          | 2                                                  | pditommaso                                         |
 |  0.1.0                                               | 2022-06-09                                          | 277                                                | pditommaso                                         |


<script>

(async function() {
    const data = [

        {
            date: `2022-06-09`,
            count: 277,
            y: '0.1.0' },

        {
            date: `2022-06-16`,
            count: 2,
            y: '0.1.1' },

        {
            date: `2022-06-17`,
            count: 6649,
            y: '0.1.2' },

        {
            date: `2023-01-14`,
            count: 974,
            y: '0.1.3' },

        {
            date: `2023-04-15`,
            count: 6029,
            y: '0.1.4' },

        {
            date: `2023-05-15`,
            count: 5407,
            y: '0.1.5' },

        {
            date: `2023-11-24`,
            count: 212,
            y: '0.1.6' },

        {
            date: `2024-02-05`,
            count: 222,
            y: '0.2.0' },

        {
            date: `2024-05-28`,
            count: 178,
            y: '0.1.5-patch1' },

        {
            date: `2024-07-30`,
            count: 169,
            y: '0.1.5-patch2' },

        {
            date: `2024-08-01`,
            count: 263,
            y: '0.2.1' },

        {
            date: `2024-08-05`,
            count: 2142,
            y: '0.2.2' },

        {
            date: `2025-01-20`,
            count: 46,
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