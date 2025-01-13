
(async function() {
    const data = [

        {
            date: `2024-09-04`,
            count: 99,
            name: '1.0.0' },

        {
            date: `2024-09-04`,
            count: 120,
            name: '2.0.0' },

        {
            date: `2024-12-04`,
            count: 15,
            name: '1.0.1' },

        {
            date: `2024-12-04`,
            count: 17,
            name: '2.0.1' },

        {
            date: `2024-12-12`,
            count: 0,
            name: '1.0.2' },

        {
            date: `2024-12-12`,
            count: 0,
            name: '2.0.2' },

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