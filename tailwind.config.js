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
        
"secondary": "#7a46bf",
        
"accent": "#d125ae",
        
"neutral": "",
        
"base-100": "",
        
"info": "",
        
"success": "",
        
"warning": "",
        
"error": "",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

