
(async function() {
    const data = [

        { date: `2023-07-22`, count: 114 },

        { date: `2023-08-17`, count: 1569 },

        { date: `2023-10-10`, count: 12334 },

        { date: `2023-11-24`, count: 1390 },

        { date: `2024-02-05`, count: 143 },

        { date: `2024-03-10`, count: 13563 },

        { date: `2024-05-28`, count: 863 },

        { date: `2024-08-05`, count: 2860 },

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