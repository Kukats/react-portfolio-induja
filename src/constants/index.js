import project1 from "../assets/Projects/stroke.png";
import project2 from "../assets/Projects/charger.png";
import project3 from "../assets/Projects/sp500.png";
import project4 from "../assets/Projects/workforce.png";
import project5 from "../assets/Projects/fraud.png";

export const HERO_CONTENT = `Supply Chain Analyst with 5 years of experience across e-commerce, global manufacturing, and consulting environments. I specialize in demand planning, inventory optimization, and fulfillment analytics, using tools like SQL, Python, Tableau, SAP IBP, Kinaxis RapidResponse, RELEX, and Databricks to drive measurable improvements in service levels, forecast accuracy, and operational costs.`;

export const ABOUT_TEXT = `I got into supply chain analytics because I genuinely enjoy figuring out why things break, whether that's a spike in stockouts, a forecast that keeps missing, or a fulfillment center that's consistently behind. There's something satisfying about digging into the data and actually finding the answer.

My background spans both the technical and operational sides. I studied Computer Science and then went deeper into Business Analytics, which gave me a solid foundation in SQL, Python, statistical modeling, and data engineering. But the work I'm most proud of has always been on the applied side building forecasting models that actually get used, dashboards that operations teams open every morning, and analyses that lead to real decisions.

Over the past five years I've worked across DoorDash's fulfillment operations and Cognizant's global supply chain practice, where I've supported everything from demand sensing and S&OP processes to inventory segmentation, 3PL coordination, and control tower visibility. I've worked with platforms like RELEX, Kinaxis RapidResponse, SAP IBP, Oracle SCM Cloud, and Blue Yonder, and I've gotten comfortable translating between what the data says and what operations teams actually need to hear.

Outside of work I'm drawn to problems that have real stakes, the kind where a better forecast means fewer stockouts for real customers, or a smarter routing decision saves meaningful time and cost. That's what keeps me interested in this field.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Present",
    role: "Supply Chain Analyst",
    company: "DoorDash",
    description: [
      "Optimized inventory planning and demand sensing across DashMart fulfillment centers using RELEX models and AI-driven forecasting, reducing stockouts and improving forecast responsiveness during peak periods.",
      "Analyzed high-volume logistics and fulfillment data using SQL, Python, PySpark, Amazon Redshift, and Databricks to improve transportation planning visibility and delivery ETA accuracy.",
      "Built Tableau and Looker dashboards supporting control tower visibility, inventory segmentation, warehouse throughput, and logistics KPI monitoring.",
      "Collaborated with operations and 3PL teams on replenishment planning, WMS improvements, and fulfillment accuracy.",
      "Conducted scenario analysis and supply chain simulation exercises to evaluate inventory positioning and network optimization opportunities.",
    ],
    technologies: [
      "SQL", "Amazon Redshift", "Python", "PySpark", "Databricks",
      "RELEX", "Tableau", "Looker", "Apache Airflow", "TMS", "WMS", "Control Tower",
    ],
  },
  {
    year: "Dec 2023 - May 2024",
    role: "Supply Chain Analyst Intern",
    company: "DoorDash",
    description: [
      "Supported demand planning and inventory optimization across DashMart centers by analyzing demand patterns and minimizing stockouts during peak periods.",
      "Queried supply chain data using SQL in Amazon Redshift to identify delivery delays and support ETA accuracy improvements.",
      "Assisted in evaluating routing and transportation performance through operational data analysis.",
      "Developed and maintained Tableau and Looker dashboards tracking inventory levels, throughput, and warehouse bottlenecks.",
      "Collaborated with operations and 3PL partners to monitor service levels and support fulfillment accuracy improvements.",
    ],
    technologies: [
      "SQL", "Amazon Redshift", "Python", "Tableau", "Looker",
      "Demand Planning", "Inventory Optimization", "3PL Coordination",
    ],
  },
  {
    year: "Jun 2020 - Dec 2022",
    role: "Supply Chain Analyst",
    company: "Cognizant",
    description: [
      "Managed end-to-end digital supply chain operations supporting 50M+ SKUs and 10M+ monthly orders through advanced planning, network optimization, and control tower visibility.",
      "Built machine learning and statistical forecasting models (ARIMA, Prophet) to improve demand forecast accuracy and grow inventory turns to 12x.",
      "Supported supply chain transformation projects involving Kinaxis RapidResponse, SAP IBP, SAP APO, Oracle SCM Cloud, and Blue Yonder across demand planning, inventory optimization, and S&OP.",
      "Analyzed supply chain datasets using SQL, Snowflake, Databricks, and PySpark to identify inefficiencies and improve planning accuracy.",
      "Developed Tableau and Power BI dashboards for cost-to-serve analytics, supplier performance tracking, and executive KPI reporting.",
      "Collaborated with procurement teams on dual-sourcing strategies and supplier optimization initiatives that reduced material costs by 5–7%.",
    ],
    technologies: [
      "SQL", "Snowflake", "Python", "PySpark", "Databricks",
      "ARIMA", "Prophet", "Tableau", "Power BI",
      "Kinaxis RapidResponse", "SAP IBP", "Oracle SCM Cloud", "Blue Yonder",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Stroke Risk Prediction",
    image: project1,
    description: [
      "Analyzed 43,000+ patient records to build a machine learning model predicting stroke risk.",
      "Built preprocessing pipelines to clean and structure the data before modeling.",
      "Applied Logistic Regression and Decision Trees, identifying hypertension, obesity, and glucose levels as the strongest predictors.",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/Kukats/Stroke-Risk-Analysis",
  },
  {
    title: "Financial Analysis of Charger Retailers",
    image: project2,
    description: [
      "Analyzed $630K in sales data with $77K net profit across a charger retail business.",
      "Evaluated customer purchasing trends, profit margins, and top-performing products.",
      "Uncovered geographic sales patterns to identify high and low performing markets.",
    ],
    technologies: ["Excel", "SQL", "Power BI", "Financial Analysis"],
    github: "https://github.com/Kukats/Financial-Analysis-of-Charger-Retailers",
  },
  {
    title: "S&P 500 Stock Analysis and Forecasting",
    image: project3,
    description: [
      "Analyzed 90+ years of S&P 500 historical data to identify long-term market trends.",
      "Built forecasting models using ARIMA, Exponential Smoothing, and Regression techniques.",
      "Visualized results in Power BI to communicate findings clearly.",
    ],
    technologies: ["Python", "Statsmodels", "Pandas", "Power BI"],
    github: "https://github.com/Kukats/S-P-500",
  },
  {
    title: "Workforce Management System",
    image: project4,
    description: [
      "Designed a centralized SQL database to manage employees, projects, and assignments.",
      "Created ER diagrams and relational schemas to structure the data model.",
      "Wrote reporting queries to surface operational insights from the database.",
    ],
    technologies: ["SQL", "MySQL", "PostgreSQL", "Database Design"],
    github: "https://github.com/Kukats/Workforce-Management-System",
  },
  {
    title: "E-commerce Fraud Detection",
    image: project5,
    description: [
      "Built a fraud detection model in R using Random Forest to flag suspicious transactions.",
      "Identified key fraud patterns across transaction types and customer behavior.",
      "Evaluated model performance using standard classification metrics.",
    ],
    technologies: ["R", "tidyverse", "randomForest", "caret", "caTools"],
    github: "https://github.com/Kukats/E-Commerce-Fruad-Detection",
  },
];

export const CONTACT = {
  email: "indu19418@gmail.com",
};