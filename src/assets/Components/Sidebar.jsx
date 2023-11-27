import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <div className="sm:hidden">
   {!isOpen ? (
    <div className="bg-orange-500 h-20 border-b-2 border-black z-30">
     <button className="z-30 flex items-center cursor-pointer float-right mt-5 mr-3" onClick={() => setIsOpen(!isOpen)}>
      <svg fill="white" viewBox="0 0 100 80" width="40" height="40">
       <rect width="100" height="10"></rect>
       <rect y="30" width="100" height="10"></rect>
       <rect y="60" width="100" height="10"></rect>
      </svg>
     </button>
    </div>
   ) : (
    <div className="bg-orange-500 h-20 border-b-2 border-orange-600">
     <button onClick={() => setIsOpen(!isOpen)} className="text-xl; text-white fixed top-4 right-4 z-40">
      X
     </button>
    </div>
   )}
   <div
    className={`top-0 right-0 fixed bg-orange-400 border-2 border-black w-[100vw] h-full p-10 ${
     isOpen ? "translate-x-100" : "translate-x-full"
    } ease-in-out duration-300`}
   >
    <nav className="flex flex-col place-content-around h-[40vh] m-auto  mt-20">
     <Link to="/" onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline">
      Home
     </Link>
     <Link to="/skills" onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline">
      Skills
     </Link>
     <Link to="/projects" onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline">
      Projects
     </Link>
     <Link to="/contact" onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline">
      Contact
     </Link>
    </nav>
    <h1 className="mt-80 w-[100%] text-center text-1xl sm:text-3xl text-black">
     Jordan<span className="text-white"> Eckford</span>
    </h1>
   </div>
  </div>
 );
};
