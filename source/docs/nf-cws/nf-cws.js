
(async function() {
    const data = [

        {
            date: `2023-03-20`,
            count: 190,
            name: '1.0.0' },

        {
            date: `2023-06-09`,
            count: 178,
            name: '1.0.1' },

        {
            date: `2023-07-25`,
            count: 256,
            name: '1.0.2' },

        {
            date: `2023-10-02`,
            count: 133,
            name: '1.0.3' },

        {
            date: `2023-11-02`,
            count: 150,
            name: '1.0.4' },

        {
            date: `2024-07-22`,
            count: 172,
            name: '1.0.5' },

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