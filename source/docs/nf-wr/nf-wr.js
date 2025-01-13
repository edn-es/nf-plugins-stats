
(async function() {
    const data = [

        {
            date: `2022-01-13`,
            count: 159,
            name: '1.2.0-rc.0' },

        {
            date: `2022-02-15`,
            count: 150,
            name: '1.2.0-rc.1' },

        {
            date: `2022-02-28`,
            count: 192,
            name: '1.2.0-rc.2' },

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