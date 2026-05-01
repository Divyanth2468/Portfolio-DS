import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center gap-8 lg:gap-12"
          >
            {/* LEFT: IMAGE */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-6 rounded w-full max-w-md shadow-lg border border-neutral-800 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </a>
              ) : (
                <div className="relative inline-block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-6 rounded w-full max-w-md shadow-lg border border-neutral-800 opacity-90"
                  />

                  {/* Private Badge */}
                  <span
                    className="absolute top-2 left-2 text-xs px-2 py-1 rounded bg-yellow-900/70 text-yellow-300 border border-yellow-500/30"
                    title="Code belongs to company and cannot be shared"
                  >
                    Private
                  </span>
                </div>
              )}
            </motion.div>

            {/* RIGHT: CONTENT */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-1/2"
            >
              <h6 className="mb-2 font-semibold mt-2 lg:mt-0">
                {project.title}
              </h6>

              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Private Label */}
              {!project.link && (
                <p className="text-sm text-neutral-500 mb-3">
                  Private / Production System
                </p>
              )}

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
