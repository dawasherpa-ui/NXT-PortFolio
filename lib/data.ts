import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
  SiFlask,
  SiOpenai,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiFlask,
    text: "Flask",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: BiLogoPostgresql,
    text: "Postgress",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiOpenai,
    text: "OpenAi",
  },
  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Multi Dashboard",
    description: "Multi Dashboard was a cms that can handle contents of multiple websites.",
    link: "https://github.com/",
  },
  {
    title: "VoteHub",
    description: "One of my idea with the vision to help user to choose best option",
    link: "https://github.com/dawasherpa-ui/VoteHub",
  },
  {
    title: "ChatBot",
    description: "This is a chatbot created using langchain and OpenAi with Chroma.",
    link: "https://github.com/dawasherpa-ui/chatbot.git",
  },
  {
    title: "Scrapping Bot",
    description: "This program was for Scrapping data for realestate agent.",
    link: "https://github.com/dawasherpa-ui/FastPeopleScraper",
  },
  {
    title: "UnFollowing bot",
    description: "This program was built to automatically unfollow users in Instagram.",
    link: "https://github.com/dawasherpa-ui/Instagram-Unfollower",
  },
  {
    title: "Dot Domain",
    description: "Dot Domain is a simple domain available checking site.",
    link: "https://dot-domain.vercel.app/",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  // {
  //   company: "Company 3",
  //   logo: "/company-logo.png",
  //   position: "Company 3 Position",
  //   description: "Write briefly on your experience working at Company 3.",
  //   years: "Apr, 2022 - Aug, 2023",
  // },
  {
    company: "WebX",
    logo: "/work/webx.svg",
    position: "FullStack",
    description: "Built CMS, eCommerce platforms, dashboards, and portfolios. Managed server operations and developed end-to-end solutions.",
    years: "Mar, 2024 - Sept, 2024",
  },
  {
    company: "Freelance",
    logo: "/work/freelance.jpg",
    position: "Freelance Developer",
    description:
      "Developed AI solutions, automation tools, and full-stack applications for clients, delivering high-quality projects on time.",
    years: "Ongoing",
  },
  {
    company: "Self Learning",
    logo: "/work/self.jpeg",
    position: "Self-Taught Developer",
    description:
      "Constantly exploring the latest technologies and expanding knowledge in AI, automation, and full-stack development.",
    years: "Ongoing",
  },
];

export const aboutYou = {
  name: "Dawa Sherpa",
  description:
    "👋 Hi, I'm Dawa Sherpa, a Fullstack and AI Developer. I have built many projects and leveled up my skills while working in various companies. I work on personal cool projects like AI-related chatbots, Facebook chatbots, scrapers, and AI-driven automations. I also complete software projects for clients and have successfully delivered many. It's been 3 years of immersing myself in the world of development.",
  yearsOfExperience: "3 yrs",
  location: "Nepal,Kathmandu",
  email: "jamudawa2@gmail.com",
};

export const logoText = "@dawasherpa";

export const websiteMetadata = {
  title: "Dawa Sherpa | Fullstack & AI Developer",
  description:
    "👋 Hey, Dawa Sherpa here. I'm a Fullstack and AI Developer. Welcome to my portfolio/blog.",
};

export const marketingHeadlines = {
  mainHeadline: "I convert YOUR digital vision into reality.",
  subHeadline: "Focus. Consistent. Discipline.",
};
