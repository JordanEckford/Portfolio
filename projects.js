export const projectList = [
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
  additionalScreenshots: [
   "/pixelplunge/1.png",
   "/pixelplunge/2.png",
   "/pixelplunge/3.png",
   "/pixelplunge/4.png",
   "/pixelplunge/5.png",
   "/pixelplunge/6.png",
   "/pixelplunge/7.png",
  ],
 },
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
  additionalScreenshots: ["/ncnews/1.png", "/ncnews/2.png", "/ncnews/3.png"],
 },
 {
  name: "League of Legends Info App",
  description: "An app made to display information fetched from the Riot Games API using React and CSS.",
  image: "/leagueoflegendsapp.png",
  text: [
   "This is a front end made to display data fetched from the Riot Games API and displays this information in a user friendly way.",
   "Users can see a list of champions and items, filter them by specific roles and ststs and also get some detailed champion information. The champions skins are also displayed in a carousel",
   "The site is optimised for both smaller devices and larger screens, with smaller devices having access to a side bar to save space",
  ],
  tech: ["React", "Javascript", "CSS"],
  link: "leagueoflegends",
  appLinks: {
   liveApp: "https://jordaneckfordleagueoflegends.netlify.app/",
   gitHubFront: "https://github.com/JordanEckford/league-of-legends",
  },
  additionalScreenshots: ["/lol/1.png", "/lol/2.png", "/lol/3.png", "/lol/4.png", "/lol/5.png"],
 },
 {
  name: "Weather App",
  description: "A small weather app made with React and CSS which fetches data from the Open Weather API",
  image: "/weatherapp.png",
  text: [
   "This is a front end made to display data fetched from the Open Weather API in a fun, user friendly way. Users can input their desired location and see the current weather and the 5 day forecast",
   "The styling has been made responsive, so the visuals are consistant and appealing no matter what device you use",
  ],
  tech: ["React", "Javascript", "CSS"],
  link: "weatherapp",
  appLinks: {
   liveApp: "https://jordaneckfordweatherapp.netlify.app/",
   gitHubFront: "https://github.com/JordanEckford/weather-app",
  },
  additionalScreenshots: ["/weatherapp/1.png", "/weatherapp/2.png", "/weatherapp/3.png"],
 },
];
