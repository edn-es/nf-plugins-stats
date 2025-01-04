
(async function() {
    const data = [

        { date: `2023-02-21`, count: 1857 },

        { date: `2023-03-19`, count: 949 },

        { date: `2023-04-01`, count: 30671 },

        { date: `2023-04-15`, count: 140735 },

        { date: `2023-05-15`, count: 2036 },

        { date: `2023-06-14`, count: 4008 },

        { date: `2023-07-22`, count: 965 },

        { date: `2023-08-05`, count: 8176 },

        { date: `2023-09-10`, count: 2751 },

        { date: `2023-09-27`, count: 2441 },

        { date: `2023-10-10`, count: 103016 },

        { date: `2023-11-24`, count: 3081 },

        { date: `2023-12-26`, count: 3301 },

        { date: `2024-02-05`, count: 8316 },

        { date: `2024-03-10`, count: 5987 },

        { date: `2024-04-15`, count: 5715 },

        { date: `2024-05-13`, count: 693 },

        { date: `2024-05-14`, count: 153 },

        { date: `2024-05-20`, count: 50899 },

        { date: `2024-05-28`, count: 131 },

        { date: `2024-06-11`, count: 307 },

        { date: `2024-06-17`, count: 6090 },

        { date: `2024-07-30`, count: 1016 },

        { date: `2024-08-01`, count: 21363 },

        { date: `2024-08-05`, count: 9354 },

        { date: `2024-09-04`, count: 2247 },

        { date: `2024-10-02`, count: 8744 },

        { date: `2024-11-18`, count: 1778 },

        { date: `2024-11-27`, count: 4429 },

        { date: `2024-12-03`, count: 1587 },

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