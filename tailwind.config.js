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
    extend: {
      keyframes: {
        skeleton: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        skeleton: 'skeleton 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
