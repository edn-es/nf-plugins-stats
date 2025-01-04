
(async function() {
    const data = [

        { date: `2024-04-22`, count: 11798 },

        { date: `2024-07-04`, count: 971 },

        { date: `2024-08-20`, count: 7361 },

        { date: `2024-09-19`, count: 55064 },

        { date: `2024-10-18`, count: 5809 },

        { date: `2024-10-30`, count: 5033 },

        { date: `2024-12-03`, count: 806 },

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