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

${plugin.readme}

## Releases

| Release                               |                       Date                       |                   Downloads                    |                           Author |
| :------------ |:------------------------------------------------:|:----------------------------------------------:|---------------------------------:|
<% plugin.releases.reverse().each{ release-> %> |  ${release.name.split(' ').last().padRight(50)}  | ${release.published_at.take(10).padRight(50)}  | ${"$release.count".padRight(50)} | ${release.author.padRight(50)} |
<% } %>

<script>

(async function() {
    const data = [
<% plugin.releases.each{ release -> %>
        {
            date: `${release.published_at.take(10)}`,
            count: ${release.count},
            y: '${release.name.split(" ").last()}' },
<% } %>
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

                                return `Released (\${values.date})`;
                            },
                            label: function (tooltipData) {
                                const labels =
                                    tooltipData.dataset.label.toString();
                                const values =
                                    tooltipData.dataset.data[tooltipData.dataIndex];

                                return `\${labels} : \${values.count}`;
                            },
                        },
                    }                    
                }
            },
        }
    );
})();
</script>