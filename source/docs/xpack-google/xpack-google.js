
(async function() {
    const data = [

        {
            date: `2021-07-08`,
            count: 153,
            y: '1.0.0-beta.1' },

        {
            date: `2023-01-14`,
            count: 41,
            y: '1.0.0-beta.2' },

        {
            date: `2023-04-09`,
            count: 51,
            y: '1.0.0-beta.3' },

        {
            date: `2023-08-09`,
            count: 93,
            y: '1.0.0' },

        {
            date: `2023-12-26`,
            count: 18,
            y: '1.1.0' },

        {
            date: `2024-02-05`,
            count: 178,
            y: '1.2.0' },

        {
            date: `2024-05-14`,
            count: 119,
            y: '1.3.0' },

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