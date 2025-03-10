
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 45,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 227,
            y: '1.0.1' },

        {
            date: `2021-02-16`,
            count: 195,
            y: '1.0.2' },

        {
            date: `2021-03-05`,
            count: 6002,
            y: '1.0.3' },

        {
            date: `2021-05-28`,
            count: 3723,
            y: '1.0.4' },

        {
            date: `2021-07-03`,
            count: 250,
            y: '1.1.0' },

        {
            date: `2021-10-12`,
            count: 190,
            y: '1.1.1' },

        {
            date: `2021-10-28`,
            count: 565,
            y: '1.1.2' },

        {
            date: `2021-11-22`,
            count: 15582,
            y: '1.1.3' },

        {
            date: `2021-12-22`,
            count: 2232,
            y: '1.1.4' },

        {
            date: `2022-05-25`,
            count: 366,
            y: '1.2.0' },

        {
            date: `2022-06-06`,
            count: 249,
            y: '1.2.1' },

        {
            date: `2022-07-13`,
            count: 207,
            y: '1.3.0' },

        {
            date: `2022-08-01`,
            count: 210,
            y: '1.4.0' },

        {
            date: `2022-08-11`,
            count: 229,
            y: '1.4.1' },

        {
            date: `2022-09-01`,
            count: 231,
            y: '1.4.2' },

        {
            date: `2022-09-19`,
            count: 196,
            y: '1.4.3' },

        {
            date: `2022-09-26`,
            count: 20657,
            y: '1.4.4' },

        {
            date: `2022-11-13`,
            count: 6368,
            y: '1.4.5' },

        {
            date: `2022-12-13`,
            count: 227,
            y: '1.5.0' },

        {
            date: `2023-01-14`,
            count: 170,
            y: '1.6.0' },

        {
            date: `2023-02-21`,
            count: 172,
            y: '1.7.0' },

        {
            date: `2023-03-19`,
            count: 149,
            y: '1.7.1' },

        {
            date: `2023-04-01`,
            count: 1508,
            y: '1.7.2' },

        {
            date: `2023-04-13`,
            count: 330,
            y: '1.4.6' },

        {
            date: `2023-04-15`,
            count: 4920,
            y: '1.7.3' },

        {
            date: `2023-05-15`,
            count: 245,
            y: '1.7.4' },

        {
            date: `2023-06-14`,
            count: 464,
            y: '1.8.0' },

        {
            date: `2023-07-22`,
            count: 10632,
            y: '1.8.1' },

        {
            date: `2023-09-25`,
            count: 601,
            y: '1.7.3-patch1' },

        {
            date: `2023-09-27`,
            count: 165,
            y: '1.8.2' },

        {
            date: `2023-10-10`,
            count: 9348,
            y: '1.8.3' },

        {
            date: `2023-11-24`,
            count: 330,
            y: '1.9.0' },

        {
            date: `2023-12-26`,
            count: 2183,
            y: '1.10.0' },

        {
            date: `2024-02-05`,
            count: 1929,
            y: '1.11.0' },

        {
            date: `2024-04-15`,
            count: 519,
            y: '1.12.0' },

        {
            date: `2024-05-13`,
            count: 240,
            y: '1.13.0' },

        {
            date: `2024-05-20`,
            count: 118,
            y: '1.13.1' },

        {
            date: `2024-05-20`,
            count: 12613,
            y: '1.13.2' },

        {
            date: `2024-05-28`,
            count: 134,
            y: '1.8.3-patch1' },

        {
            date: `2024-06-11`,
            count: 281,
            y: '1.8.3-patch2' },

        {
            date: `2024-06-17`,
            count: 487,
            y: '1.13.3' },

        {
            date: `2024-07-08`,
            count: 413,
            y: '1.13.4' },

        {
            date: `2024-07-09`,
            count: 3137,
            y: '1.13.2-patch1' },

        {
            date: `2024-08-05`,
            count: 707,
            y: '1.14.0' },

        {
            date: `2024-09-04`,
            count: 927,
            y: '1.15.0' },

        {
            date: `2024-10-13`,
            count: 81,
            y: '1.15.1' },

        {
            date: `2024-10-14`,
            count: 7239,
            y: '1.15.2' },

        {
            date: `2024-12-03`,
            count: 1483,
            y: '1.16.0' },

        {
            date: `2024-12-16`,
            count: 19689,
            y: '1.15.3' },

        {
            date: `2025-01-20`,
            count: 465,
            y: '1.17.0' },

        {
            date: `2025-02-12`,
            count: 868,
            y: '1.18.0' },

        {
            date: `2025-03-04`,
            count: 213,
            y: '1.15.4' },

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