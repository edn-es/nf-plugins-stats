
(async function() {
    const data = [

        {
            date: `2021-01-05`,
            count: 38,
            name: '1.0.0-rc0' },

        {
            date: `2021-01-15`,
            count: 7,
            name: '1.0.0-rc1' },

        {
            date: `2021-01-15`,
            count: 37,
            name: '1.0.0' },

        {
            date: `2021-03-09`,
            count: 4413,
            name: '1.0.1' },

        {
            date: `2021-07-30`,
            count: 2408,
            name: '1.1.0' },

        {
            date: `2022-01-22`,
            count: 51,
            name: '1.2.0-rc.0' },

        {
            date: `2022-02-12`,
            count: 1028,
            name: '1.2.0-rc.1' },

        {
            date: `2022-03-17`,
            count: 146,
            name: '1.2.0-rc.2' },

        {
            date: `2022-03-19`,
            count: 358,
            name: '1.2.0-rc.3' },

        {
            date: `2022-03-26`,
            count: 594,
            name: '1.2.0-rc.4' },

        {
            date: `2022-05-06`,
            count: 3585,
            name: '1.2.0-rc.5' },

        {
            date: `2022-07-25`,
            count: 28993,
            name: '1.2.0' },

        {
            date: `2023-01-14`,
            count: 2220,
            name: '1.2.1' },

        {
            date: `2023-05-19`,
            count: 1135,
            name: '1.3.0' },

        {
            date: `2023-08-09`,
            count: 6423,
            name: '1.3.1' },

        {
            date: `2023-12-26`,
            count: 505,
            name: '1.4.0' },

        {
            date: `2024-02-05`,
            count: 190,
            name: '1.5.0' },

        {
            date: `2024-05-14`,
            count: 4369,
            name: '1.6.0' },

        {
            date: `2024-07-30`,
            count: 30330,
            name: '1.3.2' },

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