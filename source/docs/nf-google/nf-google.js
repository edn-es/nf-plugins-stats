
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 42,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 226,
            y: '1.0.1' },

        {
            date: `2021-02-16`,
            count: 194,
            y: '1.0.2' },

        {
            date: `2021-03-05`,
            count: 6001,
            y: '1.0.3' },

        {
            date: `2021-05-28`,
            count: 3664,
            y: '1.0.4' },

        {
            date: `2021-07-03`,
            count: 249,
            y: '1.1.0' },

        {
            date: `2021-10-12`,
            count: 189,
            y: '1.1.1' },

        {
            date: `2021-10-28`,
            count: 564,
            y: '1.1.2' },

        {
            date: `2021-11-22`,
            count: 15132,
            y: '1.1.3' },

        {
            date: `2021-12-22`,
            count: 2216,
            y: '1.1.4' },

        {
            date: `2022-05-25`,
            count: 365,
            y: '1.2.0' },

        {
            date: `2022-06-06`,
            count: 248,
            y: '1.2.1' },

        {
            date: `2022-07-13`,
            count: 206,
            y: '1.3.0' },

        {
            date: `2022-08-01`,
            count: 209,
            y: '1.4.0' },

        {
            date: `2022-08-11`,
            count: 228,
            y: '1.4.1' },

        {
            date: `2022-09-01`,
            count: 230,
            y: '1.4.2' },

        {
            date: `2022-09-19`,
            count: 195,
            y: '1.4.3' },

        {
            date: `2022-09-26`,
            count: 20656,
            y: '1.4.4' },

        {
            date: `2022-11-13`,
            count: 6365,
            y: '1.4.5' },

        {
            date: `2022-12-13`,
            count: 226,
            y: '1.5.0' },

        {
            date: `2023-01-14`,
            count: 169,
            y: '1.6.0' },

        {
            date: `2023-02-21`,
            count: 171,
            y: '1.7.0' },

        {
            date: `2023-03-19`,
            count: 148,
            y: '1.7.1' },

        {
            date: `2023-04-01`,
            count: 1384,
            y: '1.7.2' },

        {
            date: `2023-04-13`,
            count: 322,
            y: '1.4.6' },

        {
            date: `2023-04-15`,
            count: 4915,
            y: '1.7.3' },

        {
            date: `2023-05-15`,
            count: 244,
            y: '1.7.4' },

        {
            date: `2023-06-14`,
            count: 463,
            y: '1.8.0' },

        {
            date: `2023-07-22`,
            count: 9729,
            y: '1.8.1' },

        {
            date: `2023-09-25`,
            count: 600,
            y: '1.7.3-patch1' },

        {
            date: `2023-09-27`,
            count: 164,
            y: '1.8.2' },

        {
            date: `2023-10-10`,
            count: 9308,
            y: '1.8.3' },

        {
            date: `2023-11-24`,
            count: 326,
            y: '1.9.0' },

        {
            date: `2023-12-26`,
            count: 1984,
            y: '1.10.0' },

        {
            date: `2024-02-05`,
            count: 1817,
            y: '1.11.0' },

        {
            date: `2024-04-15`,
            count: 518,
            y: '1.12.0' },

        {
            date: `2024-05-13`,
            count: 239,
            y: '1.13.0' },

        {
            date: `2024-05-20`,
            count: 116,
            y: '1.13.1' },

        {
            date: `2024-05-20`,
            count: 11127,
            y: '1.13.2' },

        {
            date: `2024-05-28`,
            count: 133,
            y: '1.8.3-patch1' },

        {
            date: `2024-06-11`,
            count: 278,
            y: '1.8.3-patch2' },

        {
            date: `2024-06-17`,
            count: 429,
            y: '1.13.3' },

        {
            date: `2024-07-08`,
            count: 412,
            y: '1.13.4' },

        {
            date: `2024-07-09`,
            count: 2877,
            y: '1.13.2-patch1' },

        {
            date: `2024-08-05`,
            count: 706,
            y: '1.14.0' },

        {
            date: `2024-09-04`,
            count: 924,
            y: '1.15.0' },

        {
            date: `2024-10-13`,
            count: 80,
            y: '1.15.1' },

        {
            date: `2024-10-14`,
            count: 5882,
            y: '1.15.2' },

        {
            date: `2024-12-03`,
            count: 1291,
            y: '1.16.0' },

        {
            date: `2024-12-16`,
            count: 11508,
            y: '1.15.3' },

        {
            date: `2025-01-20`,
            count: 405,
            y: '1.17.0' },

    ];

    new Chart(
        document.getElementById('releases'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.y),
                datasets: [
                    {
                        label: 'Donwloads',
                        data: data,
                        parsing: {
                            xAxisKey: 'count'
                        }
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                plugins: {
                    tooltip:{
                        enabled: true,
                        callbacks: {
                            beforeLabel: function (tooltipData) {
                                const labels =
                                    tooltipData.dataset.label.toString();
                                const values =
                                    tooltipData.dataset.data[tooltipData.dataIndex];

                                return `Released (${values.date})`;
                            },
                            label: function (tooltipData) {
                                const labels =
                                    tooltipData.dataset.label.toString();
                                const values =
                                    tooltipData.dataset.data[tooltipData.dataIndex];

                                return `${labels} : ${values.count}`;
                            },
                        },
                    }                    
                }
            },
        }
    );
})();