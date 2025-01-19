---
title: ${plugin.id}
description: ${plugin.id}
extends: _layouts.documentation
section: content
---

# Downloads

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>
<script type="module" src="docs/${plugin.id}/${plugin.id}.js"></script>

${plugin.readme}

## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
<% plugin.releases.each{ release-> %> |  ${release.name.split(' ').last().padRight(50)}  | ${release.published_at.take(10).padRight(50)}  | ${"$release.count".padRight(50)} | ${release.author.padRight(50)} |
<% } %>