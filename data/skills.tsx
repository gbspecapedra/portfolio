import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiJamstack,
  SiJest,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

export const skills = [
  { id: 1, title: "HTML", icon: <FaHtml5 size={32} /> },
  { id: 2, title: "CSS", icon: <FaCss3 size={32} /> },
  { id: 3, title: "Javascript", icon: <FaJs size={32} /> },
  { id: 4, title: "Typescript", icon: <SiTypescript size={28} /> },
  { id: 5, title: "React", icon: <FaReact size={32} /> },
  { id: 6, title: "Next.js", icon: <RiNextjsFill size={34} /> },
  { id: 7, title: "Jamstack", icon: <SiJamstack size={28} /> },
  { id: 8, title: "Chakra UI", icon: <SiChakraui size={28} /> },
  { id: 9, title: "Tailwindcss", icon: <SiTailwindcss size={32} /> },
  { id: 10, title: "Figma", icon: <FaFigma size={28} /> },
  { id: 11, title: "GIT", icon: <FaGitAlt size={32} /> },
  { id: 12, title: "jest", icon: <SiJest size={28} /> },
  {
    id: 13,
    title: "VS Code",
    icon: <SiVisualstudiocode size={28} />,
  },
];
