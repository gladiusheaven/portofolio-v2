export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  accomplishments: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  category: 'Data & AI' | 'Cloud & DevOps' | 'Management & HR' | 'Security & IoT';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  label?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
