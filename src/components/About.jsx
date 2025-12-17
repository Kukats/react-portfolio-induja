// src/components/About.jsx
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="border-b border-neutral-900 py-24 px-4"
    >
      {/* Heading with clearer motion */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mb-12 text-center text-4xl font-semibold text-neutral-100"
      >
        About Me
      </motion.h2>

      {/* Text block with fade + slide up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.4 }}
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
