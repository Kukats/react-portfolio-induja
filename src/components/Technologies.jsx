import { SiTableau, SiPython, SiDatabricks, SiSnowflake, SiApacheairflow } from "react-icons/si";
import { FaFileExcel, FaChartBar, FaAws, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const cardBase =
  "flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-[#050509] border border-white/10 shadow-md hover:scale-105 transition-transform duration-300";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const KinaxisIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M5 20 L13 8 L27 8 L35 20 L27 32 L13 32 Z" stroke="#00A86B" strokeWidth="2" fill="none"/>
    <circle cx="20" cy="20" r="4" fill="#00A86B"/>
    <line x1="13" y1="8" x2="20" y2="20" stroke="#00A86B" strokeWidth="1.5"/>
    <line x1="27" y1="8" x2="20" y2="20" stroke="#00A86B" strokeWidth="1.5"/>
    <line x1="35" y1="20" x2="20" y2="20" stroke="#00A86B" strokeWidth="1.5"/>
    <line x1="27" y1="32" x2="20" y2="20" stroke="#00A86B" strokeWidth="1.5"/>
    <line x1="13" y1="32" x2="20" y2="20" stroke="#00A86B" strokeWidth="1.5"/>
    <line x1="5" y1="20" x2="20" y2="20" stroke="#00A86B" strokeWidth="1.5"/>
  </svg>
);

const RelexIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="4" y="10" width="14" height="9" rx="4.5" stroke="#E8412A" strokeWidth="2" fill="none"/>
    <rect x="22" y="21" width="14" height="9" rx="4.5" stroke="#E8412A" strokeWidth="2" fill="none"/>
    <line x1="14" y1="14.5" x2="26" y2="25.5" stroke="#E8412A" strokeWidth="2"/>
    <path d="M6 34 Q13 26 20 28 Q27 30 34 20" stroke="#E8412A" strokeWidth="1.5" fill="none" strokeDasharray="2 2"/>
  </svg>
);

const tools = [
  { icon: <SiPython className="text-4xl text-[#3776AB]" />, label: "Python" },
  { icon: <FaDatabase className="text-4xl text-[#00758F]" />, label: "SQL" },
  { icon: <SiSnowflake className="text-4xl text-[#29B5E8]" />, label: "Snowflake" },
  { icon: <FaAws className="text-4xl text-[#FF9900]" />, label: "AWS Redshift" },
  { icon: <SiTableau className="text-4xl text-[#E97627]" />, label: "Tableau" },
  { icon: <FaChartBar className="text-4xl text-[#F2C811]" />, label: "Power BI" },
  { icon: <SiApacheairflow className="text-4xl text-[#017CEE]" />, label: "Apache Airflow" },
  { icon: <SiDatabricks className="text-4xl text-[#FF3621]" />, label: "Databricks" },
  { icon: <FaFileExcel className="text-4xl text-[#1D6F42]" />, label: "Excel" },
  { icon: <KinaxisIcon />, label: "Kinaxis" },
  { icon: <RelexIcon />, label: "Relex" },
];

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
        {tools.map(({ icon, label }) => (
          <motion.div key={label} className={cardBase} variants={cardVariants}>
            {icon}
            <p className="mt-2 text-sm text-neutral-300">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;