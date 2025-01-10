
(async function() {
    const data = [

        { date: `2023-03-20`, count: 184 },

        { date: `2023-06-09`, count: 172 },

        { date: `2023-07-25`, count: 250 },

        { date: `2023-10-02`, count: 127 },

        { date: `2023-11-02`, count: 144 },

        { date: `2024-07-22`, count: 166 },

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