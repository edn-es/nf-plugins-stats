---
title: nf-cws
description: nf-cws
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>

# nf-cws plugin

This plugin enables Nextflow to communicate with a Common Workflow Scheduler instance and transfer the required
information.

Together with the Common Workflow Scheduler, the plugin enables you:
- to use more sophisticated scheduling strategies [(More information)](https://arxiv.org/pdf/2302.07652.pdf)
- automatically resize the memory of your memory if your estimation is too high [(More information)](https://arxiv.org/pdf/2408.00047.pdf)
- keep your intermediate data locally at the worker node - this saves 18% of makespan for RNA-Seq, and 95% of makespan for I/O intensive task chaining [(More information)](https://arxiv.org/pdf/2503.13072.pdf)

For more information on the scheduling,
see the [scheduler repository](https://github.com/CommonWorkflowScheduler/KubernetesScheduler).

### Supported Executors

- k8s

### How to use

To run Nextflow with this plugin, you need version >=`24.04.0`.
To activate the plugin, add `-plugins nf-cws` to your `nextflow` call or add the following to your `nextflow.config`:

```
plugins {
  id 'nf-cws'
}
```

### Configuration

|    Attribute    | Required | Explanation                                                                                                                                                                      |
|:---------------:|---------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       dns       |        - | Provide the link to the running CWS instance. <br>NOTE: If you provide an address here, the `k8s` executor will not try to start a Common Workflow Scheduler instance on demand. |
|    strategy     |        - | Which strategy should be used for scheduling; available strategies depend on the CWS instance                                                                                    |
|  costFunction   |        - | Which cost function should be used for scheduling; available strategies depend on the CWS instance                                                                               |
|    batchSize    |        - | Number of tasks to submit together (only if more than this are ready to run); default: 1                                                                                         |
| memoryPredictor |        - | The memory predictor that shall be used for task scaling. <br>If not set, task scaling is disabled. See Common Workflow Scheduler for supported predictors.                      |
|    minMemory    |        - | The minimum memory to size a task to. Only used if memory prediction is performed.                                                                                               |
|    maxMemory    |        - | The maximum memory to size a task to. Only used if memory prediction is performed.                                                                                               |

##### Example:

```
cws {
    dns = 'http://cws-scheduler/'
    strategy = 'rank_max-fair'
    costFunction = 'MinSize'
    batchSize = 10
    memoryPredictor = '<strategy to use>'
    minMemory = 128.MB
    maxMemory = 64.GB
}
```

#### K8s Executor

The `k8s` executor allows starting a Common Workflow Scheduler instance on demand. This will happen if you do not define
any CWS-related config. Otherwise, you can configure the following:

```
k8s {
    scheduler {
        name = 'workflow-scheduler'
        serviceAccount = 'nextflowscheduleraccount'
        imagePullPolicy = 'IfNotPresent'
        cpu = '2'
        memory = '1400Mi'
        container = 'commonworkflowscheduler/kubernetesscheduler:v2.1'
        command = null
        port = 8080
        workDir = '/scheduler'
        runAsUser = 0
        autoClose = false
        nodeSelector = null
    }
}
```

| Attribute       | Required | Explanation                                                                                                                  |
|:----------------|----------|------------------------------------------------------------------------------------------------------------------------------|
| name            | -        | The name of the pod created                                                                                                  |
| serviceAccount  | -        | Service account used by the scheduler                                                                                        |
| imagePullPolicy | -        | Image pull policy for the created pod ([k8s docs](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy)) |
| cpu             | -        | Number of cores to use for the scheduler pod                                                                                 |
| memory          | -        | Memory to use for the scheduler pod                                                                                          |
| container       | -        | Container image to use for the scheduler pod                                                                                 |
| command         | -        | Command to start the CWS in the pod. If you need to overwrite the original ENTRYPOINT                                        |
| port            | -        | Port where to reach the CWS Rest API                                                                                         |
| workDir         | -        | Workdir within the pod                                                                                                       |
| runAsUser       | -        | Run the scheduler as a specific user                                                                                         |
| autoClose       | -        | Stop the pod after the workflow is finished                                                                                  |
| nodeSelector    | -        | A node selector for the CWS pod                                                                                              |

#### WOW

WOW is a new scheduling approach for dynamic scientific workflow systems that steers both data movement and task
scheduling to reduce network congestion and overall runtime.

WOW requires some additional configuration due to its use of the local file system in addition to the distributed file
system.

```
k8s {
   localPath = '/localdata'
   localStorageMountPath = '/localdata'
   storage {
       copyStrategy = 'ftp'
       workdir = '/localdata/localwork/'
   }
}
```

| Attribute             | Required | Explanation                                                                                     |
|:----------------------|----------|-------------------------------------------------------------------------------------------------|
| localPath             | yes      | Host path for the local mount                                                                   
| localStorageMountPath | no       | Container path for the local mount                                                              
| storage.copyStrategy  | no       | Strategy to copy the files between nodes - currently only supports 'ftp' (and its alias 'copy') 
| storage.workdir       | no       | Working directory to use - must be inside of the locally mounted directory                      

### Tracing

This plugin adds additional fields to the trace report. Therefore, you have to add the required fields to
the `trace.fields` field in your Nextflow config (also check the
official [documentation](https://www.nextflow.io/docs/latest/tracing.html#trace-report)).
The following fields can be used:

| Name                                   |                                                    Description                                                    |
|:---------------------------------------|:-----------------------------------------------------------------------------------------------------------------:|
| input_size                             |                                      The accumulated size of the input files                                      |
| memory_adapted                         |                             The memory that was used after adaption by the scheduler                              |
| submit_to_scheduler_time               |                                      Time in ms to register the task at CWS                                       |
| submit_to_k8s_time                     |                                       Time to create and submit pod to k8s                                        |
| scheduler_time_in_queue                |                             How long was the task in the queue until it got scheduled                             |
| scheduler_place_in_queue               |                          At which place was the task in the queue when it got scheduled                           |
| scheduler_tried_to_schedule            |                      How often was a scheduling plan calculated until the task was assigned                       |
| scheduler_time_to_schedule             |                           How long did it take to calculate the location for this task                            |
| scheduler_nodes_tried                  |                                         How many nodes have been compared                                         |
| scheduler_nodes_cost                   |                Cost value to schedule on the different nodes (only available for some algorithms)                 |
| scheduler_could_stop_fetching          |                                     How often could the scheduler skip a node                                     |
| scheduler_best_cost                    |                          Cost on the selected node (only available for some algorithms)                           |
| scheduler_delta_schedule_submitted     |      Time delta between starting to calculate the scheduling plan and submitting the task to the target node      |
| scheduler_delta_schedule_alignment     |             Time delta between beginning to calculate the scheduling plan and finding the target node             |
| scheduler_batch_id                     |                                      The id of the batch the task belongs to                                      |
| scheduler_delta_batch_start_submitted  |       Time delta between a batch was started, and the scheduler received this task from the workflow engine       |
| scheduler_delta_batch_start_received   |            Time delta between a batch was started, and the scheduler received the pod from the k8s API            |
| scheduler_delta_batch_closed_batch_end | Time delta between a batch was closed by the workflow engine, and the scheduler received the pod from the k8s API |
| scheduler_delta_submitted_batch_end    |                     Time delta between a task was submitted, and the batch became schedulable                     |
| memory_adapted                         |                                 The memory used for a task when sizing is active                                  |
| input_size                             |                                   The sum of the input size of all task inputs                                    |
| infiles_time:                          |              (WOW) Time to walk through and retrieve stats of all local (input) files at task start               |
| outfiles_time:                         |              (WOW) Time to walk through and retrieve stats of all local (output) files at task start              |
| scheduler_time_delta_phase_three:      |  (WOW) List of time instances taken to calculcate step 3 of the WOW scheduling algorithm (see paper for details)  |                                                      
| scheduler_copy_tasks:                  |                            (WOW) Number of times copy tasks were started for this task                            |

---

## Citation

If you use this software or artifacts in a publication, please cite it as:

#### Text

Lehmann Fabian, Jonathan Bader, Friedrich Tschirpke, Lauritz Thamsen, and Ulf Leser. **How Workflow Engines Should Talk
to Resource Managers: A Proposal for a Common Workflow Scheduling Interface**. In 2023 IEEE/ACM 23rd International
Symposium on Cluster, Cloud and Internet Computing (CCGrid). Bangalore, India, 2023.

([https://arxiv.org/pdf/2302.07652.pdf](https://arxiv.org/pdf/2302.07652.pdf))

#### BibTeX

```
@inproceedings{lehmannHowWorkflowEngines2023,
 author = {Lehmann, Fabian and Bader, Jonathan and Tschirpke, Friedrich and Thamsen, Lauritz and Leser, Ulf},
 booktitle = {2023 IEEE/ACM 23rd International Symposium on Cluster, Cloud and Internet Computing (CCGrid)},
 title = {How Workflow Engines Should Talk to Resource Managers: A Proposal for a Common Workflow Scheduling Interface},
 year = {2023},
 address = {{Bangalore, India}},
 doi = {10.1109/CCGrid57682.2023.00025}
}
```

#### Strategy-specific Citation

Please note that the following strategies originated in individual papers:

- PONDER: [https://arxiv.org/pdf/2408.00047.pdf](https://arxiv.org/pdf/2408.00047.pdf)
- WOW: [https://arxiv.org/pdf/2503.13072.pdf](https://arxiv.org/pdf/2503.13072.pdf)

---

#### Acknowledgement:

This work was funded by the German Research Foundation (DFG), CRC 1404: "FONDA: Foundations of Workflows for Large-Scale
Scientific Data Analysis."


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  2.0.1                                               | 2025-05-28                                          | 18                                                 | Lehmann-Fabian                                     |
 |  2.0.0                                               | 2025-05-16                                          | 17                                                 | Lehmann-Fabian                                     |
 |  1.0.6                                               | 2025-04-23                                          | 14                                                 | Lehmann-Fabian                                     |
 |  1.0.5                                               | 2024-07-22                                          | 287                                                | Lehmann-Fabian                                     |
 |  1.0.4                                               | 2023-11-02                                          | 197                                                | Lehmann-Fabian                                     |
 |  1.0.3                                               | 2023-10-02                                          | 180                                                | Lehmann-Fabian                                     |
 |  1.0.2                                               | 2023-07-25                                          | 304                                                | Lehmann-Fabian                                     |
 |  1.0.1                                               | 2023-06-09                                          | 226                                                | Lehmann-Fabian                                     |
 |  1.0.0                                               | 2023-03-20                                          | 238                                                | Lehmann-Fabian                                     |


<script>

(async function() {
    const data = [

        {
            date: `2023-03-20`,
            count: 238,
            y: '1.0.0' },

        {
            date: `2023-06-09`,
            count: 226,
            y: '1.0.1' },

        {
            date: `2023-07-25`,
            count: 304,
            y: '1.0.2' },

        {
            date: `2023-10-02`,
            count: 180,
            y: '1.0.3' },

        {
            date: `2023-11-02`,
            count: 197,
            y: '1.0.4' },

        {
            date: `2024-07-22`,
            count: 287,
            y: '1.0.5' },

        {
            date: `2025-04-23`,
            count: 14,
            y: '1.0.6' },

        {
            date: `2025-05-16`,
            count: 17,
            y: '2.0.0' },

        {
            date: `2025-05-28`,
            count: 18,
            y: '2.0.1' },

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