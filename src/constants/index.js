
import { c } from 'maath/dist/index-43782085.esm';
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  ezcryptox,
  menu,
  close,
  css,
  carrent,
  cyclix,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  nanoPort,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  cyclixLogo,
} from '../assets'


// Import Tekisky separately
import nano from "../assets/company/logo_small.webp";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Block Chain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Nano Games",
    icon: nano,
    iconBg: "black",
    date: "Jan 2020 - 2023",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Designed and implemented provably-fair gaming systems utilizing advanced cryptographic techniques.",
      "Formulated all in-house games, guaranteeing their fairness through cryptographic generation of server seed, client seed, nonce, and hash seeds.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Cyclix Games",
    icon: cyclixLogo,
    iconBg: "rgb(29, 24, 54)",
    date: "Feb 2023 -2024",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Orchestrated end-to-end development of web applications, from Figma design to production deployment.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed all in-house games, ensuring their integrity through cryptographic generation of server seed, client seed, nonce, and hash seeds.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Ezcryptox Exchange",
    icon: ezcryptox,
    iconBg: "#383E56",
    date: "Feb 2024 - 2025",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Engineered and deployed scalable web applications utilizing React.js and Node.js.",
      "Conceptualized and developed decentralized applications, integrating blockchain technology to enhance user experiences..",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Victor proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Victor does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Victor optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "Svelte",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nano Games",
    description:
      "Nano Games is a web-based platform that allows users to play a variety of games, including slots, crash, and roulette, all while utilizing cryptocurrency for transactions.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Socket IO",
        color: "green-text-gradient",
      },
      {
        name: "PixiJS",
        color: "pink-text-gradient",
      },
      {
        name: "FabricJS",
        color: "white-text-gradient",
      },
      {
        name: "Payment Gateway",
        color: "white-text-gradient",
      },
      {
        name: "HTML5 Canvas",
        color: "green-text-gradient",
      },
    ],
    image: nanoPort,
    source_code_link: "https://nanogame.io/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cyclix Games",
    description:
      "Cyclix Games is a web-based platform that allows users to play a variety of games, including slots, crash, and roulette, all while utilizing cryptocurrency for transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket IO",
        color: "white-text-gradient",
      },
      {
        name: "Nest Js",
        color: "green-text-gradient",
      },
      {
        name: "FiberJS",
        color: "pink-text-gradient",
      },
      {
        name: "HTML5 Canvas",
        color: "white-text-gradient",
      },
      {
        name: "Web3 js",
        color: "pink-text-gradient",
      },
      {
        name: "PixiJS",
        color: "green-text-gradient",
      },
    ],
    image: cyclix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Morent",
    description:
      "More is a car renting website you can rent cars. Rent your Dream Car Around the World We provide the best car options. We have a wide range of cars to choose from, so you can find the perfect one for your needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "white-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
