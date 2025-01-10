
(async function() {
    const data = [

        { date: `2021-01-05`, count: 38 },

        { date: `2021-01-15`, count: 7 },

        { date: `2021-01-15`, count: 37 },

        { date: `2021-03-09`, count: 4413 },

        { date: `2021-07-30`, count: 2408 },

        { date: `2022-01-22`, count: 51 },

        { date: `2022-02-12`, count: 1028 },

        { date: `2022-03-17`, count: 146 },

        { date: `2022-03-19`, count: 358 },

        { date: `2022-03-26`, count: 594 },

        { date: `2022-05-06`, count: 3585 },

        { date: `2022-07-25`, count: 28990 },

        { date: `2023-01-14`, count: 2220 },

        { date: `2023-05-19`, count: 1135 },

        { date: `2023-08-09`, count: 6423 },

        { date: `2023-12-26`, count: 505 },

        { date: `2024-02-05`, count: 137 },

        { date: `2024-05-14`, count: 4333 },

        { date: `2024-07-30`, count: 30081 },

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