
(async function() {
    const data = [

        {
            date: `2023-12-15`,
            count: 211,
            name: '0.1.0' },

        {
            date: `2024-01-22`,
            count: 5169,
            name: '0.2.0' },

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