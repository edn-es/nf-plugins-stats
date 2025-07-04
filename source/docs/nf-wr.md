---
title: nf-wr
description: nf-wr
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# Nextflow WR 

Nextflow extension module for [wr](https://github.com/VertebrateResequencing/wr)

This allows submitting jobs to LSF while taking advantage of LSF
job arrays, and to an OpenStack cluster with autoscaling up and down.

## Install

The module is not yet available in Maven. In the mean time, you can build it
yourself:

    git clone https://github.com/nextflow-io/nf-wr.git
    cd nf-wr
    make assemble
    export NXF_CLASSPATH=$PWD/build/libs/nf-wr-1.0.0.jar

## Usage

To enable this executor set the property ``process.executor = 'wr'`` in the
``nextflow.config`` file. See wr's
[wiki](https://github.com/VertebrateResequencing/wr/wiki/Nextflow) for more
details.

The pipeline can be launched either on a local computer or an OpenStack instance.

To start running wr, install wr by downloading it, unzipping it and optionally
placing it in your $PATH. Then for LSF usage run:

    wr manager start -s lsf

For OpenStack usage, additionally source your OpenStack credentials "rc" file and
run:

    wr cloud deploy

Your options to "deploy" or your wr configuration determine the default image
and allowed flavors that will be used to run tasks. Amongst the allowed flavors,
wr will pick the smallest flavor that is large enough to run your tasks,
according to the cpu, memory and disk requirements of each task.

When using OpenStack without a shared disk, an S3 bucket must be used as pipeline
work directory and for pipeline file inputs. This means nextflow must be configured
with access details of your S3 system, and wr must also be aware of those details.
This can be arranged most easily by having an ~/.s3cfg file (the file you would need
for the s3cmd tool).

## Dir structure

* `src/main`: Module source files
* `src/resources`: Module non source resources
* `src/test`: Module unit test sources


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  1.2.0-rc.2                                          | 2022-02-28                                          | 219                                                | pditommaso                                         |
 |  1.2.0-rc.1                                          | 2022-02-15                                          | 173                                                | pditommaso                                         |
 |  1.2.0-rc.0                                          | 2022-01-13                                          | 184                                                | pditommaso                                         |


<script>

(async function() {
    const data = [

        {
            date: `2022-01-13`,
            count: 184,
            y: '1.2.0-rc.0' },

        {
            date: `2022-02-15`,
            count: 173,
            y: '1.2.0-rc.1' },

        {
            date: `2022-02-28`,
            count: 219,
            y: '1.2.0-rc.2' },

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