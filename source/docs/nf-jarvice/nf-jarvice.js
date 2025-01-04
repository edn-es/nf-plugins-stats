
(async function() {
    const data = [

        { date: `2023-04-05`, count: 10 },

        { date: `2023-04-19`, count: 108 },

        { date: `2023-05-09`, count: 111 },

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