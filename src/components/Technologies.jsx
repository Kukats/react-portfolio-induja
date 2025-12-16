// src/components/Technologies.jsx
import {
    SiTableau,
    SiMysql,
    SiPython,
    SiDatabricks,
    SiAwslambda,
  } from "react-icons/si";
  import { FaFileExcel, FaGitAlt, FaChartBar } from "react-icons/fa";
  import { motion } from "framer-motion";
  
  const cardBase =
    "flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-[#050509] border border-white/10 shadow-md hover:scale-105 transition-transform duration-300";
  
  // motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  
  const Technologies = () => {
    return (
      <div className="border-b border-neutral-800 pb-24">
        <motion.h2
          className="my-20 text-center text-4xl"
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
          {/* Excel */}
          <motion.div className={cardBase} variants={cardVariants}>
            <FaFileExcel className="text-4xl text-[#1D6F42]" />
            <p className="mt-2 text-sm">Excel</p>
          </motion.div>
  
          {/* Power BI */}
          <motion.div className={cardBase} variants={cardVariants}>
            <FaChartBar className="text-4xl text-[#F2C811]" />
            <p className="mt-2 text-sm">Power BI</p>
          </motion.div>
  
          {/* Tableau */}
          <motion.div className={cardBase} variants={cardVariants}>
            <SiTableau className="text-4xl text-[#E97627]" />
            <p className="mt-2 text-sm">Tableau</p>
          </motion.div>
  
          {/* MySQL */}
          <motion.div className={cardBase} variants={cardVariants}>
            <SiMysql className="text-4xl text-[#00758F]" />
            <p className="mt-2 text-sm">MySQL</p>
          </motion.div>
  
          {/* Python */}
          <motion.div className={cardBase} variants={cardVariants}>
            <SiPython className="text-4xl text-[#3776AB]" />
            <p className="mt-2 text-sm">Python</p>
          </motion.div>
  
          {/* AWS */}
          <motion.div className={cardBase} variants={cardVariants}>
            <SiAwslambda className="text-4xl text-[#FF9900]" />
            <p className="mt-2 text-sm">AWS</p>
          </motion.div>
  
          {/* Git */}
          <motion.div className={cardBase} variants={cardVariants}>
            <FaGitAlt className="text-4xl text-[#F05032]" />
            <p className="mt-2 text-sm">Git</p>
          </motion.div>
  
          {/* Databricks */}
          <motion.div className={cardBase} variants={cardVariants}>
            <SiDatabricks className="text-4xl text-[#FF3621]" />
            <p className="mt-2 text-sm">Databricks / ML</p>
          </motion.div>
        </motion.div>
      </div>
    );
  };
  
  export default Technologies;
  