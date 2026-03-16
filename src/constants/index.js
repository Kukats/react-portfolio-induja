// src/constants/index.js
import project1 from "../assets/Projects/stroke.png";
import project2 from "../assets/Projects/charger.png";
import project3 from "../assets/Projects/sp500.png";
import project4 from "../assets/Projects/workforce.png";
import project5 from "../assets/Projects/fraud.png";

export const HERO_CONTENT = `Business Analyst with 3+ years of experience delivering data-driven insights, process optimization, and analytics solutions in banking, financial services, and utilities. I specialize in requirements elicitation, gap and impact analysis, and translating complex business needs into clear user stories and actionable delivery plans. I've built executive KPI dashboards, processed large-scale datasets using SQL, Hadoop, and Spark, and supported UAT to ensure accurate and compliant releases. My core toolkit includes SQL, Power BI, Tableau, Jira, Oracle C2M/CCB, and SAP, and I enjoy owning problems end-to-end from discovery and documentation to analytics, stakeholder alignment, and delivery.`;

export const ABOUT_TEXT = `My passion for analytics comes from a genuine curiosity to understand how systems work, especially in financial services where accuracy, compliance, and operational efficiency matter. With a Bachelor's degree in Computer Science and a Master's in Business Analytics, I bring a strong foundation in SQL, BI reporting, and process analysis that helps me turn complex data and workflows into clear, actionable outcomes.

Professionally, I've worked across banking and enterprise utility delivery environments where I lead structured requirements gathering and support Agile teams through user stories, prioritization, and UAT. I'm hands-on with SQL-based analysis and dashboarding in Power BI and Tableau to track portfolio performance, exception trends, SLA adherence, and turnaround times so leaders can make faster, better decisions.

What motivates me most is creating clarity from complexity: connecting business goals to clean requirements, reliable data, and measurable results. I'm looking to grow in roles where business analysis and analytics drive stronger risk visibility, operational performance, and customer outcomes.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Business Analyst",
    company: "Capital One Financial (AZ, USA)",
    description:
      "Analyzed credit card portfolio performance to identify profitability and risk opportunities that contributed to a 2-3% uplift in portfolio P&L, supporting product and credit strategy decisions. Built and validated customer segmentation and profitability frameworks, performing scenario and sensitivity analysis to evaluate pricing, offer, and policy changes. Processed and analyzed large-scale credit card transaction datasets using Hadoop and Spark, enabling faster querying and more efficient identification of risk and profitability patterns. Delivered executive-ready insights through Power BI, Tableau, and DAX dashboards, enabling real-time visibility into liquidity risk, credit exposure, and portfolio performance. Leveraged SAP-based financial and revenue data along with SQL and Excel to validate portfolio P&L and strengthen profitability and pricing analysis. Improved execution and delivery outcomes by refining acceptance criteria and stakeholder alignment, enabling 15% faster rollout of strategy changes.",
    technologies: [
      "SQL",
      "Power BI",
      "Tableau",
      "DAX",
      "Hadoop",
      "Spark",
      "SAP",
      "Excel",
      "Jira",
      "Agile/Scrum",
      "UAT",
    ],
  },
  {
    year: "Sep 2021 - Dec 2022",
    role: "Business Analyst",
    company: "HCL Technologies (India)",
    description:
      "Served as a dual business-technical analyst on the Exelon CEJA utility implementation, configuring Oracle C2M/CCB across Case Management, Agency Pledges, Pay Plans, Service Orders, Severance Management, and Billing modules. Conducted functional analysis and requirements walkthroughs with Exelon stakeholders, documenting end-to-end business processes for low-income assistance programs and customer credit management. Developed and modified Groovy scripts to automate billing, payment, and severance processing logic, reducing manual intervention in critical customer lifecycle workflows. Designed and configured Business Objects for custom Case Management and Agency Pledge workflows compliant with CEJA program mandates. Triaged and resolved priority defects through root cause analysis, algorithm modification, and BO reconfiguration. Supported MDM-CCB integration validation within CI/CD delivery pipelines, ensuring accurate meter-to-cash data handoffs.",
    technologies: [
      "Oracle C2M/CCB",
      "Oracle MDM",
      "Oracle Database",
      "Extract, Transform, Load (ETL)",
      "Oracle SQL",
      "Groovy",
      "Business Objects",
      "Usage Analysis",
      "CCS",
      "Jira",
      "Agile/Scrum",
      "CI/CD",
      "UAT",
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
    github: "https://github.com/Kukats/Stroke-Risk-Analysis",
  },
  {
    title: "Financial Analysis of Charger Retailers",
    image: project2,
    description:
      "Performed financial analysis on $630K sales data with $77K net profit. Evaluated customer purchasing trends, profit margins, and top products while uncovering geographic sales patterns. Delivered insights through data visualization.",
    technologies: ["Excel", "SQL", "Power BI", "Financial Analysis"],
    github: "https://github.com/Kukats/Financial-Analysis-of-Charger-Retailers",
  },
  {
    title: "S&P 500 Stock Analysis and Forecasting",
    image: project3,
    description:
      "Analyzed 90+ years of S&P 500 historical data and built forecasting models (ARIMA, Exponential Smoothing, Regression). Found ETS (MAA) effective for short-term predictions and visualized results with Python and Power BI.",
    technologies: ["Python", "Statsmodels", "Pandas", "Seaborn", "Power BI"],
    github: "https://github.com/Kukats/S-P-500",
  },
  {
    title: "Workforce Management System",
    image: project4,
    description:
      "Designed a centralized SQL database for project and employee management. Built ER diagrams, relational schema, and analytics queries to streamline project tracking and resource allocation.",
    technologies: ["SQL", "MySQL", "PostgreSQL", "Database Design"],
    github: "https://github.com/Kukats/Workforce-Management-System",
  },
  {
    title: "E-commerce Fraud Detection",
    image: project5,
    description:
      "Developed a fraud detection system using Random Forest in R to classify fraudulent transactions. Identified high-risk indicators such as unusual transaction times, high purchase values, and device/browser anomalies.",
    technologies: ["R", "tidyverse", "randomForest", "caret", "caTools"],
    github: "https://github.com/Kukats/E-Commerce-Fruad-Detection",
  },
];

export const CONTACT = {
  email: "indujaku1206@gmail.com",
};