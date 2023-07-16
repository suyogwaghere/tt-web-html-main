/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      fontFamily:{
        poppins:["Poppins"],
        dmsans:["DM Sans"],
        dmserif:["DM Serif Display"],
      },
      backgroundImage: {
        'hero': "url('/images/main.png')",
       
      },
    },
  },
  plugins: [],
}
