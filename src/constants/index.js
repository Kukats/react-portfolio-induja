import project1 from "../assets/Projects/stroke.png";
import project2 from "../assets/Projects/charger.png";
import project3 from "../assets/Projects/sp500.png";
import project4 from "../assets/Projects/workforce.png";
import project5 from "../assets/Projects/fraud.png";

export const HERO_CONTENT = `Senior Business Analyst and Data Analyst with 4+ years of experience turning complex data into clear, actionable insights. I’ve worked across gaming, utilities/energy, and digital services, partnering with business teams to build SQL- and BI-driven dashboards, automate reporting, and improve decision-making. My toolkit includes SQL, Power BI, Tableau, Python/R, and modern cloud platforms, and I enjoy owning problems end-to-end—from raw data to stories that business stakeholders can act on.`;

export const ABOUT_TEXT = `My passion for analytics comes from a genuine curiosity to understand how systems work, whether it’s financial performance, customer behavior, or operational processes, and to uncover the patterns that drive meaningful outcomes. With a Bachelor’s degree in Computer Science and a Master’s in Business Analytics, I’ve built a strong technical foundation in SQL, Python, Power BI, and data modeling that allows me to turn raw, messy data into insights that are clear, actionable, and tied directly to business strategy.

Professionally, I bring 4+ years of experience across consulting, utilities, research, and digital services, where I’ve built SQL-driven reporting frameworks, automated workflows, and developed intuitive BI dashboards to improve decision-making. As a Senior Business Analyst, I design KPI dashboards, optimize SQL pipelines, and support cross-functional reporting. At Accenture, I engineered SQL and PL/SQL validation logic for Exelon’s CEJA regulatory program, improving billing accuracy, compliance, and UAT efficiency. Earlier at The Web Blinders, I built Power BI and Google Data Studio dashboards, automated recurring reports, and analyzed customer and operational data using SQL, Python, and GCP tools. Across all roles, I focus on delivering analytics solutions that enhance data quality, streamline processes, and drive measurable outcomes.

What motivates me most is using data to create clarity, telling stories that reveal opportunities, reduce uncertainty, and guide impactful decisions. My goal is to continue creating analytics solutions that are accurate, explainable, and aligned with real business needs, while growing into roles where data becomes a catalyst for innovation and strategy.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Senior Business Analyst",
    company: "Scopely Inc",
    description: `Build and maintain real-time Power BI dashboards integrating data from marketing platforms, product telemetry, and internal data warehouses to monitor CAC, ROAS, CPA, and player LTV. Partner with marketing and product teams to design SQL-based performance reporting across campaigns and cohorts, streamline GTM feedback loops using Power Apps and Power Automate, and improve the quality and speed of decision-making for live game operations.`,
    technologies: [
      "Power BI",
      "SQL",
      "Excel",
      "Azure Data Factory",
      "Power Apps",
      "Power Automate",
      "Google Analytics",
      "Marketing Analytics"
    ],
  },
  {
    year: "2023 - 2024",
    role: "Graduate Research Assistant",
    company: "University of New Haven",
    description: `Supported faculty-led analytics and business research projects by performing literature reviews, building datasets, and running statistical and exploratory analysis in Python/R. Helped translate findings into clear visuals and presentations, contributing to grant proposals and academic deliverables.`,
    technologies: [
      "Python",
      "R",
      "Excel",
      "PowerPoint",
      "Data Analysis",
      "Research Methods"
    ],
  },
  {
    year: "2021 - 2022",
    role: "Business Analyst",
    company: "Accenture (Client: Exelon)",
    description: `Supported Exelon’s CEJA program by translating regulatory and billing requirements into enhancements for Oracle CC&B and MDM systems. Designed SQL and PL/SQL validation logic for millions of monthly meter records to reduce billing and reporting errors, documented workflows and BRDs, coordinated UAT with business users, and built KPI views/dashboards to track compliance and operational health.`,
    technologies: [
      "Oracle CC&B",
      "MDM",
      "PL/SQL",
      "SQL",
      "Power BI",
      "Excel",
      "AWS (S3, Redshift)",
      "SAP Analytics Cloud",
      "Jira",
      "Agile"
    ],
  },
  {
    year: "2019 - 2021",
    role: "Data Analyst",
    company: "The Web Blinders",
    description: `Worked with clients to define reporting needs, analyze customer and operational data, and design dashboards that improved visibility into performance. Built data pipelines and reports using SQL, Power BI, and Google Data Studio, automated recurring analyses, and helped stakeholders track KPIs related to marketing, sales funnels, and service quality.`,
    technologies: [
      "Power BI",
      "Google Data Studio",
      "SQL",
      "Excel",
      "Python",
      "GCP (BigQuery, Dataflow, Pub/Sub)"
    ],
  },
];

export const PROJECTS = [
  {
    title: "Stroke Risk Prediction",
    image: project1,
    description:
      "Machine learning project analyzing 43,000+ patient records to predict stroke risk. Built preprocessing pipelines, applied Logistic Regression and Decision Trees, and identified hypertension, obesity, and glucose level as key predictors.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/Kukats/Stroke-Risk-Analysis"
  },
  {
    title: "Financial Analysis of Charger Retailers",
    image: project2,
    description:
      "Performed financial analysis on $630K sales data with $77K net profit. Evaluated customer purchasing trends, profit margins, and top products (e.g., Nokia Smartphone), while uncovering geographic sales patterns. Delivered insights through data visualization.",
    technologies: ["Excel", "SQL", "Power BI", "Financial Analysis"],
    github: "https://github.com/Kukats/Financial-Analysis-of-Charger-Retailers"
  },
  {
    title: "S&P 500 Stock Analysis and Forecasting",
    image: project3,
    description:
      "Analyzed 90+ years of S&P 500 historical data and built forecasting models (ARIMA, Exponential Smoothing, Regression). Found ETS (MAA) to be most effective for short-term predictions. Visualized results with Python and Power BI.",
    technologies: ["Python", "Statsmodels", "Pandas", "Seaborn", "Power BI"],
    github: "https://github.com/Kukats/S-P-500"
  },
  {
    title: "Workforce Management System",
    image: project4,
    description:
      "Designed a centralized SQL database for project and employee management. Built ER diagrams, relational schema, and analytics queries to streamline project tracking, assignments, and resource allocation.",
    technologies: ["SQL", "MySQL", "PostgreSQL", "Database Design"],
    github: "https://github.com/Kukats/Workforce-Management-System"
  },
  {
    title: "E-commerce Fraud Detection",
    image: project5,
    description:
      "Developed a fraud detection system using Random Forest in R to classify fraudulent transactions. Identified high-risk indicators such as unusual transaction times, high purchase values, and device/browser anomalies.",
    technologies: ["R", "tidyverse", "randomForest", "caret", "caTools"],
    github: "https://github.com/Kukats/E-Commerce-Fruad-Detection"
  },
];

export const CONTACT = {
  email: "indujak.12@gmail.com",
};
