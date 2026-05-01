import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Backend engineer with 2+ years of professional experience building distributed systems, event-driven pipelines, and search infrastructure. I specialise in Go and Python, working with databases like PostgreSQL, TimescaleDB, ClickHouse, and Redis, and infrastructure tools like RabbitMQ and Vespa Search. I have designed and delivered production systems end-to-end — from queue-based revenue engines to ML-powered content pipelines and real-time recommendation systems. I also build frontend interfaces using React when the work calls for it.`;

export const ABOUT_TEXT = `I thrive on replacing things that don't scale. At Manhattan Tech Ventures I built three production systems from scratch: a queue-based ad revenue engine, an ML pipeline that detects spoken language in video content with 96% accuracy, and a Vespa-powered recommendation layer that replaced manual database filtering across the entire content feed. I care about systems that are asynchronous, auditable, and designed to handle growth without rewrites. Outside of engineering, I enjoy travelling and picking up new perspectives wherever I can.`;

export const EXPERIENCES = [
  {
    year: "Jul 2025 - Present",
    role: "Backend Engineer",
    company: "Manhattan Tech Ventures",
    description: `Built three production systems end-to-end: a queue-based ad revenue pipeline consuming RabbitMQ events and syncing earnings across TimescaleDB, MySQL, and ClickHouse; a Vespa search and recommendation layer replacing manual database filtering across homefeed, discover, category, and similar-video endpoints; and an ML language detection pipeline using OpenAI Whisper and Silero VAD achieving 96% accuracy. Also built an admin portal with tools for Vespa document management, Redis cache invalidation, and feature flag control, and converted video/channel workflows to event-driven handlers.`,
    technologies: [
      "Go",
      "Python",
      "Vespa Search",
      "RabbitMQ",
      "TimescaleDB",
      "ClickHouse",
      "Redis",
      "MySQL",
      "PostgreSQL",
      "React.js",
    ],
  },
  {
    year: "Jan 2025 - Jul 2025",
    role: "Full Stack Developer",
    company: "E-PRO TaxFilr Technology Solutions Pvt. Ltd.",
    description: `Led end-to-end development of a tax filing web application, architecting both frontend and backend components. Optimised database queries and backend logic to improve response times and reduce server load under concurrent sessions. Developed REST APIs enabling robust frontend-backend communication, and conducted code reviews while maintaining technical documentation.`,
    technologies: ["Go", "React.js", "PostgreSQL", "Postman"],
  },
  {
    year: "Jul 2023 - Sep 2023",
    role: "Web Development Intern",
    company: "Franklin Templeton Investments",
    description: `Engineered and deployed a web application on FTI's server infrastructure, contributing to both frontend and backend components with a focus on performance and security. Collaborated cross-functionally with the engineering team to deliver a production-ready interface within the internship timeline.`,
    technologies: ["Flask", "Vite.js", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "ML Video Language Detection Pipeline",
    image: project1,
    description:
      "Built to catch content mislabelling on a video platform where users were selecting more languages than were actually spoken in their videos. Downloads HLS video segments, merges them via FFmpeg, runs Silero VAD to filter out silent or music-only content, then passes audio to OpenAI Whisper for language detection. Includes a retry mechanism that samples from different timestamp bands on mismatch. Achieves 96% accuracy in production.",
    technologies: ["Python", "OpenAI Whisper", "Silero VAD", "FFmpeg", "MySQL"],
    link: "https://github.com/Divyanth2468/language_detection",
  },
  {
    title: "Queue-Based Ad Revenue Engine",
    image: project2,
    description:
      "Replaced a synchronous MongoDB batch system with a fully asynchronous Go pipeline consuming RabbitMQ impression events. Applies Redis-based deduplication, streams validated events to TimescaleDB via COPY FROM, and runs a nightly sync to MySQL and ClickHouse. A second version ingests real-time player timestamps to compute Watch Time Units (WTU). Significantly smaller server footprint for the same event load, with full replay and audit capability.",
    technologies: [
      "Go",
      "RabbitMQ",
      "TimescaleDB",
      "Redis",
      "MySQL",
      "ClickHouse",
    ],
    link: null,
  },
  {
    title: "Vespa Search & Recommendation System",
    image: project4,
    description:
      "Introduced Vespa as the recommendation and search layer for a video platform, replacing conditional SQL filtering across all feed endpoints. Set up the full schema, ranking profiles, and a real-time indexer triggered by video upload and approval events. Ranking profiles incorporate device-fit scoring, freshness decay, geo-segmentation, and per-country language and category weight tensors updated weekly from engagement data.",
    technologies: ["Go", "Vespa Search", "Redis", "MySQL", "ClickHouse"],
    link: null,
  },
  {
    title: "Go Job Scheduler",
    image: project3,
    description:
      "A cloud-native, backend-only job scheduler written in Go. Supports scheduling Shell, HTTP, and AWS Lambda tasks using cron expressions, with PostgreSQL persistence, retry support, and a modular architecture designed for serverless environments.",
    technologies: ["Go", "PostgreSQL", "AWS Lambda", "Cron"],
    link: "https://github.com/Divyanth2468/Go-Job-Scheduler",
  },
];

export const CONTACT = {
  phoneNo: "+91 7013918815",
  email: "uppuluridivyanth@gmail.com",
};
