
(async function() {
    const data = [

        { date: `2022-12-13`, count: 220 },

        { date: `2023-01-14`, count: 163 },

        { date: `2023-02-21`, count: 165 },

        { date: `2023-03-19`, count: 142 },

        { date: `2023-04-01`, count: 1328 },

        { date: `2023-04-15`, count: 4905 },

        { date: `2023-05-15`, count: 238 },

        { date: `2023-06-14`, count: 457 },

        { date: `2023-07-22`, count: 8360 },

        { date: `2023-09-25`, count: 591 },

        { date: `2023-09-27`, count: 158 },

        { date: `2023-10-10`, count: 9285 },

        { date: `2023-11-24`, count: 320 },

        { date: `2023-12-26`, count: 1706 },

        { date: `2024-02-05`, count: 1697 },

        { date: `2024-04-15`, count: 511 },

        { date: `2024-05-13`, count: 233 },

        { date: `2024-05-20`, count: 110 },

        { date: `2024-05-20`, count: 8120 },

        { date: `2024-05-28`, count: 127 },

        { date: `2024-06-11`, count: 272 },

        { date: `2024-06-17`, count: 394 },

        { date: `2024-07-08`, count: 405 },

        { date: `2024-07-09`, count: 2623 },

        { date: `2024-08-05`, count: 700 },

        { date: `2024-09-04`, count: 918 },

        { date: `2024-10-13`, count: 74 },

        { date: `2024-10-14`, count: 4065 },

        { date: `2024-12-03`, count: 566 },

        { date: `2024-12-16`, count: 2856 },

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