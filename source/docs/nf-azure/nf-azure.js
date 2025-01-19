
(async function() {
    const data = [

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