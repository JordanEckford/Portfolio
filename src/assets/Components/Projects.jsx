import { Link } from "react-router-dom";

export const Projects = () => {
 return (
  <div className="m-auto w-[80%]">
   <h2 className="mt-0 text-center text-3xl underline">Projects</h2>
   <ul className="mt-10">
    <li className="border-2 border-slate-200 p-1 rounded-lg mb-5 hover:bg-slate-200 sm:w-[1000px] m-auto shadow-xl">
     <Link to="/projects/pixelplunge">
      <h3 className="text-xl text-orange-600 font-bold">Pixel Plunge</h3>
      <p>A deep-sea fishing HTML5 game made with the game framework Phaser</p>
     </Link>
    </li>
    <li className="border-2 border-slate-200 p-1 rounded-lg mb-5 hover:bg-slate-200 sm:w-[1000px] m-auto shadow-xl">
     <Link to="/projects/ncnews">
      <h3 className="text-xl text-orange-600 font-bold">NC News</h3>
      <p>A full-stack mock news website made with React, Express, PostgreSQL, and Jest</p>
     </Link>
    </li>
   </ul>
  </div>
 );
};
