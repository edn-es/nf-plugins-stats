
(async function() {
    const data = [

        {
            date: `2023-02-21`,
            count: 1873,
            name: '1.15.0' },

        {
            date: `2023-03-19`,
            count: 965,
            name: '1.16.0' },

        {
            date: `2023-04-01`,
            count: 30705,
            name: '1.16.1' },

        {
            date: `2023-04-15`,
            count: 141500,
            name: '1.16.2' },

        {
            date: `2023-05-15`,
            count: 2052,
            name: '2.0.0' },

        {
            date: `2023-06-14`,
            count: 4024,
            name: '2.0.1' },

        {
            date: `2023-07-22`,
            count: 981,
            name: '2.1.0' },

        {
            date: `2023-08-05`,
            count: 8193,
            name: '2.1.1' },

        {
            date: `2023-09-10`,
            count: 2767,
            name: '2.1.2' },

        {
            date: `2023-09-27`,
            count: 2458,
            name: '2.1.3' },

        {
            date: `2023-10-10`,
            count: 104315,
            name: '2.1.4' },

        {
            date: `2023-11-24`,
            count: 3106,
            name: '2.2.0' },

        {
            date: `2023-12-26`,
            count: 3319,
            name: '2.3.0' },

        {
            date: `2024-02-05`,
            count: 8332,
            name: '2.4.0' },

        {
            date: `2024-03-10`,
            count: 6026,
            name: '2.4.1' },

        {
            date: `2024-04-15`,
            count: 5750,
            name: '2.4.2' },

        {
            date: `2024-05-13`,
            count: 709,
            name: '2.5.0' },

        {
            date: `2024-05-14`,
            count: 169,
            name: '2.5.1' },

        {
            date: `2024-05-20`,
            count: 51317,
            name: '2.5.2' },

        {
            date: `2024-05-28`,
            count: 147,
            name: '2.1.4-patch1' },

        {
            date: `2024-06-11`,
            count: 323,
            name: '2.1.4-patch2' },

        {
            date: `2024-06-17`,
            count: 6112,
            name: '2.6.0' },

        {
            date: `2024-07-30`,
            count: 1140,
            name: '2.1.4-patch3' },

        {
            date: `2024-08-01`,
            count: 22011,
            name: '2.5.3' },

        {
            date: `2024-08-05`,
            count: 9554,
            name: '2.7.0' },

        {
            date: `2024-09-04`,
            count: 2264,
            name: '2.8.0' },

        {
            date: `2024-10-02`,
            count: 8836,
            name: '2.9.0' },

        {
            date: `2024-11-18`,
            count: 1854,
            name: '2.9.1' },

        {
            date: `2024-11-27`,
            count: 5636,
            name: '2.9.2' },

        {
            date: `2024-12-03`,
            count: 1972,
            name: '2.10.0' },

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