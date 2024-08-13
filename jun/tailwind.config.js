/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
      'primary': '#23A6F0',
      'secondary-text': '#737373',
      'text-color': '#252B42'
    },
    fontFamily: {
      'montserrat': 'Montserrat, sans-serif',
    }
  },
    
  },
  plugins: [],
}

