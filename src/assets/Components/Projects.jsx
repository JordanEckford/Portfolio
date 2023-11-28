import { Link } from "react-router-dom";
import { projectList } from "../../../projects";

export const Projects = () => {
 return (
  <div className="m-auto w-[80%] sm:w-[50%]">
   <h2 className="-mt-14 text-white sm:hidden text-center text-3xl  sm:mt-10">Projects</h2>

   <ul key="projects" className="mt-10 xl:flex xl:flex-row xl:justify-stretch">
    {projectList.map((project) => {
     return (
      <li
       key={project.link}
       className="animate-slideup delay-1000 border-2 border-slate-200 p-0 rounded-lg mb-5 hover:bg-slate-200 hover:scale-105 duration-300 hover:border-2 hover:border-black xl:w-[350px] xl:max-h-[400px] overflow-hidden m-auto shadow-xl"
      >
       <Link to={`/projects/${project.link}`}>
        <h3 className="text-xl p-1 text-orange-600 font-bold">{project.name}</h3>
        <p className="p-1">{project.description}</p>
        <img className="rounded-b-lg" src={project.image} alt={`a screenshot of the app called ${project.name} `} />
       </Link>
      </li>
     );
    })}
   </ul>
  </div>
 );
};
