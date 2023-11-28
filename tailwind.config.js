/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   animation: {
    wiggle: "wiggle 2s ease-in-out",
    slideupleft: "slideupleft 1s ease-in-out",
    slidedownright: "slidedownright 1s ease-in-out",
   },
   keyframes: {
    wiggle: {
     "0%, 100%": {
      transform: "rotate(0deg)",
     },
     "15%": {
      transform: "rotate(40deg)",
     },
     "40%": {
      transform: "rotate(-30deg)",
     },
     "70%": {
      transform: "rotate(20deg)",
     },
     "90%": {
      transform: "rotate(-10deg)",
     },
    },
    slideupleft: {
     "0%": {
      translate: "20px 20px",
     },
     "100%": {
      translate: "0px 0px",
     },
    },
    slidedownright: {
     "0%": {
      translate: "-20px -20px",
     },
     "100%": {
      translate: "0px 0px",
     },
    },
   },
  },
 },
 plugins: [],
};
