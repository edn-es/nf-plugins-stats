
(async function() {
    const data = [

        {
            date: `2023-08-17`,
            count: 130,
            name: '1.0.0' },

        {
            date: `2023-08-29`,
            count: 635,
            name: '1.1.0' },

        {
            date: `2023-11-08`,
            count: 1466,
            name: '1.1.1' },

        {
            date: `2023-11-22`,
            count: 36285,
            name: '1.1.2' },

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