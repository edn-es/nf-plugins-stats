
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 19,
            name: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 32,
            name: '1.0.1' },

        {
            date: `2021-03-05`,
            count: 26,
            name: '1.0.2' },

        {
            date: `2021-05-28`,
            count: 113,
            name: '1.0.3' },

        {
            date: `2022-09-19`,
            count: 131,
            name: '1.0.4' },

        {
            date: `2023-04-13`,
            count: 300,
            name: '1.0.5' },

        {
            date: `2023-05-15`,
            count: 123,
            name: '1.0.6' },

        {
            date: `2023-07-22`,
            count: 109,
            name: '1.1.0' },

        {
            date: `2023-11-24`,
            count: 30,
            name: '1.1.1' },

        {
            date: `2024-02-05`,
            count: 18,
            name: '1.2.0' },

        {
            date: `2024-05-13`,
            count: 403,
            name: '1.3.0' },

        {
            date: `2024-05-28`,
            count: 24,
            name: '1.1.0-patch1' },

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