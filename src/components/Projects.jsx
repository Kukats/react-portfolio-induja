// src/components/Projects.jsx
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b border-neutral-900 pb-20 px-4"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold text-neutral-100"
      >
        Projects
      </motion.h2>

      <div className="mx-auto max-w-5xl">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center"
          >
            {/* IMAGE */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-xl shadow-lg"
              />
            </motion.div>

            {/* TEXT + TAGS + BUTTONS */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-xl font-semibold text-neutral-200">
                {project.title}
              </h6>

              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div className="mb-4 flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mb-2 rounded bg-neutral-900/60 
                               px-3 py-1 text-sm font-medium 
                               text-neutral-300 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-4 flex flex-wrap gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg bg-green-600 text-white text-sm font-medium
                               hover:bg-green-700 transition-colors duration-300"
                  >
                    View Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg
                               bg-[#111111] text-white text-sm font-medium
                               border border-white/10 shadow-md
                               hover:bg-[#1a1a1a] transition-colors duration-300"
                  >
                    <FaGithub className="text-base" />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
