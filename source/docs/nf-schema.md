---
title: nf-schema
description: nf-schema
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# ![nf-schema](docs/images/nf-schema.png)

## 📚 Docs 👉🏻 <https://nextflow-io.github.io/nf-schema>

**A Nextflow plugin to work with validation of pipeline parameters and sample sheets.**

## Introduction

> [!IMPORTANT]
> nf-schema is the new version of the now deprecated [nf-validation](https://github.com/nextflow-io/nf-validation). Please follow the [migration guide](https://nextflow-io.github.io/nf-schema/latest/migration_guide/) to migrate your code to this new version.

This [Nextflow plugin](https://www.nextflow.io/docs/latest/plugins.html#plugins) provides functionality that can be used in a Nextflow pipeline to work with parameter and sample sheet schema. The added functionality is:

- 📖 Print usage instructions to the terminal (for use with `--help`)
- ✍️ Print log output showing parameters with non-default values
- ✅ Validate supplied parameters against the pipeline schema
- 📋 Validate the contents of supplied sample sheet files
- 🛠️ Create a type-casted list from a parsed sample sheet

Supported sample sheet formats are CSV, TSV, JSON and YAML.

## Quick Start

Declare the plugin in your Nextflow pipeline configuration file:

```groovy title="nextflow.config"
plugins {
  id 'nf-schema@2.4.1'
}
```

This is all that is needed - Nextflow will automatically fetch the plugin code at run time.

> [!NOTE]
> The snippet above will always try to install the specified version. We encourage always pinning the
> plugin version to make sure the used pipeline will keep working when a new version of `nf-schema`
> with breaking changes has been released.

You can now include the plugin helper functions into your Nextflow pipeline:

```groovy title="main.nf"
include { validateParameters; paramsSummaryLog; samplesheetToList } from 'plugin/nf-schema'

// Validate input parameters
validateParameters()

// Print summary of supplied parameters
log.info paramsSummaryLog(workflow)

// Create a new channel of metadata from a sample sheet passed to the pipeline through the --input parameter
ch_input = Channel.fromList(samplesheetToList(params.input, "assets/schema_input.json"))
```

Or enable the creation of the help message (using `--help`) in the configuration file:

```groovy title="nextflow.config"
validation {
  help {
    enabled: true
  }
}
```

## Dependencies

- Java 11 or later
- <https://github.com/harrel56/json-schema>
- Nextflow 24.10.0 or later

## Slack channel

There is a dedicated [nf-schema Slack channel](https://nfcore.slack.com/archives/C056RQB10LU) in the [Nextflow Slack workspace](https://nextflow.slack.com).

## Credits

This plugin was written based on code initially written within the nf-core community,
as part of the nf-core pipeline template.

We would like to thank the key contributors who include (but are not limited to):

- Júlia Mir Pedrol ([@mirpedrol](https://github.com/mirpedrol))
- Nicolas Vannieuwkerke ([@nvnieuwk](https://github.com/nvnieuwk))
- Kevin Menden ([@KevinMenden](https://github.com/KevinMenden))
- Phil Ewels ([@ewels](https://github.com/ewels))
- Arthur ([@awgymer](https://github.com/awgymer))


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  2.4.2                                               | 2025-05-07                                          | 2729                                               | nvnieuwk                                           |
 |  2.4.1                                               | 2025-04-10                                          | 1459                                               | nvnieuwk                                           |
 |  2.4.0                                               | 2025-04-03                                          | 417                                                | nvnieuwk                                           |
 |  Hakodate                                            | 2025-01-13                                          | 77906                                              | nvnieuwk                                           |
 |  2.2.1                                               | 2024-12-03                                          | 13463                                              | nvnieuwk                                           |
 |  Kitakata                                            | 2024-10-30                                          | 28939                                              | nvnieuwk                                           |
 |  2.1.2                                               | 2024-10-18                                          | 8555                                               | nvnieuwk                                           |
 |  2.1.1                                               | 2024-09-19                                          | 95140                                              | nvnieuwk                                           |
 |  Tantanmen                                           | 2024-08-20                                          | 10842                                              | nvnieuwk                                           |
 |  2.0.1                                               | 2024-07-04                                          | 1432                                               | nvnieuwk                                           |
 |  Kagoshima                                           | 2024-04-22                                          | 16888                                              | nvnieuwk                                           |


<script>

(async function() {
    const data = [

        {
            date: `2024-04-22`,
            count: 16888,
            y: 'Kagoshima' },

        {
            date: `2024-07-04`,
            count: 1432,
            y: '2.0.1' },

        {
            date: `2024-08-20`,
            count: 10842,
            y: 'Tantanmen' },

        {
            date: `2024-09-19`,
            count: 95140,
            y: '2.1.1' },

        {
            date: `2024-10-18`,
            count: 8555,
            y: '2.1.2' },

        {
            date: `2024-10-30`,
            count: 28939,
            y: 'Kitakata' },

        {
            date: `2024-12-03`,
            count: 13463,
            y: '2.2.1' },

        {
            date: `2025-01-13`,
            count: 77906,
            y: 'Hakodate' },

        {
            date: `2025-04-03`,
            count: 417,
            y: '2.4.0' },

        {
            date: `2025-04-10`,
            count: 1459,
            y: '2.4.1' },

        {
            date: `2025-05-07`,
            count: 2729,
            y: '2.4.2' },

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