
(async function() {
    const data = [

        { date: `2023-05-18`, count: 0 },

        { date: `2023-05-19`, count: 0 },

        { date: `2023-05-21`, count: 0 },

        { date: `2023-05-25`, count: 243 },

        { date: `2023-07-17`, count: 234 },

        { date: `2023-07-26`, count: 140 },

        { date: `2023-08-09`, count: 147 },

        { date: `2023-08-21`, count: 203 },

        { date: `2023-10-12`, count: 398 },

        { date: `2024-01-11`, count: 1315 },

        { date: `2024-07-24`, count: 320 },

        { date: `2024-08-15`, count: 304 },

        { date: `2024-09-12`, count: 158 },

        { date: `2024-09-19`, count: 218 },

        { date: `2024-09-26`, count: 1015 },

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