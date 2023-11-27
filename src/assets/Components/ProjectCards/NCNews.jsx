import { Link } from "react-router-dom";
export const NCNews = () => {
 return (
  <div className="m-auto w-[80%]">
   <Link to="/projects" className="text-xs text-left fixed top-7 left-4 text-white p-1 hover:text-black bg-orange-600 border-2 border-black rounded-md">
    Back
   </Link>
   <h3 className="underline text-center mt-5 text-2xl">NC News</h3>
   <img src="/ncnews.png" alt="" className="w-[80vw] m-auto border-2 border-black rounded-lg" />
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
   <p className="text-xs mb-5">
    NC is a full-stack mock news website. It is fully interactive, allowing users to read existing articles and filter by categories. Once a user has logged in,
    they can comment, like, and post articles themselves. <br />
    The data is served from the back-end hosted on elephantSQL. The endpoints and API was built with Express.js and each feature was heavily tested with Jest to
    ensure the data served was correct. <br />
    When a user first tries out the app, they are logged in as a test user so that the full functionality of the site can be experienced, however there is an
    option to logout and create a new account.
   </p>
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
   <ul className="text-xs">
    <p className="text-sm underline">Tech Stack Used</p>
    <li>React & React Router</li>
    <li>Express.js</li>
    <li>Jest</li>
    <li>Javascript</li>
    <li>PostgreSQL</li>
   </ul>
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
   <h4 className="underline text-sm">Check it out</h4>
   <p className="text-sm hover:text-orange-600">
    <a href="https://jordanncnews.netlify.app/home">Live App</a>
   </p>
   <p className="text-sm hover:text-orange-600">
    <a href="https://github.com/JordanEckford/nc-news-app"></a>GitHub <span className="text-xs">(Front-end)</span>
   </p>
   <p className="text-sm hover:text-orange-600">
    <a href="https://github.com/JordanEckford/nc-news"></a>GitHub <span className="text-xs">(Back-end)</span>
   </p>
   <div className="mt-5 mb-5 border-b-2 border-orange-600"></div>
  </div>
 );
};
