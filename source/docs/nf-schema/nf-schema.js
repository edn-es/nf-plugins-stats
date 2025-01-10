
(async function() {
    const data = [

        { date: `2024-04-22`, count: 11894 },

        { date: `2024-07-04`, count: 1000 },

        { date: `2024-08-20`, count: 7522 },

        { date: `2024-09-19`, count: 57761 },

        { date: `2024-10-18`, count: 6097 },

        { date: `2024-10-30`, count: 5527 },

        { date: `2024-12-03`, count: 1270 },

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