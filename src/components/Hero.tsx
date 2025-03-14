import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Terminal, Database, Server } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
          color: `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.1})`,
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
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`;
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-100">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 z-0 bg-hero-gradient"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="inline-flex items-center justify-center p-2 bg-primary-500/10 rounded-full mb-4 animate-pulse-slow">
            <Code className="h-8 w-8 text-primary-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Ryan K. <span className="text-primary-500">Miller</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <div className="bg-dark-200/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-300 flex items-center">
              <Terminal className="h-4 w-4 mr-2 text-secondary-400" />
              <span>Developer</span>
            </div>
            <div className="bg-dark-200/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-300 flex items-center">
              <Database className="h-4 w-4 mr-2 text-secondary-400" />
              <span>Engineering Technician</span>
            </div>
            <div className="bg-dark-200/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-300 flex items-center">
              <Server className="h-4 w-4 mr-2 text-secondary-400" />
              <span>Problem Solver</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Building innovative solutions at the intersection of <span className="text-primary-400">technology</span> and <span className="text-secondary-400">engineering</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-primary-500/20"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-500/10 font-medium rounded-md transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
