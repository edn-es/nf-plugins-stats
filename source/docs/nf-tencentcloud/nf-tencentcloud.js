
(async function() {
    const data = [

        {
            date: `2024-09-04`,
            count: 105,
            y: '1.0.0' },

        {
            date: `2024-09-04`,
            count: 126,
            y: '2.0.0' },

        {
            date: `2024-12-04`,
            count: 21,
            y: '1.0.1' },

        {
            date: `2024-12-04`,
            count: 23,
            y: '2.0.1' },

        {
            date: `2024-12-12`,
            count: 0,
            y: '1.0.2' },

        {
            date: `2024-12-12`,
            count: 0,
            y: '2.0.2' },

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