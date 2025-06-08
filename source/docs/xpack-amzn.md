---
title: xpack-amzn
description: xpack-amzn
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# AWS extension package for Nextflow (xpack-amzn)

## Introduction

The AWS extension package is a plugin provided by [Seqera Labs](https://www.seqera.io/) that allows the support for [FSx for Lustre](https://aws.amazon.com/fsx/lustre/) 
and AWS [EFS](https://aws.amazon.com/efs/) file system when deploying Nextflow pipelines 
along with [AWS Batch](https://aws.amazon.com/batch/) computing service.

The plugin requires a license key to be used. If you are interested, please contact us for an evaluation license at [sales@seqera.io](mailto:sales@seqera.io).

## Configuration

1. Define the variable `NFX_XPACK_LICENSE` in your environment, e.g. 

    ```
    export NXF_XPACK_LICENSE=<license string>
    ```

2. Add in your pipeline `nextflow.config` file the following 
snippet: 

    ```
    plugins {
      id 'xpack-amzn@1.5.0'
    }
    ``` 

The number after `@` character represents the plugin version. Make sure to use 
a version matching your Nextflow version according to the compatibility table 
in the following section. 

3. Follow the [documentation](docs.md) for configure feature specific settings (optional).

## Compatibility table


| Nextflow version        | Xpack version   |
|---                      |---              |
| 24.01.0-edge (or later) | 1.5.0           |
| 23.12.0-edge (or later) | 1.4.0           |
| 23.05.0-edge (or later) | 1.3.1           |
| 23.01.0-edge (or later) | 1.2.1           |
| 22.01.1-edge (or later) | 1.2.0           |
| 21.06.0-edge (or later) | 1.1.0           |
| 21.01.1-edge, 21.04.x (or later) | 1.0.1  |


## License  

Copyright 2021-2024, Seqera Labs, S.L. All Rights Reserved.


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  1.3.2                                               | 2024-07-30                                          | 43094                                              | pditommaso                                         |
 |  1.6.0                                               | 2024-05-14                                          | 6862                                               | pditommaso                                         |
 |  1.5.0                                               | 2024-02-05                                          | 1538                                               | pditommaso                                         |
 |  1.4.0                                               | 2023-12-26                                          | 515                                                | pditommaso                                         |
 |  1.3.1                                               | 2023-08-09                                          | 6432                                               | pditommaso                                         |
 |  1.3.0                                               | 2023-05-19                                          | 1143                                               | pditommaso                                         |
 |  1.2.1                                               | 2023-01-14                                          | 2356                                               | pditommaso                                         |
 |  1.2.0                                               | 2022-07-25                                          | 29156                                              | pditommaso                                         |
 |  1.2.0-rc.5                                          | 2022-05-06                                          | 3593                                               | pditommaso                                         |
 |  1.2.0-rc.4                                          | 2022-03-26                                          | 601                                                | pditommaso                                         |
 |  1.2.0-rc.3                                          | 2022-03-19                                          | 364                                                | pditommaso                                         |
 |  1.2.0-rc.2                                          | 2022-03-17                                          | 153                                                | pditommaso                                         |
 |  1.2.0-rc.1                                          | 2022-02-12                                          | 1035                                               | pditommaso                                         |
 |  1.2.0-rc.0                                          | 2022-01-22                                          | 61                                                 | pditommaso                                         |
 |  1.1.0                                               | 2021-07-30                                          | 2414                                               | pditommaso                                         |
 |  1.0.1                                               | 2021-03-09                                          | 4421                                               | pditommaso                                         |
 |  1.0.0                                               | 2021-01-15                                          | 43                                                 | pditommaso                                         |
 |  1.0.0-rc1                                           | 2021-01-15                                          | 7                                                  | pditommaso                                         |
 |  1.0.0-rc0                                           | 2021-01-05                                          | 45                                                 | pditommaso                                         |


<script>

(async function() {
    const data = [

        {
            date: `2021-01-05`,
            count: 45,
            y: '1.0.0-rc0' },

        {
            date: `2021-01-15`,
            count: 7,
            y: '1.0.0-rc1' },

        {
            date: `2021-01-15`,
            count: 43,
            y: '1.0.0' },

        {
            date: `2021-03-09`,
            count: 4421,
            y: '1.0.1' },

        {
            date: `2021-07-30`,
            count: 2414,
            y: '1.1.0' },

        {
            date: `2022-01-22`,
            count: 61,
            y: '1.2.0-rc.0' },

        {
            date: `2022-02-12`,
            count: 1035,
            y: '1.2.0-rc.1' },

        {
            date: `2022-03-17`,
            count: 153,
            y: '1.2.0-rc.2' },

        {
            date: `2022-03-19`,
            count: 364,
            y: '1.2.0-rc.3' },

        {
            date: `2022-03-26`,
            count: 601,
            y: '1.2.0-rc.4' },

        {
            date: `2022-05-06`,
            count: 3593,
            y: '1.2.0-rc.5' },

        {
            date: `2022-07-25`,
            count: 29156,
            y: '1.2.0' },

        {
            date: `2023-01-14`,
            count: 2356,
            y: '1.2.1' },

        {
            date: `2023-05-19`,
            count: 1143,
            y: '1.3.0' },

        {
            date: `2023-08-09`,
            count: 6432,
            y: '1.3.1' },

        {
            date: `2023-12-26`,
            count: 515,
            y: '1.4.0' },

        {
            date: `2024-02-05`,
            count: 1538,
            y: '1.5.0' },

        {
            date: `2024-05-14`,
            count: 6862,
            y: '1.6.0' },

        {
            date: `2024-07-30`,
            count: 43094,
            y: '1.3.2' },

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