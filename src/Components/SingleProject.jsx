import { Link, useParams } from "react-router-dom";
import { projectList } from "../../projects";
import { Slide } from "./Slide";
import { Reveal } from "./Reveal";
import { useEffect } from "react";
export const SingleProject = () => {
 const { project_name } = useParams();

 let currentProject;
 for (let i = 0; i < projectList.length; i++) {
  if (projectList[i].link === project_name) {
   currentProject = projectList[i];
  }
 }

 useEffect(() => {
  window.scroll(0, 0);
 }, []);

 return (
  <>
   <div className="m-auto w-[80%] text-center mt-28">
    <Link
     to="/projects"
     className="text-xs z-10 text-left fixed top-[80px] left-4 text-white p-1 hover:text-black bg-orange-600 border-2 border-black rounded-md xl:text-xl xl:top-[80px]"
    >
     Back
    </Link>
    <div className="fixed top-[80px] left-0 z-0 h-80px w-[100%]">
     <h3 className="-mt-14 text-white sm:hidden text-center text-2xl xl:text-4xl">{currentProject.name}</h3>
    </div>
    <div className="xl:grid mt-10 xl:grid-cols-2 xl:grid-rows-2 xl:mt-20">
     <Reveal>
      <img
       src={currentProject.image}
       alt={`a screenshot of the app called ${currentProject.name}`}
       className="w-[80vw] sm:w-[500px] m-auto border-2 border-black rounded-lg xl:row-span-1 xl:mt-0 shadow-xl"
      />
     </Reveal>
     <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
     <ul className="text-xs mb-5 xl:m-auto">
      {currentProject.text.map((text, index) => {
       return (
        <Slide>
         <li className="text-[24px] leading-[26px] sm:text-[30px] text-left sm:leading-[32px] mb-2 xl:text-xl xl:text-left xl:ml-5" key={index}>
          {text}
         </li>
        </Slide>
       );
      })}
     </ul>
     <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
     <div>
      <p className=" text-[25px] leading-[20px] mb-5 underline xl:text-2xl xl:mt-10">Tech Stack Used</p>
      <ul className="text-[20px] leading-[20px] col-span-1 xl:text-xl xl:mt-5">
       {currentProject.tech.map((tech) => {
        return (
         <Slide>
          <li className="text-[24px] leading-[26px] sm:text-[30px] sm:leading-[32px]" key={tech}>
           {tech}
          </li>
         </Slide>
        );
       })}
      </ul>
     </div>
     <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
     <Reveal>
      <div>
       <h4 className="text-[25px] leading-[20px] mb-5 underline text-sm xl:text-2xl xl:mt-10">Check it out</h4>
       <p className="text-[20px] leading-[20px] hover:text-orange-600 xl:text-xl xl:mt-5">
        <a href={currentProject.appLinks.liveApp} target="_blank">
         <button className="border-2 border-black rounded-md bg-orange-500 text-white font-black duration-1000 shadow-md w-[60%] xl:w-[40%] h-[40px] my-[10px] m-auto text-[20px] hover:bg-white hover:text-black">
          Live App
         </button>
        </a>
       </p>
       <p className="text-[20px] leading-[20px] hover:text-orange-600 xl:text-xl">
        <a href={currentProject.appLinks.gitHubFront} target="_blank">
         <button className="border-2 border-black rounded-md bg-orange-500 text-white font-black duration-1000 shadow-md w-[60%] xl:w-[40%] h-[40px] my-[10px] m-auto text-[20px] hover:bg-white hover:text-black">
          GitHub <span className="text-xs">(Front-end)</span>
         </button>
        </a>
       </p>
       {currentProject.appLinks.gitHubBack ? (
        <p className="text-[20px] leading-[20px] hover:text-orange-600 xl:text-xl">
         <a href={currentProject.appLinks.gitHubBack} target="_blank">
          <button className="border-2 border-black rounded-md bg-orange-500 text-white font-black duration-1000 shadow-md w-[60%] xl:w-[40%] h-[40px] my-[10px] m-auto text-[20px] hover:bg-white hover:text-black">
           GitHub <span className="text-xs">(Back-end)</span>
          </button>
         </a>
        </p>
       ) : null}
      </div>
     </Reveal>
     <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
    </div>
   </div>
   <div id="container" className="hidden xl:block xl:w-[100%] xl:m-auto xl:overflow-hidden xl:mb-[10px]">
    <div id="photobanner" className="animate-scroll xl:flex xl:flex-row xl:justify-between gap-x-4 ">
     {currentProject.additionalScreenshots.map((image) => {
      return (
       <img key={image} src={image} alt={`additional screenshots of the app called ${currentProject.name}`} className="h-[300px] shadow-2xl rounded-s-md" />
      );
     })}
     {currentProject.additionalScreenshots.map((image) => {
      return <img key={image} src={image} alt={`additional screenshots of the app called ${currentProject.name}`} className="h-[300px] shadow-2xl" />;
     })}
     {currentProject.additionalScreenshots.map((image) => {
      return <img key={image} src={image} alt={`additional screenshots of the app called ${currentProject.name}`} className="h-[300px] shadow-2xl" />;
     })}
    </div>
   </div>
  </>
 );
};
