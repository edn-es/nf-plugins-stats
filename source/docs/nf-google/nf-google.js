
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 64,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 251,
            y: '1.0.1' },

        {
            date: `2021-02-16`,
            count: 219,
            y: '1.0.2' },

        {
            date: `2021-03-05`,
            count: 6026,
            y: '1.0.3' },

        {
            date: `2021-05-28`,
            count: 3875,
            y: '1.0.4' },

        {
            date: `2021-07-03`,
            count: 274,
            y: '1.1.0' },

        {
            date: `2021-10-12`,
            count: 214,
            y: '1.1.1' },

        {
            date: `2021-10-28`,
            count: 591,
            y: '1.1.2' },

        {
            date: `2021-11-22`,
            count: 16299,
            y: '1.1.3' },

        {
            date: `2021-12-22`,
            count: 2279,
            y: '1.1.4' },

        {
            date: `2022-05-25`,
            count: 392,
            y: '1.2.0' },

        {
            date: `2022-06-06`,
            count: 276,
            y: '1.2.1' },

        {
            date: `2022-07-13`,
            count: 232,
            y: '1.3.0' },

        {
            date: `2022-08-01`,
            count: 234,
            y: '1.4.0' },

        {
            date: `2022-08-11`,
            count: 253,
            y: '1.4.1' },

        {
            date: `2022-09-01`,
            count: 255,
            y: '1.4.2' },

        {
            date: `2022-09-19`,
            count: 220,
            y: '1.4.3' },

        {
            date: `2022-09-26`,
            count: 20684,
            y: '1.4.4' },

        {
            date: `2022-11-13`,
            count: 6394,
            y: '1.4.5' },

        {
            date: `2022-12-13`,
            count: 251,
            y: '1.5.0' },

        {
            date: `2023-01-14`,
            count: 177,
            y: '1.6.0' },

        {
            date: `2023-02-21`,
            count: 179,
            y: '1.7.0' },

        {
            date: `2023-03-19`,
            count: 156,
            y: '1.7.1' },

        {
            date: `2023-04-01`,
            count: 1645,
            y: '1.7.2' },

        {
            date: `2023-04-13`,
            count: 371,
            y: '1.4.6' },

        {
            date: `2023-04-15`,
            count: 4942,
            y: '1.7.3' },

        {
            date: `2023-05-15`,
            count: 252,
            y: '1.7.4' },

        {
            date: `2023-06-14`,
            count: 471,
            y: '1.8.0' },

        {
            date: `2023-07-22`,
            count: 14384,
            y: '1.8.1' },

        {
            date: `2023-09-25`,
            count: 608,
            y: '1.7.3-patch1' },

        {
            date: `2023-09-27`,
            count: 172,
            y: '1.8.2' },

        {
            date: `2023-10-10`,
            count: 9446,
            y: '1.8.3' },

        {
            date: `2023-11-24`,
            count: 337,
            y: '1.9.0' },

        {
            date: `2023-12-26`,
            count: 2621,
            y: '1.10.0' },

        {
            date: `2024-02-05`,
            count: 2121,
            y: '1.11.0' },

        {
            date: `2024-04-15`,
            count: 526,
            y: '1.12.0' },

        {
            date: `2024-05-13`,
            count: 247,
            y: '1.13.0' },

        {
            date: `2024-05-20`,
            count: 125,
            y: '1.13.1' },

        {
            date: `2024-05-20`,
            count: 21703,
            y: '1.13.2' },

        {
            date: `2024-05-28`,
            count: 141,
            y: '1.8.3-patch1' },

        {
            date: `2024-06-11`,
            count: 295,
            y: '1.8.3-patch2' },

        {
            date: `2024-06-17`,
            count: 653,
            y: '1.13.3' },

        {
            date: `2024-07-08`,
            count: 420,
            y: '1.13.4' },

        {
            date: `2024-07-09`,
            count: 3661,
            y: '1.13.2-patch1' },

        {
            date: `2024-08-05`,
            count: 714,
            y: '1.14.0' },

        {
            date: `2024-09-04`,
            count: 938,
            y: '1.15.0' },

        {
            date: `2024-10-13`,
            count: 88,
            y: '1.15.1' },

        {
            date: `2024-10-14`,
            count: 11180,
            y: '1.15.2' },

        {
            date: `2024-12-03`,
            count: 1762,
            y: '1.16.0' },

        {
            date: `2024-12-16`,
            count: 26720,
            y: '1.15.3' },

        {
            date: `2025-01-20`,
            count: 471,
            y: '1.17.0' },

        {
            date: `2025-02-12`,
            count: 1190,
            y: '1.18.0' },

        {
            date: `2025-03-04`,
            count: 9849,
            y: '1.15.4' },

        {
            date: `2025-03-18`,
            count: 978,
            y: '1.19.0' },

        {
            date: `2025-04-23`,
            count: 348,
            y: '1.20.0' },

        {
            date: `2025-05-08`,
            count: 736,
            y: '1.21.0' },

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