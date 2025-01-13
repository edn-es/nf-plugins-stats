
(async function() {
    const data = [

        {
            date: `2023-05-05`,
            count: 1330,
            name: '0.1.0' },

        {
            date: `2023-06-06`,
            count: 220,
            name: '0.2.0' },

        {
            date: `2023-06-06`,
            count: 9330,
            name: '0.2.1' },

        {
            date: `2023-07-10`,
            count: 639,
            name: '0.3.0' },

        {
            date: `2023-07-12`,
            count: 17190,
            name: '0.3.1' },

        {
            date: `2023-09-19`,
            count: 10264,
            name: '0.3.2' },

        {
            date: `2023-10-10`,
            count: 1312,
            name: '0.3.3' },

        {
            date: `2023-10-10`,
            count: 60,
            name: '0.3.4' },

        {
            date: `2023-10-12`,
            count: 2848,
            name: 'Tonkotsu' },

        {
            date: `2023-10-18`,
            count: 1863,
            name: 'Miso' },

        {
            date: `2023-10-23`,
            count: 13998,
            name: 'Shoyu' },

        {
            date: `2023-11-16`,
            count: 3206,
            name: 'Wakayama' },

        {
            date: `2023-11-21`,
            count: 321923,
            name: 'Asahikawa' },

        {
            date: `2024-08-07`,
            count: 30868,
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