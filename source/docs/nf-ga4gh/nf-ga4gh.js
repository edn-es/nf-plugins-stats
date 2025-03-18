
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 19,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 32,
            y: '1.0.1' },

        {
            date: `2021-03-05`,
            count: 26,
            y: '1.0.2' },

        {
            date: `2021-05-28`,
            count: 115,
            y: '1.0.3' },

        {
            date: `2022-09-19`,
            count: 131,
            y: '1.0.4' },

        {
            date: `2023-04-13`,
            count: 300,
            y: '1.0.5' },

        {
            date: `2023-05-15`,
            count: 123,
            y: '1.0.6' },

        {
            date: `2023-07-22`,
            count: 109,
            y: '1.1.0' },

        {
            date: `2023-11-24`,
            count: 30,
            y: '1.1.1' },

        {
            date: `2024-02-05`,
            count: 18,
            y: '1.2.0' },

        {
            date: `2024-05-13`,
            count: 467,
            y: '1.3.0' },

        {
            date: `2024-05-28`,
            count: 24,
            y: '1.1.0-patch1' },

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