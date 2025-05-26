
(async function() {
    const data = [

        {
            date: `2023-07-22`,
            count: 172,
            y: '0.1.0' },

        {
            date: `2023-08-17`,
            count: 1932,
            y: '0.2.0' },

        {
            date: `2023-10-10`,
            count: 15928,
            y: '0.3.0' },

        {
            date: `2023-11-24`,
            count: 1469,
            y: '0.3.1' },

        {
            date: `2024-02-05`,
            count: 201,
            y: '0.4.0' },

        {
            date: `2024-03-10`,
            count: 18910,
            y: '0.4.1' },

        {
            date: `2024-05-28`,
            count: 1109,
            y: '0.3.0-patch1' },

        {
            date: `2024-08-05`,
            count: 18469,
            y: '0.4.2' },

        {
            date: `2025-01-20`,
            count: 905,
            y: '0.4.3' },

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