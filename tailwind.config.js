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
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        }
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
      fontFamily: {
        roboto: "Roboto",
      },
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
          sixth: "#C6C6C6",
          seventh: "#1D1429",
          firstBrightnessHero: "#FF00C7",
          secondBrightnessHero: "#7000FF",
        },
      },
    },
  },
  plugins: [],
};
