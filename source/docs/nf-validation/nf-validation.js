
(async function() {
    const data = [

        {
            date: `2023-05-05`,
            count: 1346,
            y: '0.1.0' },

        {
            date: `2023-06-06`,
            count: 236,
            y: '0.2.0' },

        {
            date: `2023-06-06`,
            count: 11220,
            y: '0.2.1' },

        {
            date: `2023-07-10`,
            count: 655,
            y: '0.3.0' },

        {
            date: `2023-07-12`,
            count: 17303,
            y: '0.3.1' },

        {
            date: `2023-09-19`,
            count: 10280,
            y: '0.3.2' },

        {
            date: `2023-10-10`,
            count: 1328,
            y: '0.3.3' },

        {
            date: `2023-10-10`,
            count: 60,
            y: '0.3.4' },

        {
            date: `2023-10-12`,
            count: 2865,
            y: 'Tonkotsu' },

        {
            date: `2023-10-18`,
            count: 1881,
            y: 'Miso' },

        {
            date: `2023-10-23`,
            count: 14014,
            y: 'Shoyu' },

        {
            date: `2023-11-16`,
            count: 3226,
            y: 'Wakayama' },

        {
            date: `2023-11-21`,
            count: 330158,
            y: 'Asahikawa' },

        {
            date: `2024-08-07`,
            count: 34711,
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