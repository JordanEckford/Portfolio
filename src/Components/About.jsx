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
    <h2 className="-mt-14 text-white sm:hidden text-center text-3xl sm:mt-10">About Me</h2>
   </div>
   <div className="m-auto mt-10 text-center w-[90%] xl:w-[1200px] flex flex-col">
    <Reveal>
     <img
      className="m-auto mt-5 rounded-full w-[330px] h-[250px] xl:w-[500px] xl:h-[370px] shadow-xl border-2 border-black xl:grid-cols-1 xl:row-span-3"
      src="jordan.jpg"
     />
    </Reveal>
    <Slide>
     <p className="m-auto mt-10">
      My name is {"  "}
      <span className="text-2xl">
       Jordan <span className="text-orange-600">Eckford</span>
      </span>{" "}
      . I'm a recent graduate of the Software Development bootcamp at{" "}
      <a href="https://northcoders.com/" className="text-2xl text-red-600 hover:text-slate-400">
       Northcoders
      </a>
      , having completed the program in November 2023.
     </p>
    </Slide>

    <Slide>
     <p className="">
      Prior to embarking on this career shift, I held a BSc in Geology and worked in the field of Engineering Geology for the past six years. Despite my
      background, I have always harbored a keen interest in coding and software development.
     </p>
    </Slide>
    <br />
    <Slide>
     <p>
      However, the opportunity to fully explore and develop my skills in this domain only presented itself recently when I began completing courses on{" "}
      <a href="https://www.freecodecamp.org/" className="text-2xl text-slate-600">
       FreeCodeCamp
      </a>{" "}
      .
     </p>
    </Slide>
    <br />
    <Slide>
     <p>This newfound passion led me to pursue a career in software development full-time.</p>
    </Slide>

    <br />
    <div className="xl:col-start-2 row-start-3 row-span-1">
     <Slide>
      <p className="">
       I am eager to learn from experienced developers and welcome all feedback, constructive criticism, or positive remarks on my projects. Feel free to reach
       out to me if you have any questions or would like to learn more about my work.
      </p>
     </Slide>

     <Link to="/contact">
      <button className="animate-slideup4 mt-5 mb-20 bg-orange-200 border-2 border-black p-2 rounded-md hover:bg-white duration-1000">Contact Me</button>
     </Link>
    </div>
   </div>
   <div className="hidden animate-slideup5 m-auto mt-5 mb-5 border-b-2 border-orange-600 xl:block xl:w-[60%] xl:max-w-{1000px]"></div>
  </div>
 );
};
