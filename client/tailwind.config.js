/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", " sans-serif"],
        dosis: ["Dosis", "sans-serif"],
        playwright: ["Playwrite GB S", "cursive"],
        rubik: ["Rubik", "sans-serif"],
        bona:["Bona Nova SC", "serif"]
      },
      screens:{
        'xsm':'300px'
      }
    },
  },
  plugins: [],
}

