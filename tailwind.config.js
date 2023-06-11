/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const colors = require("./tailwind-extend")

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],  
    theme: {
    extend: {
        colors: colors,
        padding:{
            inpX: 20,
            inpY: 10
        }
    },
  },
  plugins: [],
}

