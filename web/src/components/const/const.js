export const PROJECT_PATH = `projects`;
export const allNavSiteLinks = [
  {
    linkName:`about me`,
    href: `about`,
    id: 1,

  },
  {
    linkName:`skills`,
    href: `skills`,
    id: 2,

  },
  {
    linkName:`interface`,
    href: `interface`,
    id: 3,

  },
  {
    linkName:`projects`,
    href: `projects`,
    id: 4,

  },
  {
    linkName:`contact me`,
    href: `contacts`,
    id: 5 ,

  } 
];
export const MenuNav = {
  ABOUT: 1,
  SKILLS: 2,
  INTERFACE: 3,
  PROJECTS: 4,
  CONTACT: 5,
};
export const Social = {
  LINKEDIN: 1,
  FACEBOOK: 2,
  INSTAGRAM: 3,
  GITHUB: 4
};
export const Advantages = {
  FAST: 1,
  RESPONSIVE: 2,
  USER: 3,
  OPTIMIZATION: 4,
};
export const SkillsId = {
  MARKUP: 1,
  PROGRAMMING: 2,
  FRAMEWORK: 3,
  CMS: 4
};
export const socialInfo = [
    {
      name: `LinkedIn`,
      src: `https://www.linkedin.com/in/alexandra-kuchynskaya`,
      id: 1,
    },
    {
      name: `Facebook`,
      src: `https://www.facebook.com/profile.php?id=100004096929196`,
      id: 2,
    },
    {
      name: `Instagram`,
      src: `https://www.linkedin.com/in/alexandra-kuchynskaya/`,
      id: 3,
    },
    {
      name: `GitHub`,
      src: `https://github.com/Alexandra207`,
      id: 4,
    },
];

export const basicSkills = [
  {
    id: 1,
    name: `Markup`,
    skillsList: [`CSS`, `HTML`, `PUG`, `Sass`, `Less`],
  },
  {
    id: 2,
    name: `Programming`,
    skillsList: [`NodeJs`, `Javascript`, `MongoDB`, `MySQL`, `GraphQL`],
  },
  {
    id: 3,
    name: `Frameworks & libraries`,
    skillsList: [`React Js`, `Angular`, `Bootstrap4`],
  },
  {
    id: 4,
    name: `CMS`,
    skillsList: [`WordPress`, `WordPress`, `Tilda`],
  },
]
export const levelSkillsData = [
  {
    id: 1,
    name: `HTML`,
    description: `I always do care of the creating of the logical HTML markup, using the correct tags and good practices in terms of accessibility, SEO, performance.`,
    percentage: 90,
    src: `../../img/html.png`
  },
  {
    id: 2,
    name: `CSS`,
    description: `Focused on creating of an effective and well-organized CSS architecture by the use of the BEM-methodology, SASS/Less preprocessors. My CSS code is always predictable, reusable, maintainable and scalable`,
    percentage: 90,
    src: `../../img/css.png`
  },
  {
    id: 3,
    name: `JS`,
    description: `I have proficiency in Core JS starting from such principles as Variables, Values, Types, Objects, Arrays, This/Prototype, Classes; and finishing by the Basic Async JS and error handling in JS. I also have a high-level understanding of the client-side JS, browser rendering behavior and performance.`,
    percentage: 90,
    src: `../../img/js.png`
  },
  {
    id: 4,
    name: `React`,
    description: `My  primary focus is developing user interface components robust and easy to maintain, implementing them using  React Router for routing, React hooks for component-level state management, Jest performance testing framework architectural pattern Flux and Redux library for its implamentation.`,
    percentage: 90,
    src: `../../img/react.png`
  },
  {
    id: 5,
    name: `Git`,
    description: `I have a deep understanding of Git and of other VCSes that are essential for software development and helps me to handle various releases of my codes. And to manage all my Git repositories i´m using GitHub`,
    percentage: 90,
    src: `../../img/git.png`
  },
  {
    id: 6,
    name: `Figma`,
    description: `Being a frontend developer means to be a web designer in a manner and leads to adeal with design on a daily basis. And among all the user interface design tools, Figma is my best friend, because it´s a cross platform that's free and web based and permits multiplayer and live collaboration.`,
    percentage: 90,
    src: `../../img/figma.png`
  },
]

export const advantagesServices = [
    {
      name: `Fast`,
      description: `Minimization of the site load time that allows to rank it high in the search results is one of my major aims`,
      id: 1,
    },
    {
      name: `Responsive`,
      description: `My websites look good on all devices and adjust for different screen sizes`,
      id: 2,
    },
    {
      name: `User-friendly`,
      description: `My highest priority is to create user-friendly navigation  and intuitive UX/UI`,
      id: 3,
    },
    {
      name: `Optimized`,
      description: `A website code optimization is what I pay attention to improve a website’s ability to drive business goals`,
      id: 4,
    },
]

export const projectsInfo = [
  {
    id: 1,
    name: `Cat Energy`,
    description: `Cat Energy is the online store (e-commerce website) that helps you to choose and order a suitable feeding system for your cat. The design looks simple and milimanistic, but at the same time it is not as easy as it might seem at first glance, as you need to create an uncluttered informative interface. The site consists of the following pages: home page, product catalog and program selection form. There are mobile, tablet and desktop versions, styled with flexboxes and grids. Good practices in terms of accessibility, SEO, performance are also applied. Cat Energy is my gradution project of the course "HTML && CSS. Adaptive Website Coding and Automatation". `, 
    website: `https://alexkuchinskaya.github.io/cat-energy/`,
    technology: `HTML, CSS, BEM, Gulp, Less, Git, Adaptive Layout, Retinized graphics, Website optimization. Cross-browser compatibility: Chrome, Firefox, Safari`,
    cardPicture: `../../img/project-cat-energy.jpg`,
    images: [`../../img/cat-energy-index-desktop.png`, `../../img/cat-energy-index-tablet.png`, `../../img/cat-energy-index-mobile.png`, `../../img/adaptive.png`],
  },
  {
    id: 2,
    name: `Sedona`,
    description: `Sedona is a housing search website in a small American town in Arizona. There are two pages: home page and hotel page. The project can show off some distinctive features. There are 2 interactive elements in this project: map and popup with a booking form. Besides, you can also find a filter and an implementation of non-standard form elements on a hotel page. Website styled with flexboxes and grid layouts. As the the task was to make a fixed layout, the website is not responsive for now, but potentially it can be flexible.`, 
    website: `https://alexkuchinskaya.github.io/cat-energy/`,
    technology: `HTML / CSS, Git, Website optimization. Cross-browser compatibility: Chrome, Firefox, Safari`,
    cardPicture: `../../img/projects-sedona.jpg`,
    images: [`../../img/sedona.jpg`, `../../img/sedona-hotels.jpg`, `../../img/first-level.jpg`],
  },
  {
    id: 3,
    name: `Arcadia Redux`,
    description: `heyehehe`, 
    website: `https://avto-moto-kuchinskaya.vercel.app/`,
    technology: `HTML / CSS, Gulp, Sass, Git, Adaptive Layout, Retinized graphics, Website optimization. Cross-browser compatibility: Chrome, Firefox, Safari`,
    cardPicture: `../../img/project-arcadia-redux.jpg`,
    images: [`../../img/arcadia-redux-desktop.jpg`, `../../img/arcadia-redux-mobile.jpg`],
  },
  {
    id: 4,
    name: `Big Trip`,
    description: `heyehehe`, 
    website: `https://avto-moto-kuchinskaya.vercel.app/`,
    technology: `HTML / CSS, React, Webpack, Git, Website optimization.`,
    cardPicture: `../../img/big-trip.jpg`,
    images: [`../../img/cat-energy-index-desktop.png`, `../../img/cat-energy-index-tablet.png`, `../../img/cat-energy-index-mobile.png`],
  },
  {
    id: 5,
    name: `What to watch`,
    description: `heyehehe`,
    website: `https://avto-moto-kuchinskaya.vercel.app/`,
    technology: `HTML / CSS, React, Webpack, Git, Website optimization.`,
    cardPicture: `../../img/what-to-watch.jpg`,
    images: [`../../img/cat-energy-index-desktop.png`, `../../img/cat-energy-index-tablet.png`, `../../img/cat-energy-index-mobile.png`],
  },
  {
    id: 6,
    name: `Avto Moto`,
    description: `heyehehe`, 
    website: `https://avto-moto-kuchinskaya.vercel.app/`,
    technology: `HTML / CSS, Adaptive Layout, React, Create React App, Git, Website optimization. Cross-browser compatibility: Chrome, Firefox, Safari`,
    cardPicture: `../../img/project-avto-moto.jpg`,
    images: [`../../img/avto-moto.jpg`, `../../img/avto-moto-tablet.jpg`, `../../img/avto-moto-mobile.jpg`, `../../img/avto-moto-slide.jpg`],
  },
  {
    id: 7,
    name: `Liga Bank`,
    description: `heyehehe Expressso is a web development project created to develop a online shooping website for buying electronical products.`, 
    website: `https://liga-bank-react-kuchinskaya.vercel.app/`, 
    technology: `HTML / CSS, Adaptive Layout, React, Create React App, Git, Website optimization. Cross-browser compatibility: Chrome, Firefox, Safari`,
    cardPicture: `../../img/project-liga.jpg`,
    images: [`../../img/liga-desktop-1.jpg`, `../../img/liga-desktop-2.jpg`, `../../img/liga-desktop-3.jpg`, `../../img/liga-desktop-popups.jpg`, `../../img/liga-desktop-1.jpg`, `../../img/liga-tablet-1.jpg`,`../../img/liga-tablet-2.jpg`,`../../img/liga-tablet-3.jpg`,`../../img/liga-tablet-popups.jpg`, `../../img/liga-mob-1.jpg`, `../../img/liga-mob-2.jpg`, `../../img/liga-mob-3.jpg`, `../../img/liga-mob-popups.jpg`],
  },
  {
    id: 8,
    name: `Guitar Shop`,
    description: `Guitar Shop is a shopping website (E-Commerce website). It was built for selling of guitars online and managing the shopping cart items and providing them better facilities for the user like adding items, removing items, increase or decrease item quantity, guitar filtering and sorting ADD PAGINATION. Depending on the number of products matching the parameters specified in the filter, the number of pages in the pagination changes. The guitars can be sorted by popularity (number of reviews) and price in the catalog section, while the guitar filter includes: price, guitar type and number of strings. The website consists of the following pages: main page where you will find catalog of the guitars and the shopping cart page. There are mobile, tablet and desktop versions, styled with flexboxes and grids. The project meets all the quality criteria established by the client (check this link).
    You can also find several modals that are open when the user interactes with the website like adding/removing the items to/from the basket.`, 
    website: `https://guitar-shop-react-kuchinskaya.vercel.app/`,
    technology: `HTML / CSS, Adaptive Layout, React, Create React App, Git, Website optimization. Cross-browser compatibility: Chrome, Firefox, Safari`,
    cardPicture: `../../img/project-guitat.jpg`,
    images: [`../../img/cat-energy-index-desktop.png`, `../../img/cat-energy-index-tablet.png`, `../../img/cat-energy-index-mobile.png`],
  },
]