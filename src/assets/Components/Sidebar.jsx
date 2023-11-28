import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

 return (
  <div className="sm:hidden">
   <button
    className="flex flex-col h-10 w-10 border-2 border-black bg-orange-500 rounded justify-center items-center group fixed top-4 right-3 z-40"
    onClick={() => setIsOpen(!isOpen)}
   >
    <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3 opacity-100" : "opacity-100"}`} />
    <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"}`} />
    <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-100" : "opacity-100"}`} />
   </button>

   {!isOpen ? <div className="bg-orange-500 h-20 border-b-2 border-black z-30"></div> : <div className="bg-orange-500 h-20 border-b-2 border-orange-600"></div>}
   <div
    className={`top-0 left-0 fixed bg-orange-400 border-2 border-black w-[100vw] h-full p-10 ${
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
