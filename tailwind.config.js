/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#01075E",
        
"secondary": "#DFE2EC",
        
"accent": "#E9ECF6",
        
// "button": "",
        
// "base-100": "",
        
// "info": "",
        
// "success": "",
        
// "warning": "",
        
// "error": "",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

