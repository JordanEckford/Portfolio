import { Slide } from "./Slide";
import { skillsList } from "../../skills";
import { useEffect } from "react";

export const Skills = () => {
 useEffect(() => {
  window.scroll(0, 0);
 }, []);
 return (
  <div className="m-auto w-[90%] mt-28">
   <div className="fixed top-[80px] left-0 z-30 h-80px w-[100%]">
    <h2 className="-mt-14 text-white lg:hidden text-center text-3xl lg:mt-10">Skills</h2>
   </div>
   <div className="m-auto mt-10 grid grid-cols-2 md:grid-cols-4 lg:w-[700px] justify-items-stretch gap-y-1 gap-x-3 xl:w-[1000px] xl:justify-items-center">
    {skillsList.map((skill, index) => {
     return (
      <Slide>
       <a href={skill.link} target="_blank">
        <div className="rounded-md p-6 m-4 border-2 border-orange-400 shadow-md shadow-grey-800 bg-slate-50 h-[150px] w-[150px] flex flex-col justify-between">
         <img className="m-auto h-[80px]" src={skill.img} alt="" />
         <p className="mt-2 text-center">{skill.name}</p>
        </div>
       </a>
      </Slide>
     );
    })}
   </div>
  </div>
 );
};
