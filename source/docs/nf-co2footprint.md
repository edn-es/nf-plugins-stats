---
title: nf-co2footprint
description: nf-co2footprint
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# nf-co2footprint plugin [WIP]

A Nextflow plugin to estimate the CO₂ footprint of pipeline runs.

## 📚 Docs 👉🏻 <https://nextflow-io.github.io/nf-co2footprint>

## Introduction

The nf-co2footprint plugin estimates the energy consumption for each pipeline task based on the Nextflow resource usage metrics and information about the power consumption of the underlying compute system.
The carbon intensity of the energy production is then used to estimate the respective CO₂ emission.

The calculation is based on the carbon footprint computation method developed in the [Green Algorithms Project](www.green-algorithms.org).

> **Green Algorithms: Quantifying the Carbon Footprint of Computation**  
> Lannelongue, L., Grealey, J., Inouye, M.,  
> Adv. Sci. 2021, 2100707. [https://doi.org/10.1002/advs.202100707](https://doi.org/10.1002/advs.202100707)

The nf-co2footprint plugin generates a detailed TXT carbon footprint report containing the energy consumption, the estimated CO₂ emission and other relevant metrics for each task.
Additionally, an HTML report is generated with information about the carbon footprint of the whole pipeline run and containing plots showing, for instance, an overview of the CO₂ emissions for the different processes.

## Quick Start

Declare the plugin in your Nextflow pipeline configuration file:

```groovy title="nextflow.config"
plugins {
  id 'nf-co2footprint@1.0.0-beta'
}
```

This is all that is needed. Run your pipeline with the usual command:
```bash
nextflow run <pipeline_name>.nf 
```

More details are available in the Nextflow [plugin documentation](https://www.nextflow.io/docs/latest/plugins.html#plugins) and the [configuration guide](https://www.nextflow.io/docs/latest/config.html). 

## Contributing
Before contributing, please read the [contribution guidelines](contributing/guidelines.md) carefully. You may also find the recommended [testing setup](contributing/setup.md) helpful.

After your changes are accepted. maintainers may then [publish](contributing/publishing.md) a new version along with your contribution.

## Credits

The nf-co2footprint plugin is mainly developed and maintained by [Sabrina Krakau](https://github.com/skrakau), [Júlia Mir-Pedrol](https://github.com/mirpedrol), [Josua Carl](https://github.com/josuacarl), and [Nadja Volkmann](https://github.com/nadnein) at [QBiC](https://www.qbic.uni-tuebingen.de/).

We thank the following people for their extensive assistance in the development of this plugin:

- [Phil Ewels](https://github.com/ewels)
- [Paolo Di Tommaso](https://github.com/pditommaso)

--- 

## Data Attribution

This project uses carbon intensity (CI) data from [Electricity Maps](https://www.electricitymaps.com/) under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/).  
Depending on the configuration, either historical yearly data from 2024 is used or real-time CI values are accessed via the Electricity Maps API.

> **Electricity Maps: Carbon Intensity Data**  
> Electricity Maps (2025). 2024 Yearly Carbon Intensity Data (Version January 27, 2025).  
> Electricity Maps. [https://www.electricitymaps.com](https://www.electricitymaps.com)

You are free to use, share, and adapt the data under the terms of the ODbL. For more details and attribution requirements, see the [NOTICE](./NOTICE) file.

## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  1.0.0-beta1                                         | 2025-01-23                                          | 103                                                | Bastian-Eisenmann                                  |
 |  1.0.0-beta                                          | 2024-01-19                                          | 3385                                               | skrakau                                            |


<script>

(async function() {
    const data = [

        {
            date: `2024-01-19`,
            count: 3385,
            y: '1.0.0-beta' },

        {
            date: `2025-01-23`,
            count: 103,
            y: '1.0.0-beta1' },

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