
(async function() {
    const data = [

        { date: `2023-05-18`, count: 0 },

        { date: `2023-05-19`, count: 0 },

        { date: `2023-05-21`, count: 0 },

        { date: `2023-05-25`, count: 231 },

        { date: `2023-07-17`, count: 222 },

        { date: `2023-07-26`, count: 128 },

        { date: `2023-08-09`, count: 135 },

        { date: `2023-08-21`, count: 191 },

        { date: `2023-10-12`, count: 386 },

        { date: `2024-01-11`, count: 1303 },

        { date: `2024-07-24`, count: 308 },

        { date: `2024-08-15`, count: 292 },

        { date: `2024-09-12`, count: 146 },

        { date: `2024-09-19`, count: 206 },

        { date: `2024-09-26`, count: 1000 },

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