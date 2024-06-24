/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      'gradient': 'gradient 5s ease infinite',
      floatIn: 'floatIn 2s ',
      floatOut: 'floatOut 1s',
    },
    keyframes: {
      floatOut: {
        '0%': { transform: 'translateY(0)', opacity: 1 },
        '100%': { transform: 'translateY(100%)', opacity: 0 },
      },
      floatIn: {
        '0%': { transform: 'translateY(100%)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
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
        'ban-img': "url('/banner_bg.png')"
      },
      fontFamily: {
        playwrite: ['Playwrite ES Deco','sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


