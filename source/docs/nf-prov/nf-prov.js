
(async function() {
    const data = [

        { date: `2022-12-19`, count: 482 },

        { date: `2023-09-28`, count: 1662 },

        { date: `2023-10-27`, count: 127 },

        { date: `2023-10-27`, count: 16452 },

        { date: `2024-03-27`, count: 74996 },

        { date: `2024-07-03`, count: 2767 },

        { date: `2024-08-01`, count: 8693 },

        { date: `2024-11-05`, count: 651 },

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