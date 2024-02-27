import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { Slide } from "./Slide";

export const Experience = () => {
 return (
  <div className="m-auto w-[90%] mt-28">
   <div className="fixed top-[80px] left-0 z-30 h-80px w-[100%]">
    <h2 className="-mt-14 text-white sm:hidden text-center text-3xl sm:mt-10">Experience</h2>
   </div>
   <ul key="experience" className="mt-10 xl:flex xl:flex-row xl:flex-wrap xl:justify-around">
    <Reveal>
     <li
      key="Esker"
      className={`border-2 border-slate-200 p-0 rounded-lg mb-5 hover:bg-slate-100 hover:border-2 hover:border-black overflow-hidden m-auto shadow-xl xl:m-auto xl:h-[300px] xl:mb-[50px] xl:w-[700px] self-center`}
     >
      <div className=" xl:h-[100%] flex flex-col justify-between xl:grid xl:grid-rows-3 xl:grid-cols-2">
       <Slide popUpDelay={0.9} slideDelay={0.6}>
        <h3 className="text-3xl pb-0 text-center sm:text-4xl p-2 xl:pt-[20px] text-orange-600 font-bold xl:text-center">Esker</h3>
        <h3 className="text-xl mt-0 pt-0 sm:text-xl p-2 xl:pt-[20px] text-slate-500 font-bold italic xl:text-center">Software Engineer</h3>
       </Slide>
       <Slide popUpDelay={1.1} slideDelay={0.8}>
        <p className="p-2 xl:text-center">Esker is a place.... desrcibe... yad and lla anansh ajdj ajhjs ahdgjkah s</p>
       </Slide>

       <img
        id="test"
        className="xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:row-span-3 xl:h-[250px] h-[250px] w-[350px] justify-center self-center"
        src="https://logowik.com/content/uploads/images/esker6926.jpg"
        alt={`Esker's logo `}
       />
       <div className="col-start-2 row-start-3 flex flex-col">
        <Link className="m-auto mb-0 w-[40%]" to={`/experience/Esker`}>
         <button className="border-2 border-black rounded-md xl:mb-0 xl:mt-0 hover:bg-orange-500 hover:text-white duration-1000 shadow-md w-[100%] h-[40px] my-[10px] m-auto text-[15px]">
          More Info
         </button>
        </Link>
        <a className="m-auto w-[40%]" target="_blank">
         <button className="border-2 border-black rounded-md bg-orange-500 text-white hover:bg-orange-200 hover:text-black duration-1000 shadow-md w-[100%] h-[40px] my-[10px] m-auto text-[15px]">
          Website
         </button>
        </a>
       </div>
      </div>
     </li>
    </Reveal>
   </ul>
  </div>
 );
};
