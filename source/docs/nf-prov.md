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
<script type="module" src="nf-plugins-stats/docs/nf-prov/nf-prov.js"></script>

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
    legacy {
      file = 'manifest.json'
      overwrite = true
    }
  }
}
```

See the [nf-prov-test](./nf-prov-test) directory for an example pipeline that produces every provenance format.

`prov.patterns`

List of file patterns to include in the provenance report, from the set of published files. By default, all published files are included.

## Development

Run the following commands to build and test the nf-prov Nextflow plugin. Refer to the [nf-hello](https://github.com/nextflow-io/nf-hello) README for additional instructions (_e.g._ for publishing the plugin).

```bash
# (Optional) Checkout relevant feature branch
# git checkout <branch>

# Create an empty folder for nf-prov and nextflow repos
git clone --depth 1 -b STABLE-23.10.x https://github.com/nextflow-io/nextflow ../nextflow

# Prepare the nextflow repo
cd ../nextflow && ./gradlew compile exportClasspath && cd -

# Prepare the nf-prov repo
grep -v 'includeBuild' settings.gradle > settings.gradle.bkp
echo "includeBuild('../nextflow')" >> settings.gradle.bkp
mv -f settings.gradle.bkp settings.gradle
./gradlew assemble

# Launch
./launch.sh run nf-prov-test
```

An alternative method to build and test the plugin for development purposes:

```bash
# build the plugin and install it to ${HOME}/.nextflow/plugins
# overwrites any previous installation with the same version
make install

# run with regular nextflow install
nextflow run nf-prov-test -plugins nf-prov@<version>
```

## Package, Upload, and Publish

The project should hosted in a GitHub repository whose name should match the name of the plugin,
that is the name of the directory in the `plugins` folder e.g. `nf-prov` in this project.

Following these step to package, upload and publish the plugin:

1. Create a file named `gradle.properties` in the project root containing the following attributes
   (this file should not be committed in the project repository):

  * `github_organization`: the GitHub organisation the plugin project is hosted
  * `github_username` The GitHub username granting access to the plugin project.
  * `github_access_token`:  The GitHub access token required to upload and commit changes in the plugin repository.
  * `github_commit_email`:  The email address associated with your GitHub account.

2. Update the `Plugin-Version` field in the [manifest](./plugins/nf-prov/src/resources/META-INF/MANIFEST.MF) with the release version.

3. Update the [changelog](./CHANGELOG.md).

4. Build and publish the plugin to the GitHub repository:

   ```bash
   make upload
   ```

5. Create a pull request against the [nextflow-io/plugins](https://github.com/nextflow-io/plugins/blob/main/plugins.json) repository to make the plugin publicly accessible.


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  1.0.0                                               | 2022-12-19                                          | 510                                                | BrunoGrandePhD                                     |
 |  1.1.0                                               | 2023-09-28                                          | 1694                                               | bentsherman                                        |
 |  1.2.0                                               | 2023-10-27                                          | 154                                                | bentsherman                                        |
 |  1.2.1                                               | 2023-10-27                                          | 16490                                              | bentsherman                                        |
 |  1.2.2                                               | 2024-03-27                                          | 93012                                              | bentsherman                                        |
 |  1.2.3                                               | 2024-07-03                                          | 2865                                               | bentsherman                                        |
 |  1.2.4                                               | 2024-08-01                                          | 10802                                              | bentsherman                                        |
 |  1.3.0                                               | 2024-11-05                                          | 1411                                               | bentsherman                                        |
 |  1.4.0                                               | 2025-02-06                                          | 1424                                               | bentsherman                                        |
