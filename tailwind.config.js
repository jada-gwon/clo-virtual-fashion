/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '481px',
      md: '641px',
      lg: '769px',
      xl: '1201px',
      '2xl': '1441px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: 0,
      },
    },
    extend: {},
  },
  plugins: [],
};
