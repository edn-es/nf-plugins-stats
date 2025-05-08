
(async function() {
    const data = [

        {
            date: `2021-09-01`,
            count: 432,
            y: '0.1.0' },

        {
            date: `2021-10-10`,
            count: 322,
            y: '0.2.0' },

        {
            date: `2022-02-07`,
            count: 196,
            y: '0.3.0' },

        {
            date: `2022-04-11`,
            count: 283,
            y: '0.4.0' },

        {
            date: `2022-05-25`,
            count: 727,
            y: '0.4.1' },

        {
            date: `2022-08-30`,
            count: 2062,
            y: '0.5.0' },

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