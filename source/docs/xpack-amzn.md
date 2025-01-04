---
title: xpack-amzn
description: xpack-amzn
extends: _layouts.documentation
section: content
---

# Activity

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>
<script type="module" src="xpack-amzn.js"></script>

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


## Releases Detail


### Version 1.0.0-rc0

Published: 2021-01-05T08:45:15Z

Downloads: 38

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.0.0-rc1

Published: 2021-01-15T16:51:39Z

Downloads: 7

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.0.0

Published: 2021-01-15T18:04:23Z

Downloads: 37

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.0.1

Published: 2021-03-09T14:00:54Z

Downloads: 4413

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.1.0

Published: 2021-07-30T15:39:46Z

Downloads: 2408

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.2.0-rc.0

Published: 2022-01-22T13:01:22Z

Downloads: 51

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.2.0-rc.1

Published: 2022-02-12T10:35:18Z

Downloads: 1028

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.2.0-rc.2

Published: 2022-03-17T16:12:04Z

Downloads: 146

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.2.0-rc.3

Published: 2022-03-19T22:23:53Z

Downloads: 358

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.2.0-rc.4

Published: 2022-03-26T16:40:18Z

Downloads: 594

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.2.0-rc.5

Published: 2022-05-06T14:49:10Z

Downloads: 3585

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.2.0

Published: 2022-07-25T16:29:35Z

Downloads: 28979

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.2.1

Published: 2023-01-14T19:03:04Z

Downloads: 2220

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.3.0

Published: 2023-05-19T08:11:20Z

Downloads: 1135

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.3.1

Published: 2023-08-09T19:34:24Z

Downloads: 6423

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.4.0

Published: 2023-12-26T12:51:36Z

Downloads: 505

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.5.0

Published: 2024-02-05T23:46:53Z

Downloads: 130

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.6.0

Published: 2024-05-14T08:26:05Z

Downloads: 4116

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}


### Version 1.3.2

Published: 2024-07-30T20:41:12Z

Downloads: 29183

Author: ![avatar](https://avatars.githubusercontent.com/u/816968?v=4 "pditommaso"){width=50 height=50}

