
(async function() {
    const data = [

        { date: `2023-08-17`, count: 124 },

        { date: `2023-08-29`, count: 629 },

        { date: `2023-11-08`, count: 1448 },

        { date: `2023-11-22`, count: 36098 },

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