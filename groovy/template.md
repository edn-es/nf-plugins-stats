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
<script type="module" src="${plugin.id}.js"></script>

${plugin.readme}

## Releases Detail

<% plugin.releases.each{ release-> %>
### ${release.name}

Published: ${release.published_at}

Downloads: ${release.count}

Author: ![avatar](${release.avatar} "${release.author}"){width=50 height=50}

<% } %>