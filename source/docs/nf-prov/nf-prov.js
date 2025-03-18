
(async function() {
    const data = [

        {
            date: `2022-12-19`,
            count: 514,
            y: '1.0.0' },

        {
            date: `2023-09-28`,
            count: 1698,
            y: '1.1.0' },

        {
            date: `2023-10-27`,
            count: 158,
            y: '1.2.0' },

        {
            date: `2023-10-27`,
            count: 16494,
            y: '1.2.1' },

        {
            date: `2024-03-27`,
            count: 94495,
            y: '1.2.2' },

        {
            date: `2024-07-03`,
            count: 2869,
            y: '1.2.3' },

        {
            date: `2024-08-01`,
            count: 11162,
            y: '1.2.4' },

        {
            date: `2024-11-05`,
            count: 1416,
            y: '1.3.0' },

        {
            date: `2025-02-06`,
            count: 2163,
            y: '1.4.0' },

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