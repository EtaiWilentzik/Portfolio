// components/TechStack.jsx

import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaLinux,
  FaDocker,
  FaWindows,
  FaLayerGroup,
  FaNetworkWired,
  FaNode,
  FaGolang,
  FaCuttlefish,
} from "react-icons/fa6";

import { CgCPlusPlus } from "react-icons/cg";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";


export const techStack = [
  {
    category: "Languages & Fundamentals",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "C", icon: FaCuttlefish },
      { name: "C++", icon: CgCPlusPlus },
      { name: "Go", icon: FaGolang },
      { name: "C#", icon: TbBrandCSharp },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "React", icon: FaReact },
      { name: "Node.js ", icon: FaNode },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "HTML5", icon: FaHtml5 }, 
      { name: "CSS3", icon: FaCss3Alt },

    ],
  },
  {
    category: "Platforms & DevOps",
    items: [
       { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: DiMongodb },
      { name: "AWS", icon: FaAws },
      { name: "Linux", icon: FaLinux },
      { name: "Windows", icon: FaWindows },
      { name: "OSI model", icon: FaLayerGroup },
      { name: "TCP/IP", icon: FaNetworkWired },
    ],
  },
];

