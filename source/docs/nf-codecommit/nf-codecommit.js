
(async function() {
    const data = [

        {
            date: `2022-06-09`,
            count: 260,
            y: '0.1.0' },

        {
            date: `2022-06-16`,
            count: 2,
            y: '0.1.1' },

        {
            date: `2022-06-17`,
            count: 6632,
            y: '0.1.2' },

        {
            date: `2023-01-14`,
            count: 958,
            y: '0.1.3' },

        {
            date: `2023-04-15`,
            count: 5918,
            y: '0.1.4' },

        {
            date: `2023-05-15`,
            count: 5391,
            y: '0.1.5' },

        {
            date: `2023-11-24`,
            count: 199,
            y: '0.1.6' },

        {
            date: `2024-02-05`,
            count: 209,
            y: '0.2.0' },

        {
            date: `2024-05-28`,
            count: 165,
            y: '0.1.5-patch1' },

        {
            date: `2024-07-30`,
            count: 155,
            y: '0.1.5-patch2' },

        {
            date: `2024-08-01`,
            count: 233,
            y: '0.2.1' },

        {
            date: `2024-08-05`,
            count: 1817,
            y: '0.2.2' },

        {
            date: `2025-01-20`,
            count: 31,
            y: '0.2.3' },

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