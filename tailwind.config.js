/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  fontFamily: {
   fancy: ["Roboto", "Caveat", "Indie Flower", "sans"],
  },
  extend: {
   animation: {
    wiggle: "wiggle 2s ease-in-out",
    slideupleft: "slideupleft 4s linear",
    slidedownright: "slidedownright 4s linear",
    slideupspinright: "slideupspinright 0.5s linear",
    slideupspinleft: "slideupspinleft 0.5s ease-in-out",
    slideup1: "slideup1 1s ",
    slideup2: "slideup2 2s ",
    slideup3: "slideup3 2.5s ",
    slideup4: "slideup4 3s ",
    slideup5: "slideup5 3.5s ",
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
      opacity: "0",
     },
     "25%": {
      translate: "20px 20px",
      opacity: "100",
     },
     "65%": {
      translate: "5px 5px",
     },
     "100%": {
      translate: "0px 0px",
     },
    },
    slidedownright: {
     "0%": {
      translate: "-20px -20px",
      opacity: "0",
     },
     "25%": {
      translate: "-20px -20px",
      opacity: "100",
     },
     "65%": {
      translate: "-5px -5px",
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
    slideup1: {
     "0%": {
      translate: "0 150px",
      opacity: "0",
     },
     "100%": {
      translate: "0px 0",
      opacity: "100",
     },
    },
    slideup2: {
     "0%": {
      translate: "0 150px",
      opacity: "0",
     },
     "10%": {
      translate: "0 150px",
      opacity: "0",
     },
     "100%": {
      translate: "0px 0",
      opacity: "100",
     },
    },
    slideup3: {
     "0%": {
      translate: "0 150px",
      opacity: "0",
     },
     "20%": {
      translate: "0 150px",
      opacity: "0",
     },
     "100%": {
      translate: "0px 0",
      opacity: "100",
     },
    },
    slideup4: {
     "0%": {
      translate: "0 150px",
      opacity: "0",
     },
     "30%": {
      translate: "0 150px",
      opacity: "0",
     },
     "100%": {
      translate: "0px 0",
      opacity: "100",
     },
    },
    slideup5: {
     "0%": {
      translate: "0 150px",
      opacity: "0",
     },
     "40%": {
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
 plugins: [require("tailwindcss-animation-delay")],
};
