import React, { useState, useEffect, useRef } from 'react';
import { experiences, education, skills } from '../data';
import { Briefcase, GraduationCap, Award, Calendar, Building, Clock } from 'lucide-react';

interface IconProps {
  className?: string;
}

const Experience: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'skills'>('work');
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.1})`,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        // Connect particles that are close to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    animate();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleExpand = (id: number) => {
    if (expandedExp === id) {
      setExpandedExp(null);
    } else {
      setExpandedExp(id);
    }
  };

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`h-2 w-6 rounded-full ${
              i < level ? 'bg-primary-500' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-dark-200 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 z-0 bg-hero-gradient"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Briefcase className="h-8 w-8 text-primary-500 mr-2" />
            Experience & Skills
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey and technical expertise
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-l-md ${
                activeTab === 'work'
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 text-gray-300 hover:bg-dark-300'
              }`}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center px-4 py-2 text-sm font-medium ${
                activeTab === 'education'
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 text-gray-300 hover:bg-dark-300'
              }`}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-r-md ${
                activeTab === 'skills'
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 text-gray-300 hover:bg-dark-300'
              }`}
            >
              <Award className="mr-2 h-4 w-4" />
              Skills
            </button>
          </div>
        </div>
        
        {activeTab === 'work' && (
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className={`bg-dark-100/80 backdrop-blur-sm rounded-lg p-6 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 ${
                  expandedExp === exp.id ? 'ring-2 ring-primary-500/50' : ''
                }`}
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group flex items-center">
                      {exp.position}
                      <span className="ml-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        {expandedExp === exp.id ? '▲' : '▼'}
                      </span>
                    </h3>
                    <div className="flex items-center text-primary-400 mt-1">
                      <Building className="h-4 w-4 mr-1" />
                      <p>{exp.company}</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <ul className={`space-y-2 text-gray-300 transition-all duration-300 ${
                  expandedExp === exp.id ? 'max-h-96 opacity-100' : 'max-h-24 overflow-hidden opacity-80'
                }`}>
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {expandedExp !== exp.id && (
                  <div className="text-primary-400 text-sm mt-2 cursor-pointer hover:text-primary-300 transition-colors">
                    Click to expand...
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'education' && (
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-dark-100/80 backdrop-blur-sm rounded-lg p-6 border border-primary-500/10 hover:border-primary-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <div className="flex items-center text-primary-400 mt-1">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <p>{edu.institution}</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'skills' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-dark-100/80 backdrop-blur-sm rounded-lg p-6 border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <CodeIcon className="h-5 w-5 text-primary-500 mr-2" />
                  Frontend
                </h3>
                <div className="space-y-4">
                  {skills.filter(skill => skill.category === 'frontend').map(skill => (
                    <div key={skill.id} className="flex flex-col space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}/5</span>
                      </div>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-dark-100/80 backdrop-blur-sm rounded-lg p-6 border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <ServerIcon className="h-5 w-5 text-primary-500 mr-2" />
                  Backend
                </h3>
                <div className="space-y-4">
                  {skills.filter(skill => skill.category === 'backend').map(skill => (
                    <div key={skill.id} className="flex flex-col space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}/5</span>
                      </div>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-dark-100/80 backdrop-blur-sm rounded-lg p-6 border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <WrenchIcon className="h-5 w-5 text-primary-500 mr-2" />
                  Tools
                </h3>
                <div className="space-y-4">
                  {skills.filter(skill => skill.category === 'tools').map(skill => (
                    <div key={skill.id} className="flex flex-col space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}/5</span>
                      </div>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-dark-100/80 backdrop-blur-sm rounded-lg p-6 border border-primary-500/10 hover:border-primary-500/20 transition-all duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Award className="h-5 w-5 text-primary-500 mr-2" />
                  Other
                </h3>
                <div className="space-y-4">
                  {skills.filter(skill => skill.category === 'other').map(skill => (
                    <div key={skill.id} className="flex flex-col space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}/5</span>
                      </div>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Custom icon components
const CodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const ServerIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const WrenchIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

export default Experience;
