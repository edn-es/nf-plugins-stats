---
title: nf-cloudcache
description: nf-cloudcache
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# nf-cloudcache
Plugin implementing a cache metadata DB over cloud object storage 


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  0.4.3                                               | 2025-01-20                                          | 1442                                               | pditommaso                                         |
 |  0.4.2                                               | 2024-08-05                                          | 19633                                              | pditommaso                                         |
 |  0.3.0-patch1                                        | 2024-05-28                                          | 1138                                               | pditommaso                                         |
 |  0.4.1                                               | 2024-03-10                                          | 19748                                              | pditommaso                                         |
 |  0.4.0                                               | 2024-02-05                                          | 209                                                | pditommaso                                         |
 |  0.3.1                                               | 2023-11-24                                          | 1505                                               | pditommaso                                         |
 |  0.3.0                                               | 2023-10-10                                          | 16391                                              | pditommaso                                         |
 |  0.2.0                                               | 2023-08-17                                          | 1975                                               | pditommaso                                         |
 |  0.1.0                                               | 2023-07-22                                          | 181                                                | pditommaso                                         |


<script>

(async function() {
    const data = [

        {
            date: `2023-07-22`,
            count: 181,
            y: '0.1.0' },

        {
            date: `2023-08-17`,
            count: 1975,
            y: '0.2.0' },

        {
            date: `2023-10-10`,
            count: 16391,
            y: '0.3.0' },

        {
            date: `2023-11-24`,
            count: 1505,
            y: '0.3.1' },

        {
            date: `2024-02-05`,
            count: 209,
            y: '0.4.0' },

        {
            date: `2024-03-10`,
            count: 19748,
            y: '0.4.1' },

        {
            date: `2024-05-28`,
            count: 1138,
            y: '0.3.0-patch1' },

        {
            date: `2024-08-05`,
            count: 19633,
            y: '0.4.2' },

        {
            date: `2025-01-20`,
            count: 1442,
            y: '0.4.3' },

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