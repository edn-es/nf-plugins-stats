
(async function() {
    const data = [

        {
            date: `2024-03-24`,
            count: 126,
            y: '0.1.0' },

        {
            date: `2024-03-26`,
            count: 129,
            y: '0.2.0' },

        {
            date: `2024-04-09`,
            count: 129,
            y: '0.3.0' },

        {
            date: `2024-04-14`,
            count: 158,
            y: '0.3.1' },

        {
            date: `2024-04-19`,
            count: 913,
            y: '0.3.2' },

        {
            date: `2024-10-08`,
            count: 3429,
            y: '0.4.0' },

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