import { Link } from "react-router-dom";

export const About = () => {
 return (
  <>
   <h2 className="mt-0 text-center text-3xl underline sm:mt-10">About Me</h2>
   <div className="m-auto text-center w-[90%] xl:w-[1200px] xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:max-h-[700px]">
    <img className="m-auto mt-5 rounded-full w-[80vw] shadow-xl border-2 border-black xl:grid-cols-1 xl:row-span-3" src="jordan.jpg" />
    <p className="m-auto mt-10">
     My name is {"  "}
     <span className="text-xl">
      Jordan <span className="text-orange-600">Eckford</span>
     </span>{" "}
     and I recently completed a Software Development bootcamp with{" "}
     <a href="https://northcoders.com/" className="text-xl text-red-600 hover:text-slate-400">
      Northcoders
     </a>
     , graduating from the course in November 2023.
    </p>
    <p>
     I have a BSc in Geology and a background in Engineering Geology where my career over the last 6 years has been. I have always had an interest in coding,
     but have never had the chance to fully explore and develop my skills. After completing courses on{" "}
     <a href="https://www.freecodecamp.org/" className="text-xl text-slate-600">
      FreeCodeCamp
     </a>{" "}
     i decided it was time to persue this full time.
     <p />
     <br />
     <p className="xl:col-start-2 row-start-3 row-span-1">
      I welcome all suggestions, criticisms, or positive feedback on any of my projects. Even if you would just like to know more about any projects, get in
      touch with me below!
     </p>
    </p>
    <div>
     <Link to="/contact">
      <button className="mt-5 mb-5 bg-orange-200 border-2 border-black p-2 rounded-md hover:bg-white duration-1000">Contact Me</button>
     </Link>
    </div>
   </div>
  </>
 );
};
