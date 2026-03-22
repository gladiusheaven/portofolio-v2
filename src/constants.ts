import { Experience, Skill, Certification, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "PT Indosat, Tbk (Indosat Ooredoo Hutchison)",
    role: "Sr. Officer - Application Management",
    period: "September 2021 - Present",
    description: "Oversaw the architecture and strategic management of enterprise HR applications supporting over 3,000 employees, identifying and executing improvement initiatives through advanced digital integration.",
    accomplishments: [
      "Reduced medical check-up (MCU) administrative turnaround by 99% (3 working days to < 5 minutes).",
      "Led implementation of SAP SuccessFactors across 6 modules (Onboarding, Recruitment, Learning, etc.).",
      "Established verified WhatsApp Business account for HR communication with >80% utilization.",
      "Developed ASTRID-GPT, a GPT-3.5-based chatbot with 90%++ response accuracy in internal testing."
    ]
  },
  {
    company: "PT Indosat, Tbk (Indosat Ooredoo Hutchison)",
    role: "Officer - HRIS & Solution",
    period: "October 2019 - September 2021",
    description: "Led the end-to-end development of 9 custom HR applications across multiple functional areas, integrating data and workflows into a unified digital ecosystem.",
    accomplishments: [
      "Built 9 Custom Apps including Performance Management (MyTalent), All-in-One HR (HROne), and ATS.",
      "Integrated LinkedIn Learning with internal platforms, resulting in a 30% increase in self-initiated learning.",
      "Automated HR letter generation during COVID-19, cutting processing time from 1 day to under 10 minutes.",
      "Implemented secure QR Code verification system for annual and project-based documents."
    ]
  },
  {
    company: "PT Lintas Media Danawa (eBesha)",
    role: "Full-stack Developer",
    period: "January 2019 - October 2019",
    description: "Engineered and maintained high-performance APIs, optimized database operations, and managed production-grade servers with 99.9% uptime.",
    accomplishments: [
      "Led technical delivery of a custom CRM product (eBesha), providing architectural guidance.",
      "Spearheaded implementation of a full-stack Contact Center system for Bank BPD Riau."
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Architecture & Management",
    items: ["Software Architecture", "System Integration", "Hyper Automation", "Stakeholders Management", "CI/CD & Cloud Computing", "Software Management"]
  },
  {
    category: "AI & Automation",
    items: ["AI (RAG, Agentic)", "AI Orchestration", "OpenAI / LLaMa Integration", "Power Automate", "Copilot Studio", "RPA"]
  },
  {
    category: "Development",
    items: ["Node.js", "Python", "PHP (Laravel, CodeIgniter)", "JavaScript/TypeScript", "React", "SQL & NoSQL", "REST/SOAP API"]
  },
  {
    category: "Platforms",
    items: ["Microsoft Power Platform", "SAP SuccessFactors", "SAP Workzone", "Azure AI Foundry", "SharePoint"]
  }
];

export const SKILL_PROFICIENCY = [
  { name: 'AI Orchestration', level: 95 },
  { name: 'System Architecture', level: 92 },
  { name: 'Full-stack Dev', level: 88 },
  { name: 'Hyper-automation', level: 90 },
  { name: 'Cloud Computing', level: 85 },
  { name: 'Data Integration', level: 94 }
];

export const CERTIFICATIONS: Certification[] = [
  // --- LEADERSHIP & MANAGEMENT ---
  { name: "Professional Certificate in CHRP", issuer: "UNIKA Atma Jaya", year: 2022, category: 'Management & HR' },
  { name: "Human Resources Foundations", issuer: "CIPD & LinkedIn", year: 2025, category: 'Management & HR' },

  // --- DATA, AI & CLOUD ---
  { name: "Supervisor Data Scientist", issuer: "Komdigi Indonesia", year: 2026, category: 'Data & AI' },
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", year: 2025, category: 'Data & AI' },
  { name: "AWS Academy Graduates - Cloud Foundations", issuer: "Amazon Web Services", year: 2023, category: 'Cloud & DevOps' },
  { name: "Learning Google Cloud Foundations", issuer: "Dicoding", year: 2024, category: 'Cloud & DevOps' },

  // --- INFRASTRUCTURE & SECURITY ---
  { name: "CISCO DevNet Associate", issuer: "CISCO", year: 2022, category: 'Security & IoT' },
  { name: "Microsoft Security Essentials Professional Certificate", issuer: "Microsoft & LinkedIn", year: 2025, category: 'Security & IoT' },
  { name: "Learning DevOps Foundations", issuer: "Dicoding", year: 2024, category: 'Cloud & DevOps' },
  { name: "Learning SOLID Principles in Programming", issuer: "Dicoding", year: 2023, category: 'Data & AI' }
];

export const SERVICES = [
  {
    title: "HRIS Transformation",
    description: "End-to-end HR application management & SAP SuccessFactors implementation.",
    icon: "Users"
  },
  {
    title: "Enterprise Architecture",
    description: "Strategic system design, integration, and stakeholder management.",
    icon: "Layers"
  },
  {
    title: "Hyper-automation & RPA",
    description: "Workflow optimization using Power Automate, RPA, and custom scripts.",
    icon: "Workflow"
  },
  {
    title: "AI Builder & RAG",
    description: "Developing Agentic AI, RAG systems, and custom LLM integrations.",
    icon: "BrainCircuit"
  },
  {
    title: "Full-stack Application Development",
    description: "Building production-grade web applications with React, Node.js, Laravel, Vue.js and Python.",
    icon: "Code2"
  },
  {
    title: "Cloud & DevOps",
    description: "Azure/Google Cloud Platform cloud infrastructure, CI/CD, and server management.",
    icon: "Cloud"
  }
];

export const PROJECTS = [
  {
    title: "AstridAI",
    description: "AI-powered employee self-service chatbot with 90%++ accuracy.",
    tags: ["AI", "RAG", "Python", "LangChain"],
    link: "https://github.com/gladiusheaven/astrid-gpt",
    image: "https://lh3.googleusercontent.com/d/1Dr0pty6jbYSQ6kDC25LXW39GL-MiqPns",
    label: "AI Agent & Power Platform"
  },
  {
    title: "MCU Reg. Process MCP Automation",
    description: "Reduced MCU administrative turnaround by 99% (3 days to < 5 minutes) by using Workflow automation and applied MCP.",
    tags: ["Automation", "Power Platform", "RAG", "UIPath"],
    link: "https://github.com/gladiusheaven/mcu-automation",
    image: "https://www.dropbox.com/scl/fi/7orruc21vb9otf87je1it/Screenshot-2026-03-22-at-23.17.21.png?rlkey=brtugbqbmvqqfwxxlhetty6v0&st=rt26lq3p&raw=1",
    label: "MCP Agentic"
  },
  {
    title: "Enterprise CRM (eBesha)",
    description: "Custom CRM product for contact center management with PSTN trunking and mail server integration. Proactively contributed in Bank BPD Riau Implementation (2019).",
    tags: ["Full-stack", "Laravel", "Typescript", "Python"],
    link: "https://github.com/gladiusheaven/ebesha-crm",
    image: "https://www.dropbox.com/scl/fi/0wj7yrjngehyuo8r006ux/Ebesha.png?rlkey=k6gz22xzeloh42dqwx1o6afdh&st=2b6o4jvc&raw=1",
    label: "Full-stack AppDev"
  }
];
