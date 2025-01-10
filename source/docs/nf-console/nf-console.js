
(async function() {
    const data = [

        { date: `2021-01-04`, count: 22 },

        { date: `2021-01-15`, count: 52 },

        { date: `2021-03-05`, count: 631 },

        { date: `2021-05-28`, count: 1428 },

        { date: `2022-09-19`, count: 795 },

        { date: `2023-01-14`, count: 861 },

        { date: `2023-05-15`, count: 761 },

        { date: `2023-11-24`, count: 22 },

        { date: `2024-02-05`, count: 22 },

        { date: `2024-03-10`, count: 38 },

        { date: `2024-05-13`, count: 18 },

        { date: `2024-05-20`, count: 480 },

        { date: `2024-05-28`, count: 16 },

        { date: `2024-08-05`, count: 196 },

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