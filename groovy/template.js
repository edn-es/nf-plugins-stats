
(async function() {
    const data = [
<% plugin.releases.each{ release -> %>
        { date: `${release.published_at.take(10)}`, count: ${release.count} },
<% } %>
    ];

    new Chart(
        document.getElementById('releases'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.date),
                datasets: [
                    {
                        label: 'Donwloads',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();