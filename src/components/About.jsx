// src/components/About.jsx
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="border-b border-neutral-900 py-24 px-4"
    >
      {/* Centered heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-semibold text-neutral-100"
      >
        About Me
      </motion.h2>

      {/* Paragraph block */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-base leading-snug text-neutral-300"
      >
        <p className="whitespace-pre-line">
          {ABOUT_TEXT}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
