/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1100px',
    },
    extend: {
      colors:{
        c1:"#4391fd",
        c2:"#066cf4",
        c3:"#fec107",
        c4:"#2d3c58",
        c5:"#535974",
        cbg:"#F4F9FF",
      },
      keyframes:{
        moveTopToBottom2:{
            '0%':{transform: 'translateY(-2%)' },
            '50%':{transform: 'translateY(2%)' },
            '100%':{transform: 'translateY(-2%)' },
        }
      },
      animation: {
        mttb: 'moveTopToBottom2 3s linear infinite',
      }
    },
  },
  plugins: [],
}

