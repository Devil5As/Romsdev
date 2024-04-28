// Exemple de structure de données pour les projets
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
export const projectsData = [
  {
    id: 1,
    title: "Enchante'Voix",
    image: "/EnchanteVoix.png", // Chemin vers l'image du projet
    description: "Site Vitrine, Cours de chant.",
    link: "https://enchante-voix.vercel.app/",
    frameworks: ["React", "Tailwindcss"],
    icon: [
      <FaReact key="react1" />, 
      <SiTailwindcss key="tailwindcss1" />
    ]
  },
  {
    id: 2,
    title: "Projet 2",
    image: "/thumb2.jpg",
    description: "Une brève description du projet 2.",
    link: "https://lien-vers-le-projet2.com",
    frameworks: ["React", "Node.js", "MongoDB"],
    icon: [
      <FaReact key="react2" />, 
      <FaNodeJs key="node2" />, 
      <SiMongodb key="mongodb2" />
    ]
  },
  {
    id: 3,
    title: "Projet 3",
    image: "/thumb3.jpg",
    description: "Une brève description du projet 3.",
    link: "https://lien-vers-le-projet3.com",
    frameworks: ["React", "Node.js", "MongoDB"],
    icon: [
      <FaReact key="react3" />, 
      <FaNodeJs key="node3" />, 
      <SiMongodb key="mongodb3" />
    ]
  },
  {
    id: 4,
    title: "Projet 4",
    image: "/thumb4.jpg",
    description: "Une brève description du projet 4.",
    link: "https://lien-vers-le-projet4.com",
    frameworks: ["React", "Node.js", "MongoDB"],
    icon: [
      <FaReact key="react4" />, 
      <FaNodeJs key="node4" />, 
      <SiMongodb key="mongodb4" />
    ]
  },
  // Ajoutez d'autres projets selon le même modèle
];