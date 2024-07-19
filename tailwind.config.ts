/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E3A8A', // Blue 700
                secondary: '#F59E0B', // Amber 400
                accent: '#DC2626', // Red 600
                neutral: '#374151', // Gray 700
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'], // Example Google font
                serif: ['Playfair Display', 'serif'], // Example Google font
            },
        },
    },
    plugins: [],
}
