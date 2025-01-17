
(async function() {
    const data = [

        {
            date: `2021-02-01`,
            count: 185,
            y: '0.9.0' },

        {
            date: `2021-02-05`,
            count: 195,
            y: '0.9.1' },

        {
            date: `2021-02-23`,
            count: 183,
            y: '0.9.2' },

        {
            date: `2021-02-23`,
            count: 206,
            y: '0.9.3' },

        {
            date: `2021-03-01`,
            count: 197,
            y: '0.9.4' },

        {
            date: `2021-03-05`,
            count: 190,
            y: '0.9.5' },

        {
            date: `2021-03-18`,
            count: 218,
            y: '0.9.6' },

        {
            date: `2021-04-08`,
            count: 462,
            y: '0.9.7' },

        {
            date: `2021-05-28`,
            count: 507,
            y: '0.9.8' },

        {
            date: `2021-07-03`,
            count: 1659,
            y: '0.10.0' },

        {
            date: `2021-10-12`,
            count: 368,
            y: '0.11.0' },

        {
            date: `2021-11-18`,
            count: 203,
            y: '0.11.1' },

        {
            date: `2021-11-22`,
            count: 1147,
            y: '0.11.2' },

        {
            date: `2022-02-07`,
            count: 9724,
            y: '0.12.0' },

        {
            date: `2022-03-27`,
            count: 259,
            y: '0.13.0' },

        {
            date: `2022-04-02`,
            count: 383,
            y: '0.13.1' },

        {
            date: `2022-05-15`,
            count: 3667,
            y: '0.13.2' },

        {
            date: `2022-07-13`,
            count: 186,
            y: '0.13.3' },

        {
            date: `2022-08-01`,
            count: 201,
            y: '0.13.4' },

        {
            date: `2022-09-01`,
            count: 183,
            y: '0.13.5' },

        {
            date: `2022-09-07`,
            count: 186,
            y: '0.14.0' },

        {
            date: `2022-09-10`,
            count: 188,
            y: '0.14.1' },

        {
            date: `2022-09-19`,
            count: 7358,
            y: '0.14.2' },

        {
            date: `2022-11-23`,
            count: 244,
            y: '0.15.0' },

        {
            date: `2023-01-14`,
            count: 125,
            y: '0.15.1' },

        {
            date: `2023-03-19`,
            count: 152,
            y: '0.16.0' },

        {
            date: `2023-04-01`,
            count: 192,
            y: '1.0.0' },

        {
            date: `2023-04-13`,
            count: 271,
            y: '0.14.3' },

        {
            date: `2023-04-15`,
            count: 2362,
            y: '1.0.1' },

        {
            date: `2023-05-15`,
            count: 2155,
            y: '1.1.0' },

        {
            date: `2023-06-14`,
            count: 2181,
            y: '1.1.1' },

        {
            date: `2023-06-19`,
            count: 109,
            y: '1.1.2' },

        {
            date: `2023-06-19`,
            count: 293,
            y: '1.1.3' },

        {
            date: `2023-07-22`,
            count: 164,
            y: '1.1.4' },

        {
            date: `2023-08-05`,
            count: 157,
            y: '1.2.0' },

        {
            date: `2023-08-17`,
            count: 292,
            y: '1.3.0' },

        {
            date: `2023-09-10`,
            count: 199,
            y: '1.3.1' },

        {
            date: `2023-09-27`,
            count: 3959,
            y: '1.3.2' },

        {
            date: `2023-11-24`,
            count: 471,
            y: '1.4.0' },

        {
            date: `2024-01-12`,
            count: 4025,
            y: '1.3.3' },

        {
            date: `2024-02-05`,
            count: 545,
            y: '1.5.0' },

        {
            date: `2024-03-10`,
            count: 863,
            y: '1.5.1' },

        {
            date: `2024-04-15`,
            count: 10000,
            y: '1.6.0' },

        {
            date: `2024-05-28`,
            count: 156,
            y: '1.3.3-patch1' },

        {
            date: `2024-06-11`,
            count: 211,
            y: '1.3.3-patch2' },

        {
            date: `2024-06-17`,
            count: 771,
            y: '1.7.0' },

        {
            date: `2024-07-08`,
            count: 636,
            y: '1.8.0' },

        {
            date: `2024-07-31`,
            count: 137,
            y: '1.3.3-patch3' },

        {
            date: `2024-08-01`,
            count: 5670,
            y: '1.6.1' },

        {
            date: `2024-08-05`,
            count: 772,
            y: '1.8.1' },

        {
            date: `2024-09-04`,
            count: 294,
            y: '1.9.0' },

        {
            date: `2024-10-02`,
            count: 210,
            y: '1.10.0' },

        {
            date: `2024-10-27`,
            count: 394,
            y: '1.10.1' },

        {
            date: `2024-11-18`,
            count: 658,
            y: '1.10.2' },

        {
            date: `2024-12-03`,
            count: 150,
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