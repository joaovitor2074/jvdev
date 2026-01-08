// techs.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiNestjs,
} from "react-icons/si";

export const TECHS = {
  html: {
    id: "html",
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  css: {
    id: "css",
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  js: {
    id: "js",
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
  },
  ts: {
    id: "ts",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  react: {
    id: "react",
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  node: {
    id: "node",
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
  },
  express: {
    id: "express",
    name: "Express",
    icon: SiExpress,
    color: "#9CA3AF",
  },
  nest: {
    id: "nest",
    name: "NestJS",
    icon: SiNestjs,
    color: "#E0234E",
  },
  tailwind: {
    id: "tailwind",
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  vercel: {
    id: "vercel",
    name: "Vercel",
    icon: SiVercel,
    color: "#E5E7EB",
  },
  git: {
    id: "git",
    name: "Git",
    icon: FaGit,
    color: "#F05032",
  },
  github: {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
    color: "#FFFFFF",
  },
};
