import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-b border-neutral-900 pb-20 px-4"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold text-neutral-100"
      >
        Experience
      </motion.h2>

      <div className="mx-auto max-w-5xl">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center"
          >
            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Role + Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-lg font-semibold text-neutral-200">
                {experience.role} –{" "}
                <span className="text-sm text-purple-300">
                  {experience.company}
                </span>
              </h6>

              <p className="mb-4 text-neutral-400 leading-relaxed">
                {experience.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mb-2 rounded bg-neutral-800/70 px-3 py-1 text-sm font-medium text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
