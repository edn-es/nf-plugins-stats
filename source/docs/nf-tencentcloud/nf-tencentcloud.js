
(async function() {
    const data = [

        { date: `2024-09-04`, count: 89 },

        { date: `2024-09-04`, count: 110 },

        { date: `2024-12-04`, count: 5 },

        { date: `2024-12-04`, count: 7 },

        { date: `2024-12-12`, count: 0 },

        { date: `2024-12-12`, count: 0 },

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