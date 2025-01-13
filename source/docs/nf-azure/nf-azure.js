
(async function() {
    const data = [

        {
            date: `2023-01-14`,
            count: 125,
            name: '0.15.1' },

        {
            date: `2023-03-19`,
            count: 152,
            name: '0.16.0' },

        {
            date: `2023-04-01`,
            count: 192,
            name: '1.0.0' },

        {
            date: `2023-04-15`,
            count: 2346,
            name: '1.0.1' },

        {
            date: `2023-05-15`,
            count: 2155,
            name: '1.1.0' },

        {
            date: `2023-06-14`,
            count: 2152,
            name: '1.1.1' },

        {
            date: `2023-06-19`,
            count: 109,
            name: '1.1.2' },

        {
            date: `2023-06-19`,
            count: 293,
            name: '1.1.3' },

        {
            date: `2023-07-22`,
            count: 164,
            name: '1.1.4' },

        {
            date: `2023-08-05`,
            count: 157,
            name: '1.2.0' },

        {
            date: `2023-08-17`,
            count: 292,
            name: '1.3.0' },

        {
            date: `2023-09-10`,
            count: 199,
            name: '1.3.1' },

        {
            date: `2023-09-27`,
            count: 3864,
            name: '1.3.2' },

        {
            date: `2023-11-24`,
            count: 471,
            name: '1.4.0' },

        {
            date: `2024-01-12`,
            count: 4014,
            name: '1.3.3' },

        {
            date: `2024-02-05`,
            count: 545,
            name: '1.5.0' },

        {
            date: `2024-03-10`,
            count: 863,
            name: '1.5.1' },

        {
            date: `2024-04-15`,
            count: 9985,
            name: '1.6.0' },

        {
            date: `2024-05-28`,
            count: 153,
            name: '1.3.3-patch1' },

        {
            date: `2024-06-11`,
            count: 211,
            name: '1.3.3-patch2' },

        {
            date: `2024-06-17`,
            count: 771,
            name: '1.7.0' },

        {
            date: `2024-07-08`,
            count: 609,
            name: '1.8.0' },

        {
            date: `2024-07-31`,
            count: 137,
            name: '1.3.3-patch3' },

        {
            date: `2024-08-01`,
            count: 5466,
            name: '1.6.1' },

        {
            date: `2024-08-05`,
            count: 772,
            name: '1.8.1' },

        {
            date: `2024-09-04`,
            count: 294,
            name: '1.9.0' },

        {
            date: `2024-10-02`,
            count: 209,
            name: '1.10.0' },

        {
            date: `2024-10-27`,
            count: 389,
            name: '1.10.1' },

        {
            date: `2024-11-18`,
            count: 483,
            name: '1.10.2' },

        {
            date: `2024-12-03`,
            count: 114,
            name: '1.11.0' },

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