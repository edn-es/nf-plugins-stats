
(async function() {
    const data = [

        {
            date: `2024-02-20`,
            count: 28,
            y: '0.0.1' },

        {
            date: `2024-03-08`,
            count: 10,
            y: '0.0.2' },

        {
            date: `2024-06-26`,
            count: 151,
            y: '0.1.0' },

        {
            date: `2024-07-02`,
            count: 156,
            y: '0.1.1' },

        {
            date: `2024-07-08`,
            count: 5,
            y: '0.1.2-beta1' },

        {
            date: `2024-07-09`,
            count: 4,
            y: '0.1.2-beta2' },

        {
            date: `2024-07-16`,
            count: 3,
            y: '0.1.2-edge3' },

        {
            date: `2024-07-29`,
            count: 151,
            y: '0.1.2' },

        {
            date: `2024-07-29`,
            count: 1,
            y: '0.2.0-edge1' },

        {
            date: `2024-08-28`,
            count: 2,
            y: '0.2.0-edge2' },

        {
            date: `2024-08-28`,
            count: 1,
            y: '0.2.0-edge3' },

        {
            date: `2024-08-28`,
            count: 156,
            y: '0.2.0' },

        {
            date: `2024-09-18`,
            count: 0,
            y: '0.3.0-edge1' },

        {
            date: `2024-09-18`,
            count: 0,
            y: '0.3.0-edge2' },

        {
            date: `2024-09-20`,
            count: 131,
            y: '0.3.0' },

        {
            date: `2024-09-23`,
            count: 1,
            y: '0.3.1-edge1' },

        {
            date: `2024-11-18`,
            count: 0,
            y: '0.3.2-edge2' },

        {
            date: `2024-12-08`,
            count: 80,
            y: '0.3.1' },

        {
            date: `2024-12-10`,
            count: 1,
            y: '0.3.2-edge1' },

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