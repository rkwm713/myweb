import { ExperienceType, EducationType, SkillType, ProjectType } from '../types';

export const experiences: ExperienceType[] = [
  {
    id: 1,
    position: 'Engineering Technician',
    company: 'TechServ Engineering',
    period: 'Aug 2024 - Present',
    description: [
      'Utilized SPIDAcalc and Katapult for engineering analysis and design',
      'Collaborated with team members on technical projects and solutions',
      'Implemented efficient workflows for engineering calculations and data processing',
      'Maintained accurate documentation and technical specifications'
    ]
  },
  {
    id: 2,
    position: 'Operations Manager',
    company: 'Professional Keepers',
    period: 'Jan 2023 - Aug 2024',
    description: [
      'Led operations administration and management initiatives',
      'Developed and implemented operational procedures and policies',
      'Managed team performance and workflow optimization',
    ]
  },
  {
    id: 3,
    position: 'Training Coordinator',
    company: 'East Texas Title Companies',
    period: 'Jul 2022 - Aug 2023',
    description: [
      'Developed and implemented training programs and evaluations',
      'Coordinated training sessions and workshops for staff development',
      'Created comprehensive training materials and documentation',
      'Tracked and evaluated training effectiveness and outcomes'
    ]
  }
];

export const education: EducationType[] = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Systems',
    institution: 'Louisiana State University',
    period: '2024 - Present',
    description: 'Focusing on database management, systems analysis, and software development. Relevant coursework includes Database Design, Systems Analysis & Design, Web Development, and Business Intelligence.'
  },
  {
    id: 2,
    degree: 'Political Science and Government Associate\'s degree',
    institution: 'Tyler Junior College',
    period: 'Aug 2019 - May 2021',
    description: 'Achieved a perfect 4.0 GPA. Made President\'s List 2019-2021, served as a Tutor, and received the Economic and Government Scholarship Award each semester.'
  }
];

export const skills: SkillType[] = [
  // Frontend
  { id: 1, name: 'JavaScript', level: 4, category: 'frontend' },
  { id: 2, name: 'React', level: 3, category: 'frontend' },
  { id: 3, name: 'HTML/CSS', level: 4, category: 'frontend' },
  { id: 4, name: 'TypeScript', level: 3, category: 'frontend' },
  
  // Backend
  { id: 5, name: 'Python', level: 4, category: 'backend' },
  { id: 6, name: 'SQL', level: 4, category: 'backend' },
  { id: 7, name: 'Node.js', level: 3, category: 'backend' },
  { id: 8, name: 'Database Design', level: 4, category: 'backend' },
  
  // Tools
  { id: 9, name: 'SPIDAcalc', level: 5, category: 'tools' },
  { id: 10, name: 'Git', level: 3, category: 'tools' },
  { id: 11, name: 'VS Code', level: 4, category: 'tools' },
  { id: 12, name: 'Microsoft Office', level: 5, category: 'tools' },
  
  // Other
  { id: 13, name: 'Technical Drawing', level: 5, category: 'other' },
  { id: 14, name: 'Project Management', level: 3, category: 'other' },
  { id: 15, name: 'Problem Solving', level: 4, category: 'other' },
  { id: 16, name: 'Data Analysis', level: 4, category: 'other' }
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Community Garden Social',
    description: 'A comprehensive IoT solution for home automation using Raspberry Pi and custom sensors. Features include temperature monitoring, lighting control, and security integration.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    technologies: ['Python', 'MQTT', 'Raspberry Pi', 'React', 'Node.js'],
    link: 'https://example.com/smart-home',
    github: 'https://github.com/example/smart-home'
  },
  {
    id: 2,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex engineering data sets. Provides real-time analytics and customizable reports for decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    technologies: ['D3.js', 'React', 'Node.js', 'SQL', 'Express'],
    link: 'https://example.com/dashboard',
    github: 'https://github.com/example/dashboard'
  },
  {
    id: 3,
    title: 'Inventory Management System',
    description: 'A full-stack application for tracking and managing inventory across multiple locations. Features include barcode scanning, automated reordering, and detailed reporting.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    technologies: ['React', 'Node.js', 'MySQL', 'Express', 'Socket.io'],
    link: 'https://example.com/inventory',
    github: 'https://github.com/example/inventory'
  },
  {
    id: 4,
    title: 'Predictive Maintenance Algorithm',
    description: 'A machine learning solution that predicts equipment failures before they occur. Analyzes sensor data to identify patterns and anomalies that indicate potential issues.',
    image: 'https://images.unsplash.com/photo-1580982327559-c1202864eb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Flask'],
    link: 'https://example.com/predictive',
    github: 'https://github.com/example/predictive'
  }
];
