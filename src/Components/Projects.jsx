import { Link } from "react-router-dom";
import { projectList } from "../../projects";
import { Reveal } from "./Reveal";
import { Slide } from "./Slide";
import { useEffect } from "react";

export const Projects = () => {
 useEffect(() => {
  window.scroll(0, 0);
 }, []);
 return (
  <div className="m-auto w-[90%] lg:w-[60%] xl:w-[60%] mt-28">
   <div className="fixed top-[80px] left-0 z-30 h-80px w-[100%]">
    <h2 className="-mt-14 text-white lg:hidden text-center text-3xl lg:mt-10 ">Projects</h2>
   </div>
   <ul key="projects" className="mt-10 xl:flex xl:flex-row xl:flex-wrap xl:justify-around">
    {projectList.map((project, index) => {
     return (
      <Reveal>
       <li
        key={project.link}
        className={`border-2 border-slate-200 bg-slate-50 p-0 rounded-lg mb-5 hover:bg-slate-100 hover:border-2 hover:border-black overflow-hidden m-auto shadow-md xl:m-auto xl:h-[300px] xl:mb-[50px] xl:w-[700px] self-center`}
       >
        <div className=" xl:h-[100%] flex flex-col justify-between xl:grid xl:grid-rows-3 xl:grid-cols-2">
         <Slide popUpDelay={0.9} slideDelay={0.6}>
          <h3 className="text-4xl p-2 xl:pt-[20px] text-orange-600 font-bold xl:text-center">{project.name}</h3>
         </Slide>
         <Slide popUpDelay={1.1} slideDelay={0.8}>
          <p className="p-2 xl:text-center">{project.description}</p>
         </Slide>

         <img
          id="test"
          className="xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:row-span-3 xl:h-[300px] h-[300px] w-[350px] justify-center self-center"
          src={project.image}
          alt={`a screenshot of the app called ${project.name} `}
         />
         <div className="col-start-2 row-start-3 flex flex-col">
          <Link className="m-auto mb-0 w-[40%]" to={`/projects/${project.link}`}>
           <button className="border-2 border-black rounded-md xl:mb-0 xl:mt-0 hover:bg-orange-500 hover:text-white duration-1000 shadow-md w-[100%] h-[40px] my-[10px] m-auto text-[15px]">
            More Info
           </button>
          </Link>
          <a className="m-auto w-[40%]" href={project.appLinks.liveApp} target="_blank">
           <button className="border-2 border-black rounded-md bg-gradient-to-r from-orange-600 to-orange-400 text-white hover:bg-orange-200 hover:text-black duration-1000 shadow-md w-[100%] h-[40px] my-[10px] m-auto text-[15px]">
            Live App
           </button>
          </a>
         </div>
        </div>
       </li>
      </Reveal>
     );
    })}
   </ul>
  </div>
 );
};
