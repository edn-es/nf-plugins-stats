
(async function() {
    const data = [

        {
            date: `2023-07-22`,
            count: 132,
            name: '0.1.0' },

        {
            date: `2023-08-17`,
            count: 1602,
            name: '0.2.0' },

        {
            date: `2023-10-10`,
            count: 12585,
            name: '0.3.0' },

        {
            date: `2023-11-24`,
            count: 1408,
            name: '0.3.1' },

        {
            date: `2024-02-05`,
            count: 161,
            name: '0.4.0' },

        {
            date: `2024-03-10`,
            count: 13863,
            name: '0.4.1' },

        {
            date: `2024-05-28`,
            count: 905,
            name: '0.3.0-patch1' },

        {
            date: `2024-08-05`,
            count: 3083,
            name: '0.4.2' },

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