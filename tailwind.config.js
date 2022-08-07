/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "search-bg": "url('/src/assets/backgroundImg.png')",
      },
      colors: {
        "n-blue": "#334680",
        "n-dark-blue": "#282538",
        "n-light-blue": "#1E86FF",
        "n-gray": "#B7BCCE",
        "n-dark-gray": "#B9BDCF",
      },
    },
  },
  plugins: [],
};
