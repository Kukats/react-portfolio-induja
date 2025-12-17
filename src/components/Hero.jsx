// src/components/Hero.jsx
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="border-b border-neutral-900 pb-20 pt-10 lg:pb-32"
    >
      <div className="flex flex-wrap lg:flex-nowrap">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">

          {/* Name */}
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-6xl lg:text-8xl font-thin tracking-tight mb-6"
          >
            Induja Kukatikonda
          </motion.h1>

          {/* Title */}
          <motion.h3
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                       bg-clip-text text-transparent text-2xl lg:text-3xl 
                       tracking-tight mb-6"
          >
            Business Analyst
          </motion.h3>

          {/* Hero Content */}
          <motion.p
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-neutral-300 text-lg leading-relaxed font-light mb-10"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#experience"
              className="rounded-full bg-neutral-800 px-6 py-3 text-sm 
                         border border-neutral-600 text-neutral-100 
                         hover:bg-neutral-700 transition"
            >
              View Experience
            </a>

            <a
              href="#projects"
              className="rounded-full bg-neutral-800 px-6 py-3 text-sm 
                         border border-neutral-600 text-neutral-100 
                         hover:bg-neutral-700 transition"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            src={profilePic}
            alt="Induja Kukatikonda"
            className="max-h-[520px] w-auto rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
