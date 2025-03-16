import React, { useState } from 'react';
import { Code, Server, Database, Cpu, Wrench, BookOpen, Zap, Coffee, Sparkles, Rocket, Briefcase, GraduationCap } from 'lucide-react';
import profileImage from '../assets/profile.png';

const About: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'AutoCAD', level: 90 },
  ];

  const funFacts = [
    "I debug with rubber ducks 🦆",
    "Coffee is my primary fuel ☕",
    "I can explain technical concepts to my grandma",
    "I've written code at 3 AM and it actually worked",
    "My keyboard has custom keycaps"
  ];

  const [currentFact, setCurrentFact] = useState(0);

  const cycleFunFact = () => {
    setCurrentFact((prev) => (prev + 1) % funFacts.length);
  };


  return (
    <section id="about" className="py-20 bg-dark-100 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-primary-500 mr-2 animate-pulse-slow" />
            About Me
            <Sparkles className="h-8 w-8 text-primary-500 ml-2 animate-pulse-slow" />
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              Engineering Technician & 
              <span className="text-primary-500 relative ml-2 group">
                Developer
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
              <Zap className="h-6 w-6 text-yellow-400 ml-2 animate-pulse" />
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
             I’m Ryan Miller, an engineering technician at TechServ Engineering and Consulting with a year of hands-on experience. I’m also pursuing a bachelor's degree in Information Systems at Louisiana State University, where I merge technical expertise with software development to create innovative solutions.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              I pride myself on my ability to streamline processes through detailed documentation and targeted improvements that enhance overall efficiency. I thrive when tackling challenges, whether by identifying opportunities for innovation or solving specific problems, always striving to be an integral part of the solution. My proficiency in Python and JavaScript allows me to seamlessly integrate traditional engineering practices with modern technology.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
            I appreciate you taking the time to explore my work, and I look forward to connecting about future collaborations and exciting projects.
            </p>
            
            {/* Education & Work Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-dark-100 p-4 rounded-lg border border-primary-500/30 hover:border-primary-500/60 transition-all">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-primary-500 mr-2" />
                  <h4 className="text-white font-medium">Education</h4>
                </div>
                <p className="text-gray-300 text-sm">B.S. Information Systems</p>
                <p className="text-primary-400 text-sm">Louisiana State University</p>
              </div>
              
              <div className="bg-dark-100 p-4 rounded-lg border border-primary-500/30 hover:border-primary-500/60 transition-all">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-primary-500 mr-2" />
                  <h4 className="text-white font-medium">Experience</h4>
                </div>
                <p className="text-gray-300 text-sm">Engineering Technician</p>
                <p className="text-primary-400 text-sm">TechServ Engineering & Consulting</p>
              </div>
            </div>
            
            {/* Fun fact card */}
            <div 
              className="bg-dark-100 p-4 rounded-lg mb-8 border border-primary-500/30 hover:border-primary-500/60 transition-all cursor-pointer relative overflow-hidden group"
              onClick={cycleFunFact}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-white font-medium flex items-center mb-2">
                <Coffee className="h-5 w-5 text-primary-500 mr-2" />
                Fun Fact
                <span className="text-xs text-gray-400 ml-auto">(click me)</span>
              </h4>
              <p className="text-gray-300">{funFacts[currentFact]}</p>
            </div>
            
            {/* Skills bars */}
            <div className="mb-8">
              <h4 className="text-white font-medium flex items-center mb-4">
                <Rocket className="h-5 w-5 text-primary-500 mr-2" />
                Technical Skills
              </h4>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-300 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div 
                className={`bg-dark-100 p-4 rounded-lg flex items-start space-x-3 transition-all duration-300 cursor-pointer ${activeSkill === 'dev' ? 'ring-2 ring-primary-500 transform scale-105' : 'hover:bg-dark-300/50'}`}
                onMouseEnter={() => setActiveSkill('dev')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <Code className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Development</h4>
                  <p className="text-gray-400 text-sm">Web & software applications</p>
                </div>
              </div>
              
              <div 
                className={`bg-dark-100 p-4 rounded-lg flex items-start space-x-3 transition-all duration-300 cursor-pointer ${activeSkill === 'sys' ? 'ring-2 ring-primary-500 transform scale-105' : 'hover:bg-dark-300/50'}`}
                onMouseEnter={() => setActiveSkill('sys')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <Server className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Systems</h4>
                  <p className="text-gray-400 text-sm">Integration & automation</p>
                </div>
              </div>
              
              <div 
                className={`bg-dark-100 p-4 rounded-lg flex items-start space-x-3 transition-all duration-300 cursor-pointer ${activeSkill === 'data' ? 'ring-2 ring-primary-500 transform scale-105' : 'hover:bg-dark-300/50'}`}
                onMouseEnter={() => setActiveSkill('data')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <Database className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Data</h4>
                  <p className="text-gray-400 text-sm">SQL & database management</p>
                </div>
              </div>
              
              <div 
                className={`bg-dark-100 p-4 rounded-lg flex items-start space-x-3 transition-all duration-300 cursor-pointer ${activeSkill === 'eng' ? 'ring-2 ring-primary-500 transform scale-105' : 'hover:bg-dark-300/50'}`}
                onMouseEnter={() => setActiveSkill('eng')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <Wrench className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Engineering</h4>
                  <p className="text-gray-400 text-sm">AutoCAD & technical design</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div 
                className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500/30 p-2 animate-float transition-all duration-500 ${isHovering ? 'border-primary-500 shadow-lg shadow-primary-500/20' : ''}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className={`w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 p-1 transition-all duration-500 ${isHovering ? 'animate-pulse-slow' : ''}`}>
                  <img 
                    src={profileImage} 
                    alt="Ryan K. Miller" 
                    className={`w-full h-full object-cover rounded-full transition-all duration-500 ${isHovering ? 'scale-110' : 'scale-100'}`}
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-dark-100 p-3 rounded-lg shadow-lg animate-pulse-slow">
                <Cpu className="h-8 w-8 text-primary-500" />
              </div>
              
              <div className="absolute -top-4 -left-4 bg-dark-100 p-3 rounded-lg shadow-lg animate-pulse-slow">
                <BookOpen className="h-8 w-8 text-secondary-500" />
              </div>
              
              {/* Code snippet decoration */}
              <div className="absolute -bottom-8 -left-8 bg-dark-100 p-3 rounded-lg shadow-lg hidden lg:block transform rotate-12">
                <pre className="text-xs text-primary-400 font-mono">
                  <code>{`function dev() {
  return 💻 + ☕;
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
