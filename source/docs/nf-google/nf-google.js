
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 42,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 225,
            y: '1.0.1' },

        {
            date: `2021-02-16`,
            count: 193,
            y: '1.0.2' },

        {
            date: `2021-03-05`,
            count: 6000,
            y: '1.0.3' },

        {
            date: `2021-05-28`,
            count: 3630,
            y: '1.0.4' },

        {
            date: `2021-07-03`,
            count: 248,
            y: '1.1.0' },

        {
            date: `2021-10-12`,
            count: 188,
            y: '1.1.1' },

        {
            date: `2021-10-28`,
            count: 563,
            y: '1.1.2' },

        {
            date: `2021-11-22`,
            count: 15058,
            y: '1.1.3' },

        {
            date: `2021-12-22`,
            count: 2214,
            y: '1.1.4' },

        {
            date: `2022-05-25`,
            count: 364,
            y: '1.2.0' },

        {
            date: `2022-06-06`,
            count: 247,
            y: '1.2.1' },

        {
            date: `2022-07-13`,
            count: 205,
            y: '1.3.0' },

        {
            date: `2022-08-01`,
            count: 208,
            y: '1.4.0' },

        {
            date: `2022-08-11`,
            count: 227,
            y: '1.4.1' },

        {
            date: `2022-09-01`,
            count: 229,
            y: '1.4.2' },

        {
            date: `2022-09-19`,
            count: 194,
            y: '1.4.3' },

        {
            date: `2022-09-26`,
            count: 20655,
            y: '1.4.4' },

        {
            date: `2022-11-13`,
            count: 6364,
            y: '1.4.5' },

        {
            date: `2022-12-13`,
            count: 225,
            y: '1.5.0' },

        {
            date: `2023-01-14`,
            count: 168,
            y: '1.6.0' },

        {
            date: `2023-02-21`,
            count: 170,
            y: '1.7.0' },

        {
            date: `2023-03-19`,
            count: 147,
            y: '1.7.1' },

        {
            date: `2023-04-01`,
            count: 1379,
            y: '1.7.2' },

        {
            date: `2023-04-13`,
            count: 318,
            y: '1.4.6' },

        {
            date: `2023-04-15`,
            count: 4914,
            y: '1.7.3' },

        {
            date: `2023-05-15`,
            count: 243,
            y: '1.7.4' },

        {
            date: `2023-06-14`,
            count: 462,
            y: '1.8.0' },

        {
            date: `2023-07-22`,
            count: 9593,
            y: '1.8.1' },

        {
            date: `2023-09-25`,
            count: 596,
            y: '1.7.3-patch1' },

        {
            date: `2023-09-27`,
            count: 163,
            y: '1.8.2' },

        {
            date: `2023-10-10`,
            count: 9300,
            y: '1.8.3' },

        {
            date: `2023-11-24`,
            count: 325,
            y: '1.9.0' },

        {
            date: `2023-12-26`,
            count: 1906,
            y: '1.10.0' },

        {
            date: `2024-02-05`,
            count: 1761,
            y: '1.11.0' },

        {
            date: `2024-04-15`,
            count: 517,
            y: '1.12.0' },

        {
            date: `2024-05-13`,
            count: 238,
            y: '1.13.0' },

        {
            date: `2024-05-20`,
            count: 115,
            y: '1.13.1' },

        {
            date: `2024-05-20`,
            count: 10062,
            y: '1.13.2' },

        {
            date: `2024-05-28`,
            count: 132,
            y: '1.8.3-patch1' },

        {
            date: `2024-06-11`,
            count: 277,
            y: '1.8.3-patch2' },

        {
            date: `2024-06-17`,
            count: 413,
            y: '1.13.3' },

        {
            date: `2024-07-08`,
            count: 410,
            y: '1.13.4' },

        {
            date: `2024-07-09`,
            count: 2781,
            y: '1.13.2-patch1' },

        {
            date: `2024-08-05`,
            count: 705,
            y: '1.14.0' },

        {
            date: `2024-09-04`,
            count: 923,
            y: '1.15.0' },

        {
            date: `2024-10-13`,
            count: 79,
            y: '1.15.1' },

        {
            date: `2024-10-14`,
            count: 5127,
            y: '1.15.2' },

        {
            date: `2024-12-03`,
            count: 1260,
            y: '1.16.0' },

        {
            date: `2024-12-16`,
            count: 8195,
            y: '1.15.3' },

        {
            date: `2025-01-20`,
            count: 147,
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