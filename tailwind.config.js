/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2874F1',
        secondary: '#fb641b',
        tertiary: '#ff9f00',
        plus: '#ffe500',
        lightgray: '#f1f3f6'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'Arial', 'sans-serif']
    },

    plugins: [
      function ({ addUtilities })
      {
        const extendUnderline = {
          '.underline': {
            'textDecoration': 'underline',
            'text-decoration-color': 'white',
          },
        }
        addUtilities(extendUnderline)
      }
    ]
  }
}
