---
title: ${plugin.id}
description: ${plugin.id}
extends: _layouts.documentation
section: content
---

# Activity

<div style="position: relative; height:40vh; width:80vw">
    <canvas id="releases"></canvas>
</div>
<script type="module" src="docs/${plugin.id}/${plugin.id}.js"></script>

${plugin.readme}

## Detail

| Release                               | Date | Downloads                        | Author |
| :------------ | :---------: | ------: | -----------: |
<% plugin.releases.each{ release-> %> | ${release.name.split(' ').last()} | ${release.published_at.take(10)} | ${release.count} | ${release.author} |
<% } %>