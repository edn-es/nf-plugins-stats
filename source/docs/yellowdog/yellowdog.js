
(async function() {
    const data = [

        {
            date: `2024-02-08`,
            count: 1,
            name: '0.1.0' },

        {
            date: `2024-02-08`,
            count: 122,
            name: '1.0.0' },

        {
            date: `2024-03-15`,
            count: 139,
            name: '1.0.1' },

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