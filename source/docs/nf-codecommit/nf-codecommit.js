
(async function() {
    const data = [

        { date: `2022-06-09`, count: 204 },

        { date: `2022-06-16`, count: 2 },

        { date: `2022-06-17`, count: 6576 },

        { date: `2023-01-14`, count: 902 },

        { date: `2023-04-15`, count: 5487 },

        { date: `2023-05-15`, count: 5321 },

        { date: `2023-11-24`, count: 156 },

        { date: `2024-02-05`, count: 162 },

        { date: `2024-05-28`, count: 120 },

        { date: `2024-07-30`, count: 113 },

        { date: `2024-08-01`, count: 155 },

        { date: `2024-08-05`, count: 185 },

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