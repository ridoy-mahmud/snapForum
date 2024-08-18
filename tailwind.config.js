/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Mulish', 'Inter', 'sans-serif'],
                mulish: ['Mulish', 'sans-serif'],
            },
        },
    },
    darkMode: 'class', // or 'media' or 'class'
    plugins: [],
}