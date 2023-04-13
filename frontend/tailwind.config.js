const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          DEFAULT: "#7E64C0",
        },
        secondary: {
          DEFAULT: "rgba(103, 32, 158, 0.34)",
        },
        purple: {
          dark: "#67209E",
        },
        modal: {
          DEFAULT: "rgba(0,0,0,0.4)",
        },
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
