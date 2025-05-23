
(async function() {
    const data = [

        {
            date: `2023-05-18`,
            count: 0,
            y: '0.1.4' },

        {
            date: `2023-05-19`,
            count: 0,
            y: '0.1.5' },

        {
            date: `2023-05-21`,
            count: 0,
            y: '0.1.6' },

        {
            date: `2023-05-25`,
            count: 305,
            y: '0.1.7' },

        {
            date: `2023-07-17`,
            count: 297,
            y: '0.1.8' },

        {
            date: `2023-07-26`,
            count: 186,
            y: '0.2.0' },

        {
            date: `2023-08-09`,
            count: 193,
            y: '0.3.0' },

        {
            date: `2023-08-21`,
            count: 250,
            y: '0.3.1' },

        {
            date: `2023-10-12`,
            count: 445,
            y: '0.4.0' },

        {
            date: `2024-01-11`,
            count: 1361,
            y: '0.4.1' },

        {
            date: `2024-07-24`,
            count: 367,
            y: '0.4.2' },

        {
            date: `2024-08-15`,
            count: 350,
            y: '0.4.3' },

        {
            date: `2024-09-12`,
            count: 204,
            y: '0.4.4' },

        {
            date: `2024-09-19`,
            count: 264,
            y: '0.4.5' },

        {
            date: `2024-09-26`,
            count: 2232,
            y: '0.4.6' },

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