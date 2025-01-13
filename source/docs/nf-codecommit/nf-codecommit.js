
(async function() {
    const data = [

        {
            date: `2022-06-09`,
            count: 208,
            name: '0.1.0' },

        {
            date: `2022-06-16`,
            count: 2,
            name: '0.1.1' },

        {
            date: `2022-06-17`,
            count: 6580,
            name: '0.1.2' },

        {
            date: `2023-01-14`,
            count: 906,
            name: '0.1.3' },

        {
            date: `2023-04-15`,
            count: 5493,
            name: '0.1.4' },

        {
            date: `2023-05-15`,
            count: 5326,
            name: '0.1.5' },

        {
            date: `2023-11-24`,
            count: 160,
            name: '0.1.6' },

        {
            date: `2024-02-05`,
            count: 166,
            name: '0.2.0' },

        {
            date: `2024-05-28`,
            count: 124,
            name: '0.1.5-patch1' },

        {
            date: `2024-07-30`,
            count: 117,
            name: '0.1.5-patch2' },

        {
            date: `2024-08-01`,
            count: 159,
            name: '0.2.1' },

        {
            date: `2024-08-05`,
            count: 196,
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