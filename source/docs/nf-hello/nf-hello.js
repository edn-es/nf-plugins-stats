
(async function() {
    const data = [

        {
            date: `2021-07-25`,
            count: 323,
            y: '0.1.0' },

        {
            date: `2022-05-03`,
            count: 224,
            y: '0.2.0' },

        {
            date: `2022-08-30`,
            count: 326,
            y: '0.3.0' },

        {
            date: `2024-03-06`,
            count: 186,
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