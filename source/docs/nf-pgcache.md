---
title: nf-pgcache
description: nf-pgcache
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>
<script type="module" src="nf-plugin-stats/docs/nf-pgcache/nf-pgcache.js"></script>

# Nextflow PostgreSQL cache

Nextflow's PostgreSQL Cache Plugin enables the storage of task execution metadata in a PostgreSQL database, ensuring data persistence and scalability. This plugin is particularly useful for workflows that require robust, centralized caching mechanisms across distributed environments.

Add the plugin to your `nextflow.config` , configure it to connect with a postgre database and ... this is all.
The plugin will create required tables and will store tasks context when you run your pipeline

Among a way to *Centralized Cache Storage*, using this plugin, you're able to see log executions in real time

## License

This plugin is licensed under the MIT License.

## Contributing

Contributions are welcome! Please submit issues or pull requests to the project's GitHub repository.

## Contact

For commercial support, contact the EDN team at contacto@edn.es or refer to the plugin documentation at
https://edn-es.github.io/ng-pgcache/index.html


## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
 |  v0.0.1-rc3                                          | 2025-01-01                                          | 4                                                  | github-actions[bot]                                |
 |  v0.0.1                                              | 2025-01-28                                          | 1                                                  | github-actions[bot]                                |
 |  v1.0.0                                              | 2025-01-28                                          | 9                                                  | github-actions[bot]                                |
