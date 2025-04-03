
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 22,
            y: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 59,
            y: '1.0.1' },

        {
            date: `2021-03-05`,
            count: 639,
            y: '1.0.2' },

        {
            date: `2021-05-28`,
            count: 1438,
            y: '1.0.3' },

        {
            date: `2022-09-19`,
            count: 803,
            y: '1.0.4' },

        {
            date: `2023-01-14`,
            count: 876,
            y: '1.0.5' },

        {
            date: `2023-05-15`,
            count: 777,
            y: '1.0.6' },

        {
            date: `2023-11-24`,
            count: 22,
            y: '1.0.7' },

        {
            date: `2024-02-05`,
            count: 22,
            y: '1.1.0' },

        {
            date: `2024-03-10`,
            count: 38,
            y: '1.1.1' },

        {
            date: `2024-05-13`,
            count: 18,
            y: '1.1.2' },

        {
            date: `2024-05-20`,
            count: 516,
            y: '1.1.3' },

        {
            date: `2024-05-28`,
            count: 16,
            y: '1.0.6-patch1' },

        {
            date: `2024-08-05`,
            count: 576,
            y: '1.1.4' },

        {
            date: `2025-01-20`,
            count: 6,
            y: '1.1.5' },

        {
            date: `2025-03-18`,
            count: 3,
            y: '1.2.0' },

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