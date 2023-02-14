/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      maxWidth: {
        "8xl": "1500px",
      },
      colors: {
        tara: {
          prime: "#11011E",
          second: "#0FAE96",
          third: "#AE0000",
          fourth: "#211631",
          fifth: "#B6B6B6",
        },
      },
    },
  },
  plugins: [],
};
