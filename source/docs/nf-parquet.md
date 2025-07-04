---
title: nf-parquet
description: nf-parquet
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# nf-parquet

Nextflow plugin for interacting with [Apache Parquet](https://parquet.apache.org/) files.

## Usage

To use this plugin, simply specify it in your Nextflow configuration:

```groovy
plugins {
    id 'nf-parquet'
}
```

Or on the command line:

```bash
nextflow run <pipeline> -plugins nf-parquet
```

This plugin provides two new operators:

`splitParquet()`

: Load each Parquet file in a source channel, emitting each row as a separate item.

Default method emits every row in the parquet file as a Map.
In case you want to read only a subset
of fields (a projection) you can provide a java Record class with the fields you want to read

```groovy
record MyRecord( int id, String name){}

splitParquet( [record: MyRecord] )
```

`toParquet( path, [record: MyRecord] )`

: Write each item in a source channel to a Parquet file.

A `record` class is required to let know the plugin about the structure of the file

## Development

Refer to the [nf-hello](https://github.com/nextflow-io/nf-hello) README for instructions on how to build, test, and publish Nextflow plugins.


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  0.2.0                                               | 2024-12-11                                          | 92                                                 | jagedn                                             |


<script>

(async function() {
    const data = [

        {
            date: `2024-12-11`,
            count: 92,
            y: '0.2.0' },

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