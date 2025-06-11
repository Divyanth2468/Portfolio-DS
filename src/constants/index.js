import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "Full Stack Developer",
    company: "E-PRO TaxFilr Technology Solutions Pvt. Ltd.",
    description: `I led the development and deployment of a comprehensive web application for TaxFilr, architecting both front-end and back-end components. I significantly optimized database queries and back-end logic to boost efficiency and response times, while also developing and integrating robust APIs. I collaborated with the team on continuous improvements, bug fixes, and feature enhancements, conducting code reviews and maintaining thorough documentation.`,
    technologies: ["Node.js", "React.js", "PostgreSQL.js", "PostMan"],
  },
  {
    year: "July 2024 - Dec 2024",
    role: "Full Stack Developer Intern",
    company: "E-PRO TaxFilr Technology Solutions Pvt. Ltd.",
    description: `I assisted in developing RESTful APIs, speeding up development cycles and frontend integration. I also collaborated with senior developers to resolve app issues and optimized database schemas for improved data retrieval.`,
    technologies: ["Node.js", "React.js", "PostgreSQL.js"],
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
    title: "📝 CLI Task Manager in Go",
    image: project3,
    description:
      "A lightweight and efficient command-line task manager built in Go. This tool allows users to add, view, complete, and delete tasks with a simple interface—perfect for productivity on the terminal.",
    technologies: ["Go", "JSON", "Command Line Interface"],
    link: "http://github.com/Divyanth2468/CLI-TaskManager-Go",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Js", "Flask", "Mongodb"],
    link: "https://github.com/Divyanth2468/My-Blog/",
  },
];

export const CONTACT = {
  phoneNo: "+91 7013918815",
  email: "uppuluridivyanth@gmail.com",
};
