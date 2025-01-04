
(async function() {
    const data = [

        { date: `2022-06-09`, count: 192 },

        { date: `2022-06-16`, count: 2 },

        { date: `2022-06-17`, count: 6564 },

        { date: `2023-01-14`, count: 890 },

        { date: `2023-04-15`, count: 5466 },

        { date: `2023-05-15`, count: 5304 },

        { date: `2023-11-24`, count: 144 },

        { date: `2024-02-05`, count: 150 },

        { date: `2024-05-28`, count: 108 },

        { date: `2024-07-30`, count: 101 },

        { date: `2024-08-01`, count: 143 },

        { date: `2024-08-05`, count: 145 },

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