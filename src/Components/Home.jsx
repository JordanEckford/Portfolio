import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext.jsx";
import { useContext } from "react";
import { Reveal } from "./Reveal.jsx";
import { Slider } from "@material-tailwind/react";
import { Slide } from "./Slide.jsx";

export const Home = () => {
 const { theme, setTheme } = useContext(ThemeContext);
 return (
  <div className={`animate-fade m-auto text-center mt-40 w-[80%] ${theme === "light" ? "bg-white" : "bg-slate-500"}`}>
   <Slide popUpDelay={0.45} slideDelay={0.1}>
    <p className="text-xl sm:text-2xl">Hello, my name is</p>
   </Slide>
   <Reveal width="100%">
    <h1 className="text-left text-7xl sm:text-8xl text-black mt-5 sm:text-center sm:mr-40 sm:hover:scale-110 duration-1000">Jordan</h1>
    <h1 className="text-right text-7xl sm:text-8xl text-orange-600 mb-5 sm:text-center sm:ml-40 sm:hover:scale-110 duration-1000 font-fancy"> Eckford</h1>
   </Reveal>
   <Slide popUpDelay={0.65} slideDelay={0.3}>
    <p className="sm:text-2xl">I'm an aspiring Software Developer</p>
   </Slide>
   <div className="mt-20 sm:text-2xl"></div>
   <Link to="/projects">
    <button className="border-[1px] border-black p-5 rounded-md hover:bg-orange-200 duration-1000 animate-slideup5 shadow-md bg-gradient-to-r from-orange-400 to-orange-200">
     Check out my work!
    </button>
   </Link>

   <div className="m-auto mt-20 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
   <div className="flex flex-row w-80 m-auto">
    <a className="w-40" href="https://www.linkedin.com/in/jordan-eckford-3a6b18103/" target="_blank">
     <img
      className="w-[30%] h-[100%] m-auto animate-wiggle hover:scale-125 duration-200"
      src="/linkedin.png"
      alt="a circular logo representing LinkedIn"
      aria-label="visit my LinkedIn page here"
     />
    </a>
    <a className="w-40" href="https://github.com/JordanEckford" target="_blank">
     <img
      className="w-[30%] h-[100%] m-auto animate-wiggle hover:scale-125 duration-200"
      src="/github.png"
      alt="a circular logo representing GitHub"
      aria-label="visit my GitHub page here"
     />
    </a>
   </div>
   <div className="m-auto mt-5 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
  </div>
 );
};
