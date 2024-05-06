import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { Slide } from "./Slide";
import { experienceList } from "../../experience";
import { useEffect } from "react";

export const Experience = () => {
 useEffect(() => {
  window.scroll(0, 0);
 }, []);
 return (
  <div className="m-auto w-[90%] lg:w-[60%] xl:w-[60%] mt-28">
   <div className="fixed top-[80px] left-0 z-30 h-80px w-[100%]">
    <h2 className="-mt-14 text-white lg:hidden text-center text-3xl lg:mt-10 ">Experience</h2>
   </div>
   <ul key="experiences" className="mt-10 xl:flex xl:flex-row xl:flex-wrap xl:justify-around">
    {experienceList.map((experience, index) => {
     return (
      <Reveal>
       <li
        key={experience.link + index}
        className={`border-2 border-slate-200 bg-slate-50 p-0 rounded-lg mb-5 hover:bg-slate-100 hover:border-2 hover:border-black overflow-hidden m-auto shadow-md xl:m-auto xl:h-[300px] xl:mb-[50px] xl:w-[700px] self-center`}
       >
        <div className=" xl:h-[100%] flex flex-col justify-between xl:grid xl:grid-rows-3 xl:grid-cols-2">
         <Slide popUpDelay={0.9} slideDelay={0.6}>
          <h3 className="text-4xl p-2 xl:pt-[20px] text-orange-600 font-bold xl:text-center">{experience.name}</h3>
         </Slide>
         <Slide popUpDelay={1.1} slideDelay={0.8}>
          <p className="p-2 pb-0 text-xl text-center xl:text-center text-gray-700 italic">{experience.title}</p>
          <p className="p-2 pt-0 text-center xl:text-center">{experience.dates}</p>
         </Slide>

         <img
          id="test"
          className="xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:row-span-3 xl:h-[300px] h-[300px] w-[350px] justify-center self-center"
          src={experience.image}
          alt={`a screenshot of the app called ${experience.name} `}
         />
         <div className="col-start-2 row-start-3 flex flex-col">
          {/* <Link className="m-auto mb-0 w-[40%]" to={`/experiences/${experience.link}`}>
           <button className="border-2 border-black rounded-md xl:mb-0 xl:mt-0 hover:bg-orange-500 hover:text-white duration-1000 shadow-md w-[100%] h-[40px] my-[10px] m-auto text-[15px]">
            More Info
           </button>
          </Link> */}
          <a className="m-auto w-[40%]" href={experience.links.website} target="_blank">
           <button className="border-2 border-black rounded-md bg-gradient-to-r from-orange-600 to-orange-400 text-white hover:bg-orange-200 hover:text-black duration-1000 shadow-md w-[100%] h-[40px] my-[10px] m-auto text-[15px]">
            Website
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
