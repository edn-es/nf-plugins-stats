
(async function() {
    const data = [

        { date: `2024-03-19`, count: 96 },

        { date: `2024-03-20`, count: 1 },

        { date: `2024-04-05`, count: 95 },

        { date: `2024-04-15`, count: 223 },

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