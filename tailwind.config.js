/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDF2FD",
        "wd-white": "#FFFFFF",
        "wd-grey": "#999999",
        "wd-darkgrey": "#2D2D2D",
        "wd-black": "#080808",
        "winter-dark": "#164863",
        "winter-darksky": "#427D9D",
        "winter-light": "#9BBEC8",
        "winter-sky": "#DDF2FD",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to left, rgba(0,0,0, 0), rgba(0,0,0,1)), url('../assets/hero/hero.jpg')",
      },
      fontFamily: {
        'sans': ['poppins', 'Ariel', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
