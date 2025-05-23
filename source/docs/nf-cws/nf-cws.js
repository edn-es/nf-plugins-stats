
(async function() {
    const data = [

        {
            date: `2023-03-20`,
            count: 230,
            y: '1.0.0' },

        {
            date: `2023-06-09`,
            count: 218,
            y: '1.0.1' },

        {
            date: `2023-07-25`,
            count: 296,
            y: '1.0.2' },

        {
            date: `2023-10-02`,
            count: 173,
            y: '1.0.3' },

        {
            date: `2023-11-02`,
            count: 190,
            y: '1.0.4' },

        {
            date: `2024-07-22`,
            count: 280,
            y: '1.0.5' },

        {
            date: `2025-04-23`,
            count: 7,
            y: '1.0.6' },

        {
            date: `2025-05-16`,
            count: 5,
            y: '2.0.0' },

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