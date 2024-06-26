import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { version } from "../../version";
import { RevealRepeat } from "./RevealRepeat";

export const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [colour, setColour] = useState(true);
 const [swap, setSwap] = useState(true);
 const [clickCount, setClickCount] = useState(0);
 const genericHamburgerLine = `h-[4px] w-[30px] my-[3px] rounded-full bg-white transition ease transform duration-300`;

 return (
  <div className="lg:hidden">
   <button className={`flex flex-col h-10 w-10 bg-none rounded justify-center items-center group fixed top-4 right-3 z-50`} onClick={() => setIsOpen(!isOpen)}>
    <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-2 opacity-100" : "opacity-100"}`} />
    <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"}`} />
    <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-100" : "opacity-100"}`} />
   </button>

   <div
    className={`top-0 z-40 left-0 fixed bg-gradient-to-r from-orange-600 to-orange-400 border-2 border-black w-[100vw] h-[100vh] p-10 ${
     isOpen ? "translate-x-100" : "translate-x-full"
    } ease-in-out duration-300`}
   >
    <nav className="flex flex-col place-content-around h-[40vh] m-auto  mt-20">
     <RevealRepeat>
      <NavLink
       to="/"
       onClick={() => setIsOpen(!isOpen)}
       className={({ isActive }) =>
        isActive
         ? "text-2xl text-black m-auto mt-0 mb-0 hover:text-black hover:underline"
         : "text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline"
       }
      >
       Home
      </NavLink>
     </RevealRepeat>
     <RevealRepeat>
      <NavLink
       to="/skills"
       onClick={() => setIsOpen(!isOpen)}
       className={({ isActive }) =>
        isActive
         ? "text-2xl text-black m-auto mt-0 mb-0 hover:text-black hover:underline"
         : "text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline"
       }
      >
       Skills
      </NavLink>
     </RevealRepeat>
     <RevealRepeat>
      <NavLink
       to="/experience"
       onClick={() => setIsOpen(!isOpen)}
       className={({ isActive }) =>
        isActive
         ? "text-2xl text-black m-auto mt-0 mb-0 hover:text-black hover:underline"
         : "text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline"
       }
      >
       Experience
      </NavLink>
     </RevealRepeat>
     <RevealRepeat>
      <NavLink
       to="/projects"
       onClick={() => setIsOpen(!isOpen)}
       className={({ isActive }) =>
        isActive
         ? "text-2xl text-black m-auto mt-0 mb-0 hover:text-black hover:underline"
         : "text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline"
       }
      >
       Projects
      </NavLink>
     </RevealRepeat>
     <RevealRepeat>
      <NavLink
       to="/about"
       onClick={() => setIsOpen(!isOpen)}
       className={({ isActive }) =>
        isActive
         ? "text-2xl text-black m-auto mt-0 mb-0 hover:text-black hover:underline"
         : "text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline"
       }
      >
       About
      </NavLink>
     </RevealRepeat>
     <RevealRepeat>
      <NavLink
       to="/contact"
       onClick={() => setIsOpen(!isOpen)}
       className={({ isActive }) =>
        isActive
         ? "text-2xl text-black m-auto mt-0 mb-0 hover:text-black hover:underline"
         : "text-2xl text-white m-auto mt-0 mb-0 hover:text-black hover:underline"
       }
      >
       Contact
      </NavLink>
     </RevealRepeat>
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
       swap ? "translate-y-10" : null
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
