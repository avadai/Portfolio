/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      dystopia: ["Bruno Ace SC", "cursive"],
    },
    boxShadow: {
      'full': '0 0 10px 2px rgba(0, 187, 238, 0.5)',
    },
    screens: {
      'xs': '320px',
      's': '390px',
      'sm': '420px',
      'md': '768px',
    },
  },
  plugins: [],
}

