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

