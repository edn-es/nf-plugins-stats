
(async function() {
    const data = [

        {
            date: `2021-01-04`,
            count: 22,
            name: '1.0.0' },

        {
            date: `2021-01-15`,
            count: 52,
            name: '1.0.1' },

        {
            date: `2021-03-05`,
            count: 631,
            name: '1.0.2' },

        {
            date: `2021-05-28`,
            count: 1428,
            name: '1.0.3' },

        {
            date: `2022-09-19`,
            count: 795,
            name: '1.0.4' },

        {
            date: `2023-01-14`,
            count: 861,
            name: '1.0.5' },

        {
            date: `2023-05-15`,
            count: 761,
            name: '1.0.6' },

        {
            date: `2023-11-24`,
            count: 22,
            name: '1.0.7' },

        {
            date: `2024-02-05`,
            count: 22,
            name: '1.1.0' },

        {
            date: `2024-03-10`,
            count: 38,
            name: '1.1.1' },

        {
            date: `2024-05-13`,
            count: 18,
            name: '1.1.2' },

        {
            date: `2024-05-20`,
            count: 480,
            name: '1.1.3' },

        {
            date: `2024-05-28`,
            count: 16,
            name: '1.0.6-patch1' },

        {
            date: `2024-08-05`,
            count: 207,
            name: '1.1.4' },

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