import { useState } from "react";
import { Link } from "react-router-dom";
import { version } from "../../../version";

export const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [colour, setColour] = useState(true);
 const [swap, setSwap] = useState(true);
 const [clickCount, setClickCount] = useState(0);
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

   {!isOpen ? (
    <div className="bg-orange-500 h-20 w-[100%] border-b-2 border-black -z-0 fixed"></div>
   ) : (
    <div className="bg-orange-500 h-20 w-[100%] border-b-2 border-orange-600 -z-0 fixed"></div>
   )}
   <div
    className={`top-0 z-30 left-0 fixed bg-orange-400 border-2 border-black w-[100vw] h-[100vh] p-10 ${
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
     <Link to="/about" onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline">
      About
     </Link>
     <Link to="/contact" onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline">
      Contact
     </Link>
    </nav>
    <div
     className="mt-60"
     onClick={() => {
      if (colour && swap) {
       setColour(!colour);
      }
      if (!colour && swap) {
       setSwap(!swap);
      }
      if (!colour && !swap) {
       setColour(!colour);
      }
      if (colour && !swap) {
       setSwap(!swap);
      }
      let click = clickCount + 1;
      setClickCount(click);
     }}
    >
     <h1
      className={` w-[100%] text-center text-1xl sm:text-3xl ease-in-out duration-200  ${colour ? "text-black" : "text-white"} ${
       swap ? "translate-y-6" : null
      }`}
     >
      Eckford
     </h1>
     <h1
      className={` w-[100%] text-center text-1xl sm:text-3xl ease-in-out duration-200 ${colour ? "text-white" : "text-black"} ${
       swap ? "-translate-y-6" : null
      }`}
     >
      Jordan
     </h1>
     {clickCount >= 10 ? <div className="m-auto mt-10 text-center">build: {version}</div> : null}
    </div>
   </div>
  </div>
 );
};
