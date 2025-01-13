
(async function() {
    const data = [

        {
            date: `2024-03-19`,
            count: 112,
            name: '0.1.0' },

        {
            date: `2024-03-20`,
            count: 1,
            name: '0.2.0' },

        {
            date: `2024-04-05`,
            count: 111,
            name: '0.3.0' },

        {
            date: `2024-04-15`,
            count: 239,
            name: '0.4.0' },

    ];

    new Chart(
        document.getElementById('releases'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.name),
                datasets: [
                    {
                        label: 'Donwloads',
                        data: data.map(row => row.count)
                    }
                ]
            },
            options: {
                indexAxis: 'y'
            },
        }
    );
})();