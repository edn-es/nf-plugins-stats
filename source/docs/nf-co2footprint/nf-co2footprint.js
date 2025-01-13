
(async function() {
    const data = [

        {
            date: `2024-01-19`,
            count: 713,
            name: '1.0.0-beta' },

        {
            date: `2025-01-09`,
            count: 2,
            name: '1.0.0-beta.1' },

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