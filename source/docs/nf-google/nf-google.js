
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 56,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 243,
            y: '1.0.1' },

        {
            date: `2021-02-16`,
            count: 211,
            y: '1.0.2' },

        {
            date: `2021-03-05`,
            count: 6018,
            y: '1.0.3' },

        {
            date: `2021-05-28`,
            count: 3859,
            y: '1.0.4' },

        {
            date: `2021-07-03`,
            count: 266,
            y: '1.1.0' },

        {
            date: `2021-10-12`,
            count: 206,
            y: '1.1.1' },

        {
            date: `2021-10-28`,
            count: 583,
            y: '1.1.2' },

        {
            date: `2021-11-22`,
            count: 16161,
            y: '1.1.3' },

        {
            date: `2021-12-22`,
            count: 2264,
            y: '1.1.4' },

        {
            date: `2022-05-25`,
            count: 382,
            y: '1.2.0' },

        {
            date: `2022-06-06`,
            count: 265,
            y: '1.2.1' },

        {
            date: `2022-07-13`,
            count: 223,
            y: '1.3.0' },

        {
            date: `2022-08-01`,
            count: 226,
            y: '1.4.0' },

        {
            date: `2022-08-11`,
            count: 245,
            y: '1.4.1' },

        {
            date: `2022-09-01`,
            count: 247,
            y: '1.4.2' },

        {
            date: `2022-09-19`,
            count: 212,
            y: '1.4.3' },

        {
            date: `2022-09-26`,
            count: 20675,
            y: '1.4.4' },

        {
            date: `2022-11-13`,
            count: 6386,
            y: '1.4.5' },

        {
            date: `2022-12-13`,
            count: 243,
            y: '1.5.0' },

        {
            date: `2023-01-14`,
            count: 172,
            y: '1.6.0' },

        {
            date: `2023-02-21`,
            count: 174,
            y: '1.7.0' },

        {
            date: `2023-03-19`,
            count: 151,
            y: '1.7.1' },

        {
            date: `2023-04-01`,
            count: 1619,
            y: '1.7.2' },

        {
            date: `2023-04-13`,
            count: 363,
            y: '1.4.6' },

        {
            date: `2023-04-15`,
            count: 4934,
            y: '1.7.3' },

        {
            date: `2023-05-15`,
            count: 247,
            y: '1.7.4' },

        {
            date: `2023-06-14`,
            count: 466,
            y: '1.8.0' },

        {
            date: `2023-07-22`,
            count: 14066,
            y: '1.8.1' },

        {
            date: `2023-09-25`,
            count: 603,
            y: '1.7.3-patch1' },

        {
            date: `2023-09-27`,
            count: 167,
            y: '1.8.2' },

        {
            date: `2023-10-10`,
            count: 9427,
            y: '1.8.3' },

        {
            date: `2023-11-24`,
            count: 332,
            y: '1.9.0' },

        {
            date: `2023-12-26`,
            count: 2537,
            y: '1.10.0' },

        {
            date: `2024-02-05`,
            count: 2059,
            y: '1.11.0' },

        {
            date: `2024-04-15`,
            count: 521,
            y: '1.12.0' },

        {
            date: `2024-05-13`,
            count: 242,
            y: '1.13.0' },

        {
            date: `2024-05-20`,
            count: 120,
            y: '1.13.1' },

        {
            date: `2024-05-20`,
            count: 18759,
            y: '1.13.2' },

        {
            date: `2024-05-28`,
            count: 136,
            y: '1.8.3-patch1' },

        {
            date: `2024-06-11`,
            count: 290,
            y: '1.8.3-patch2' },

        {
            date: `2024-06-17`,
            count: 630,
            y: '1.13.3' },

        {
            date: `2024-07-08`,
            count: 415,
            y: '1.13.4' },

        {
            date: `2024-07-09`,
            count: 3534,
            y: '1.13.2-patch1' },

        {
            date: `2024-08-05`,
            count: 709,
            y: '1.14.0' },

        {
            date: `2024-09-04`,
            count: 933,
            y: '1.15.0' },

        {
            date: `2024-10-13`,
            count: 83,
            y: '1.15.1' },

        {
            date: `2024-10-14`,
            count: 11131,
            y: '1.15.2' },

        {
            date: `2024-12-03`,
            count: 1682,
            y: '1.16.0' },

        {
            date: `2024-12-16`,
            count: 23896,
            y: '1.15.3' },

        {
            date: `2025-01-20`,
            count: 467,
            y: '1.17.0' },

        {
            date: `2025-02-12`,
            count: 1184,
            y: '1.18.0' },

        {
            date: `2025-03-04`,
            count: 1408,
            y: '1.15.4' },

        {
            date: `2025-03-18`,
            count: 955,
            y: '1.19.0' },

        {
            date: `2025-04-23`,
            count: 332,
            y: '1.20.0' },

        {
            date: `2025-05-08`,
            count: 2,
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