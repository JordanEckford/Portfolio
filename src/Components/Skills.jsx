import { Slide } from "./Slide";

export const Skills = () => {
 return (
  <div className="m-auto w-[90%] mt-28">
   <div className="fixed top-[80px] left-0 z-30 h-80px w-[100%]">
    <h2 className="-mt-14 text-white sm:hidden text-center text-3xl sm:mt-10">Skills</h2>
   </div>
   <div className="m-auto mt-10 grid grid-cols-2 lg:grid-cols-4 lg:w-[700px] justify-items-stretch gap-y-4 gap-x-3 w-80 xl:w-[1000px] xl:justify-items-center">
    <Slide>
     <img className="h-10 xl:h-20 xl:w-[700px]" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
    </Slide>
    <Slide>
     <img
      className={`h-10 xl:h-20 xl:w-80 object-cover`}
      src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
      alt=""
     />
    </Slide>
    <Slide>
     <img className={`h-10 xl:h-20 xl:w-80`} src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" />
    </Slide>
    <Slide>
     <img
      className={`h-10 xl:h-20 xl:w-80`}
      src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
      alt=""
     />
    </Slide>
    <Slide>
     <img className={`h-10 xl:h-20 xl:w-80 object-cover`} src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="" />
    </Slide>
    <Slide>
     <img
      className={`h-10 xl:h-20 xl:w-80`}
      src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
      alt=""
     />
    </Slide>
    <Slide>
     <img className={`h-10 xl:h-20 xl:w-80`} src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="" />
    </Slide>
    <Slide>
     <img className={`h-10 xl:h-20 xl:w-80`} src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" alt="" />
    </Slide>
    <Slide>
     <img className={` h-10 xl:h-20 xl:w-80`} src="/Phaser.png" alt="" />
    </Slide>
    <Slide>
     <img className={`h-10 xl:h-20 xl:w-80 object-cover`} src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" alt="" />
    </Slide>
    <Slide>
     <img
      className={`h-10 xl:h-20 xl:w-80 object-cover`}
      src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
      alt=""
     />
    </Slide>
    <Slide>
     <img
      className={`h-10 xl:h-20 xl:w-80 object-cover`}
      src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
      alt=""
     />
    </Slide>
    <Slide>
     <img className={`h-10 xl:h-20 xl:w-80`} src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
    </Slide>
   </div>
  </div>
 );
};
