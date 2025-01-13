
(async function() {
    const data = [

        {
            date: `2022-08-01`,
            count: 347,
            name: '1.5.0' },

        {
            date: `2022-08-11`,
            count: 487,
            name: '1.5.1' },

        {
            date: `2022-09-01`,
            count: 264,
            name: '1.5.2' },

        {
            date: `2022-09-19`,
            count: 62,
            name: '1.5.3' },

        {
            date: `2022-09-20`,
            count: 576,
            name: '1.5.4' },

        {
            date: `2022-10-03`,
            count: 9009,
            name: '1.5.5' },

        {
            date: `2022-11-13`,
            count: 10409,
            name: '1.5.6' },

        {
            date: `2022-11-29`,
            count: 53,
            name: '1.5.7' },

        {
            date: `2022-12-13`,
            count: 402,
            name: '1.5.8' },

        {
            date: `2023-01-14`,
            count: 98,
            name: '1.5.9' },

        {
            date: `2023-02-21`,
            count: 738,
            name: '1.5.10' },

        {
            date: `2023-04-01`,
            count: 702,
            name: '1.5.11' },

        {
            date: `2023-04-13`,
            count: 4,
            name: '1.5.6.1' },

        {
            date: `2023-04-13`,
            count: 682,
            name: '1.5.7-patch0' },

        {
            date: `2023-04-15`,
            count: 11738,
            name: '1.5.12' },

        {
            date: `2023-05-15`,
            count: 802,
            name: '1.5.13' },

        {
            date: `2023-06-14`,
            count: 1461,
            name: '1.5.14' },

        {
            date: `2023-07-22`,
            count: 146,
            name: '1.5.15' },

        {
            date: `2023-08-05`,
            count: 903,
            name: '1.6.0' },

        {
            date: `2023-08-17`,
            count: 4402,
            name: '1.6.1' },

        {
            date: `2023-09-27`,
            count: 327,
            name: '1.6.2' },

        {
            date: `2023-10-10`,
            count: 20140,
            name: '1.6.3' },

        {
            date: `2023-11-24`,
            count: 3834,
            name: '1.7.0' },

        {
            date: `2024-02-05`,
            count: 3450,
            name: '1.8.0' },

        {
            date: `2024-03-10`,
            count: 837,
            name: '1.8.1' },

        {
            date: `2024-04-15`,
            count: 1388,
            name: '1.9.0' },

        {
            date: `2024-05-13`,
            count: 15724,
            name: '1.9.1' },

        {
            date: `2024-05-28`,
            count: 775,
            name: '1.6.3-patch1' },

        {
            date: `2024-08-05`,
            count: 3032,
            name: '1.9.2' },

        {
            date: `2024-10-27`,
            count: 4345,
            name: '1.9.3' },

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