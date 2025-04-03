
(async function() {
    const data = [

        {
            date: `2022-07-25`,
            count: 210,
            y: '0.2.0' },

        {
            date: `2022-08-01`,
            count: 208,
            y: '0.2.1' },

        {
            date: `2022-08-11`,
            count: 209,
            y: '0.3.0' },

        {
            date: `2022-08-16`,
            count: 223,
            y: '0.3.1' },

        {
            date: `2022-09-01`,
            count: 244,
            y: '0.4.0' },

        {
            date: `2022-09-07`,
            count: 302,
            y: '0.4.1' },

        {
            date: `2022-09-19`,
            count: 209,
            y: '0.4.2' },

        {
            date: `2022-09-21`,
            count: 210,
            y: '0.4.3' },

        {
            date: `2022-09-26`,
            count: 269,
            y: '0.4.4' },

        {
            date: `2022-09-29`,
            count: 263,
            y: '0.4.5' },

        {
            date: `2022-10-03`,
            count: 222,
            y: '0.5.0' },

        {
            date: `2022-10-07`,
            count: 224,
            y: '0.5.1' },

        {
            date: `2022-10-11`,
            count: 1944,
            y: '0.5.2' },

        {
            date: `2022-11-23`,
            count: 216,
            y: '0.6.0' },

        {
            date: `2022-11-29`,
            count: 237,
            y: '0.6.1' },

        {
            date: `2022-12-08`,
            count: 213,
            y: '0.6.2' },

        {
            date: `2022-12-13`,
            count: 313,
            y: '0.6.3' },

        {
            date: `2023-01-14`,
            count: 265,
            y: '0.7.0' },

        {
            date: `2023-01-23`,
            count: 1219,
            y: '0.5.3' },

        {
            date: `2023-02-18`,
            count: 615,
            y: '0.5.4' },

        {
            date: `2023-02-21`,
            count: 207,
            y: '0.7.1' },

        {
            date: `2023-02-26`,
            count: 158,
            y: '0.7.2' },

        {
            date: `2023-03-19`,
            count: 657,
            y: '0.8.0' },

        {
            date: `2023-04-01`,
            count: 262,
            y: '0.8.1' },

        {
            date: `2023-04-13`,
            count: 447,
            y: '0.5.5' },

        {
            date: `2023-04-15`,
            count: 1276,
            y: '0.8.2' },

        {
            date: `2023-05-15`,
            count: 642,
            y: '0.9.0' },

        {
            date: `2023-06-08`,
            count: 585,
            y: '0.8.3' },

        {
            date: `2023-06-14`,
            count: 1012,
            y: '0.10.0' },

        {
            date: `2023-07-22`,
            count: 187,
            y: '0.11.0' },

        {
            date: `2023-08-05`,
            count: 986,
            y: '0.11.1' },

        {
            date: `2023-08-11`,
            count: 3875,
            y: '0.8.4' },

        {
            date: `2023-08-17`,
            count: 2713,
            y: '0.11.2' },

        {
            date: `2023-09-10`,
            count: 671,
            y: '0.12.0' },

        {
            date: `2023-09-27`,
            count: 367,
            y: '0.13.0' },

        {
            date: `2023-10-10`,
            count: 198,
            y: '0.14.0' },

        {
            date: `2023-10-15`,
            count: 5192,
            y: '1.0.0' },

        {
            date: `2023-11-24`,
            count: 1715,
            y: '1.1.0' },

        {
            date: `2023-12-20`,
            count: 1835,
            y: '1.2.0' },

        {
            date: `2024-01-12`,
            count: 17019,
            y: '1.0.1' },

        {
            date: `2024-02-05`,
            count: 1156,
            y: '1.3.0' },

        {
            date: `2024-03-10`,
            count: 167,
            y: '1.3.1' },

        {
            date: `2024-04-15`,
            count: 915,
            y: '1.4.0' },

        {
            date: `2024-05-13`,
            count: 228,
            y: '1.4.1' },

        {
            date: `2024-05-20`,
            count: 4922,
            y: '1.4.2' },

        {
            date: `2024-05-28`,
            count: 998,
            y: '1.0.1-patch1' },

        {
            date: `2024-06-17`,
            count: 1691,
            y: '1.4.3' },

        {
            date: `2024-07-08`,
            count: 460,
            y: '1.4.4' },

        {
            date: `2024-08-01`,
            count: 9041,
            y: '1.4.2-patch1' },

        {
            date: `2024-08-05`,
            count: 154,
            y: '1.5.0' },

        {
            date: `2024-09-04`,
            count: 166,
            y: '1.5.1' },

        {
            date: `2024-10-02`,
            count: 1676,
            y: '1.6.0' },

        {
            date: `2024-10-13`,
            count: 85,
            y: '1.7.0' },

        {
            date: `2024-10-14`,
            count: 192,
            y: '1.7.1' },

        {
            date: `2024-10-27`,
            count: 2653,
            y: '1.7.2' },

        {
            date: `2024-11-18`,
            count: 262,
            y: '1.7.3' },

        {
            date: `2024-11-27`,
            count: 10514,
            y: '1.7.4' },

        {
            date: `2024-12-03`,
            count: 1000,
            y: '1.8.0' },

        {
            date: `2025-01-20`,
            count: 14,
            y: '1.9.0' },

        {
            date: `2025-02-12`,
            count: 242,
            y: '1.10.0' },

        {
            date: `2025-03-18`,
            count: 16,
            y: '1.11.0' },

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