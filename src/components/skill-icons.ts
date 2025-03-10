import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaDocker, FaAws, 
  FaGithub, FaGitlab, FaGit, FaSalesforce, FaSlack, FaJenkins,
  FaMicrosoft, FaLinux, FaPython, FaWindows
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMysql, SiPostgresql, 
  SiMongodb, SiGooglecloud, SiZendesk, SiIntercom, 
  SiMailchimp, SiHubspot, SiGo
} from 'react-icons/si';
import { BsCloud } from 'react-icons/bs';
import { GrTechnology } from 'react-icons/gr';

export const skillIcons = {
  "AI-ENGINEER": GrTechnology,
  "FULL-STACK-DEVELOPER": BsCloud,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "JavaScript": FaJs,
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNode,
  "Express": SiExpress,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Docker": FaDocker,
  "AWS": FaAws,
  "Azure": FaMicrosoft,
  "GCP": SiGooglecloud,
  "Jenkins": FaJenkins,
  "Git": FaGit,
  "GitHub": FaGithub,
  "GitLab": FaGitlab,
  "GoHighLevel": BsCloud,
  "Salesforce": FaSalesforce,
  "HubSpot": SiHubspot,
  "Zendesk": SiZendesk,
  "Intercom": SiIntercom,
  "Mailchimp": SiMailchimp,
  "Slack": FaSlack,
  "Go": SiGo,
  "Linux-Terminal": FaLinux,
  "Python": FaPython,
  "WSL": FaWindows,
} as const; 