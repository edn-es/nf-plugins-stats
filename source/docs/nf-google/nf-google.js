
(async function() {
    const data = [

        { date: `2022-12-13`, count: 215 },

        { date: `2023-01-14`, count: 158 },

        { date: `2023-02-21`, count: 160 },

        { date: `2023-03-19`, count: 137 },

        { date: `2023-04-01`, count: 1311 },

        { date: `2023-04-15`, count: 4899 },

        { date: `2023-05-15`, count: 233 },

        { date: `2023-06-14`, count: 452 },

        { date: `2023-07-22`, count: 7895 },

        { date: `2023-09-25`, count: 586 },

        { date: `2023-09-27`, count: 153 },

        { date: `2023-10-10`, count: 9278 },

        { date: `2023-11-24`, count: 315 },

        { date: `2023-12-26`, count: 1591 },

        { date: `2024-02-05`, count: 1675 },

        { date: `2024-04-15`, count: 506 },

        { date: `2024-05-13`, count: 228 },

        { date: `2024-05-20`, count: 105 },

        { date: `2024-05-20`, count: 6507 },

        { date: `2024-05-28`, count: 122 },

        { date: `2024-06-11`, count: 267 },

        { date: `2024-06-17`, count: 389 },

        { date: `2024-07-08`, count: 400 },

        { date: `2024-07-09`, count: 2579 },

        { date: `2024-08-05`, count: 693 },

        { date: `2024-09-04`, count: 913 },

        { date: `2024-10-13`, count: 69 },

        { date: `2024-10-14`, count: 3977 },

        { date: `2024-12-03`, count: 414 },

        { date: `2024-12-16`, count: 240 },

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