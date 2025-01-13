
(async function() {
    const data = [

        {
            date: `2024-04-22`,
            count: 11931,
            name: 'Kagoshima' },

        {
            date: `2024-07-04`,
            count: 1020,
            name: '2.0.1' },

        {
            date: `2024-08-20`,
            count: 7548,
            name: 'Tantanmen' },

        {
            date: `2024-09-19`,
            count: 58533,
            name: '2.1.1' },

        {
            date: `2024-10-18`,
            count: 6214,
            name: '2.1.2' },

        {
            date: `2024-10-30`,
            count: 5626,
            name: 'Kitakata' },

        {
            date: `2024-12-03`,
            count: 1409,
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