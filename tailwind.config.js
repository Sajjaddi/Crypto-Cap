/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      maxWidth: {
        '8xl': '1500px'
      },
      colors: {
        tara: {
          primary: '#11011E',
          secondary: '#0FAE96',
          tertiary: '#AE0000',
          quaternary: '#211631'
        },
      },
    },
  },
  plugins: [],
}
