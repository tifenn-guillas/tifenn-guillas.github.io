module.exports = {
    purge: ["**/*.{html,md,js}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        letterSpacing: {
            normal: '.025em',
            wide: '.05em',
            wider: '.1em',
            widest: '.25em',
        },
        extend: {
            fontSize: {
                xxs: '.65rem',
            },
            colors: {
                'tg-pink': '#ff7777',
                'tg-soft-pink': '#ff8888',
                'tg-blue': '#22273f',
                'tg-white': '#FCFCFC',
                'tg-soft-gray': '#d3d3d3',
                'tg-gray': '#555555'
            },
            fontFamily: {
                roboto: ['Roboto'],
            },
            backgroundImage: theme => ({
                'header-image': "url('/assets/images/background.jpg')",
                'parallax-image': "url('/assets/images/parallax.jpg')"
            }),
            minHeight: (theme) => ({
                ...theme('spacing'),
            })
        }
    },
    variants: {
        extend: {
            visibility: ['hover'],
            textColor: ['active']
        },
    },
    plugins: [],
}
