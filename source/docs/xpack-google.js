
(async function() {
    const data = [

        { date: `2021-07-08`, count: 153 },

        { date: `2023-01-14`, count: 41 },

        { date: `2023-04-09`, count: 51 },

        { date: `2023-08-09`, count: 93 },

        { date: `2023-12-26`, count: 18 },

        { date: `2024-02-05`, count: 161 },

        { date: `2024-05-14`, count: 109 },

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