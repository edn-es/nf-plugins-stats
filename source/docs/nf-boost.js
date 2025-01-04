
(async function() {
    const data = [

        { date: `2024-03-24`, count: 94 },

        { date: `2024-03-26`, count: 97 },

        { date: `2024-04-09`, count: 97 },

        { date: `2024-04-14`, count: 126 },

        { date: `2024-04-19`, count: 880 },

        { date: `2024-10-08`, count: 1636 },

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