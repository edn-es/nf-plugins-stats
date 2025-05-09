
(async function() {
    const data = [

        {
            date: `2024-03-24`,
            count: 149,
            y: '0.1.0' },

        {
            date: `2024-03-26`,
            count: 151,
            y: '0.2.0' },

        {
            date: `2024-04-09`,
            count: 151,
            y: '0.3.0' },

        {
            date: `2024-04-14`,
            count: 181,
            y: '0.3.1' },

        {
            date: `2024-04-19`,
            count: 948,
            y: '0.3.2' },

        {
            date: `2024-10-08`,
            count: 3826,
            y: '0.4.0' },

        {
            date: `2025-03-13`,
            count: 472,
            y: '0.5.0' },

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