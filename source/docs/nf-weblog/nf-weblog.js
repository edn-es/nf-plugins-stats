
(async function() {
    const data = [

        { date: `2023-08-17`, count: 112 },

        { date: `2023-08-29`, count: 617 },

        { date: `2023-11-08`, count: 1435 },

        { date: `2023-11-22`, count: 35506 },

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