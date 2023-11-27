export const Home = () => {
 return (
  <div className="m-auto text-center mt-20 w-[80%]">
   <p className="mt-10 text-xl sm:text-2xl">Hello, I'm</p>
   <h1 className="text-left text-7xl sm:text-8xl text-black mt-5 ">Jordan</h1>
   <h1 className="text-right text-7xl sm:text-8xl text-orange-600 mb-5"> Eckford</h1>
   <p className="sm:text-2xl">I am an aspiring Software Developer</p>
   <div className="mt-20 sm:text-2xl"></div>
   <p>Please feel free to take a look at my current projects and let me know what you think!</p>
   <div className="mt-20 mb-5 border-b-2 border-orange-600"></div>
   <div className="flex flex-row">
    <a className="w-40" href="https://www.linkedin.com/in/jordan-eckford-3a6b18103/" target="_blank">
     <img className="w-[30%] m-auto" src="/linkedin.png" />
    </a>
    <a className="w-40" href="https://github.com/JordanEckford" target="_blank">
     <img className="w-[30%] m-auto" src="/github.png" />
    </a>
   </div>
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
  </div>
 );
};
