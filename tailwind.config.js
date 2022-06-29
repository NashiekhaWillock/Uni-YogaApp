module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '375px' },
        'sm': { 'min': '376px', 'max': '767px' },

      },
      height: {
        '95': '95vh',
        '81': '600px',
      },
      width: {
        '45': '165px',
        '97': '370px',
      },
      colors: {
        'primary-green': '#536B6F',
        'secondary-green': '#5F8575',
        'form-green': '#5F9EA0',
        'form3': '#967969',
        "slide-one": "#536b6f",
        "slide-two": "#4682b4",
        "slide-three": "#702963",
        "teal": "#008080",
        "green": "#d4dccc",
        "back": "#415659",
        "brown": "#564a3f",
        "wood": "#523A28",
        "blackAlpha-50": "rgba(0, 0, 0, 0.04)",
        "blackAlpha-500": "rgba(0, 0, 0, 0.36)",
        "blackAlpha-900": "rgba(0, 0, 0, 0.92)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
