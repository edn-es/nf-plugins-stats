
(async function() {
    const data = [

        { date: `2021-07-25`, count: 303 },

        { date: `2022-05-03`, count: 204 },

        { date: `2022-08-30`, count: 306 },

        { date: `2024-03-06`, count: 163 },

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