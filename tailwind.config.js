/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ...colors,
                'blue-light': '#396afc',
                'blue-dark': '#2948ff',
                'primary-black': '#0B0B0C',
                gray: {
                    ...colors.gray,
                    900: '#151515',
                    800: '#1A1A1B',
                    700: '#303030',
                    600: '#353535',
                    500: '#525252',
                    400: '#AFAFAF',
                },
            },
        },
        fontFamily: {
            inter: ['Inter'],
            poppins: ['Poppins'],
        },
    },
    plugins: [],
}
