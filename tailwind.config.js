/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  fontFamily: {
   fancy: ["Rubik Doodle Shadow", "Roboto", "Caveat", "Indie Flower", "sans"],
   header: ["Shadows Into Light", "Caveat", "Indie Flower", "sans"],
  },
  extend: {
   animation: {
    wiggle: "wiggle 6s ease-in-out infinite",
    slideupleft: "slideupleft 4s linear",
    slidedownright: "slidedownright 4s linear",
    slideupspinright: "slideupspinright 0.5s linear",
    slideupspinleft: "slideupspinleft 0.5s ease-in-out",
    slideup1: "slideup1 1s ",
    slideup2: "slideup2 2s ",
    slideup3: "slideup3 2.5s ",
    slideup4: "slideup4 3s ",
    slideup5: "slideup5 3.5s ",
    fade: "fade 0.2s ease-in",
    scroll: "scroll 120s linear infinite",
    slidebounce: "slidebounce 1s ease-in",
   },
   keyframes: {
    wiggle: {
     "0%, 100%": {
      transform: "rotate(0deg)",
     },
     "43%": {
      transform: "rotate(0deg)",
     },
     "45%": {
      transform: "rotate(25deg)",
     },
     "52%": {
      transform: "rotate(-20deg)",
     },
     "58%": {
      transform: "rotate(10deg)",
     },
     "65%": {
      transform: "rotate(-5deg)",
     },
     "70%": {
      transform: "rotate(0deg)",
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
    scroll: {
     "0%, 100%": {
      translate: "-100% 0",
     },
     "50%": {
      translate: "0% 0",
     },
    },
    slidebounce: {
     "0%": {
      translate: "0 150px",
     },
     "70%": {
      translate: "0 0px",
     },
     "85%": {
      translate: "0 10px",
     },
     "100%": {
      translate: "0 0",
     },
    },
   },
  },
 },
 plugins: [require("tailwindcss-animation-delay")],
};
