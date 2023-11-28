import { Link, useParams } from "react-router-dom";
import { projectList } from "../../../../projects";
export const SingleProject = () => {
 const { project_name } = useParams();

 let currentProject;
 for (let i = 0; i < projectList.length; i++) {
  if (projectList[i].link === project_name) {
   currentProject = projectList[i];
  }
 }

 return (
  <div className="m-auto w-[80%] text-center">
   <Link to="/projects" className="text-xs text-left fixed top-7 left-4 text-white p-1 hover:text-black bg-orange-600 border-2 border-black rounded-md">
    Back
   </Link>
   <h3 className="underline text-center mt-5 text-2xl">{currentProject.name}</h3>
   <div className="xl:grid xl:grid-cols-2 xl:grid-rows-3 xl:mt-20">
    <img src={currentProject.image} alt="" className="w-[80vw] sm:w-[500px] m-auto border-2 border-black rounded-lg xl:row-span-3" />
    <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
    <ul className="text-xs mb-5">
     {currentProject.text.map((text, index) => {
      return (
       <li className="mb-2" key={index}>
        {text}
       </li>
      );
     })}
    </ul>
    <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
    <div>
     <p className="text-sm underline">Tech Stack Used</p>
     <ul className="text-xs col-span-1">
      {currentProject.tech.map((tech) => {
       return <li key={tech}>{tech}</li>;
      })}
     </ul>
    </div>
    <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
    <div>
     <h4 className="underline text-sm">Check it out</h4>
     <p className="text-sm hover:text-orange-600">
      <a href={currentProject.appLinks.liveApp} target="_blank">
       Live App
      </a>
     </p>
     <p className="text-sm hover:text-orange-600">
      <a href={currentProject.appLinks.gitHubFront} target="_blank">
       GitHub <span className="text-xs">(Front-end)</span>
      </a>
     </p>
     {currentProject.appLinks.gitHubBack ? (
      <p className="text-sm hover:text-orange-600">
       <a href={currentProject.appLinks.gitHubBack} target="_blank">
        GitHub <span className="text-xs">(Back-end)</span>
       </a>
      </p>
     ) : null}
    </div>

    <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
   </div>
  </div>
 );
};
