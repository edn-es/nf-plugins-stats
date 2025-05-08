
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 86,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 357,
            y: '1.0.1' },

        {
            date: `2021-03-05`,
            count: 141,
            y: '1.0.2' },

        {
            date: `2021-03-24`,
            count: 9444,
            y: '1.1.0' },

        {
            date: `2021-05-28`,
            count: 126,
            y: '1.1.1' },

        {
            date: `2021-08-06`,
            count: 434,
            y: '1.2.0' },

        {
            date: `2021-10-28`,
            count: 10703,
            y: '1.3.0' },

        {
            date: `2022-02-07`,
            count: 13400,
            y: '1.4.0' },

        {
            date: `2022-08-01`,
            count: 361,
            y: '1.5.0' },

        {
            date: `2022-08-11`,
            count: 501,
            y: '1.5.1' },

        {
            date: `2022-09-01`,
            count: 278,
            y: '1.5.2' },

        {
            date: `2022-09-19`,
            count: 76,
            y: '1.5.3' },

        {
            date: `2022-09-20`,
            count: 590,
            y: '1.5.4' },

        {
            date: `2022-10-03`,
            count: 11160,
            y: '1.5.5' },

        {
            date: `2022-11-13`,
            count: 10579,
            y: '1.5.6' },

        {
            date: `2022-11-29`,
            count: 67,
            y: '1.5.7' },

        {
            date: `2022-12-13`,
            count: 416,
            y: '1.5.8' },

        {
            date: `2023-01-14`,
            count: 112,
            y: '1.5.9' },

        {
            date: `2023-02-21`,
            count: 752,
            y: '1.5.10' },

        {
            date: `2023-04-01`,
            count: 744,
            y: '1.5.11' },

        {
            date: `2023-04-13`,
            count: 4,
            y: '1.5.6.1' },

        {
            date: `2023-04-13`,
            count: 732,
            y: '1.5.7-patch0' },

        {
            date: `2023-04-15`,
            count: 12537,
            y: '1.5.12' },

        {
            date: `2023-05-15`,
            count: 802,
            y: '1.5.13' },

        {
            date: `2023-06-14`,
            count: 1467,
            y: '1.5.14' },

        {
            date: `2023-07-22`,
            count: 146,
            y: '1.5.15' },

        {
            date: `2023-08-05`,
            count: 906,
            y: '1.6.0' },

        {
            date: `2023-08-17`,
            count: 4766,
            y: '1.6.1' },

        {
            date: `2023-09-27`,
            count: 327,
            y: '1.6.2' },

        {
            date: `2023-10-10`,
            count: 24555,
            y: '1.6.3' },

        {
            date: `2023-11-24`,
            count: 3939,
            y: '1.7.0' },

        {
            date: `2024-02-05`,
            count: 3587,
            y: '1.8.0' },

        {
            date: `2024-03-10`,
            count: 847,
            y: '1.8.1' },

        {
            date: `2024-04-15`,
            count: 1453,
            y: '1.9.0' },

        {
            date: `2024-05-13`,
            count: 23116,
            y: '1.9.1' },

        {
            date: `2024-05-28`,
            count: 918,
            y: '1.6.3-patch1' },

        {
            date: `2024-08-05`,
            count: 3034,
            y: '1.9.2' },

        {
            date: `2024-10-27`,
            count: 18818,
            y: '1.9.3' },

        {
            date: `2025-01-20`,
            count: 69,
            y: '1.9.4' },

        {
            date: `2025-02-12`,
            count: 696,
            y: '1.10.0' },

        {
            date: `2025-03-18`,
            count: 79,
            y: '1.11.0' },

        {
            date: `2025-04-05`,
            count: 15,
            y: '1.11.1' },

        {
            date: `2025-04-08`,
            count: 291,
            y: '1.11.2' },

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