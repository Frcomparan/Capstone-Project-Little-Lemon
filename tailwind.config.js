/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-main': '#495E57',
        'primary-second': '#F4CE14',
        'secondary-main': '#EE9972',
        'secondary-second': '#FBDABB',
        'highlight-main': '#EDEFEE',
        'highlight-second': '#333333',
      },
    },
    fontFamily: {
      display: ['Karla', 'sans-serif'],
      body: ['Markazi Text', 'serif'],
    },
  },
  plugins: [],
};
