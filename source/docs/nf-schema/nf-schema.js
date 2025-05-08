
(async function() {
    const data = [

        {
            date: `2024-04-22`,
            count: 15962,
            y: 'Kagoshima' },

        {
            date: `2024-07-04`,
            count: 1365,
            y: '2.0.1' },

        {
            date: `2024-08-20`,
            count: 10323,
            y: 'Tantanmen' },

        {
            date: `2024-09-19`,
            count: 89581,
            y: '2.1.1' },

        {
            date: `2024-10-18`,
            count: 8452,
            y: '2.1.2' },

        {
            date: `2024-10-30`,
            count: 16835,
            y: 'Kitakata' },

        {
            date: `2024-12-03`,
            count: 10810,
            y: '2.2.1' },

        {
            date: `2025-01-13`,
            count: 64626,
            y: 'Hakodate' },

        {
            date: `2025-04-03`,
            count: 382,
            y: '2.4.0' },

        {
            date: `2025-04-10`,
            count: 725,
            y: '2.4.1' },

        {
            date: `2025-05-07`,
            count: 61,
            y: '2.4.2' },

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