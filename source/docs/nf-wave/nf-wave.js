
(async function() {
    const data = [

        {
            date: `2023-05-15`,
            count: 634,
            name: '0.9.0' },

        {
            date: `2023-06-14`,
            count: 998,
            name: '0.10.0' },

        {
            date: `2023-07-22`,
            count: 179,
            name: '0.11.0' },

        {
            date: `2023-08-05`,
            count: 975,
            name: '0.11.1' },

        {
            date: `2023-08-17`,
            count: 2455,
            name: '0.11.2' },

        {
            date: `2023-09-10`,
            count: 645,
            name: '0.12.0' },

        {
            date: `2023-09-27`,
            count: 359,
            name: '0.13.0' },

        {
            date: `2023-10-10`,
            count: 190,
            name: '0.14.0' },

        {
            date: `2023-10-15`,
            count: 4871,
            name: '1.0.0' },

        {
            date: `2023-11-24`,
            count: 1627,
            name: '1.1.0' },

        {
            date: `2023-12-20`,
            count: 1798,
            name: '1.2.0' },

        {
            date: `2024-01-12`,
            count: 14888,
            name: '1.0.1' },

        {
            date: `2024-02-05`,
            count: 1145,
            name: '1.3.0' },

        {
            date: `2024-03-10`,
            count: 157,
            name: '1.3.1' },

        {
            date: `2024-04-15`,
            count: 779,
            name: '1.4.0' },

        {
            date: `2024-05-13`,
            count: 220,
            name: '1.4.1' },

        {
            date: `2024-05-20`,
            count: 4302,
            name: '1.4.2' },

        {
            date: `2024-05-28`,
            count: 826,
            name: '1.0.1-patch1' },

        {
            date: `2024-06-17`,
            count: 1384,
            name: '1.4.3' },

        {
            date: `2024-07-08`,
            count: 452,
            name: '1.4.4' },

        {
            date: `2024-08-01`,
            count: 5674,
            name: '1.4.2-patch1' },

        {
            date: `2024-08-05`,
            count: 146,
            name: '1.5.0' },

        {
            date: `2024-09-04`,
            count: 155,
            name: '1.5.1' },

        {
            date: `2024-10-02`,
            count: 1231,
            name: '1.6.0' },

        {
            date: `2024-10-13`,
            count: 77,
            name: '1.7.0' },

        {
            date: `2024-10-14`,
            count: 184,
            name: '1.7.1' },

        {
            date: `2024-10-27`,
            count: 1496,
            name: '1.7.2' },

        {
            date: `2024-11-18`,
            count: 247,
            name: '1.7.3' },

        {
            date: `2024-11-27`,
            count: 3365,
            name: '1.7.4' },

        {
            date: `2024-12-03`,
            count: 209,
            name: '1.8.0' },

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