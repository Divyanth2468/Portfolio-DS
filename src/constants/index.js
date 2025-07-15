import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate and versatile full-stack developer with 1 plus years of professional experience in building robust and scalable web applications. I specialize in backend technologies such as Node.js, GoLang, and databases like PostgreSQL, MySQL, and MongoDB. In addition to my backend expertise, I have solid experience in front-end development using React. My goal is to create innovative and efficient solutions that drive business growth, enhance user experiences, and solve complex problems. I am also deeply passionate about data science, particularly machine learning, and continuously strive to expand my skills in this field.`;

export const ABOUT_TEXT = `With a diverse skill set and a strong foundation in full-stack development, I thrive in collaborative environments where I can contribute to the success of cross-functional teams. My experience spans the entire development lifecycle, from planning and architecture to deployment and optimization. I am dedicated to creating high-performance applications and enjoy tackling challenges that allow me to grow as a developer. Outside of coding, I enjoy traveling, exploring new cultures, and gaining fresh perspectives.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Present",
    role: "Full Stack Developer",
    company: "E-PRO TaxFilr Technology Solutions Pvt. Ltd.",
    description: `I led the development and deployment of a comprehensive web application for TaxFilr, architecting both front-end and back-end components. I significantly optimized database queries and back-end logic to boost efficiency and response times, while also developing and integrating robust APIs. I collaborated with the team on continuous improvements, bug fixes, and feature enhancements, conducting code reviews and maintaining thorough documentation.`,
    technologies: ["Golang", "React.js", "PostgreSQL.js", "PostMan"],
  },
  {
    year: "July 2023 - Sep 2023",
    role: "Full Stack Developer",
    company: "Franklin Templeton Investments",
    description: `I engineered and deployed a sophisticated web application on FTI’s server infrastructure, meticulously ensuring its performance, security, and scalability. I also collaborated closely with the team to design and implement both front-end and back-end components, delivering an intuitive and feature-rich user experience.`,
    technologies: ["Flask", "Vite.js", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "🔍 Full-Text Search Engine",
    image: project1,
    description:
      "A fast and lightweight text search engine built in Go to index and search large document datasets like Wikipedia abstracts.",
    technologies: ["Go", "XML/TTL Parsing", "Gzip"],
    link: "https://github.com/Divyanth2468/text-search-go",
  },
  {
    title: "Go Web Chat App",
    image: project2,
    description:
      "A real-time web chat platform built using Go and WebRTC DataChannels, enabling seamless peer-to-peer text messaging over the browser with low latency and no server relay.",
    technologies: ["Go", "WebRTC", "HTML/CSS", "JavaScript"],
    link: "https://github.com/Divyanth2468/go-chat-app",
  },
  {
    title: "Go Job Scheduler",
    image: project4,
    description:
      "A cloud-native, backend-only job scheduler written in Go. It supports scheduling Shell, HTTP, and AWS Lambda tasks using cron expressions. It features PostgreSQL persistence, retry support, and is designed for serverless environments with a modular architecture.",
    technologies: [
      "Go",
      "PostgreSQL",
      "AWS Lambda",
      "Serverless-ready",
      "Modular Backend",
    ],
    link: "https://github.com/Divyanth2468/Go-Job-Scheduler",
  },
  {
    title: "📝 CLI Task Manager in Go",
    image: project3,
    description:
      "A lightweight and efficient command-line task manager built in Go. This tool allows users to add, view, complete, and delete tasks with a simple interface—perfect for productivity on the terminal.",
    technologies: ["Go", "JSON", "Command Line Interface"],
    link: "http://github.com/Divyanth2468/CLI-TaskManager-Go",
  },
];

export const CONTACT = {
  phoneNo: "+91 7013918815",
  email: "uppuluridivyanth@gmail.com",
};
