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

// Company logos served from the public/ folder
const fatserLogo = "/img/fatser_logo.jpg";
const highscoreLogo = "/img/highscore_logo.jpg";
const lovemeetLogo = "/img/lovemeetapp_logo.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "iGaming & Web3 Engineer",
    icon: creator,
  },
  {
    title: "AI / RAG Engineer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
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
    title: "Backend Engineer — Data, AI & Search",
    company_name: "Fatser AS (via Deel)",
    icon: fatserLogo,
    iconBg: "#ffffff",
    date: "2026 - Present",
    points: [
      "Own the multi-tenant PostgreSQL schema and Row-Level Security (RLS) design for a marketplace spanning 20+ vertical portals on shared infrastructure, enforcing tenant isolation at the database layer.",
      "Architect the AI orchestration layer that routes tasks across multiple model providers (incl. the Anthropic Claude API), manages context windows, and enforces per-tenant prompt boundaries.",
      "Build tenant-aware semantic search on pgvector with 1024-dim Voyage AI embeddings, filtering by portal at retrieval time so results never leak across tenants.",
      "Implement an API-middleware cost-protection and quota system on Upstash Redis, enforcing hard token and request limits before any model call.",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company_name: "highzcore.tech",
    icon: highscoreLogo,
    iconBg: "#ffffff",
    date: "2018 - Present",
    points: [
      "Delivered 20+ production applications for international clients across iGaming, AI, fintech, and SaaS, owning architecture through to deployment.",
      "Architected a custom real-money casino platform with provably-fair games, real-time WebSocket multiplayer, transaction-safe wallets, and operator admin dashboards.",
      "Built a multi-market algorithmic trading bot on MT5/Deriv covering 4 Volatility Index markets, running 10 optimised strategies with 60–71% backtested win rates.",
      "Shipped a production RAG pipeline integrating the Claude API with a Pinecone vector store, Function Calling, PII filtering, and token-aware context management.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Lovemeetapp.com",
    icon: lovemeetLogo,
    iconBg: "#ffffff",
    date: "2023 - 2026",
    points: [
      "Built and maintained the full stack of a dating and social-matchmaking web platform on Next.js, Node.js, and MongoDB/Supabase.",
      "Developed user onboarding and authentication, profile and matching features, and real-time in-app messaging.",
      "Owned deployment, performance optimisation, and ongoing feature delivery.",
    ],
  },
  {
    title: "Senior iGaming Frontend Developer — Contract",
    company_name: "Multiple International Clients",
    icon: nanoPort,
    iconBg: "#1d1836",
    date: "2020 - 2023",
    points: [
      "Led frontend development for multiple live casino and sports-betting platforms.",
      "Integrated third-party game providers (Pragmatic Play, Evolution Gaming, Spribe, Hacksaw) via API.",
      "Built real-time WebSocket game engines for crash games, live-dealer tables, and slot machines.",
      "Implemented KYC flows, responsible-gambling tools, and operator admin dashboards.",
    ],
  },
  {
    title: "Full-Stack Developer — Freelance",
    company_name: "Independent",
    icon: creator,
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
      "Delivered eCommerce, marketplace, and business-directory platforms for clients.",
      "Built hireusalocal.com — a multi-role marketplace on Supabase with Postgres Row-Level Security and role-based dashboards.",
      "Built earnestmall.com — a multi-vendor eCommerce platform with integrated payment processing.",
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
    name: "Provably-Fair Gaming Platform",
    description:
      "8-game real-money multiplayer platform (Texas Hold'em, Baccarat, Slots, Mines, Lottery) with a Web3 provably-fair system on Solana + HMAC-SHA256 DRBG, multi-level agent hierarchy, atomic MongoDB wallet, and enterprise risk controls — delivered to Telegram Mini App, iOS, and Android.",
    tags: [
      {
        name: "Solana",
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
        name: "MongoDB",
        color: "white-text-gradient",
      },
    ],
    image: nanoPort,
    source_code_link: "https://nanogame.io/",
  },
  {
    name: "Algorithmic Trading Bot — MT5 + Deriv",
    description:
      "Multi-market trading system running live on a Google Cloud VM across 4 Volatility Index markets with 10 backtested strategies (60–71% win rates). Built with Python, the MT5 API, MongoDB, and real-time execution.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MT5 API",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "RAG AI Coaching Platform",
    description:
      "Production retrieval-augmented coaching platform built on the Claude API with a Pinecone vector store, Function Calling, PII filtering, structured JSON output, and tenant-aware embeddings.",
    tags: [
      {
        name: "Claude API",
        color: "blue-text-gradient",
      },
      {
        name: "Pinecone",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Goodtings Mobile App",
    description:
      "React Native consumer app with full App Store and Google Play deployment, RevenueCat in-app purchases, push notifications, and persistent local storage.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "white-text-gradient",
      },
      {
        name: "RevenueCat",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cyclix Games",
    description:
      "Crypto casino platform with provably-fair slots, crash, and roulette, real-time WebSocket multiplayer, and Web3 wallet integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nest Js",
        color: "green-text-gradient",
      },
      {
        name: "Web3 js",
        color: "pink-text-gradient",
      },
      {
        name: "PixiJS",
        color: "white-text-gradient",
      },
    ],
    image: cyclix,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "Premium auto-parts and accessories marketplace where enthusiasts and professionals can find everything they need to upgrade and repair their vehicles.",
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
];

export { services, technologies, experiences, testimonials, projects };
