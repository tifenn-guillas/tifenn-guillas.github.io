module.exports = {
    purge: ["**/*.{html,md,js}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                xxs: '.65rem',
            },
            colors: {
                'tg-pink': '#ff7777',
                'tg-blue': '#22273f',
                'tg-white': '#FCFCFC',
                'tg-soft-gray': '#d3d3d3',
                'tg-gray': '#555555'
            },
            fontFamily: {
                roboto: ['Roboto'],
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
