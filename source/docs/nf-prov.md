---
title: nf-prov
description: nf-prov
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# nf-prov

Nextflow plugin to render provenance reports for pipeline runs. Now supporting [BioCompute Object](https://biocomputeobject.org/)!

## Getting Started

To enable and configure `nf-prov`, include the following snippet to your Nextflow config and update as needed.

```groovy
plugins {
  id 'nf-prov'
}

prov {
  enabled = true
  formats {
    legacy {
      file = 'manifest.json'
      overwrite = true
    }
  }
}
```

Finally, run your Nextflow pipeline. You do not need to modify your pipeline script in order to use the `nf-prov` plugin. The plugin will automatically produce the specified provenance reports at the end of the workflow run.

## Configuration

*The `file`, `format`, and `overwrite` options have been deprecated since version 1.2.0. Use `formats` instead.*

The following options are available:

`prov.enabled`

Create the provenance report (default: `true` if plugin is loaded).

`prov.formats`

Configuration scope for the desired output formats. The following formats are available:

- `bco`: Render a [BioCompute Object](https://biocomputeobject.org/). Supports the `file` and `overwrite` options. See [BCO.md](docs/BCO.md) for more information about the additional config options for BCO.

- `dag`: Render the task graph as a Mermaid diagram embedded in an HTML document. Supports the `file` and `overwrite` options.

*Deprecated in version 1.4.0*

- `legacy`: Render the legacy format originally defined in this plugin (default). Supports the `file` and `overwrite` options.

*New in version 1.4.0*

- `wrroc`: Render a [Workflow Run RO-Crate](https://www.researchobject.org/workflow-run-crate/). Includes all three profiles (Process, Workflow, and Provenance). See [WRROC.md](docs/WRROC.md) for more information about the additional config options for WRROC.

Any number of formats can be specified, for example:

```groovy
prov {
  formats {
    bco {
      file = 'bco.json'
      overwrite = true
    }
    wrroc {
      file = 'ro-crate-metadata.json'
      overwrite = true
    }
  }
}
```

See the [nf-prov-test](./nf-prov-test) directory for an example pipeline that produces every provenance format.

`prov.patterns`

List of file patterns to include in the provenance report, from the set of published files. By default, all published files are included.

## Development

Build and install the plugin to your local Nextflow installation:

```bash
make install
```

Run with Nextflow as usual:

```bash
nextflow run nf-prov-test -plugins nf-prov@<version>
```

## Package, Upload, and Publish

Following these step to package, upload and publish the plugin:

1. In `build.gradle` make sure that:
   * `version` matches the desired release version,
   * `github.repository` matches the repository of the plugin,
   * `github.indexUrl` points to your fork of the plugins index repository.

2. Create a file named `$HOME/.gradle/gradle.properties`, where `$HOME` is your home directory. Add the following properties:

   * `github_username`: The GitHub username granting access to the plugin repository.
   * `github_access_token`: The GitHub access token required to upload and commit changes to the plugin repository.
   * `github_commit_email`: The email address associated with your GitHub account.

3. Update the [changelog](./CHANGELOG.md).

4. Build and publish the plugin to your GitHub repository:

   ```bash
   make release
   ```

5. Create a pull request against the [nextflow-io/plugins](https://github.com/nextflow-io/plugins/blob/main/plugins.json) repository to make the plugin publicly accessible.


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  1.4.0                                               | 2025-02-06                                          | 4664                                               | bentsherman                                        |
 |  1.3.0                                               | 2024-11-05                                          | 1519                                               | bentsherman                                        |
 |  1.2.4                                               | 2024-08-01                                          | 14002                                              | bentsherman                                        |
 |  1.2.3                                               | 2024-07-03                                          | 2940                                               | bentsherman                                        |
 |  1.2.2                                               | 2024-03-27                                          | 120143                                             | bentsherman                                        |
 |  1.2.1                                               | 2023-10-27                                          | 16537                                              | bentsherman                                        |
 |  1.2.0                                               | 2023-10-27                                          | 181                                                | bentsherman                                        |
 |  1.1.0                                               | 2023-09-28                                          | 1720                                               | bentsherman                                        |
 |  1.0.0                                               | 2022-12-19                                          | 553                                                | BrunoGrandePhD                                     |


<script>

(async function() {
    const data = [

        {
            date: `2022-12-19`,
            count: 553,
            y: '1.0.0' },

        {
            date: `2023-09-28`,
            count: 1720,
            y: '1.1.0' },

        {
            date: `2023-10-27`,
            count: 181,
            y: '1.2.0' },

        {
            date: `2023-10-27`,
            count: 16537,
            y: '1.2.1' },

        {
            date: `2024-03-27`,
            count: 120143,
            y: '1.2.2' },

        {
            date: `2024-07-03`,
            count: 2940,
            y: '1.2.3' },

        {
            date: `2024-08-01`,
            count: 14002,
            y: '1.2.4' },

        {
            date: `2024-11-05`,
            count: 1519,
            y: '1.3.0' },

        {
            date: `2025-02-06`,
            count: 4664,
            y: '1.4.0' },

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