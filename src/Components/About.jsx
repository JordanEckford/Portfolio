import { Link } from "react-router-dom";
import { Slide } from "./Slide";
import { Reveal } from "./Reveal";
import { useEffect } from "react";

export const About = () => {
 useEffect(() => {
  window.scroll(0, 0);
 }, []);

 return (
  <div className="mt-28">
   <div className="fixed top-[80px] left-0 z-20 h-80px w-[100%]">
    <h2 className="-mt-14 text-white lg:hidden text-center text-3xl lg:mt-10">About Me</h2>
   </div>
   <div className="m-auto mt-10 text-left w-[90%] xl:w-[1200px] flex flex-col justify-items-center items-center">
    <Reveal>
     <img
      className="m-auto mt-5 rounded-md w-[300px] xl:w-[500px] xl:h-[370px] shadow-xl border-2 border-black xl:grid-cols-1 xl:row-span-3"
      src="jordan.jpg"
     />
    </Reveal>
    <Slide popUpDelay={0.45 + 1 * 0.2} slideDelay={0.1 + 1 * 0.2}>
     <p className="m-auto mt-10">
      My name is {"  "}
      <span className="">
       Jordan <span className="text-orange-600">Eckford</span>
      </span>{" "}
      . I'm a recent graduate of the Software Development bootcamp at{" "}
      <a href="https://northcoders.com/" className=" text-red-600 hover:text-slate-400">
       Northcoders
      </a>
      , having completed the program in November 2023.
     </p>
    </Slide>

    <Slide popUpDelay={0.45 + 2 * 0.2} slideDelay={0.1 + 2 * 0.2}>
     <p className="">
      Prior to embarking on this career shift, I held a BSc in Geology and worked in the field of Engineering Geology for the past six years. Despite my
      background, I have always harbored a keen interest in coding and software development.
     </p>
    </Slide>
    <br />
    <Slide popUpDelay={0.45 + 3 * 0.2} slideDelay={0.1 + 3 * 0.2}>
     <p>
      However, the opportunity to fully explore and develop my skills in this domain only presented itself recently when I began completing courses on{" "}
      <a href="https://www.freecodecamp.org/" className="text-slate-600">
       FreeCodeCamp
      </a>{" "}
      .
     </p>
     <p>This newfound passion led me to pursue a career in software development full-time.</p>
    </Slide>
    <br />
    <div className="xl:col-start-2 row-start-3 row-span-1">
     <Slide popUpDelay={0.45 + 5 * 0.2} slideDelay={0.1 + 5 * 0.2}>
      <p className="">
       I am eager to learn from experienced developers and welcome all feedback, constructive criticism, or positive remarks on my projects. Feel free to reach
       out to me if you have any questions or would like to learn more about my work.
      </p>
     </Slide>

     <Link to="/contact">
      <div className="flex flex-row justify-center items-center">
       <button className="border-[0px] border-white bg-gradient-to-r from-orange-600 to-orange-400 p-5 rounded-[999px] hover:border-black hover:text-black hover:duration-1000 animate-slideup4 text-white font-bold w-[80vw] m-auto mt-6 mb-6 sm:w-[40%]">
        Contact Me
       </button>
      </div>
     </Link>
    </div>
   </div>
   <div className="hidden animate-slideup5 m-auto mt-5 mb-5 border-b-2 border-orange-600 xl:block xl:w-[60%] xl:max-w-{1000px]"></div>
  </div>
 );
};
