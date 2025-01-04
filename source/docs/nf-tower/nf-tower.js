
(async function() {
    const data = [

        { date: `2022-08-01`, count: 347 },

        { date: `2022-08-11`, count: 487 },

        { date: `2022-09-01`, count: 264 },

        { date: `2022-09-19`, count: 62 },

        { date: `2022-09-20`, count: 576 },

        { date: `2022-10-03`, count: 8199 },

        { date: `2022-11-13`, count: 10402 },

        { date: `2022-11-29`, count: 53 },

        { date: `2022-12-13`, count: 402 },

        { date: `2023-01-14`, count: 98 },

        { date: `2023-02-21`, count: 738 },

        { date: `2023-04-01`, count: 701 },

        { date: `2023-04-13`, count: 4 },

        { date: `2023-04-13`, count: 682 },

        { date: `2023-04-15`, count: 11686 },

        { date: `2023-05-15`, count: 802 },

        { date: `2023-06-14`, count: 1461 },

        { date: `2023-07-22`, count: 146 },

        { date: `2023-08-05`, count: 903 },

        { date: `2023-08-17`, count: 4387 },

        { date: `2023-09-27`, count: 327 },

        { date: `2023-10-10`, count: 19854 },

        { date: `2023-11-24`, count: 3830 },

        { date: `2024-02-05`, count: 3450 },

        { date: `2024-03-10`, count: 837 },

        { date: `2024-04-15`, count: 1388 },

        { date: `2024-05-13`, count: 15204 },

        { date: `2024-05-28`, count: 751 },

        { date: `2024-08-05`, count: 3031 },

        { date: `2024-10-27`, count: 3718 },

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