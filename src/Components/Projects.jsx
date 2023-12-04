import { Link } from "react-router-dom";
import { projectList } from "../../projects";

export const Projects = () => {
 return (
  <div className="m-auto w-[80%] sm:w-[60%] mt-28">
   <div className="fixed top-[80px] left-0 z-0 h-80px w-[100%]">
    <h2 className="-mt-14 text-white sm:hidden text-center text-3xl  sm:mt-10">Projects</h2>
   </div>
   <ul key="projects" className="mt-10 xl:flex xl:flex-row xl:flex-wrap xl:justify-around">
    {projectList.map((project, index) => {
     return (
      <li
       key={project.link}
       className={`animate-slideup${
        (index % 4) + 1
       } border-2 border-slate-200 p-0 rounded-lg mb-5 hover:bg-slate-200 hover:scale-105 duration-300 hover:border-2 hover:border-black overflow-hidden m-auto shadow-xl xl:m-0 xl:h-[350px] xl:mb-[50px] xl:w-[300px] self-stretch`}
      >
       <Link to={`/projects/${project.link}`}>
        <div className=" xl:h-[100%] xl:flex xl:flex-col xl:justify-between">
         <h3 className="text-xl p-1 text-orange-600 font-bold">{project.name}</h3>
         <p className="p-1">{project.description}</p>
         <img className="rounded-b-lg" src={project.image} alt={`a screenshot of the app called ${project.name} `} />
        </div>
       </Link>
      </li>
     );
    })}
   </ul>
  </div>
 );
};
