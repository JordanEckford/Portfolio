import { Link } from "react-router-dom";
import { projectList } from "../../../projects";

export const Projects = () => {
 return (
  <div className="m-auto w-[80%]">
   <h2 className="mt-0 text-center text-3xl underline">Projects</h2>

   <ul key="projects" className="mt-10">
    {projectList.map((project) => {
     return (
      <li key={project.link} className="border-2 border-slate-200 p-1 rounded-lg mb-5 hover:bg-slate-200 sm:w-[1000px] m-auto shadow-xl">
       <Link to={`/projects/${project.link}`}>
        <h3 className="text-xl text-orange-600 font-bold">{project.name}</h3>
        <p>{project.description}</p>
       </Link>
      </li>
     );
    })}
   </ul>
  </div>
 );
};
