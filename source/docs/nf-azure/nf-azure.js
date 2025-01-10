
(async function() {
    const data = [

        { date: `2023-01-14`, count: 125 },

        { date: `2023-03-19`, count: 152 },

        { date: `2023-04-01`, count: 192 },

        { date: `2023-04-15`, count: 2341 },

        { date: `2023-05-15`, count: 2155 },

        { date: `2023-06-14`, count: 2152 },

        { date: `2023-06-19`, count: 109 },

        { date: `2023-06-19`, count: 293 },

        { date: `2023-07-22`, count: 164 },

        { date: `2023-08-05`, count: 157 },

        { date: `2023-08-17`, count: 292 },

        { date: `2023-09-10`, count: 199 },

        { date: `2023-09-27`, count: 3846 },

        { date: `2023-11-24`, count: 471 },

        { date: `2024-01-12`, count: 4014 },

        { date: `2024-02-05`, count: 545 },

        { date: `2024-03-10`, count: 863 },

        { date: `2024-04-15`, count: 9985 },

        { date: `2024-05-28`, count: 153 },

        { date: `2024-06-11`, count: 211 },

        { date: `2024-06-17`, count: 771 },

        { date: `2024-07-08`, count: 609 },

        { date: `2024-07-31`, count: 137 },

        { date: `2024-08-01`, count: 5412 },

        { date: `2024-08-05`, count: 772 },

        { date: `2024-09-04`, count: 294 },

        { date: `2024-10-02`, count: 209 },

        { date: `2024-10-27`, count: 388 },

        { date: `2024-11-18`, count: 435 },

        { date: `2024-12-03`, count: 109 },

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