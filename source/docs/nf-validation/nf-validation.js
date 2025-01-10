
(async function() {
    const data = [

        { date: `2023-05-05`, count: 1326 },

        { date: `2023-06-06`, count: 216 },

        { date: `2023-06-06`, count: 9308 },

        { date: `2023-07-10`, count: 635 },

        { date: `2023-07-12`, count: 17184 },

        { date: `2023-09-19`, count: 10260 },

        { date: `2023-10-10`, count: 1308 },

        { date: `2023-10-10`, count: 60 },

        { date: `2023-10-12`, count: 2844 },

        { date: `2023-10-18`, count: 1859 },

        { date: `2023-10-23`, count: 13994 },

        { date: `2023-11-16`, count: 3202 },

        { date: `2023-11-21`, count: 320998 },

        { date: `2024-08-07`, count: 30617 },

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