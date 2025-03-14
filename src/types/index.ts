export interface ExperienceType {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationType {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SkillType {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}
