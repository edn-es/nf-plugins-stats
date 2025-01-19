
(async function() {
    const data = [

        {
            date: `2024-04-22`,
            count: 12112,
            y: 'Kagoshima' },

        {
            date: `2024-07-04`,
            count: 1038,
            y: '2.0.1' },

        {
            date: `2024-08-20`,
            count: 7796,
            y: 'Tantanmen' },

        {
            date: `2024-09-19`,
            count: 62336,
            y: '2.1.1' },

        {
            date: `2024-10-18`,
            count: 6658,
            y: '2.1.2' },

        {
            date: `2024-10-30`,
            count: 6092,
            y: 'Kitakata' },

        {
            date: `2024-12-03`,
            count: 1643,
            y: '2.2.1' },

        {
            date: `2025-01-13`,
            count: 290,
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