/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Bangers', 'system-ui'],
        title: ['Bebas Neue', 'system-ui'],
      },
    },
  },
  plugins: [],
};