/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        smallR:'426px'
      },
      colors: {
        zard:'#FFB01F',
        meshki: '#002E3D',
        abiDark: '#181b20',
        abilight: '#625feb',
        sefid:'#FBFEF9',
      },
    },
    fontFamily:{
      josefin: ['Josefin Sans', 'sans-serif'] ,
      DmSans:['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

