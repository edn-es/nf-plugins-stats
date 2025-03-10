
(async function() {
    const data = [

        {
            date: `2023-05-05`,
            count: 1354,
            y: '0.1.0' },

        {
            date: `2023-06-06`,
            count: 243,
            y: '0.2.0' },

        {
            date: `2023-06-06`,
            count: 12080,
            y: '0.2.1' },

        {
            date: `2023-07-10`,
            count: 662,
            y: '0.3.0' },

        {
            date: `2023-07-12`,
            count: 17371,
            y: '0.3.1' },

        {
            date: `2023-09-19`,
            count: 10288,
            y: '0.3.2' },

        {
            date: `2023-10-10`,
            count: 1387,
            y: '0.3.3' },

        {
            date: `2023-10-10`,
            count: 60,
            y: '0.3.4' },

        {
            date: `2023-10-12`,
            count: 2874,
            y: 'Tonkotsu' },

        {
            date: `2023-10-18`,
            count: 1890,
            y: 'Miso' },

        {
            date: `2023-10-23`,
            count: 14028,
            y: 'Shoyu' },

        {
            date: `2023-11-16`,
            count: 3240,
            y: 'Wakayama' },

        {
            date: `2023-11-21`,
            count: 348193,
            y: 'Asahikawa' },

        {
            date: `2024-08-07`,
            count: 41706,
            y: 'Kushiro' },

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