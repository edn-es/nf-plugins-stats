
(async function() {
    const data = [

        { date: `2024-02-08`, count: 1 },

        { date: `2024-02-08`, count: 118 },

        { date: `2024-03-15`, count: 135 },

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