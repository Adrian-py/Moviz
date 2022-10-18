/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    screens: {
      ph: "25.875em",
      tb: "48em",
      "d-sm": "80em",
      "d-md": "90em",
      "d-l": "120em",
    },
    colors: {
      transparent: "transparent",
      richBlack: "#0d1321",
      prussianBlue: "#1D2D44",
      shadowBlue: "#748CAB",
      floralWhite: "#F9F7F0",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      sourceSansPro: ["Source Sans Pro", "sans-serif"],
    },
    fontSize: {
      h1: "4.25125rem",
      h2: "2.62500rem",
      h3: "1.62500rem",
      body: "1rem",
      secondary: "0.875rem",
    },
    extend: {},
  },
  plugins: [],
};
