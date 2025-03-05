/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '321px'},    
        'tab': {'max': '768px'},  
        'md': {'max': '426px'},
        'tablet':{'min':'426px','max':'768px'}, 
        'nav':{'min':'531px'},
      },
      fontFamily: {
        bigstyle: ["Big Shoulders Inline", "cursive"],
        subhead:["Big Shoulders Stencil"]
      },
    },
  },
  plugins: [],
}
