import { Link } from "react-router-dom";

export const PixelPlunge = () => {
 return (
  <div className="m-auto w-[80%]">
   <Link to="/projects" className="text-xs text-left fixed top-7 left-4 text-white p-1 hover:text-black bg-orange-600 border-2 border-black rounded-md">
    Back
   </Link>
   <h3 className="underline text-center mt-5 text-2xl">Pixel Plunge</h3>
   <img
    src="/pixel-plunge.png"
    alt="screenshot of a deep-sea fishing game created with Phaser called Pixel Plunge"
    className="w-[80vw] m-auto border-2 border-black rounded-lg"
   />
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
   <p className="text-xs mb-5 font-thin">
    Pixel plunge is a deep-sea diving game where the object is to collect fish to earn money. Players can upgrade their equipment, and also see what fish they
    have caught and what they haven't encountered yet. <br />
    As a team of 5, we had 8 days to build this from scratch, which included learning how to use Phaser. <br />
    Phaser uses OOP (object oriented programming) to render different scenes, sprites, and obstacles. The docs aren't the best which made creating the game a
    challenge at first.
   </p>
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
   <ul className="text-xs">
    <p className="text-sm underline">Tech Stack Used</p>
    <li>Phaser</li>
    <li>React & React Router</li>
    <li>Javascript</li>
    <li>Firebase</li>
   </ul>
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
   <h4 className="underline text-sm">Check it out</h4>
   <p className="text-sm hover:text-orange-600">
    <a href="https://pixel-plunge.netlify.app/" target="_blank">
     Live App <span className="text-xs">(PC required)</span>
    </a>
   </p>
   <p className="text-sm hover:text-orange-600">
    <a href="https://github.com/sting-arrays/pixel-plunge" target="_blank">
     GitHub
    </a>
   </p>
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
  </div>
 );
};
