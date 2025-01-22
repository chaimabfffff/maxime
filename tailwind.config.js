/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e7d32',
          dark: '#1b5e20',
        },
        secondary: {
          DEFAULT: '#d4833b',
          dark: '#c27535',
        },
      },
    },
  },
  plugins: [],
};