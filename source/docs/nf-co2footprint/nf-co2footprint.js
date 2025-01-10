
(async function() {
    const data = [

        { date: `2024-01-19`, count: 708 },

        { date: `2025-01-09`, count: 2 },

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