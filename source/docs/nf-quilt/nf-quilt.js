
(async function() {
    const data = [

        {
            date: `2022-08-12`,
            count: 145,
            name: '0.1.0' },

        {
            date: `2022-08-23`,
            count: 175,
            name: '0.2.0' },

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