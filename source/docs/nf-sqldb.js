
(async function() {
    const data = [

        { date: `2021-09-01`, count: 406 },

        { date: `2021-10-10`, count: 308 },

        { date: `2022-02-07`, count: 182 },

        { date: `2022-04-11`, count: 269 },

        { date: `2022-05-25`, count: 704 },

        { date: `2022-08-30`, count: 1857 },

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