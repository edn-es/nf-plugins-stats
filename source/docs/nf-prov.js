
(async function() {
    const data = [

        { date: `2022-12-19`, count: 470 },

        { date: `2023-09-28`, count: 1650 },

        { date: `2023-10-27`, count: 115 },

        { date: `2023-10-27`, count: 16429 },

        { date: `2024-03-27`, count: 74032 },

        { date: `2024-07-03`, count: 2735 },

        { date: `2024-08-01`, count: 8461 },

        { date: `2024-11-05`, count: 583 },

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