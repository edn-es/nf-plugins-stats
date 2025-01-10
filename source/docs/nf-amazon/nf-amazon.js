
(async function() {
    const data = [

        { date: `2023-02-21`, count: 1869 },

        { date: `2023-03-19`, count: 961 },

        { date: `2023-04-01`, count: 30701 },

        { date: `2023-04-15`, count: 141401 },

        { date: `2023-05-15`, count: 2048 },

        { date: `2023-06-14`, count: 4020 },

        { date: `2023-07-22`, count: 977 },

        { date: `2023-08-05`, count: 8189 },

        { date: `2023-09-10`, count: 2763 },

        { date: `2023-09-27`, count: 2454 },

        { date: `2023-10-10`, count: 103964 },

        { date: `2023-11-24`, count: 3097 },

        { date: `2023-12-26`, count: 3315 },

        { date: `2024-02-05`, count: 8328 },

        { date: `2024-03-10`, count: 6020 },

        { date: `2024-04-15`, count: 5734 },

        { date: `2024-05-13`, count: 705 },

        { date: `2024-05-14`, count: 165 },

        { date: `2024-05-20`, count: 51200 },

        { date: `2024-05-28`, count: 143 },

        { date: `2024-06-11`, count: 319 },

        { date: `2024-06-17`, count: 6103 },

        { date: `2024-07-30`, count: 1129 },

        { date: `2024-08-01`, count: 21884 },

        { date: `2024-08-05`, count: 9522 },

        { date: `2024-09-04`, count: 2259 },

        { date: `2024-10-02`, count: 8819 },

        { date: `2024-11-18`, count: 1843 },

        { date: `2024-11-27`, count: 5341 },

        { date: `2024-12-03`, count: 1899 },

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