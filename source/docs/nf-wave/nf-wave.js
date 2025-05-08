
(async function() {
    const data = [

        {
            date: `2022-07-25`,
            count: 218,
            y: '0.2.0' },

        {
            date: `2022-08-01`,
            count: 216,
            y: '0.2.1' },

        {
            date: `2022-08-11`,
            count: 217,
            y: '0.3.0' },

        {
            date: `2022-08-16`,
            count: 231,
            y: '0.3.1' },

        {
            date: `2022-09-01`,
            count: 252,
            y: '0.4.0' },

        {
            date: `2022-09-07`,
            count: 310,
            y: '0.4.1' },

        {
            date: `2022-09-19`,
            count: 217,
            y: '0.4.2' },

        {
            date: `2022-09-21`,
            count: 218,
            y: '0.4.3' },

        {
            date: `2022-09-26`,
            count: 277,
            y: '0.4.4' },

        {
            date: `2022-09-29`,
            count: 271,
            y: '0.4.5' },

        {
            date: `2022-10-03`,
            count: 230,
            y: '0.5.0' },

        {
            date: `2022-10-07`,
            count: 232,
            y: '0.5.1' },

        {
            date: `2022-10-11`,
            count: 1962,
            y: '0.5.2' },

        {
            date: `2022-11-23`,
            count: 224,
            y: '0.6.0' },

        {
            date: `2022-11-29`,
            count: 245,
            y: '0.6.1' },

        {
            date: `2022-12-08`,
            count: 221,
            y: '0.6.2' },

        {
            date: `2022-12-13`,
            count: 321,
            y: '0.6.3' },

        {
            date: `2023-01-14`,
            count: 266,
            y: '0.7.0' },

        {
            date: `2023-01-23`,
            count: 1239,
            y: '0.5.3' },

        {
            date: `2023-02-18`,
            count: 623,
            y: '0.5.4' },

        {
            date: `2023-02-21`,
            count: 208,
            y: '0.7.1' },

        {
            date: `2023-02-26`,
            count: 159,
            y: '0.7.2' },

        {
            date: `2023-03-19`,
            count: 658,
            y: '0.8.0' },

        {
            date: `2023-04-01`,
            count: 263,
            y: '0.8.1' },

        {
            date: `2023-04-13`,
            count: 458,
            y: '0.5.5' },

        {
            date: `2023-04-15`,
            count: 1283,
            y: '0.8.2' },

        {
            date: `2023-05-15`,
            count: 643,
            y: '0.9.0' },

        {
            date: `2023-06-08`,
            count: 588,
            y: '0.8.3' },

        {
            date: `2023-06-14`,
            count: 1013,
            y: '0.10.0' },

        {
            date: `2023-07-22`,
            count: 188,
            y: '0.11.0' },

        {
            date: `2023-08-05`,
            count: 987,
            y: '0.11.1' },

        {
            date: `2023-08-11`,
            count: 3882,
            y: '0.8.4' },

        {
            date: `2023-08-17`,
            count: 2804,
            y: '0.11.2' },

        {
            date: `2023-09-10`,
            count: 673,
            y: '0.12.0' },

        {
            date: `2023-09-27`,
            count: 368,
            y: '0.13.0' },

        {
            date: `2023-10-10`,
            count: 199,
            y: '0.14.0' },

        {
            date: `2023-10-15`,
            count: 5392,
            y: '1.0.0' },

        {
            date: `2023-11-24`,
            count: 1735,
            y: '1.1.0' },

        {
            date: `2023-12-20`,
            count: 1841,
            y: '1.2.0' },

        {
            date: `2024-01-12`,
            count: 17776,
            y: '1.0.1' },

        {
            date: `2024-02-05`,
            count: 1158,
            y: '1.3.0' },

        {
            date: `2024-03-10`,
            count: 168,
            y: '1.3.1' },

        {
            date: `2024-04-15`,
            count: 921,
            y: '1.4.0' },

        {
            date: `2024-05-13`,
            count: 230,
            y: '1.4.1' },

        {
            date: `2024-05-20`,
            count: 5082,
            y: '1.4.2' },

        {
            date: `2024-05-28`,
            count: 1056,
            y: '1.0.1-patch1' },

        {
            date: `2024-06-17`,
            count: 1809,
            y: '1.4.3' },

        {
            date: `2024-07-08`,
            count: 461,
            y: '1.4.4' },

        {
            date: `2024-08-01`,
            count: 9835,
            y: '1.4.2-patch1' },

        {
            date: `2024-08-05`,
            count: 155,
            y: '1.5.0' },

        {
            date: `2024-09-04`,
            count: 168,
            y: '1.5.1' },

        {
            date: `2024-10-02`,
            count: 1840,
            y: '1.6.0' },

        {
            date: `2024-10-13`,
            count: 86,
            y: '1.7.0' },

        {
            date: `2024-10-14`,
            count: 193,
            y: '1.7.1' },

        {
            date: `2024-10-27`,
            count: 2689,
            y: '1.7.2' },

        {
            date: `2024-11-18`,
            count: 263,
            y: '1.7.3' },

        {
            date: `2024-11-27`,
            count: 11867,
            y: '1.7.4' },

        {
            date: `2024-12-03`,
            count: 1164,
            y: '1.8.0' },

        {
            date: `2025-01-20`,
            count: 15,
            y: '1.9.0' },

        {
            date: `2025-02-12`,
            count: 259,
            y: '1.10.0' },

        {
            date: `2025-03-18`,
            count: 17,
            y: '1.11.0' },

        {
            date: `2025-04-05`,
            count: 15,
            y: '1.11.1' },

        {
            date: `2025-04-23`,
            count: 28,
            y: '1.12.0' },

        {
            date: `2025-04-23`,
            count: 450,
            y: '1.7.5' },

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