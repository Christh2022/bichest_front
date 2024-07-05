/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['sans-serif', 'Poppins',],
    },
    colors: {
      'primary': '#7662EA',
      'white': '#FFFFFF',
      'black': '#000000',
      'black-1': 'rgba(34, 34, 34, 1)',
      'gray': '#E0E3E8',
      'gray-1': '#6B6E75',
      'gray-2': '#222222',
      'gray-3': 'rgba(107, 110, 117, 1)',
      'gray-4': 'rgba(34, 34, 34, 0.15)',
      'gray-5': 'rgb(221, 221, 221)',
      'gray-6': 'rgba(246, 247, 250, 1)',
      'secondary': '#ECEFF3',
      'bg': '#ECEFF3',
      'success': "#429482",
      'success-1': "#D1F2EB",
      'success-2': "rgba(229, 243, 221, 1)",
      'orange': "rgba(247, 147, 26, 1)",
      'orange-1': "rgba(247, 147, 26, 0.15)",
      'blue-1': "rgba(98, 126, 234, 0.15)",
      'blue-2': 'rgba(0, 51, 173, 0.15)',
      'blue-3': 'rgba(98, 126, 234, 1)',
      'blue-4': 'rgba(0, 51, 173, 1)',
      'blue-5': 'rgba(69, 156, 237, 1)',
      'red': 'rgba(255, 235, 234, 1)',
      'red-1': "rgba(229, 93, 87, 1)",
      'red-2': 'rgba(255, 235, 234, 1)',
      'violet-1': 'rgba(118, 98, 234, 0.15)'
    },
     screens: {
      '2xl': {'min': '1280px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '539px'},
      // => @media (max-width: 639px) { ... }
    },
    borderColor: {
      'primary': '#7662EA',
      'gray-2': 'rgb(221, 221, 221)',
      'gray-1': '#6B6E75',
      'gray': '#E0E3E8',
    },
    borderWidth: {
      '1': '1px',
    },
    
  },
  plugins: [],
}

