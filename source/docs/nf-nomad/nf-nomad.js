
(async function() {
    const data = [

        { date: `2024-02-20`, count: 28 },

        { date: `2024-03-08`, count: 10 },

        { date: `2024-06-26`, count: 100 },

        { date: `2024-07-02`, count: 106 },

        { date: `2024-07-08`, count: 5 },

        { date: `2024-07-09`, count: 2 },

        { date: `2024-07-16`, count: 3 },

        { date: `2024-07-29`, count: 100 },

        { date: `2024-07-29`, count: 1 },

        { date: `2024-08-28`, count: 2 },

        { date: `2024-08-28`, count: 1 },

        { date: `2024-08-28`, count: 106 },

        { date: `2024-09-18`, count: 0 },

        { date: `2024-09-18`, count: 0 },

        { date: `2024-09-20`, count: 80 },

        { date: `2024-09-23`, count: 1 },

        { date: `2024-11-18`, count: 0 },

        { date: `2024-12-08`, count: 12 },

        { date: `2024-12-10`, count: 1 },

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