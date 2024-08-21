/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myBLue':{
          100: '#D0D6F9',
          200: '#0B0D17'
        }
      },
      fontFamily: {
        'belle': ['Bellefair', 'sans-serif'],
      },
      fontSize: {
        'xxs': '.625rem',
      },
    },
  },
  plugins: [],
}

