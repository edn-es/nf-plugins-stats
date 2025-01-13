
(async function() {
    const data = [

        {
            date: `2021-07-08`,
            count: 153,
            name: '1.0.0-beta.1' },

        {
            date: `2023-01-14`,
            count: 41,
            name: '1.0.0-beta.2' },

        {
            date: `2023-04-09`,
            count: 51,
            name: '1.0.0-beta.3' },

        {
            date: `2023-08-09`,
            count: 93,
            name: '1.0.0' },

        {
            date: `2023-12-26`,
            count: 18,
            name: '1.1.0' },

        {
            date: `2024-02-05`,
            count: 162,
            name: '1.2.0' },

        {
            date: `2024-05-14`,
            count: 109,
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