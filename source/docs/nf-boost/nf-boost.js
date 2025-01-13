
(async function() {
    const data = [

        {
            date: `2024-03-24`,
            count: 110,
            name: '0.1.0' },

        {
            date: `2024-03-26`,
            count: 113,
            name: '0.2.0' },

        {
            date: `2024-04-09`,
            count: 113,
            name: '0.3.0' },

        {
            date: `2024-04-14`,
            count: 142,
            name: '0.3.1' },

        {
            date: `2024-04-19`,
            count: 896,
            name: '0.3.2' },

        {
            date: `2024-10-08`,
            count: 1759,
            name: '0.4.0' },

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