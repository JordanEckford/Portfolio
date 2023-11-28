export const projectList = [
 {
  name: "NC News",
  description: "A full-stack mock news website made with React, Express, PostgreSQL, and Jest",
  image: "/ncnews.png",
  text: [
   "NC News is a full-stack mock news website. It is fully interactive, allowing users to read existing articles and filter by categories. Once a user has logged in, they can comment, like, and post articles themselves.",
   "The data is served from the back-end hosted on elephantSQL. The endpoints and API was built with Express.js and each feature was heavily tested with Jest to ensure the data served was correct.",
   "When a user first tries out the app, they are logged in as a test user so that the full functionality of the site can be experienced, however there is an option to logout and create a new account.",
  ],
  tech: ["React & React Router", "Express.js", "Jest", "Javascript", "PostgreSQL"],
  link: "ncnews",
  appLinks: {
   liveApp: "https://jordanncnews.netlify.app/home",
   gitHubFront: "https://github.com/JordanEckford/nc-news-app",
   gitHubBack: "https://github.com/JordanEckford/nc-news",
  },
 },
 {
  name: "Pixel Plunge",
  description: "A deep-sea fishing HTML5 game made with the game framework Phaser",
  image: "/pixel-plunge.png",
  text: [
   "Pixel plunge is a deep-sea diving game where the object is to collect fish to earn money. Players can upgrade their equipment, and also see what fish they have caught and what they haven't encountered yet.",
   "As a team of 5, we had 8 days to build this from scratch, which included learning how to use Phaser.",
   "Phaser uses OOP (object oriented programming) to render different scenes, sprites, and obstacles. The docs aren't the best which made creating the game a challenge at first.",
  ],
  tech: ["Phaser", "React & React Router", "Javascript", "Firebase"],
  link: "pixelplunge",
  appLinks: {
   liveApp: "https://pixel-plunge.netlify.app/",
   gitHubFront: "https://github.com/sting-arrays/pixel-plunge",
  },
 },
];
