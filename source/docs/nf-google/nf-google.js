
(async function() {
    const data = [

        {
            date: `2022-12-13`,
            count: 220,
            y: '1.5.0' },

        {
            date: `2023-01-14`,
            count: 163,
            y: '1.6.0' },

        {
            date: `2023-02-21`,
            count: 165,
            y: '1.7.0' },

        {
            date: `2023-03-19`,
            count: 142,
            y: '1.7.1' },

        {
            date: `2023-04-01`,
            count: 1349,
            y: '1.7.2' },

        {
            date: `2023-04-15`,
            count: 4907,
            y: '1.7.3' },

        {
            date: `2023-05-15`,
            count: 238,
            y: '1.7.4' },

        {
            date: `2023-06-14`,
            count: 457,
            y: '1.8.0' },

        {
            date: `2023-07-22`,
            count: 9194,
            y: '1.8.1' },

        {
            date: `2023-09-25`,
            count: 591,
            y: '1.7.3-patch1' },

        {
            date: `2023-09-27`,
            count: 158,
            y: '1.8.2' },

        {
            date: `2023-10-10`,
            count: 9287,
            y: '1.8.3' },

        {
            date: `2023-11-24`,
            count: 320,
            y: '1.9.0' },

        {
            date: `2023-12-26`,
            count: 1792,
            y: '1.10.0' },

        {
            date: `2024-02-05`,
            count: 1709,
            y: '1.11.0' },

        {
            date: `2024-04-15`,
            count: 512,
            y: '1.12.0' },

        {
            date: `2024-05-13`,
            count: 233,
            y: '1.13.0' },

        {
            date: `2024-05-20`,
            count: 110,
            y: '1.13.1' },

        {
            date: `2024-05-20`,
            count: 8895,
            y: '1.13.2' },

        {
            date: `2024-05-28`,
            count: 127,
            y: '1.8.3-patch1' },

        {
            date: `2024-06-11`,
            count: 272,
            y: '1.8.3-patch2' },

        {
            date: `2024-06-17`,
            count: 398,
            y: '1.13.3' },

        {
            date: `2024-07-08`,
            count: 405,
            y: '1.13.4' },

        {
            date: `2024-07-09`,
            count: 2678,
            y: '1.13.2-patch1' },

        {
            date: `2024-08-05`,
            count: 700,
            y: '1.14.0' },

        {
            date: `2024-09-04`,
            count: 918,
            y: '1.15.0' },

        {
            date: `2024-10-13`,
            count: 74,
            y: '1.15.1' },

        {
            date: `2024-10-14`,
            count: 4368,
            y: '1.15.2' },

        {
            date: `2024-12-03`,
            count: 1139,
            y: '1.16.0' },

        {
            date: `2024-12-16`,
            count: 5220,
            y: '1.15.3' },

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