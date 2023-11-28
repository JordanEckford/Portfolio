/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   animation: {
    wiggle: "wiggle 2s ease-in-out",
    slideupleft: "slideupleft 2s ease-in-out",
    slidedownright: "slidedownright 2s ease-in-out",
    slideupspinright: "slideupspinright 0.5s ease-in-out",
    slideupspinleft: "slideupspinleft 0.5s ease-in-out",
    slideup: "slideup 1s ",
    fade: "fade 1s ease-in",
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
     "50%": {
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
     "50%": {
      translate: "-20px -20px",
     },
     "100%": {
      translate: "0px 0px",
     },
    },
    slideupspinright: {
     "0%": {
      translate: "0px 50px",
      transform: "rotate(0deg)",
      opacity: "0",
     },
     "100%": {
      translate: "0px 0px",
      transform: "rotate(0deg)",
      opacity: "100",
     },
    },
    slideupspinleft: {
     "0%": {
      translate: "0px 50px",
      transform: "rotate(0deg)",
      opacity: "0",
     },
     "100%": {
      translate: "0px 0px",
      transform: "rotate(0deg)",
      opacity: "100",
     },
    },
    slideup: {
     "0%": {
      translate: "0 150px",
      opacity: "0",
     },
     "100%": {
      translate: "0px 0",
      opacity: "100",
     },
    },
    fade: {
     "0%": {
      opacity: "0",
     },
     "100%": {
      opacity: "100",
     },
    },
   },
  },
 },
 plugins: [],
};
