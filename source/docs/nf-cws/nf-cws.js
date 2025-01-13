
(async function() {
    const data = [

        {
            date: `2023-03-20`,
            count: 188,
            name: '1.0.0' },

        {
            date: `2023-06-09`,
            count: 176,
            name: '1.0.1' },

        {
            date: `2023-07-25`,
            count: 254,
            name: '1.0.2' },

        {
            date: `2023-10-02`,
            count: 131,
            name: '1.0.3' },

        {
            date: `2023-11-02`,
            count: 148,
            name: '1.0.4' },

        {
            date: `2024-07-22`,
            count: 170,
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