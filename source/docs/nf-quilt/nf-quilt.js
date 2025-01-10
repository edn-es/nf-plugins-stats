
(async function() {
    const data = [

        { date: `2022-08-12`, count: 145 },

        { date: `2022-08-23`, count: 175 },

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