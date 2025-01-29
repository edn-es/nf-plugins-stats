
(async function() {
    const data = [

        {
            date: `2024-04-22`,
            count: 12369,
            y: 'Kagoshima' },

        {
            date: `2024-07-04`,
            count: 1093,
            y: '2.0.1' },

        {
            date: `2024-08-20`,
            count: 8181,
            y: 'Tantanmen' },

        {
            date: `2024-09-19`,
            count: 67117,
            y: '2.1.1' },

        {
            date: `2024-10-18`,
            count: 7089,
            y: '2.1.2' },

        {
            date: `2024-10-30`,
            count: 6900,
            y: 'Kitakata' },

        {
            date: `2024-12-03`,
            count: 2355,
            y: '2.2.1' },

        {
            date: `2025-01-13`,
            count: 3728,
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