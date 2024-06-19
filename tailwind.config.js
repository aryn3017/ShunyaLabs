/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      'gradient': 'gradient 5s ease infinite',
    },
    keyframes: {
      gradient: {
        '0%': {
            'background-position': '0% 50%',
          },
          '100%': {
            'background-position': '100% 50%',
          },
      },
    },
    screens: {
      'llg': { 'max': '1023px' },
      'lg': { 'min': '1023px' },
      'mmd': { 'max': '767px' },
      'umd': { 'max': '806px' },
      'md': { 'min': '767px' },
      'ssm': { 'max': '639px' },
      'sm': { 'min': '639px' },
    },
    extend: {
      backgroundImage: {
        'nav-img': "url('/navimg.png')",
        'back-img': "url('/background.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


