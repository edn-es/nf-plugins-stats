
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 25,
            name: '1.2.0' },

        {
            date: `2021-01-15`,
            count: 196,
            name: '1.2.1' },

        {
            date: `2021-03-05`,
            count: 237,
            name: '1.2.2' },

        {
            date: `2021-05-28`,
            count: 988,
            name: '1.2.3' },

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