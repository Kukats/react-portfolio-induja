// src/components/Technologies.jsx
import { SiTableau, SiMysql, SiPython, SiDatabricks } from "react-icons/si";
import { FaFileExcel, FaGitAlt, FaChartBar, FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

const cardBase =
  "flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-[#050509] border border-white/10 shadow-md hover:scale-105 transition-transform duration-300";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Technologies = () => {
  return (
    <section id="technologies" className="border-b border-neutral-800 pb-24 px-4">
      <motion.h2
        className="my-20 text-center text-4xl font-semibold text-neutral-100"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technologies
      </motion.h2>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div className={cardBase} variants={cardVariants}>
          <FaFileExcel className="text-4xl text-[#1D6F42]" />
          <p className="mt-2 text-sm text-neutral-300">Excel</p>
        </motion.div>

        <motion.div className={cardBase} variants={cardVariants}>
          <FaChartBar className="text-4xl text-[#F2C811]" />
          <p className="mt-2 text-sm text-neutral-300">Power BI</p>
        </motion.div>

        <motion.div className={cardBase} variants={cardVariants}>
          <SiTableau className="text-4xl text-[#E97627]" />
          <p className="mt-2 text-sm text-neutral-300">Tableau</p>
        </motion.div>

        <motion.div className={cardBase} variants={cardVariants}>
          <SiMysql className="text-4xl text-[#00758F]" />
          <p className="mt-2 text-sm text-neutral-300">MySQL</p>
        </motion.div>

        <motion.div className={cardBase} variants={cardVariants}>
          <SiPython className="text-4xl text-[#3776AB]" />
          <p className="mt-2 text-sm text-neutral-300">Python</p>
        </motion.div>

        <motion.div className={cardBase} variants={cardVariants}>
          <FaAws className="text-4xl text-[#FF9900]" />
          <p className="mt-2 text-sm text-neutral-300">AWS</p>
        </motion.div>

        <motion.div className={cardBase} variants={cardVariants}>
          <FaGitAlt className="text-4xl text-[#F05032]" />
          <p className="mt-2 text-sm text-neutral-300">Git</p>
        </motion.div>

        <motion.div className={cardBase} variants={cardVariants}>
          <SiDatabricks className="text-4xl text-[#FF3621]" />
          <p className="mt-2 text-sm text-neutral-300">Databricks / ML</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
