
(async function() {
    const data = [
<% plugin.releases.each{ release -> %>
        {
            date: `${release.published_at.take(10)}`,
            count: ${release.count},
            name: '${release.name.split(" ").last()}' },
<% } %>
    ];

    new Chart(
        document.getElementById('releases'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.name),
                datasets: [
                    {
                        label: 'Donwloads',
                        data: data.map(row => row.count)
                    }
                ]
            },
            options: {
                indexAxis: 'y'
            },
        }
    );
})();