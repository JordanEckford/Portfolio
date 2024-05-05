import { Link, useParams } from "react-router-dom";
import { experienceList } from "../../experience";
import { Slide } from "./Slide";
import { Reveal } from "./Reveal";
import { useEffect } from "react";

export const SingleExperience = () => {
 const { experience_name } = useParams();

 let currentExperience;
 for (let i = 0; i < experienceList.length; i++) {
  if (experienceList[i].link === experience_name) {
   currentExperience = experienceList[i];
  }
 }

 useEffect(() => {
  window.scroll(0, 0);
 }, []);

 return (
  <>
   <div className="m-auto w-[80%] text-center mt-28">
    <Link
     to="/experience"
     className="text-xs z-10 text-left fixed top-[80px] left-4 text-white p-1 hover:text-black bg-orange-600 border-2 border-black rounded-md xl:text-xl xl:top-[80px]"
    >
     Back
    </Link>
    <div className="fixed top-[80px] left-0 z-0 h-80px w-[100%]">
     <h3 className="-mt-14 text-white lg:hidden text-center text-2xl xl:text-4xl">{currentExperience.name}</h3>
    </div>
    <div className="xl:grid mt-10 xl:grid-cols-2 xl:grid-rows-2 xl:mt-20">
     <Reveal>
      <img
       src={currentExperience.image}
       alt={`a screenshot of the app called ${currentExperience.name}`}
       className="w-[80vw] sm:w-[500px] m-auto border-2 border-black rounded-lg xl:row-span-1 xl:mt-0 shadow-xl"
      />
     </Reveal>
     <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
     <ul className="text-xs mb-5 xl:m-auto">
      {currentExperience.text.map((text, index) => {
       return (
        <Slide popUpDelay={0.45 + index * 0.2} slideDelay={0.1 + index * 0.2}>
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
       {currentExperience.tech.map((tech, index) => {
        return (
         <Slide popUpDelay={0.45 + (currentExperience.text.length + index + 1) * 0.2} slideDelay={0.1 + (currentExperience.text.length + index + 1) * 0.2}>
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
       <p className="text-[20px] leading-[20px] hover:text-orange-600 xl:text-xl xl:mt-5">
        <a href={currentExperience.links.website} target="_blank">
         <button className="border-2 border-black rounded-md bg-orange-500 text-white font-black duration-1000 shadow-md w-[60%] xl:w-[40%] h-[40px] my-[10px] m-auto text-[20px] hover:bg-white hover:text-black">
          {`${currentExperience.name}'s Website`}
         </button>
        </a>
       </p>
      </div>
     </Reveal>
     <div className="mt-5 mb-5 border-b-2 border-orange-600 xl:hidden"></div>
    </div>
   </div>
  </>
 );
};
