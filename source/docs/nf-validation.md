---
title: nf-validation
description: nf-validation
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>
<script type="module" src="nf-plugins-stats/docs/nf-validation/nf-validation.js"></script>

# ![nf-validation](docs/images/nf-validation.svg)

**A Nextflow plugin to work with validation of pipeline parameters and sample sheets.**

<!-- prettier-ignore -->
> [!IMPORTANT]
> # `nf-validation` has now been renamed to `nf-schema`.
> **The `nf-validation` plugin will not receive any future updates.**
> **Please update your pipelines to use [`nf-schema`](https://github.com/nextflow-io/nf-schema) instead.**
> 
> See <https://github.com/nextflow-io/nf-schema> for details.
>
> This change was necessary to prevent older versions of `nf-core` pipelines from with unpinned plugin references from breaking when updating to the latest version of `nf-validation`.
> **Please pin the version of `nf-schema` in your pipeline's `nextflow.config` file:**
> ```nextflow
> plugins { id 'nf-schema@2.0.0' }
> ```

## Introduction

This [Nextflow plugin](https://www.nextflow.io/docs/latest/plugins.html#plugins) provides a number of functions that can be included into a Nextflow pipeline script to work with parameter and sample sheet schema. Using these functions you can:

- 📖 Print usage instructions to the terminal (for use with `--help`)
- ✍️ Print log output showing parameters with non-default values
- ✅ Validate supplied parameters against the pipeline schema
- 📋 Validate the contents of supplied sample sheet files
- 🛠️ Create a Nextflow channel with a parsed sample sheet

Supported sample sheet formats are CSV, TSV and YAML (simple).

## Quick Start

Declare the plugin in your Nextflow pipeline configuration file:

```groovy title="nextflow.config"
plugins {
  id 'nf-validation'
}
```

This is all that is needed - Nextflow will automatically fetch the plugin code at run time.

> [!NOTE]
> The snippet above will always try to install the latest version, good to make sure
> that the latest bug fixes are included! However, this can cause difficulties if running
> offline. You can pin a specific release using the syntax `nf-validation@0.3.2`

You can now include the plugin helper functions into your Nextflow pipeline:

```groovy title="main.nf"
include { validateParameters; paramsHelp; paramsSummaryLog; fromSamplesheet } from 'plugin/nf-validation'

// Print help message, supply typical command line usage for the pipeline
if (params.help) {
   log.info paramsHelp("nextflow run my_pipeline --input input_file.csv")
   exit 0
}

// Validate input parameters
validateParameters()

// Print summary of supplied parameters
log.info paramsSummaryLog(workflow)

// Create a new channel of metadata from a sample sheet
// NB: `input` corresponds to `params.input` and associated sample sheet schema
ch_input = Channel.fromSamplesheet("input")
```

## Dependencies

- Java 11 or later
- <https://github.com/everit-org/json-schema>

## Slack channel

There is a dedicated [nf-validation Slack channel](https://nfcore.slack.com/archives/C056RQB10LU) in the [Nextflow Slack workspace](nextflow.slack.com).

## Credits

This plugin was written based on code initially written within the nf-core community,
as part of the nf-core pipeline template.

We would like to thank the key contributors who include (but are not limited to):

- Júlia Mir Pedrol ([@mirpedrol](https://github.com/mirpedrol))
- Nicolas Vannieuwkerke ([@nvnieuwk](https://github.com/nvnieuwk))
- Kevin Menden ([@KevinMenden](https://github.com/KevinMenden))
- Phil Ewels ([@ewels](https://github.com/ewels))


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  0.1.0                                               | 2023-05-05                                          | 1334                                               | mirpedrol                                          |
 |  0.2.0                                               | 2023-06-06                                          | 224                                                | nvnieuwk                                           |
 |  0.2.1                                               | 2023-06-06                                          | 10102                                              | nvnieuwk                                           |
 |  0.3.0                                               | 2023-07-10                                          | 643                                                | mirpedrol                                          |
 |  0.3.1                                               | 2023-07-12                                          | 17212                                              | mirpedrol                                          |
 |  0.3.2                                               | 2023-09-19                                          | 10268                                              | nvnieuwk                                           |
 |  0.3.3                                               | 2023-10-10                                          | 1316                                               | mirpedrol                                          |
 |  0.3.4                                               | 2023-10-10                                          | 60                                                 | mirpedrol                                          |
 |  Tonkotsu                                            | 2023-10-12                                          | 2852                                               | mirpedrol                                          |
 |  Miso                                                | 2023-10-18                                          | 1867                                               | nvnieuwk                                           |
 |  Shoyu                                               | 2023-10-23                                          | 14002                                              | nvnieuwk                                           |
 |  Wakayama                                            | 2023-11-16                                          | 3212                                               | nvnieuwk                                           |
 |  Asahikawa                                           | 2023-11-21                                          | 324267                                             | nvnieuwk                                           |
 |  Kushiro                                             | 2024-08-07                                          | 32383                                              | adamrtalbot                                        |
