/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all JS/TS/React files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // custom blue
        secondary: '#facc15', // custom yellow
        accent: '#38bdf8', // custom sky blue
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        fade: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
