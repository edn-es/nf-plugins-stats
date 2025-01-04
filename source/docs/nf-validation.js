
(async function() {
    const data = [

        { date: `2023-05-05`, count: 1314 },

        { date: `2023-06-06`, count: 204 },

        { date: `2023-06-06`, count: 9134 },

        { date: `2023-07-10`, count: 623 },

        { date: `2023-07-12`, count: 17168 },

        { date: `2023-09-19`, count: 10248 },

        { date: `2023-10-10`, count: 1296 },

        { date: `2023-10-10`, count: 60 },

        { date: `2023-10-12`, count: 2832 },

        { date: `2023-10-18`, count: 1847 },

        { date: `2023-10-23`, count: 13982 },

        { date: `2023-11-16`, count: 3179 },

        { date: `2023-11-21`, count: 319371 },

        { date: `2024-08-07`, count: 29675 },

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