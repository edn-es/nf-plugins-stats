
(async function() {
    const data = [

        { date: `2023-05-15`, count: 634 },

        { date: `2023-06-14`, count: 998 },

        { date: `2023-07-22`, count: 179 },

        { date: `2023-08-05`, count: 975 },

        { date: `2023-08-17`, count: 2453 },

        { date: `2023-09-10`, count: 645 },

        { date: `2023-09-27`, count: 359 },

        { date: `2023-10-10`, count: 190 },

        { date: `2023-10-15`, count: 4863 },

        { date: `2023-11-24`, count: 1623 },

        { date: `2023-12-20`, count: 1798 },

        { date: `2024-01-12`, count: 14832 },

        { date: `2024-02-05`, count: 1145 },

        { date: `2024-03-10`, count: 157 },

        { date: `2024-04-15`, count: 779 },

        { date: `2024-05-13`, count: 220 },

        { date: `2024-05-20`, count: 4282 },

        { date: `2024-05-28`, count: 818 },

        { date: `2024-06-17`, count: 1379 },

        { date: `2024-07-08`, count: 452 },

        { date: `2024-08-01`, count: 5615 },

        { date: `2024-08-05`, count: 146 },

        { date: `2024-09-04`, count: 155 },

        { date: `2024-10-02`, count: 1217 },

        { date: `2024-10-13`, count: 77 },

        { date: `2024-10-14`, count: 184 },

        { date: `2024-10-27`, count: 1484 },

        { date: `2024-11-18`, count: 247 },

        { date: `2024-11-27`, count: 3257 },

        { date: `2024-12-03`, count: 208 },

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