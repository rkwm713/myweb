import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data';
import { ExternalLink, Github, ChevronRight, ChevronLeft, Code, Cpu, Zap, Star, Terminal, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [hoverTech, setHoverTech] = useState<string | null>(null);
  const [codeVisible, setCodeVisible] = useState(false);

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

  // Auto-rotate projects every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentProject]);

  const nextProject = () => {
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const prevProject = () => {
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const toggleCode = () => {
    setCodeVisible(!codeVisible);
  };

  // Sample code snippets for each project
  const codeSnippets = [
    `// Smart Home Automation
const toggleLight = async (roomId, status) => {
  try {
    await mqtt.publish(
      \`home/room/\${roomId}/light\`, 
      JSON.stringify({ status })
    );
    return { success: true };
  } catch (err) {
    console.error('Failed to toggle light:', err);
    return { success: false, error: err.message };
  }
};`,
    `// Data Visualization Dashboard
const renderChart = (data) => {
  const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
    
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 30)
    .attr('y', d => height - d.value * 10)
    .attr('width', 25)
    .attr('height', d => d.value * 10)
    .attr('fill', d => d.color);
};`,
    `// Inventory Management System
function searchInventory(query) {
  return new Promise((resolve, reject) => {
    const sql = \`
      SELECT * FROM inventory 
      WHERE name LIKE ? OR category LIKE ? 
      ORDER BY last_updated DESC
    \`;
    
    db.query(sql, [\`%\${query}%\`, \`%\${query}%\`], 
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
}`,
    `# Predictive Maintenance Algorithm
def predict_failure(equipment_data):
    # Preprocess time series data
    features = extract_features(equipment_data)
    
    # Apply trained model
    failure_prob = model.predict_proba(features)[0][1]
    
    # Return prediction with confidence
    return {
        'probability': failure_prob,
        'risk_level': 'High' if failure_prob > 0.7 else 'Medium' if failure_prob > 0.4 else 'Low',
        'estimated_days_until_failure': int(100 * (1 - failure_prob))
    }`
  ];

  return (
    <section id="projects" className="py-20 bg-dark-100 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 z-0 bg-hero-gradient"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Star className="h-6 w-6 text-yellow-400 ml-2 animate-spin-slow" />
            Featured Projects
            <Star className="h-6 w-6 text-yellow-400 ml-2 animate-spin-slow" />
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects and solutions that demonstrate my skills and expertise.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div 
                className={`bg-dark-200/80 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20 shadow-lg hover:shadow-primary-500/10 transition-all transform ${
                  isAnimating 
                    ? direction === 'right' 
                      ? 'translate-x-10 opacity-0' 
                      : '-translate-x-10 opacity-0' 
                    : 'translate-x-0 opacity-100'
                } duration-300`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-white group flex items-center">
                    <span className="group-hover:text-primary-400 transition-colors">{projects[currentProject].title}</span>
                    <Zap className="h-5 w-5 text-yellow-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <div className="flex space-x-2">
                    <button 
                      onClick={toggleCode}
                      className={`p-2 rounded-full ${codeVisible ? 'bg-primary-500 text-white' : 'bg-dark-300 text-gray-400 hover:text-primary-500'} transition-colors`}
                      title="View Code Snippet"
                    >
                      <Code className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {codeVisible ? (
                  <div className="bg-dark-300 rounded-lg p-4 mb-6 overflow-x-auto">
                    <pre className="text-xs md:text-sm font-mono text-gray-300">
                      <code>{codeSnippets[currentProject]}</code>
                    </pre>
                  </div>
                ) : (
                  <p className="text-gray-300 mb-6">
                    {projects[currentProject].description}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 ${hoverTech === tech ? 'bg-primary-500 text-white' : 'bg-primary-500/10 text-primary-400'} text-sm rounded-full cursor-pointer transition-colors duration-300 transform hover:scale-105`}
                      onMouseEnter={() => setHoverTech(tech)}
                      onMouseLeave={() => setHoverTech(null)}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {projects[currentProject].link && (
                    <a 
                      href={projects[currentProject].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out opacity-10"></span>
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {projects[currentProject].github && (
                    <a 
                      href={projects[currentProject].github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white bg-dark-300 hover:bg-dark-300/80 px-4 py-2 rounded-md transition-colors group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out opacity-10"></span>
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevProject}
                  className="p-2 rounded-full bg-dark-200/80 backdrop-blur-sm hover:bg-primary-500/20 text-gray-400 hover:text-primary-500 transition-colors transform hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <div className="flex space-x-2 items-center">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentProject 
                          ? 'bg-primary-500 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextProject}
                  className="p-2 rounded-full bg-dark-200/80 backdrop-blur-sm hover:bg-primary-500/20 text-gray-400 hover:text-primary-500 transition-colors transform hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group perspective-1000">
                {/* Terminal decoration */}
                <div className="absolute -top-6 -right-6 bg-dark-200/80 backdrop-blur-sm p-2 rounded-lg shadow-lg z-20 hidden md:block">
                  <Terminal className="h-6 w-6 text-primary-500" />
                </div>
                
                {/* Project number badge */}
                <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-mono text-lg font-bold z-20 shadow-lg">
                  {currentProject + 1}
                </div>
                
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                <div className="relative bg-dark-200/80 backdrop-blur-sm ring-1 ring-gray-900/5 rounded-lg overflow-hidden transform transition-all duration-500 group-hover:rotate-y-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <Sparkles className="h-5 w-5 text-primary-400 animate-pulse" />
                  </div>
                  
                  <img 
                    src={projects[currentProject].image} 
                    alt={projects[currentProject].title} 
                    className="w-full h-64 md:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay with tech stack on hover */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{projects[currentProject].title}</h3>
                    <p className="text-gray-300 text-sm mb-4">Built with:</p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
