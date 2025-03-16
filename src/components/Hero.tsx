import React from 'react';
import { ChevronDown, Code, Terminal, Database, Server } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-100">
      
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
