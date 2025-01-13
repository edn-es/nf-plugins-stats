
(async function() {
    const data = [

        {
            date: `2023-05-18`,
            count: 0,
            name: '0.1.4' },

        {
            date: `2023-05-19`,
            count: 0,
            name: '0.1.5' },

        {
            date: `2023-05-21`,
            count: 0,
            name: '0.1.6' },

        {
            date: `2023-05-25`,
            count: 247,
            name: '0.1.7' },

        {
            date: `2023-07-17`,
            count: 238,
            name: '0.1.8' },

        {
            date: `2023-07-26`,
            count: 144,
            name: '0.2.0' },

        {
            date: `2023-08-09`,
            count: 151,
            name: '0.3.0' },

        {
            date: `2023-08-21`,
            count: 207,
            name: '0.3.1' },

        {
            date: `2023-10-12`,
            count: 402,
            name: '0.4.0' },

        {
            date: `2024-01-11`,
            count: 1319,
            name: '0.4.1' },

        {
            date: `2024-07-24`,
            count: 324,
            name: '0.4.2' },

        {
            date: `2024-08-15`,
            count: 308,
            name: '0.4.3' },

        {
            date: `2024-09-12`,
            count: 162,
            name: '0.4.4' },

        {
            date: `2024-09-19`,
            count: 222,
            name: '0.4.5' },

        {
            date: `2024-09-26`,
            count: 1029,
            name: '0.4.6' },

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