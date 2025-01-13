
(async function() {
    const data = [

        {
            date: `2021-07-25`,
            count: 309,
            name: '0.1.0' },

        {
            date: `2022-05-03`,
            count: 210,
            name: '0.2.0' },

        {
            date: `2022-08-30`,
            count: 312,
            name: '0.3.0' },

        {
            date: `2024-03-06`,
            count: 172,
            name: '0.5.0' },

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