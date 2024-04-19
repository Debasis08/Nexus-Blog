/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'theme': {
        100: '#F4EEFF',
        200: '#191f28',
        300: '#222831',
        400: '#393E46',
      },
      'indigo': {950: '#1e1b4b' },
      'sky': '#00ADB5',
      'greyish': '#EEEEEE',
      'red': '#FF204E',
      'white': '#ffff',
    },
  },
  plugins: [],
}
