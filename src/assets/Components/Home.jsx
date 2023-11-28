import { Link } from "react-router-dom";

export const Home = () => {
 return (
  <div className="animate-fade m-auto text-center mt-20 w-[80%]">
   <p className="mt-10 text-xl sm:text-2xl">Hello, I'm</p>
   <h1 className="text-left text-7xl sm:text-8xl text-black mt-5 sm:text-center sm:mr-40 hover:scale-110 duration-1000 animate-slidedownright">Jordan</h1>
   <h1 className="text-right text-7xl sm:text-8xl text-orange-600 mb-5 sm:text-center sm:ml-40 hover:scale-110 duration-1000 animate-slideupleft"> Eckford</h1>
   <p className="sm:text-2xl">I am an aspiring Software Developer</p>
   <div className="mt-20 sm:text-2xl"></div>
   <Link to="/projects">
    <button className="border-2 border-black p-5 rounded-md hover:bg-orange-200 duration-1000">Check out my work!</button>
   </Link>

   <div className="m-auto mt-20 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
   <div className="flex flex-row w-80 m-auto">
    <a className="w-40" href="https://www.linkedin.com/in/jordan-eckford-3a6b18103/" target="_blank">
     <img className="w-[30%] m-auto animate-wiggle hover:scale-125 duration-200" src="/linkedin.png" />
    </a>
    <a className="w-40" href="https://github.com/JordanEckford" target="_blank">
     <img className="w-[30%] m-auto animate-wiggle hover:scale-125 duration-200" src="/github.png" />
    </a>
   </div>
   <div className="m-auto mt-5 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
  </div>
 );
};
