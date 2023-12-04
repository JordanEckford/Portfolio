import { Link } from "react-router-dom";

export const Navbar = () => {
 return (
  <div className="bg-orange-600 border-b-2 border-black top-0 left-0 fixed h-[70px] w-[100%]">
   <nav className="hidden sm:flex flex-row place-content-around text-3xl p-5 xl:pl-60 xl:pr-60 m-auto w-[80%] max-w-{1000px]">
    <Link to="/" className="text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline">
     Home
    </Link>
    <Link to="/skills" className="text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline">
     Skills
    </Link>
    <Link to="/projects" className="text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline">
     Projects
    </Link>
    <Link to="/about" className="text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline">
     About
    </Link>
    <Link to="/contact" className="text-2xl text-black m-auto mt-0 mb-0 hover:text-white hover:underline">
     Contact
    </Link>
   </nav>
  </div>
 );
};
