
(async function() {
    const data = [

        { date: `2023-12-15`, count: 207 },

        { date: `2024-01-22`, count: 5137 },

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