
(async function() {
    const data = [

        {
            date: `2022-12-13`,
            count: 220,
            name: '1.5.0' },

        {
            date: `2023-01-14`,
            count: 163,
            name: '1.6.0' },

        {
            date: `2023-02-21`,
            count: 165,
            name: '1.7.0' },

        {
            date: `2023-03-19`,
            count: 142,
            name: '1.7.1' },

        {
            date: `2023-04-01`,
            count: 1336,
            name: '1.7.2' },

        {
            date: `2023-04-15`,
            count: 4905,
            name: '1.7.3' },

        {
            date: `2023-05-15`,
            count: 238,
            name: '1.7.4' },

        {
            date: `2023-06-14`,
            count: 457,
            name: '1.8.0' },

        {
            date: `2023-07-22`,
            count: 8396,
            name: '1.8.1' },

        {
            date: `2023-09-25`,
            count: 591,
            name: '1.7.3-patch1' },

        {
            date: `2023-09-27`,
            count: 158,
            name: '1.8.2' },

        {
            date: `2023-10-10`,
            count: 9285,
            name: '1.8.3' },

        {
            date: `2023-11-24`,
            count: 320,
            name: '1.9.0' },

        {
            date: `2023-12-26`,
            count: 1726,
            name: '1.10.0' },

        {
            date: `2024-02-05`,
            count: 1697,
            name: '1.11.0' },

        {
            date: `2024-04-15`,
            count: 511,
            name: '1.12.0' },

        {
            date: `2024-05-13`,
            count: 233,
            name: '1.13.0' },

        {
            date: `2024-05-20`,
            count: 110,
            name: '1.13.1' },

        {
            date: `2024-05-20`,
            count: 8258,
            name: '1.13.2' },

        {
            date: `2024-05-28`,
            count: 127,
            name: '1.8.3-patch1' },

        {
            date: `2024-06-11`,
            count: 272,
            name: '1.8.3-patch2' },

        {
            date: `2024-06-17`,
            count: 395,
            name: '1.13.3' },

        {
            date: `2024-07-08`,
            count: 405,
            name: '1.13.4' },

        {
            date: `2024-07-09`,
            count: 2652,
            name: '1.13.2-patch1' },

        {
            date: `2024-08-05`,
            count: 700,
            name: '1.14.0' },

        {
            date: `2024-09-04`,
            count: 918,
            name: '1.15.0' },

        {
            date: `2024-10-13`,
            count: 74,
            name: '1.15.1' },

        {
            date: `2024-10-14`,
            count: 4095,
            name: '1.15.2' },

        {
            date: `2024-12-03`,
            count: 604,
            name: '1.16.0' },

        {
            date: `2024-12-16`,
            count: 3837,
            name: '1.15.3' },

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