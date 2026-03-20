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
      "Developed ASTRID-GPT, a GPT-3.5-based chatbot with 89% response accuracy in internal testing."
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
  { name: "Human Resources Foundations", issuer: "CIPD & LinkedIn", year: 2025 },
  { name: "Microsoft Security Essentials Professional Certificate", issuer: "Microsoft & LinkedIn", year: 2025 },
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", year: 2025 },
  { name: "Learning Google Cloud Foundations", issuer: "Dicoding", year: 2024 },
  { name: "Learning DevOps Foundations", issuer: "Dicoding", year: 2024 },
  { name: "AWS Academy Graduates - Cloud Foundations", issuer: "Amazon Web Services", year: 2023 },
  { name: "Learning SOLID Principles in Programming", issuer: "Dicoding", year: 2023 },
  { name: "Professional Certificate in CHRP", issuer: "UNIKA Atma Jaya", year: 2022 },
  { name: "CISCO DevNet Associate", issuer: "CISCO", year: 2022 },
  { name: "Introduction to IoT", issuer: "CISCO", year: 2022 }
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
    title: "Full-stack Development",
    description: "Building production-grade web applications with React, Node.js, and Python.",
    icon: "Code2"
  },
  {
    title: "Cloud & DevOps",
    description: "Azure/AWS cloud infrastructure, CI/CD, and server management.",
    icon: "Cloud"
  }
];

export const PROJECTS = [
  {
    title: "ASTRID-GPT",
    description: "AI-powered employee self-service chatbot with 89% accuracy.",
    tags: ["AI", "RAG", "Python"],
    link: "https://github.com/gladiusheaven/astrid-gpt",
    image: "https://drive.google.com/file/d/1Dr0pty6jbYSQ6kDC25LXW39GL-MiqPns/view?usp=sharing"
  },
  {
    title: "Medical Check-up Automation",
    description: "Reduced MCU administrative turnaround by 99% (3 days to < 5 minutes).",
    tags: ["Automation", "Power Platform"],
    link: "https://github.com/gladiusheaven/mcu-automation",
    image: "https://picsum.photos/seed/mcu/800/600"
  },
  {
    title: "Enterprise CRM (eBesha)",
    description: "Custom CRM product for contact center management.",
    tags: ["Full-stack", "Laravel", "Node.js"],
    link: "https://github.com/gladiusheaven/ebesha-crm",
    image: "https://picsum.photos/seed/crm/800/600"
  }
];
