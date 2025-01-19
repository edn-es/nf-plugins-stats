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
<script type="module" src="nf-plugins-stats/docs/xpack-amzn/xpack-amzn.js"></script>

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
 |  1.0.0-rc0                                           | 2021-01-05                                          | 38                                                 | pditommaso                                         |
 |  1.0.0-rc1                                           | 2021-01-15                                          | 7                                                  | pditommaso                                         |
 |  1.0.0                                               | 2021-01-15                                          | 37                                                 | pditommaso                                         |
 |  1.0.1                                               | 2021-03-09                                          | 4413                                               | pditommaso                                         |
 |  1.1.0                                               | 2021-07-30                                          | 2408                                               | pditommaso                                         |
 |  1.2.0-rc.0                                          | 2022-01-22                                          | 51                                                 | pditommaso                                         |
 |  1.2.0-rc.1                                          | 2022-02-12                                          | 1028                                               | pditommaso                                         |
 |  1.2.0-rc.2                                          | 2022-03-17                                          | 146                                                | pditommaso                                         |
 |  1.2.0-rc.3                                          | 2022-03-19                                          | 358                                                | pditommaso                                         |
 |  1.2.0-rc.4                                          | 2022-03-26                                          | 594                                                | pditommaso                                         |
 |  1.2.0-rc.5                                          | 2022-05-06                                          | 3585                                               | pditommaso                                         |
 |  1.2.0                                               | 2022-07-25                                          | 29009                                              | pditommaso                                         |
 |  1.2.1                                               | 2023-01-14                                          | 2224                                               | pditommaso                                         |
 |  1.3.0                                               | 2023-05-19                                          | 1135                                               | pditommaso                                         |
 |  1.3.1                                               | 2023-08-09                                          | 6423                                               | pditommaso                                         |
 |  1.4.0                                               | 2023-12-26                                          | 505                                                | pditommaso                                         |
 |  1.5.0                                               | 2024-02-05                                          | 222                                                | pditommaso                                         |
 |  1.6.0                                               | 2024-05-14                                          | 4683                                               | pditommaso                                         |
 |  1.3.2                                               | 2024-07-30                                          | 31295                                              | pditommaso                                         |
