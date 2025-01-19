
(async function() {
    const data = [

        {
            date: `2023-02-21`,
            count: 1878,
            y: '1.15.0' },

        {
            date: `2023-03-19`,
            count: 969,
            y: '1.16.0' },

        {
            date: `2023-04-01`,
            count: 30752,
            y: '1.16.1' },

        {
            date: `2023-04-15`,
            count: 142214,
            y: '1.16.2' },

        {
            date: `2023-05-15`,
            count: 2056,
            y: '2.0.0' },

        {
            date: `2023-06-14`,
            count: 4028,
            y: '2.0.1' },

        {
            date: `2023-07-22`,
            count: 985,
            y: '2.1.0' },

        {
            date: `2023-08-05`,
            count: 8204,
            y: '2.1.1' },

        {
            date: `2023-09-10`,
            count: 2773,
            y: '2.1.2' },

        {
            date: `2023-09-27`,
            count: 2488,
            y: '2.1.3' },

        {
            date: `2023-10-10`,
            count: 105576,
            y: '2.1.4' },

        {
            date: `2023-11-24`,
            count: 3130,
            y: '2.2.0' },

        {
            date: `2023-12-26`,
            count: 3361,
            y: '2.3.0' },

        {
            date: `2024-02-05`,
            count: 8351,
            y: '2.4.0' },

        {
            date: `2024-03-10`,
            count: 6034,
            y: '2.4.1' },

        {
            date: `2024-04-15`,
            count: 5786,
            y: '2.4.2' },

        {
            date: `2024-05-13`,
            count: 713,
            y: '2.5.0' },

        {
            date: `2024-05-14`,
            count: 173,
            y: '2.5.1' },

        {
            date: `2024-05-20`,
            count: 51880,
            y: '2.5.2' },

        {
            date: `2024-05-28`,
            count: 151,
            y: '2.1.4-patch1' },

        {
            date: `2024-06-11`,
            count: 327,
            y: '2.1.4-patch2' },

        {
            date: `2024-06-17`,
            count: 6170,
            y: '2.6.0' },

        {
            date: `2024-07-30`,
            count: 1175,
            y: '2.1.4-patch3' },

        {
            date: `2024-08-01`,
            count: 23020,
            y: '2.5.3' },

        {
            date: `2024-08-05`,
            count: 9641,
            y: '2.7.0' },

        {
            date: `2024-09-04`,
            count: 2268,
            y: '2.8.0' },

        {
            date: `2024-10-02`,
            count: 8951,
            y: '2.9.0' },

        {
            date: `2024-11-18`,
            count: 1912,
            y: '2.9.1' },

        {
            date: `2024-11-27`,
            count: 7017,
            y: '2.9.2' },

        {
            date: `2024-12-03`,
            count: 2305,
            y: '2.10.0' },

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