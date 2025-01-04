
(async function() {
    const data = [

        { date: `2021-01-04`, count: 19 },

        { date: `2021-01-15`, count: 32 },

        { date: `2021-03-05`, count: 26 },

        { date: `2021-05-28`, count: 113 },

        { date: `2022-09-19`, count: 131 },

        { date: `2023-04-13`, count: 300 },

        { date: `2023-05-15`, count: 123 },

        { date: `2023-07-22`, count: 109 },

        { date: `2023-11-24`, count: 30 },

        { date: `2024-02-05`, count: 18 },

        { date: `2024-05-13`, count: 390 },

        { date: `2024-05-28`, count: 24 },

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