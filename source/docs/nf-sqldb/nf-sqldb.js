
(async function() {
    const data = [

        {
            date: `2021-09-01`,
            count: 441,
            y: '0.1.0' },

        {
            date: `2021-10-10`,
            count: 330,
            y: '0.2.0' },

        {
            date: `2022-02-07`,
            count: 204,
            y: '0.3.0' },

        {
            date: `2022-04-11`,
            count: 291,
            y: '0.4.0' },

        {
            date: `2022-05-25`,
            count: 736,
            y: '0.4.1' },

        {
            date: `2022-08-30`,
            count: 2124,
            y: '0.5.0' },

        {
            date: `2025-05-23`,
            count: 4,
            y: '0.6.0' },

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