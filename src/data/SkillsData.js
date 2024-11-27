// skillsData.js
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNode, FaMicrosoft, FaAws, FaGit, FaGithub, FaBitbucket, FaPlug } from "react-icons/fa";

const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: <FaReact size={40} /> },
            { name: "JavaScript", icon: <FaJsSquare size={40} /> },
            { name: "HTML5", icon: <FaHtml5 size={40} /> },
            { name: "CSS3", icon: <FaCss3Alt size={40} /> }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNode size={40} /> },
            { name: "ASP.NET", icon: <FaMicrosoft size={40} /> }
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "SQL", icon: <FaPlug size={40} /> }
        ]
    },
    {
        category: "Version Control",
        skills: [
            { name: "Git", icon: <FaGit size={40} /> },
            { name: "GitHub", icon: <FaGithub size={40} /> },
            { name: "Bitbucket", icon: <FaBitbucket size={40} /> }
        ]
    },
    {
        category: "Cloud Services",
        skills: [
            { name: "AWS", icon: <FaAws size={40} /> }
        ]
    },
    {
        category: "Other Tools",
        skills: [
            { name: "Redux", icon: <FaReact size={40} /> },
            { name: "REST APIs", icon: <FaPlug size={40} /> },
        ]
    }
];

export default skillsData;
