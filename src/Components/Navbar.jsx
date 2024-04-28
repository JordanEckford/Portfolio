import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
 return (
  <div className="bg-gradient-to-r from-orange-600 to-orange-400 top-0 left-0 fixed h-[70px] w-[100%] shadow-lg z-20">
   <img src="/jordanicon.png" alt="" className="w-[60px] h-[60px] fixed top-[5px] left-[5px]" />
   <nav className="hidden sm:flex flex-row place-content-around text-3xl p-5 xl:pl-60 xl:pr-60 m-auto w-[80%] max-w-{1000px]">
    <NavLink
     to="/"
     className={({ isActive }) =>
      isActive
       ? "text-2xl text-white m-auto mt-0 mb-0 hover:text-white hover:underline underline"
       : "text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline"
     }
    >
     Home
    </NavLink>
    <NavLink
     to="/skills"
     className={({ isActive }) =>
      isActive
       ? "text-2xl text-white m-auto mt-0 mb-0 hover:text-white hover:underline underline"
       : "text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline"
     }
    >
     Skills
    </NavLink>
    <NavLink
     to="/projects"
     className={({ isActive }) =>
      isActive
       ? "text-2xl text-white m-auto mt-0 mb-0 hover:text-white hover:underline underline"
       : "text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline"
     }
    >
     Projects
    </NavLink>
    <NavLink
     to="/about"
     className={({ isActive }) =>
      isActive
       ? "text-2xl text-white m-auto mt-0 mb-0 hover:text-white hover:underline underline"
       : "text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline"
     }
    >
     About
    </NavLink>
    <NavLink
     to="/contact"
     className={({ isActive }) =>
      isActive
       ? "text-2xl text-white m-auto mt-0 mb-0 hover:text-white hover:underline underline"
       : "text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline"
     }
    >
     Contact
    </NavLink>
   </nav>
  </div>
 );
};

<NavLink to="/projects" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-red-200" : "")}>
 Projects
</NavLink>;
