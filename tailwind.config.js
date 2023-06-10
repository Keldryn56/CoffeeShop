/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],  
    theme: {
    extend: {
        colors:{
            prim: "#6F4E37"
        },
        padding:{
            inpX: 20,
            inpY: 10,
            btnX: 25,
            btnY: 15
        }
    },
  },
  plugins: [],
}

