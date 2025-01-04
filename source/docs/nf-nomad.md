---
title: nf-nomad
description: nf-nomad
extends: _layouts.documentation
section: content
---

# Activity

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>
<script type="module" src="nf-nomad.js"></script>

# nf-nomad plugin

This plugin implements a Nextflow executor for [Hashicorp Nomad](https://www.nomadproject.io).


# Maintainers

Please note that this is a **community contributed** plugin and is a collaboration between 

1. Abhinav Sharma (@abhi18av) as part of his PhD work at the Stellenbosch University and Jorge Aguilera (@jagedn) as a contributor from  Evaluacion y desarrollo de negocios, Spain. 
2. Tomas (@tomiles) and his team from Center For Medical Genetics Ghent, Belgium.

The contribution roles during the development of initial plugin and testing along with the long term commitments have been discussed in [development and infrastructure group](https://github.com/nextflow-io/nf-nomad/issues/2#issue-1703543034).

Feel free to reach out to us on the `#platform-nomad` channel on Slack for discussions and feedbacks.

## Plugin Assets

- `settings.gradle`

    Gradle project settings.

- `plugins/nf-nomad`

    The plugin implementation base directory.

- `plugins/nf-nomad/build.gradle`

    Plugin Gradle build file. Project dependencies should be added here.

- `plugins/nf-nomad/src/resources/META-INF/MANIFEST.MF`

    Manifest file defining the plugin attributes e.g. name, version, etc. The attribute `Plugin-Class` declares the plugin main class. This class should extend the base class `nextflow.plugin.BasePlugin` e.g. `nextflow.Nomad.NomadPlugin`.

- `plugins/nf-nomad/src/resources/META-INF/extensions.idx`

    This file declares one or more extension classes provided by the plugin. Each line should contain the fully qualified name of a Java class that implements the `org.pf4j.ExtensionPoint` interface (or a sub-interface).

- `plugins/nf-nomad/src/main`

    The plugin implementation sources.

- `plugins/nf-nomad/src/test`

    The plugin unit tests.

## `ExtensionPoint`s

`ExtensionPoint` is the basic interface which uses nextflow-core to integrate plugins into it. It's only a basic interface and serves as starting point for more specialized extensions.

## Unit testing

Run the following command in the project root directory (ie. where the file `settings.gradle` is located):

```bash
./gradlew check
```

## Testing and debugging

To run and test the plugin in a development environment, configure a local Nextflow build with the following steps:

1. Clone the Nextflow repository in your computer into a sibling directory:

    ```bash
    git clone --depth 1 https://github.com/nextflow-io/nextflow _resources/nextflow
    ```

2. Generate the nextflow class path

    ```bash
    cd _resources/nextflow && ./gradlew exportClasspath
    ```

3. Compile the plugin alongside the Nextflow code:

    ```bash
    cd ../../ && ./gradlew compileGroovy
    ```

4. Run Nextflow with the plugin, using `./launch.sh` as a drop-in replacement for the `nextflow` command, and adding the option `-plugins nf-nomad` to load the plugin:

    ```bash
    ./launch.sh run main.nf -plugins nf-nomad
    ```

## Package, upload and publish

The project should be hosted in a GitHub repository whose name should match the name of the plugin, that is the name of the directory in the `plugins` folder (e.g. `nf-nomad`).

Follow these steps to package, upload and publish the plugin:

1. Create a file named `gradle.properties` in the project root containing the following attributes (this file should not be committed to Git):

   - `github_organization`: the GitHub organisation where the plugin repository is hosted.


2. Use the following steps to package and create a release for your plugin on GitHub:

    - set the desired `version` value in `gradle.properties` and commit the change in the `master` branch
    - tag the repo with the version
    - push *all* changes (the tag fill fire the `release` GH action)

    Once the action is finished a new release is created and all related artifacts attached to it

3. Create a pull request against [nextflow-io/plugins](https://github.com/nextflow-io/plugins/blob/main/plugins.json) to make the plugin accessible to Nextflow.
    
    Use the `json` file created in previous steps


## Releases Detail


### Version 0.0.1

Published: 2024-02-20T14:53:50Z

Downloads: 28

Author: ![avatar](https://avatars.githubusercontent.com/u/12799326?v=4 "abhi18av"){width=50 height=50}


### Version 0.0.2

Published: 2024-03-08T12:15:43Z

Downloads: 10

Author: ![avatar](https://avatars.githubusercontent.com/u/12799326?v=4 "abhi18av"){width=50 height=50}


### Version 0.1.0

Published: 2024-06-26T11:22:26Z

Downloads: 100

Author: ![avatar](https://avatars.githubusercontent.com/u/12799326?v=4 "abhi18av"){width=50 height=50}


### 0.1.1

Published: 2024-07-02T17:45:10Z

Downloads: 106

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}


### 0.1.2-beta1

Published: 2024-07-08T14:42:32Z

Downloads: 5

Author: ![avatar](https://avatars.githubusercontent.com/u/2102730?v=4 "jagedn"){width=50 height=50}


### 0.1.2-beta2

Published: 2024-07-09T08:36:49Z

Downloads: 2

Author: ![avatar](https://avatars.githubusercontent.com/u/2102730?v=4 "jagedn"){width=50 height=50}


### 0.1.2-edge3

Published: 2024-07-16T14:17:28Z

Downloads: 3

Author: ![avatar](https://avatars.githubusercontent.com/u/2102730?v=4 "jagedn"){width=50 height=50}


### 0.1.2

Published: 2024-07-29T09:15:12Z

Downloads: 100

Author: ![avatar](https://avatars.githubusercontent.com/u/12799326?v=4 "abhi18av"){width=50 height=50}


### 0.2.0-edge1

Published: 2024-07-29T16:04:21Z

Downloads: 1

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}


### 0.2.0-edge2

Published: 2024-08-28T09:13:48Z

Downloads: 2

Author: ![avatar](https://avatars.githubusercontent.com/u/2102730?v=4 "jagedn"){width=50 height=50}


### 0.2.0-edge3

Published: 2024-08-28T16:07:57Z

Downloads: 1

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}


### 0.2.0

Published: 2024-08-28T16:24:26Z

Downloads: 106

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}


### 0.3.0-edge1

Published: 2024-09-18T08:52:01Z

Downloads: 0

Author: ![avatar](https://avatars.githubusercontent.com/u/2102730?v=4 "jagedn"){width=50 height=50}


### 0.3.0-edge2

Published: 2024-09-18T10:21:25Z

Downloads: 0

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}


### 0.3.0

Published: 2024-09-20T12:00:03Z

Downloads: 80

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}


### 0.3.1-edge1

Published: 2024-09-23T13:24:41Z

Downloads: 1

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}


### 0.3.2-edge2

Published: 2024-11-18T18:33:19Z

Downloads: 0

Author: ![avatar](https://avatars.githubusercontent.com/u/2102730?v=4 "jagedn"){width=50 height=50}


### 0.3.1

Published: 2024-12-08T19:12:15Z

Downloads: 12

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}


### 0.3.2-edge1

Published: 2024-12-10T18:40:34Z

Downloads: 1

Author: ![avatar](https://avatars.githubusercontent.com/in/15368?v=4 "github-actions[bot]"){width=50 height=50}

