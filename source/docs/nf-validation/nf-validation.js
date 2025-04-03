
(async function() {
    const data = [

        {
            date: `2023-05-05`,
            count: 1373,
            y: '0.1.0' },

        {
            date: `2023-06-06`,
            count: 261,
            y: '0.2.0' },

        {
            date: `2023-06-06`,
            count: 12608,
            y: '0.2.1' },

        {
            date: `2023-07-10`,
            count: 680,
            y: '0.3.0' },

        {
            date: `2023-07-12`,
            count: 17397,
            y: '0.3.1' },

        {
            date: `2023-09-19`,
            count: 10307,
            y: '0.3.2' },

        {
            date: `2023-10-10`,
            count: 1405,
            y: '0.3.3' },

        {
            date: `2023-10-10`,
            count: 60,
            y: '0.3.4' },

        {
            date: `2023-10-12`,
            count: 2892,
            y: 'Tonkotsu' },

        {
            date: `2023-10-18`,
            count: 1909,
            y: 'Miso' },

        {
            date: `2023-10-23`,
            count: 14046,
            y: 'Shoyu' },

        {
            date: `2023-11-16`,
            count: 3269,
            y: 'Wakayama' },

        {
            date: `2023-11-21`,
            count: 355750,
            y: 'Asahikawa' },

        {
            date: `2024-08-07`,
            count: 46818,
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