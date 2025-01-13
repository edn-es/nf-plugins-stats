
(async function() {
    const data = [

        {
            date: `2022-12-19`,
            count: 488,
            name: '1.0.0' },

        {
            date: `2023-09-28`,
            count: 1668,
            name: '1.1.0' },

        {
            date: `2023-10-27`,
            count: 133,
            name: '1.2.0' },

        {
            date: `2023-10-27`,
            count: 16458,
            name: '1.2.1' },

        {
            date: `2024-03-27`,
            count: 75773,
            name: '1.2.2' },

        {
            date: `2024-07-03`,
            count: 2784,
            name: '1.2.3' },

        {
            date: `2024-08-01`,
            count: 8742,
            name: '1.2.4' },

        {
            date: `2024-11-05`,
            count: 668,
            name: '1.3.0' },

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