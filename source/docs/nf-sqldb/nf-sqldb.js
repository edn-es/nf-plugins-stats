
(async function() {
    const data = [

        {
            date: `2021-09-01`,
            count: 406,
            name: '0.1.0' },

        {
            date: `2021-10-10`,
            count: 308,
            name: '0.2.0' },

        {
            date: `2022-02-07`,
            count: 182,
            name: '0.3.0' },

        {
            date: `2022-04-11`,
            count: 269,
            name: '0.4.0' },

        {
            date: `2022-05-25`,
            count: 704,
            name: '0.4.1' },

        {
            date: `2022-08-30`,
            count: 1864,
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