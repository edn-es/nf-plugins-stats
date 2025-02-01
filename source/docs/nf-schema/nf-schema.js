
(async function() {
    const data = [

        {
            date: `2024-04-22`,
            count: 12542,
            y: 'Kagoshima' },

        {
            date: `2024-07-04`,
            count: 1098,
            y: '2.0.1' },

        {
            date: `2024-08-20`,
            count: 8242,
            y: 'Tantanmen' },

        {
            date: `2024-09-19`,
            count: 68306,
            y: '2.1.1' },

        {
            date: `2024-10-18`,
            count: 7156,
            y: '2.1.2' },

        {
            date: `2024-10-30`,
            count: 6949,
            y: 'Kitakata' },

        {
            date: `2024-12-03`,
            count: 2561,
            y: '2.2.1' },

        {
            date: `2025-01-13`,
            count: 6289,
            y: 'Hakodate' },

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