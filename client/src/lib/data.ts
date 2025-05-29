export const personalInfo = {
  name: "Hana Berhe Girmay",
  firstName: "Hana",
  tagline: "Data Analyst | ML Engineer | Translator | Tutor",
  email: "hananahberhe@gmail.com",
  phone: "+251 XX XXX XXXX",
  location: "Addis Ababa, Ethiopia",
  linkedin: "https://linkedin.com/in/hana-berhe-455042333",
  github: "https://github.com/HanaBerhe/",
  bio: "A passionate Information Systems graduate from Addis Ababa University, blending data science, software engineering, and multilingual expertise to solve complex problems and drive innovation.",
  description: "I'm a recent Information Systems graduate from Addis Ababa University with a passion for transforming data into actionable insights. My journey spans across multiple domains including data analysis, machine learning, software engineering, and linguistics.",
  education: {
    degree: "BSc in Information Systems",
    institution: "Addis Ababa University",
    graduationDate: "July 2024"
  }
};

export const technicalSkills = [
  { name: "Python", level: 95 },
  { name: "SQL & Database Management", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Data Analysis", level: 92 },
  { name: "React.js", level: 80 },
  { name: "Web Development", level: 78 }
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Amharic", level: "Native" },
  { name: "Affan Oromo", level: "Fluent" },
  { name: "Aff-Somali", level: "Fluent" }
];

export const experiences = [
  {
    title: "Data Analyst & ML Engineer",
    company: "Commercial Bank of Ethiopia",
    period: "Current",
    type: "Full-time",
    description: "Leading data analysis initiatives and developing machine learning models to optimize banking operations and customer insights. Implementing data-driven solutions for improved business decision-making and risk assessment."
  },
  {
    title: "Marketing Data Analyst",
    company: "Unilever",
    period: "2-month contract",
    type: "Contract",
    description: "Analyzed marketing campaign performance and consumer behavior data to provide actionable insights for strategic marketing decisions. Developed comprehensive reports and visualizations for stakeholders."
  },
  {
    title: "Information Systems Intern",
    company: "Ethio Telecom",
    period: "3 months",
    type: "Internship",
    description: "Supported IT infrastructure management and system optimization projects. Gained hands-on experience with enterprise-level information systems and database management."
  },
  {
    title: "Software Engineer Intern",
    company: "Tourism Ministry",
    period: "3 months",
    type: "Internship",
    description: "Contributed to software development projects focused on tourism sector digitalization. Developed web applications and participated in system design and implementation."
  }
];

export const projects = [
  {
    title: "Yekatit 12 Medical Hospital HR System",
    description: "A comprehensive web-based human resource management system for medical facilities. Features employee management, scheduling, payroll integration, and performance tracking with real-time analytics dashboard.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    type: "Featured",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Banking Analytics Dashboard",
    description: "Real-time analytics dashboard for banking operations with ML-powered insights and predictive modeling for customer behavior analysis and risk assessment.",
    technologies: ["Python", "Tableau", "SQL", "Scikit-learn"],
    type: "Professional",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "ML Prediction Engine",
    description: "Machine learning model for predictive analytics in financial services, featuring automated data preprocessing, model training, and deployment capabilities.",
    technologies: ["Python", "Scikit-learn", "Flask", "TensorFlow"],
    type: "Professional",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Advanced customer segmentation analysis using clustering algorithms to identify target customer groups and optimize marketing strategies.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    type: "Analysis",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export const services = [
  {
    title: "Translation Services",
    icon: "language",
    description: "Professional translation services across multiple languages including English, Amharic, Affan Oromo, and Aff-Somali. Specialized in technical documentation, business communications, and academic texts.",
    features: [
      "Technical Documentation",
      "Business Communications", 
      "Academic Papers",
      "Legal Documents"
    ],
    languages: ["English", "Amharic", "Affan Oromo", "Aff-Somali"],
    stats: {
      projects: "100+",
      rating: "4.9/5"
    }
  },
  {
    title: "Online Tutoring",
    icon: "graduation-cap",
    description: "Comprehensive online tutoring for students from KG to Grade 12 across all subjects. Personalized learning approaches with focus on mathematics, sciences, and technology subjects.",
    features: [
      "KG - Grade 12",
      "All Subjects",
      "Personalized Learning",
      "Progress Tracking"
    ],
    subjects: ["Mathematics", "Science", "English", "Computer Science", "Languages"],
    stats: {
      students: "150+",
      rating: "4.9/5"
    }
  }
];
