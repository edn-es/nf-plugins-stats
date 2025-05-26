
(async function() {
    const data = [

        {
            date: `2024-04-22`,
            count: 16404,
            y: 'Kagoshima' },

        {
            date: `2024-07-04`,
            count: 1405,
            y: '2.0.1' },

        {
            date: `2024-08-20`,
            count: 10626,
            y: 'Tantanmen' },

        {
            date: `2024-09-19`,
            count: 92360,
            y: '2.1.1' },

        {
            date: `2024-10-18`,
            count: 8495,
            y: '2.1.2' },

        {
            date: `2024-10-30`,
            count: 24809,
            y: 'Kitakata' },

        {
            date: `2024-12-03`,
            count: 11932,
            y: '2.2.1' },

        {
            date: `2025-01-13`,
            count: 69238,
            y: 'Hakodate' },

        {
            date: `2025-04-03`,
            count: 403,
            y: '2.4.0' },

        {
            date: `2025-04-10`,
            count: 1198,
            y: '2.4.1' },

        {
            date: `2025-05-07`,
            count: 1361,
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