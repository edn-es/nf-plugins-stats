
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 46,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 235,
            y: '1.0.1' },

        {
            date: `2021-02-16`,
            count: 203,
            y: '1.0.2' },

        {
            date: `2021-03-05`,
            count: 6010,
            y: '1.0.3' },

        {
            date: `2021-05-28`,
            count: 3774,
            y: '1.0.4' },

        {
            date: `2021-07-03`,
            count: 258,
            y: '1.1.0' },

        {
            date: `2021-10-12`,
            count: 198,
            y: '1.1.1' },

        {
            date: `2021-10-28`,
            count: 574,
            y: '1.1.2' },

        {
            date: `2021-11-22`,
            count: 15859,
            y: '1.1.3' },

        {
            date: `2021-12-22`,
            count: 2246,
            y: '1.1.4' },

        {
            date: `2022-05-25`,
            count: 374,
            y: '1.2.0' },

        {
            date: `2022-06-06`,
            count: 257,
            y: '1.2.1' },

        {
            date: `2022-07-13`,
            count: 215,
            y: '1.3.0' },

        {
            date: `2022-08-01`,
            count: 218,
            y: '1.4.0' },

        {
            date: `2022-08-11`,
            count: 237,
            y: '1.4.1' },

        {
            date: `2022-09-01`,
            count: 239,
            y: '1.4.2' },

        {
            date: `2022-09-19`,
            count: 204,
            y: '1.4.3' },

        {
            date: `2022-09-26`,
            count: 20666,
            y: '1.4.4' },

        {
            date: `2022-11-13`,
            count: 6378,
            y: '1.4.5' },

        {
            date: `2022-12-13`,
            count: 235,
            y: '1.5.0' },

        {
            date: `2023-01-14`,
            count: 171,
            y: '1.6.0' },

        {
            date: `2023-02-21`,
            count: 173,
            y: '1.7.0' },

        {
            date: `2023-03-19`,
            count: 150,
            y: '1.7.1' },

        {
            date: `2023-04-01`,
            count: 1584,
            y: '1.7.2' },

        {
            date: `2023-04-13`,
            count: 347,
            y: '1.4.6' },

        {
            date: `2023-04-15`,
            count: 4927,
            y: '1.7.3' },

        {
            date: `2023-05-15`,
            count: 246,
            y: '1.7.4' },

        {
            date: `2023-06-14`,
            count: 465,
            y: '1.8.0' },

        {
            date: `2023-07-22`,
            count: 11127,
            y: '1.8.1' },

        {
            date: `2023-09-25`,
            count: 602,
            y: '1.7.3-patch1' },

        {
            date: `2023-09-27`,
            count: 166,
            y: '1.8.2' },

        {
            date: `2023-10-10`,
            count: 9373,
            y: '1.8.3' },

        {
            date: `2023-11-24`,
            count: 331,
            y: '1.9.0' },

        {
            date: `2023-12-26`,
            count: 2345,
            y: '1.10.0' },

        {
            date: `2024-02-05`,
            count: 1996,
            y: '1.11.0' },

        {
            date: `2024-04-15`,
            count: 520,
            y: '1.12.0' },

        {
            date: `2024-05-13`,
            count: 241,
            y: '1.13.0' },

        {
            date: `2024-05-20`,
            count: 119,
            y: '1.13.1' },

        {
            date: `2024-05-20`,
            count: 13993,
            y: '1.13.2' },

        {
            date: `2024-05-28`,
            count: 135,
            y: '1.8.3-patch1' },

        {
            date: `2024-06-11`,
            count: 288,
            y: '1.8.3-patch2' },

        {
            date: `2024-06-17`,
            count: 555,
            y: '1.13.3' },

        {
            date: `2024-07-08`,
            count: 414,
            y: '1.13.4' },

        {
            date: `2024-07-09`,
            count: 3312,
            y: '1.13.2-patch1' },

        {
            date: `2024-08-05`,
            count: 708,
            y: '1.14.0' },

        {
            date: `2024-09-04`,
            count: 929,
            y: '1.15.0' },

        {
            date: `2024-10-13`,
            count: 82,
            y: '1.15.1' },

        {
            date: `2024-10-14`,
            count: 9915,
            y: '1.15.2' },

        {
            date: `2024-12-03`,
            count: 1575,
            y: '1.16.0' },

        {
            date: `2024-12-16`,
            count: 20156,
            y: '1.15.3' },

        {
            date: `2025-01-20`,
            count: 466,
            y: '1.17.0' },

        {
            date: `2025-02-12`,
            count: 1168,
            y: '1.18.0' },

        {
            date: `2025-03-04`,
            count: 684,
            y: '1.15.4' },

        {
            date: `2025-03-18`,
            count: 404,
            y: '1.19.0' },

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