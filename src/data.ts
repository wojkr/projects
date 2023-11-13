export const projects = [
  {
    index: 1,
    name: "NOMAD HIVE",
    order: 2,
    shortDescription:
      "An online marketplace app built with React, Next.js, Prisma, and MongoDB",
    description:
      "This is an online marketplace app that connects travelers with short-term homestays and experiences worldwide. Built with React, Next.js, Prisma, and MongoDB, this platform provides a fast, secure, and scalable experience for both travelers and hosts.",
    url: "/#1",
    link: "https://nomad-hive-marketplace.vercel.app/",
    img: "https://nomad-hive-marketplace.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75",
    stack: ["React", "Next", "Prisma"],
    backgroundLayout: [
      "animation fixed left-0 top-0 z-0 w-[50%] h-[29%]",
      "animation fixed left-[50%] top-0 z-0 h-[100%] w-[50%]",
      "animation fixed left-0 top-[29%] h-[71%] w-[50%]",
      "animation fixed left-[50%] top-[100%] z-0 h-[0%] w-[50%]",
    ],
    circleColor: {
      colorR1: "#F5E9BE",
      colorR2: "#174C4F",
      colorC1: "#ff9666",
    },
  },
  {
    index: 2,
    name: "SWEET APP",
    order: 3,
    shortDescription:
      "Full stack website with interactive Map, authentication, user accounts, desserts section (CRUD)",
    description: `
    Full stack website with interactive Map, authentication, user
    accounts, desserts section (CRUD) with ratings & reviews.
    Utilizes EJS, MapBoxAPI, Cloudinary, Helmet, Sanitize-HTML,
    Joi for validation.  `,
    url: "/#2",
    link: "https://sweet-app-try.onrender.com/",
    img: "https://raw.githubusercontent.com/wojkr/projects/main/public/sweet.webp",
    stack: ["Node.js", "Express.js", "MongoDB", "APIs", "EJS"],
    backgroundLayout: [
      "animation fixed left-0 top-0 z-0 w-[65%] h-[75%]",
      "animation fixed left-[65%] top-0 z-0 h-[25%] w-[35%]",
      "animation fixed left-0 top-[75%] h-[25%] w-[65%]",
      "animation fixed left-[65%] top-[25%] z-0 h-[75%] w-[35%]",
    ],
    circleColor: { colorR1: "#1E5562", colorR2: "#cc1b28", colorC1: "#1E5562" },
    serverUrl: "https://sweet-app-try.onrender.com/desserts",
  },
  {
    index: 3,
    name: "BLOCK BREAKER",
    order: 4,
    shortDescription:
      "Game built from the scratch. 7game modes, 10 levels and 11 bonuses. Advanced collision model",
    description: `
    Block-Breaker is a simple game built from scratch using VanillaJS and CSS. It features 10 levels, 11 bonuses, 7 game modes, and control buttons for touchscreen devices. This was my first project. `,
    url: "/#3",
    link: "https://wojkr.github.io/block-breaker/",
    img: "https://raw.githubusercontent.com/wojkr/projects/main/public/block.webp",
    stack: ["pureCSS", "vanillaJS"],
    backgroundLayout: [
      "animation fixed left-0 top-0 z-0 w-[33%] h-[50%]",
      "animation fixed left-[33%] top-0 z-0 h-[100%] w-[67%]",
      "animation fixed left-0 top-[50%] h-[50%] w-[33%]",
      "animation fixed left-[33%] top-[100%] z-0 h-[0%] w-[67%]",
    ],
    circleColor: { colorR1: "#4b8695", colorR2: "#4b8695", colorC1: "#ff5662" },
  },
  {
    index: 4,
    name: "SOLAR SYSTEM",
    order: 5,
    shortDescription: "An animation of the solar system without JavaScript.",
    description: `An animation of the solar system without JavaScript. My first go with SASS. Showcased creativity in design.`,
    url: "/#4",
    link: "https://wojkr.github.io/pureCSS-solar-system/",
    img: "https://raw.githubusercontent.com/wojkr/projects/main/public/solar.webp",
    stack: ["CSS", "SASS", "problemSolving"],
    backgroundLayout: [
      "animation fixed left-0 top-0 z-0 w-[70%] h-[33%]",
      "animation fixed left-[70%] top-0 z-0 h-[33%] w-[30%]",
      "animation fixed left-0 top-[33%] h-[67%] w-[70%]",
      "animation fixed left-[70%] top-[33%] z-0 h-[67%] w-[30%]",
    ],
    circleColor: { colorR1: "#F4F3F0", colorR2: "#D6C287", colorC1: "#6477a5" },
  },
  {
    index: 5,
    name: "RIDE RITE",
    order: 1,
    shortDescription:
      "React Responsive Fullstack Ecommerce App, with Strapi CMS",
    description: `This online bicycle shop simulation allows users to easily browse through a catalog of products, add them to their cart, and securely make payments using the Stripe payment processing platform. I've also included advanced validation tools like Formik and Yup to ensure the safety and security of user information.`,
    url: "/#5",
    link: "https://wojkr.github.io/ride-rite-client",
    img: "https://raw.githubusercontent.com/wojkr/projects/main/public/ride.webp",
    stack: ["React", "Redux", "StrapiCMS", "StripePayment", "MUI"],
    backgroundLayout: [
      "animation fixed left-0 top-0 z-0 w-[50%] h-[75%]",
      "animation fixed left-[50%] top-0 z-0 h-[33%] w-[50%]",
      "animation fixed left-0 top-[75%] h-[25%] w-[50%]",
      "animation fixed left-[50%] top-[33%] z-0 h-[67%] w-[50%]",
    ],
    circleColor: { colorR1: "#FFFFFF", colorR2: "#CFF1F8", colorC1: "#CFF1F8" },
    serverUrl: "https://ride-rite-server.onrender.com/api/items",
  },
];
