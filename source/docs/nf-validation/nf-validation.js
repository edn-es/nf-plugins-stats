
(async function() {
    const data = [

        {
            date: `2023-05-05`,
            count: 1332,
            name: '0.1.0' },

        {
            date: `2023-06-06`,
            count: 222,
            name: '0.2.0' },

        {
            date: `2023-06-06`,
            count: 9334,
            name: '0.2.1' },

        {
            date: `2023-07-10`,
            count: 641,
            name: '0.3.0' },

        {
            date: `2023-07-12`,
            count: 17192,
            name: '0.3.1' },

        {
            date: `2023-09-19`,
            count: 10266,
            name: '0.3.2' },

        {
            date: `2023-10-10`,
            count: 1314,
            name: '0.3.3' },

        {
            date: `2023-10-10`,
            count: 60,
            name: '0.3.4' },

        {
            date: `2023-10-12`,
            count: 2850,
            name: 'Tonkotsu' },

        {
            date: `2023-10-18`,
            count: 1865,
            name: 'Miso' },

        {
            date: `2023-10-23`,
            count: 14000,
            name: 'Shoyu' },

        {
            date: `2023-11-16`,
            count: 3208,
            name: 'Wakayama' },

        {
            date: `2023-11-21`,
            count: 321952,
            name: 'Asahikawa' },

        {
            date: `2024-08-07`,
            count: 30892,
            name: 'Kushiro' },

    ];

    new Chart(
        document.getElementById('releases'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.name),
                datasets: [
                    {
                        label: 'Donwloads',
                        data: data.map(row => row.count)
                    }
                ]
            },
            options: {
                indexAxis: 'y'
            },
        }
    );
})();