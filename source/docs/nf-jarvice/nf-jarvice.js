
(async function() {
    const data = [

        {
            date: `2023-04-05`,
            count: 10,
            name: '0.5.0' },

        {
            date: `2023-04-19`,
            count: 126,
            name: '0.6.0' },

        {
            date: `2023-05-09`,
            count: 129,
            name: '0.7.0' },

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