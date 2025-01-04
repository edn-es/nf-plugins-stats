---
title: nf-gpt
description: nf-gpt
extends: _layouts.documentation
section: content
---

# Activity

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>
<script type="module" src="docs/nf-gpt/nf-gpt.js"></script>

# nf-gpt plugin
 
nf-gpt is an experimental plugin to integrate GPT prompts into Nextflow scripts. It allows submitting
prompts via OpenAI API and collect the response in form of structured data for downstream analysis.

## Get started

1. Configure the [OpenAI API](https://platform.openai.com/api-keys) key in your environment by using the following variable:

```bash
export OPENAI_API_KEY=<your api key>
```

2. Add the following snippet at the beginning of your script:

```nextflow
include { gptPromptForText } from 'plugin/nf-gpt'
```

3. Use the `gptPromptForText` operator to perform a ChatGPT prompt and get the response.

```
include { gptPromptForText } from 'plugin/nf-gpt'

println gptPromptForText('Tell me a joke')

```

4. run using Nextflow as usual

```
nextflow run <my script>
```

5. See the folder [examples] for more examples.


## Reference 

### Function `gptPromptForText` 

The `gptPromptForText` function carries out a Gpt chat prompt and return the corresponding message as response as a string. Example: 


```nextflow
println gptPromptForText('Tell me a joke')
```


When the option `numOfChoices` is specified the response is a list of strings.

```nextflow
def response =  gptPromptForText('Tell me a joke', numOfChoices: 3)
for( String it : response )
  println it
```

Available options:


| name            | description                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| `logitBias`     | Accepts an object mapping each token (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100 |
| `model`         | The AI model to be used (default: `gpt-3.5-turbo`)                                                                               |
| `maxTokens`     | The maximum number of tokens that can be generated in the chat completion                                                        |
| `numOfChoices`  | How many chat completion choices to generate for each input message (default: 1)                                                 |
| `temperature`   | What sampling temperature to use, between 0 and 2 (default: `0.7`)                                                               |


### Function `gptPromptForData` 

The `gptPromptForData` function carries out a GPT chat prompt and returns the response as a list of 
objects having the schema specified. For example: 

```nextflow 

def query = '''
        Extract information about a person from In 1968, amidst the fading echoes of Independence Day, 
        a child named John arrived under the calm evening sky. This newborn, bearing the surname Doe, 
        marked the start of a new journey.
        '''

def response = gptPromptForData(query, schema: [firstName: 'string', lastName: 'string', birthDate: 'date (YYYY-MM-DD)'])

println "First name: ${response[0].firstName}"
println "Last name: ${response[0].lastName}"
println "Birth date: ${response[0].birthDate}"
```


The following options are available: 


| name            | description |
|-----------------|-------------|
| `model`         | The AI model to be used (default: `gpt-3.5-turbo`) |
| `maxTokens`     | The maximum number of tokens that can be generated in the chat completion |
| `schema`        | The expected strcuture for the result object represented as map object in which represent the attribute name and the value the attribute type |
| `temperature`   | What sampling temperature to use, between 0 and 2 (default: `0.7`) |


### Configuration file 

The following config options can be specified in the `nextflow.config` file: 


| name            | description |
|-----------------|-------------|
| `gpt.apiKey`        | Your OpenAI API key. If missing it uses the `OPENAI_API_KEY` env variable | 
| `gpt.endpoint`      | The OpenAI endpoint (defualt: `https://api.openai.com`)   |
| `gpt.model`         | The AI model to be used (default: `gpt-3.5-turbo`) |
| `gpt.maxTokens`     | The maximum number of tokens that can be generated in the chat completion |
| `gpt.temperature`   | What sampling temperature to use, between 0 and 2 (default: `0.7`) |


## Development 

To build and test the plugin during development, configure a local Nextflow build with the following steps:

1. Clone the Nextflow repository in your computer into a sibling directory:
    ```bash
    git clone --depth 1 https://github.com/nextflow-io/nextflow ../nextflow
    ```
  
2. Configure the plugin build to use the local Nextflow code:
    ```bash
    echo "includeBuild('../nextflow')" >> settings.gradle
    ```
  
   (Make sure to not add it more than once!)

3. Compile the plugin alongside the Nextflow code:
    ```bash
    make assemble
    ```

4. Run Nextflow with the plugin, using `./launch.sh` as a drop-in replacement for the `nextflow` command, and adding the option `-plugins nf-gpt` to load the plugin:
    ```bash
    ./launch.sh run nextflow-io/hello -plugins nf-gpt
    ```

### Testing without Nextflow build

The plugin can be tested without using a local Nextflow build using the following steps:

1. Build the plugin: `make buildPlugins`
2. Copy `build/plugins/<your-plugin>` to `$HOME/.nextflow/plugins`
3. Create a pipeline that uses your plugin and run it: `nextflow run ./my-pipeline-script.nf`

### Package, upload, and publish

The project should be hosted in a GitHub repository whose name matches the name of the plugin, that is the name of the directory in the `plugins` folder (e.g. `nf-gpt`).

Follow these steps to package, upload and publish the plugin:

1. Create a file named `gradle.properties` in the project root containing the following attributes (this file should not be committed to Git):

   * `github_organization`: the GitHub organisation where the plugin repository is hosted.
   * `github_username`: The GitHub username granting access to the plugin repository.
   * `github_access_token`: The GitHub access token required to upload and commit changes to the plugin repository.
   * `github_commit_email`: The email address associated with your GitHub account.

2. Use the following command to package and create a release for your plugin on GitHub:
    ```bash
    ./gradlew :plugins:nf-gpt:upload
    ```

3. Create a pull request against [nextflow-io/plugins](https://github.com/nextflow-io/plugins/blob/main/plugins.json) to make the plugin accessible to Nextflow.


## Detail

| Release                               | Date | Downloads                        | Author |
| :------------ | :---------: | ------: | -----------: |
 | 0.1.0 | 2024-03-19 | 96 | pditommaso |
 | 0.2.0 | 2024-03-20 | 1 | pditommaso |
 | 0.3.0 | 2024-04-05 | 95 | pditommaso |
 | 0.4.0 | 2024-04-15 | 223 | pditommaso |
