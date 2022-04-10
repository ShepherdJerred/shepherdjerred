const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,
    },
    extend: {},
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
