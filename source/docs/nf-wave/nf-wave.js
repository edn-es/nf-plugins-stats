
(async function() {
    const data = [

        {
            date: `2022-07-25`,
            count: 225,
            y: '0.2.0' },

        {
            date: `2022-08-01`,
            count: 223,
            y: '0.2.1' },

        {
            date: `2022-08-11`,
            count: 224,
            y: '0.3.0' },

        {
            date: `2022-08-16`,
            count: 238,
            y: '0.3.1' },

        {
            date: `2022-09-01`,
            count: 259,
            y: '0.4.0' },

        {
            date: `2022-09-07`,
            count: 317,
            y: '0.4.1' },

        {
            date: `2022-09-19`,
            count: 224,
            y: '0.4.2' },

        {
            date: `2022-09-21`,
            count: 225,
            y: '0.4.3' },

        {
            date: `2022-09-26`,
            count: 284,
            y: '0.4.4' },

        {
            date: `2022-09-29`,
            count: 278,
            y: '0.4.5' },

        {
            date: `2022-10-03`,
            count: 237,
            y: '0.5.0' },

        {
            date: `2022-10-07`,
            count: 239,
            y: '0.5.1' },

        {
            date: `2022-10-11`,
            count: 1972,
            y: '0.5.2' },

        {
            date: `2022-11-23`,
            count: 231,
            y: '0.6.0' },

        {
            date: `2022-11-29`,
            count: 252,
            y: '0.6.1' },

        {
            date: `2022-12-08`,
            count: 228,
            y: '0.6.2' },

        {
            date: `2022-12-13`,
            count: 328,
            y: '0.6.3' },

        {
            date: `2023-01-14`,
            count: 270,
            y: '0.7.0' },

        {
            date: `2023-01-23`,
            count: 1246,
            y: '0.5.3' },

        {
            date: `2023-02-18`,
            count: 630,
            y: '0.5.4' },

        {
            date: `2023-02-21`,
            count: 212,
            y: '0.7.1' },

        {
            date: `2023-02-26`,
            count: 163,
            y: '0.7.2' },

        {
            date: `2023-03-19`,
            count: 662,
            y: '0.8.0' },

        {
            date: `2023-04-01`,
            count: 267,
            y: '0.8.1' },

        {
            date: `2023-04-13`,
            count: 465,
            y: '0.5.5' },

        {
            date: `2023-04-15`,
            count: 1287,
            y: '0.8.2' },

        {
            date: `2023-05-15`,
            count: 647,
            y: '0.9.0' },

        {
            date: `2023-06-08`,
            count: 592,
            y: '0.8.3' },

        {
            date: `2023-06-14`,
            count: 1021,
            y: '0.10.0' },

        {
            date: `2023-07-22`,
            count: 193,
            y: '0.11.0' },

        {
            date: `2023-08-05`,
            count: 991,
            y: '0.11.1' },

        {
            date: `2023-08-11`,
            count: 3886,
            y: '0.8.4' },

        {
            date: `2023-08-17`,
            count: 2872,
            y: '0.11.2' },

        {
            date: `2023-09-10`,
            count: 677,
            y: '0.12.0' },

        {
            date: `2023-09-27`,
            count: 372,
            y: '0.13.0' },

        {
            date: `2023-10-10`,
            count: 204,
            y: '0.14.0' },

        {
            date: `2023-10-15`,
            count: 5430,
            y: '1.0.0' },

        {
            date: `2023-11-24`,
            count: 1750,
            y: '1.1.0' },

        {
            date: `2023-12-20`,
            count: 1849,
            y: '1.2.0' },

        {
            date: `2024-01-12`,
            count: 18191,
            y: '1.0.1' },

        {
            date: `2024-02-05`,
            count: 1163,
            y: '1.3.0' },

        {
            date: `2024-03-10`,
            count: 173,
            y: '1.3.1' },

        {
            date: `2024-04-15`,
            count: 926,
            y: '1.4.0' },

        {
            date: `2024-05-13`,
            count: 235,
            y: '1.4.1' },

        {
            date: `2024-05-20`,
            count: 5282,
            y: '1.4.2' },

        {
            date: `2024-05-28`,
            count: 1077,
            y: '1.0.1-patch1' },

        {
            date: `2024-06-17`,
            count: 1872,
            y: '1.4.3' },

        {
            date: `2024-07-08`,
            count: 466,
            y: '1.4.4' },

        {
            date: `2024-08-01`,
            count: 10165,
            y: '1.4.2-patch1' },

        {
            date: `2024-08-05`,
            count: 160,
            y: '1.5.0' },

        {
            date: `2024-09-04`,
            count: 173,
            y: '1.5.1' },

        {
            date: `2024-10-02`,
            count: 1901,
            y: '1.6.0' },

        {
            date: `2024-10-13`,
            count: 91,
            y: '1.7.0' },

        {
            date: `2024-10-14`,
            count: 198,
            y: '1.7.1' },

        {
            date: `2024-10-27`,
            count: 2710,
            y: '1.7.2' },

        {
            date: `2024-11-18`,
            count: 270,
            y: '1.7.3' },

        {
            date: `2024-11-27`,
            count: 12163,
            y: '1.7.4' },

        {
            date: `2024-12-03`,
            count: 1252,
            y: '1.8.0' },

        {
            date: `2025-01-20`,
            count: 20,
            y: '1.9.0' },

        {
            date: `2025-02-12`,
            count: 267,
            y: '1.10.0' },

        {
            date: `2025-03-18`,
            count: 24,
            y: '1.11.0' },

        {
            date: `2025-04-05`,
            count: 24,
            y: '1.11.1' },

        {
            date: `2025-04-23`,
            count: 72,
            y: '1.12.0' },

        {
            date: `2025-04-23`,
            count: 610,
            y: '1.7.5' },

        {
            date: `2025-05-12`,
            count: 283,
            y: '1.12.1' },

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