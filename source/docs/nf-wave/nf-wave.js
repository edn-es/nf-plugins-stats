
(async function() {
    const data = [

        {
            date: `2022-07-25`,
            count: 195,
            y: '0.2.0' },

        {
            date: `2022-08-01`,
            count: 193,
            y: '0.2.1' },

        {
            date: `2022-08-11`,
            count: 194,
            y: '0.3.0' },

        {
            date: `2022-08-16`,
            count: 208,
            y: '0.3.1' },

        {
            date: `2022-09-01`,
            count: 229,
            y: '0.4.0' },

        {
            date: `2022-09-07`,
            count: 287,
            y: '0.4.1' },

        {
            date: `2022-09-19`,
            count: 194,
            y: '0.4.2' },

        {
            date: `2022-09-21`,
            count: 195,
            y: '0.4.3' },

        {
            date: `2022-09-26`,
            count: 254,
            y: '0.4.4' },

        {
            date: `2022-09-29`,
            count: 248,
            y: '0.4.5' },

        {
            date: `2022-10-03`,
            count: 207,
            y: '0.5.0' },

        {
            date: `2022-10-07`,
            count: 209,
            y: '0.5.1' },

        {
            date: `2022-10-11`,
            count: 1906,
            y: '0.5.2' },

        {
            date: `2022-11-23`,
            count: 200,
            y: '0.6.0' },

        {
            date: `2022-11-29`,
            count: 222,
            y: '0.6.1' },

        {
            date: `2022-12-08`,
            count: 198,
            y: '0.6.2' },

        {
            date: `2022-12-13`,
            count: 298,
            y: '0.6.3' },

        {
            date: `2023-01-14`,
            count: 257,
            y: '0.7.0' },

        {
            date: `2023-01-23`,
            count: 1203,
            y: '0.5.3' },

        {
            date: `2023-02-18`,
            count: 599,
            y: '0.5.4' },

        {
            date: `2023-02-21`,
            count: 199,
            y: '0.7.1' },

        {
            date: `2023-02-26`,
            count: 150,
            y: '0.7.2' },

        {
            date: `2023-03-19`,
            count: 649,
            y: '0.8.0' },

        {
            date: `2023-04-01`,
            count: 254,
            y: '0.8.1' },

        {
            date: `2023-04-13`,
            count: 314,
            y: '0.5.5' },

        {
            date: `2023-04-15`,
            count: 1264,
            y: '0.8.2' },

        {
            date: `2023-05-15`,
            count: 634,
            y: '0.9.0' },

        {
            date: `2023-06-08`,
            count: 573,
            y: '0.8.3' },

        {
            date: `2023-06-14`,
            count: 998,
            y: '0.10.0' },

        {
            date: `2023-07-22`,
            count: 179,
            y: '0.11.0' },

        {
            date: `2023-08-05`,
            count: 978,
            y: '0.11.1' },

        {
            date: `2023-08-11`,
            count: 3742,
            y: '0.8.4' },

        {
            date: `2023-08-17`,
            count: 2487,
            y: '0.11.2' },

        {
            date: `2023-09-10`,
            count: 647,
            y: '0.12.0' },

        {
            date: `2023-09-27`,
            count: 359,
            y: '0.13.0' },

        {
            date: `2023-10-10`,
            count: 190,
            y: '0.14.0' },

        {
            date: `2023-10-15`,
            count: 4916,
            y: '1.0.0' },

        {
            date: `2023-11-24`,
            count: 1638,
            y: '1.1.0' },

        {
            date: `2023-12-20`,
            count: 1798,
            y: '1.2.0' },

        {
            date: `2024-01-12`,
            count: 15046,
            y: '1.0.1' },

        {
            date: `2024-02-05`,
            count: 1146,
            y: '1.3.0' },

        {
            date: `2024-03-10`,
            count: 157,
            y: '1.3.1' },

        {
            date: `2024-04-15`,
            count: 786,
            y: '1.4.0' },

        {
            date: `2024-05-13`,
            count: 220,
            y: '1.4.1' },

        {
            date: `2024-05-20`,
            count: 4373,
            y: '1.4.2' },

        {
            date: `2024-05-28`,
            count: 855,
            y: '1.0.1-patch1' },

        {
            date: `2024-06-17`,
            count: 1437,
            y: '1.4.3' },

        {
            date: `2024-07-08`,
            count: 452,
            y: '1.4.4' },

        {
            date: `2024-08-01`,
            count: 6081,
            y: '1.4.2-patch1' },

        {
            date: `2024-08-05`,
            count: 146,
            y: '1.5.0' },

        {
            date: `2024-09-04`,
            count: 155,
            y: '1.5.1' },

        {
            date: `2024-10-02`,
            count: 1271,
            y: '1.6.0' },

        {
            date: `2024-10-13`,
            count: 77,
            y: '1.7.0' },

        {
            date: `2024-10-14`,
            count: 184,
            y: '1.7.1' },

        {
            date: `2024-10-27`,
            count: 1544,
            y: '1.7.2' },

        {
            date: `2024-11-18`,
            count: 247,
            y: '1.7.3' },

        {
            date: `2024-11-27`,
            count: 3999,
            y: '1.7.4' },

        {
            date: `2024-12-03`,
            count: 543,
            y: '1.8.0' },

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