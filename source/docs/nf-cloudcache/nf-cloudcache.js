
(async function() {
    const data = [

        { date: `2023-07-22`, count: 126 },

        { date: `2023-08-17`, count: 1594 },

        { date: `2023-10-10`, count: 12513 },

        { date: `2023-11-24`, count: 1402 },

        { date: `2024-02-05`, count: 155 },

        { date: `2024-03-10`, count: 13761 },

        { date: `2024-05-28`, count: 898 },

        { date: `2024-08-05`, count: 3032 },

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