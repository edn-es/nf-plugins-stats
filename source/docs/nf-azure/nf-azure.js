
(async function() {
    const data = [

        {
            date: `2021-02-01`,
            count: 208,
            y: '0.9.0' },

        {
            date: `2021-02-05`,
            count: 218,
            y: '0.9.1' },

        {
            date: `2021-02-23`,
            count: 206,
            y: '0.9.2' },

        {
            date: `2021-02-23`,
            count: 229,
            y: '0.9.3' },

        {
            date: `2021-03-01`,
            count: 220,
            y: '0.9.4' },

        {
            date: `2021-03-05`,
            count: 213,
            y: '0.9.5' },

        {
            date: `2021-03-18`,
            count: 241,
            y: '0.9.6' },

        {
            date: `2021-04-08`,
            count: 485,
            y: '0.9.7' },

        {
            date: `2021-05-28`,
            count: 530,
            y: '0.9.8' },

        {
            date: `2021-07-03`,
            count: 1682,
            y: '0.10.0' },

        {
            date: `2021-10-12`,
            count: 391,
            y: '0.11.0' },

        {
            date: `2021-11-18`,
            count: 226,
            y: '0.11.1' },

        {
            date: `2021-11-22`,
            count: 1170,
            y: '0.11.2' },

        {
            date: `2022-02-07`,
            count: 9747,
            y: '0.12.0' },

        {
            date: `2022-03-27`,
            count: 282,
            y: '0.13.0' },

        {
            date: `2022-04-02`,
            count: 406,
            y: '0.13.1' },

        {
            date: `2022-05-15`,
            count: 3691,
            y: '0.13.2' },

        {
            date: `2022-07-13`,
            count: 209,
            y: '0.13.3' },

        {
            date: `2022-08-01`,
            count: 224,
            y: '0.13.4' },

        {
            date: `2022-09-01`,
            count: 206,
            y: '0.13.5' },

        {
            date: `2022-09-07`,
            count: 209,
            y: '0.14.0' },

        {
            date: `2022-09-10`,
            count: 211,
            y: '0.14.1' },

        {
            date: `2022-09-19`,
            count: 7443,
            y: '0.14.2' },

        {
            date: `2022-11-23`,
            count: 273,
            y: '0.15.0' },

        {
            date: `2023-01-14`,
            count: 134,
            y: '0.15.1' },

        {
            date: `2023-03-19`,
            count: 161,
            y: '0.16.0' },

        {
            date: `2023-04-01`,
            count: 201,
            y: '1.0.0' },

        {
            date: `2023-04-13`,
            count: 299,
            y: '0.14.3' },

        {
            date: `2023-04-15`,
            count: 3556,
            y: '1.0.1' },

        {
            date: `2023-05-15`,
            count: 2165,
            y: '1.1.0' },

        {
            date: `2023-06-14`,
            count: 2193,
            y: '1.1.1' },

        {
            date: `2023-06-19`,
            count: 118,
            y: '1.1.2' },

        {
            date: `2023-06-19`,
            count: 302,
            y: '1.1.3' },

        {
            date: `2023-07-22`,
            count: 173,
            y: '1.1.4' },

        {
            date: `2023-08-05`,
            count: 166,
            y: '1.2.0' },

        {
            date: `2023-08-17`,
            count: 301,
            y: '1.3.0' },

        {
            date: `2023-09-10`,
            count: 208,
            y: '1.3.1' },

        {
            date: `2023-09-27`,
            count: 4091,
            y: '1.3.2' },

        {
            date: `2023-11-24`,
            count: 480,
            y: '1.4.0' },

        {
            date: `2024-01-12`,
            count: 4110,
            y: '1.3.3' },

        {
            date: `2024-02-05`,
            count: 554,
            y: '1.5.0' },

        {
            date: `2024-03-10`,
            count: 872,
            y: '1.5.1' },

        {
            date: `2024-04-15`,
            count: 10417,
            y: '1.6.0' },

        {
            date: `2024-05-28`,
            count: 174,
            y: '1.3.3-patch1' },

        {
            date: `2024-06-11`,
            count: 220,
            y: '1.3.3-patch2' },

        {
            date: `2024-06-17`,
            count: 781,
            y: '1.7.0' },

        {
            date: `2024-07-08`,
            count: 1045,
            y: '1.8.0' },

        {
            date: `2024-07-31`,
            count: 147,
            y: '1.3.3-patch3' },

        {
            date: `2024-08-01`,
            count: 9321,
            y: '1.6.1' },

        {
            date: `2024-08-05`,
            count: 781,
            y: '1.8.1' },

        {
            date: `2024-09-04`,
            count: 304,
            y: '1.9.0' },

        {
            date: `2024-10-02`,
            count: 276,
            y: '1.10.0' },

        {
            date: `2024-10-27`,
            count: 444,
            y: '1.10.1' },

        {
            date: `2024-11-18`,
            count: 4163,
            y: '1.10.2' },

        {
            date: `2024-12-03`,
            count: 159,
            y: '1.11.0' },

        {
            date: `2025-01-20`,
            count: 75,
            y: '1.12.0' },

        {
            date: `2025-02-12`,
            count: 157,
            y: '1.13.0' },

        {
            date: `2025-03-18`,
            count: 6,
            y: '1.14.0' },

        {
            date: `2025-03-19`,
            count: 123,
            y: '1.14.1' },

        {
            date: `2025-04-23`,
            count: 100,
            y: '1.15.0' },

        {
            date: `2025-05-08`,
            count: 2,
            y: '1.16.0' },

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