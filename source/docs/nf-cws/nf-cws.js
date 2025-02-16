
(async function() {
    const data = [

        {
            date: `2023-03-20`,
            count: 206,
            y: '1.0.0' },

        {
            date: `2023-06-09`,
            count: 194,
            y: '1.0.1' },

        {
            date: `2023-07-25`,
            count: 272,
            y: '1.0.2' },

        {
            date: `2023-10-02`,
            count: 149,
            y: '1.0.3' },

        {
            date: `2023-11-02`,
            count: 166,
            y: '1.0.4' },

        {
            date: `2024-07-22`,
            count: 208,
            y: '1.0.5' },

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