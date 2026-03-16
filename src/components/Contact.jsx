// src/components/Contact.jsx
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-b border-neutral-900 pb-20 px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-10 text-center text-4xl font-semibold text-neutral-100"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          href={`mailto:${CONTACT.email}`}
          className="text-xl text-neutral-300 border-b border-neutral-500 
                     hover:text-purple-400 hover:border-purple-400 
                     transition-colors"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
