
(async function() {
    const data = [

        { date: `2022-01-13`, count: 159 },

        { date: `2022-02-15`, count: 150 },

        { date: `2022-02-28`, count: 192 },

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