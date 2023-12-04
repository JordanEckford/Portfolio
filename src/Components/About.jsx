import { Link } from "react-router-dom";

export const About = () => {
 return (
  <div className="mt-28">
   <div className="fixed top-[80px] left-0 z-0 h-80px w-[100%]">
    <h2 className="-mt-14 text-white sm:hidden text-center text-3xl sm:mt-10">About Me</h2>
   </div>
   <div className="m-auto mt-10 text-center w-[90%] xl:w-[1200px] xl:grid xl:grid-cols-2 xl:grid-rows-3 xl:max-h-[700px]">
    <img className="animate-fade m-auto mt-5 rounded-full w-[80vw] shadow-xl border-2 border-black xl:grid-cols-1 xl:row-span-3" src="jordan.jpg" />
    <p className="animate-slideup2 m-auto mt-10">
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

    <p className="animate-slideup3">
     I have a BSc in Geology and a background in Engineering Geology where my career over the last 6 years has been. I have always had an interest in coding,
     but have never had the chance to fully explore and develop my skills. After completing courses on{" "}
     <a href="https://www.freecodecamp.org/" className="text-xl text-slate-600">
      FreeCodeCamp
     </a>{" "}
     i decided it was time to persue this full time.
    </p>

    <br />

    <div className="xl:col-start-2 row-start-3 row-span-1">
     <p className="animate-slideup4 ">
      I welcome all suggestions, criticisms, or positive feedback on any of my projects. Even if you would just like to know more about any projects, get in
      touch with me below!
     </p>

     <Link to="/contact">
      <button className="animate-slideup4 mt-5 mb-5 bg-orange-200 border-2 border-black p-2 rounded-md hover:bg-white duration-1000">Contact Me</button>
     </Link>
    </div>
   </div>
   <div className="hidden animate-slideup5 m-auto mt-5 mb-5 border-b-2 border-orange-600 xl:block xl:w-[60%] xl:max-w-{1000px]"></div>
  </div>
 );
};
