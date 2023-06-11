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
        
"secondary": "#F2F6FC",
        
"accent": "#DFE2EC",
        
"text1": "#011627",
        
"text2": "#0B2942",
        
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

