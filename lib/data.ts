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
  SiExpo,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: SiReact, text: "React" },
  { icon: SiReact, text: "React Native" },
  { icon: SiExpo, text: "Expo" },
  { icon: SiNextdotjs, text: "Next" },
  { icon: SiTailwindcss, text: "Tailwind" },
  { icon: SiRedux, text: "Redux" },
  { icon: SiFlask, text: "Flask" },
  { icon: SiHtml5, text: "HTML5" },
  { icon: SiCss3, text: "CSS3" },
  { icon: SiNodedotjs, text: "Node" },
  { icon: SiExpress, text: "Express" },
  { icon: SiPython, text: "Python" },
  { icon: BiLogoPostgresql, text: "Postgres" },
  { icon: SiMongodb, text: "MongoDB" },
  { icon: SiAmazonaws, text: "AWS" },
  { icon: SiOpenai, text: "OpenAI" },
  { icon: SiSupabase, text: "Supabase" },
  { icon: SiFirebase, text: "Firebase" },
  { icon: SiGit, text: "Git" },
  { icon: SiDocker, text: "Docker" },
  { icon: SiPrisma, text: "Prisma" },
  { icon: SiBootstrap, text: "Bootstrap" },
  { icon: SiMui, text: "MUI" },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "ConverseBiz",
    description:
      "A business communication & AI-driven automation platform built for modern teams.",
    link: "https://conversebiz.com",
  },
  {
    title: "FlashUI (Component Library)",
    description:
      "A custom UI component library built for fast product development.",
    link: "https://component-library-git-main-dawa-sherpas-projects.vercel.app",
  },
  {
    title: "Pic2Ans",
    description:
      "AI-powered tool that extracts answers from images using OCR + LLM.",
    link: "https://pic2ans.vercel.app",
  },
  {
    title: "Nepali Handwriting OCR",
    description:
      "A CRNN-based deep learning model for Nepali handwritten text recognition.",
    link: "https://github.com/dawasherpa-ui", // replace if you want
  },
  {
    title: "VoteHub",
    description:
      "A voting & decision-support platform to help users choose the best option.",
    link: "https://votehub-rho.vercel.app",
  },
  {
    title: "Multi Dashboard",
    description: "A CMS that manages content for multiple websites.",
    link: "https://github.com/",
  },
  {
    title: "ChatBot",
    description: "Chatbot built using LangChain, Chroma DB, and OpenAI.",
    link: "https://github.com/dawasherpa-ui/chatbot.git",
  },
  {
    title: "Scrapping Bot",
    description: "Scraper built to gather real estate lead data.",
    link: "https://github.com/dawasherpa-ui/FastPeopleScraper",
  },
  {
    title: "Instagram UnFollower Bot",
    description:
      "Automation tool that unfollows Instagram users automatically.",
    link: "https://github.com/dawasherpa-ui/Instagram-Unfollower",
  },
  {
    title: "Dot Domain",
    description: "Domain availability checking tool.",
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
  {
    company: "Zylux IT Solution",
    logo: "/work/zylux.png",
    position: "Full Stack Developer",
    description:
      "Building production-grade systems, dashboards, automation tools, and client projects.",
    years: "Sept, 2024 - Present",
  },
  {
    company: "Nepal Media Network",
    logo: "/work/nepalmedia.png",
    position: "Full Stack Developer",
    description:
      "Developing internal tools, automation workflows, and digital solutions for Nepal Media Network.",
    years: "2023 - Present",
  },
  {
    company: "WebX",
    logo: "/work/webx.svg",
    position: "FullStack Developer",
    description:
      "Built CMS, eCommerce systems, dashboards and handled server deployments.",
    years: "Mar, 2024 - Sept, 2024",
  },
  {
    company: "Freelance",
    logo: "/work/freelance.jpg",
    position: "Freelance Developer",
    description:
      "Delivered AI tools, automation systems, and full-stack solutions for clients worldwide.",
    years: "Ongoing",
  },
  {
    company: "Self Learning",
    logo: "/work/self.jpeg",
    position: "Self-Taught Developer",
    description:
      "Continuously expanding skills in AI, machine learning, automation, and full-stack development.",
    years: "Ongoing",
  },
];

export const aboutYou = {
  name: "Dawa Sherpa",
  description:
    "👋 Hi, I'm Dawa Sherpa, a Fullstack & AI Developer with 4 years of experience. I’ve built production-ready applications for companies and clients, including automation tools, CMS platforms, dashboards, and AI-powered products. I also build my own platforms like ConverseBiz, FlashUI, and Pic2Ans. Passionate about building meaningful digital experiences with modern AI and engineering.",
  yearsOfExperience: "4 yrs",
  location: "Nepal, Kathmandu",
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
