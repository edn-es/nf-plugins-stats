
(async function() {
    const data = [

        {
            date: `2024-04-22`,
            count: 11916,
            name: 'Kagoshima' },

        {
            date: `2024-07-04`,
            count: 1018,
            name: '2.0.1' },

        {
            date: `2024-08-20`,
            count: 7539,
            name: 'Tantanmen' },

        {
            date: `2024-09-19`,
            count: 58445,
            name: '2.1.1' },

        {
            date: `2024-10-18`,
            count: 6209,
            name: '2.1.2' },

        {
            date: `2024-10-30`,
            count: 5561,
            name: 'Kitakata' },

        {
            date: `2024-12-03`,
            count: 1380,
            name: '2.2.1' },

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