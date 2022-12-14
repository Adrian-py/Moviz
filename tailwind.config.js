/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    screens: {
      ph: { max: "25.875em" },
      tb: { max: "48em" },
      "d-sm": { max: "80em" },
      "d-md": { max: "90em" },
      "d-l": { max: "120em" },
    },
    colors: {
      transparent: "transparent",
      richBlack: "#0d1321",
      prussianBlue: "#1D2D44",
      shadowBlue: "#748CAB",
      floralWhite: "#F9F7F0",
      red: "#E50914",
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
