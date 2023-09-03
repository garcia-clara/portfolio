/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mylighttheme: {

          "primary": "#10b6bc",

          "secondary": "#a4fc92",

          "accent": "#ea819d",

          "neutral": "#172026",

          "base-100": "#faf8fc",

          "info": "#95bfe9",

          "success": "#75ebdb",

          "warning": "#f1d074",

          "error": "#f63c64",
        },
        
        mydarktheme: {

          "primary": "#f4db86",

          "secondary": "#f9a7de",

          "accent": "#ffccd9",

          "neutral": "#232734",

          "base-100": "#3f444a",

          "info": "#3878c7",

          "success": "#115f44",

          "warning": "#eca013",

          "error": "#e42f3b",

        },
      },
    ],
  },
}

