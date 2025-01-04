
(async function() {
    const data = [

        { date: `2023-01-14`, count: 120 },

        { date: `2023-03-19`, count: 147 },

        { date: `2023-04-01`, count: 187 },

        { date: `2023-04-15`, count: 2331 },

        { date: `2023-05-15`, count: 2150 },

        { date: `2023-06-14`, count: 2147 },

        { date: `2023-06-19`, count: 104 },

        { date: `2023-06-19`, count: 288 },

        { date: `2023-07-22`, count: 159 },

        { date: `2023-08-05`, count: 152 },

        { date: `2023-08-17`, count: 287 },

        { date: `2023-09-10`, count: 194 },

        { date: `2023-09-27`, count: 3802 },

        { date: `2023-11-24`, count: 466 },

        { date: `2024-01-12`, count: 4005 },

        { date: `2024-02-05`, count: 540 },

        { date: `2024-03-10`, count: 858 },

        { date: `2024-04-15`, count: 9977 },

        { date: `2024-05-28`, count: 148 },

        { date: `2024-06-11`, count: 206 },

        { date: `2024-06-17`, count: 766 },

        { date: `2024-07-08`, count: 601 },

        { date: `2024-07-31`, count: 132 },

        { date: `2024-08-01`, count: 5164 },

        { date: `2024-08-05`, count: 767 },

        { date: `2024-09-04`, count: 288 },

        { date: `2024-10-02`, count: 204 },

        { date: `2024-10-27`, count: 380 },

        { date: `2024-11-18`, count: 320 },

        { date: `2024-12-03`, count: 72 },

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