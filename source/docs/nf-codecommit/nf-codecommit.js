
(async function() {
    const data = [

        {
            date: `2022-06-09`,
            count: 210,
            name: '0.1.0' },

        {
            date: `2022-06-16`,
            count: 2,
            name: '0.1.1' },

        {
            date: `2022-06-17`,
            count: 6582,
            name: '0.1.2' },

        {
            date: `2023-01-14`,
            count: 908,
            name: '0.1.3' },

        {
            date: `2023-04-15`,
            count: 5499,
            name: '0.1.4' },

        {
            date: `2023-05-15`,
            count: 5328,
            name: '0.1.5' },

        {
            date: `2023-11-24`,
            count: 162,
            name: '0.1.6' },

        {
            date: `2024-02-05`,
            count: 168,
            name: '0.2.0' },

        {
            date: `2024-05-28`,
            count: 126,
            name: '0.1.5-patch1' },

        {
            date: `2024-07-30`,
            count: 119,
            name: '0.1.5-patch2' },

        {
            date: `2024-08-01`,
            count: 161,
            name: '0.2.1' },

        {
            date: `2024-08-05`,
            count: 198,
            name: '0.2.2' },

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