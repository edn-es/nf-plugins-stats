
(async function() {
    const data = [

        { date: `2021-01-04`, count: 25 },

        { date: `2021-01-15`, count: 196 },

        { date: `2021-03-05`, count: 237 },

        { date: `2021-05-28`, count: 988 },

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