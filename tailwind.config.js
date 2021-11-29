module.exports = {
    purge: ["**/*.{html,md,js}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                xxs: '.65rem',
            },
            colors: {
                tgPink: '#ff7777',
                tgBlue: '#22273f'
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
