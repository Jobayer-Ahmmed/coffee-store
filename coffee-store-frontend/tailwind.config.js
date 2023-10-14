/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d'
      },
      spacing: {
        test: "140px"
      },

      fontFamily: {

      }


    },
  },
  plugins: [require("daisyui")],
}
