import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Ryan K. Miller | Developer Portfolio';
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-dark-100 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
