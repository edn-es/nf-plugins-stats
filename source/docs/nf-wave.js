
(async function() {
    const data = [

        { date: `2023-05-15`, count: 630 },

        { date: `2023-06-14`, count: 993 },

        { date: `2023-07-22`, count: 175 },

        { date: `2023-08-05`, count: 971 },

        { date: `2023-08-17`, count: 2436 },

        { date: `2023-09-10`, count: 641 },

        { date: `2023-09-27`, count: 355 },

        { date: `2023-10-10`, count: 186 },

        { date: `2023-10-15`, count: 4853 },

        { date: `2023-11-24`, count: 1619 },

        { date: `2023-12-20`, count: 1794 },

        { date: `2024-01-12`, count: 14707 },

        { date: `2024-02-05`, count: 1141 },

        { date: `2024-03-10`, count: 153 },

        { date: `2024-04-15`, count: 768 },

        { date: `2024-05-13`, count: 216 },

        { date: `2024-05-20`, count: 4219 },

        { date: `2024-05-28`, count: 785 },

        { date: `2024-06-17`, count: 1375 },

        { date: `2024-07-08`, count: 448 },

        { date: `2024-08-01`, count: 5359 },

        { date: `2024-08-05`, count: 142 },

        { date: `2024-09-04`, count: 151 },

        { date: `2024-10-02`, count: 1185 },

        { date: `2024-10-13`, count: 73 },

        { date: `2024-10-14`, count: 179 },

        { date: `2024-10-27`, count: 1478 },

        { date: `2024-11-18`, count: 242 },

        { date: `2024-11-27`, count: 2599 },

        { date: `2024-12-03`, count: 155 },

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