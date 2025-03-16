import React, { useEffect, useRef } from 'react';

interface StarBackgroundProps {
  className?: string;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ className = '' }) => {
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

    // Function to get a random star color (gold or silver)
    const getRandomStarColor = () => {
      const colors = [
        // Gold colors with varying opacity
        `rgba(212, 175, 55, ${Math.random() * 0.7 + 0.3})`,
        `rgba(255, 215, 0, ${Math.random() * 0.7 + 0.3})`,
        `rgba(184, 134, 11, ${Math.random() * 0.7 + 0.3})`,
        // Silver colors with varying opacity
        `rgba(192, 192, 192, ${Math.random() * 0.7 + 0.3})`,
        `rgba(169, 169, 169, ${Math.random() * 0.7 + 0.3})`,
        `rgba(230, 232, 250, ${Math.random() * 0.7 + 0.3})`,
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1, // Increased size
          speedX: (Math.random() - 0.5) * 0.3, // Reduced speed
          speedY: (Math.random() - 0.5) * 0.3, // Reduced speed
          color: getRandomStarColor(), // Random star color (gold or silver)
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
            // Use a color that matches the particles being connected
            const connectionColor = p.color.includes('212, 175, 55') || p.color.includes('255, 215, 0') || p.color.includes('184, 134, 11')
              ? `rgba(212, 175, 55, ${0.3 * (1 - distance / 100)})`  // Gold connection
              : `rgba(192, 192, 192, ${0.3 * (1 - distance / 100)})`; // Silver connection
            
            ctx.beginPath();
            ctx.strokeStyle = connectionColor;
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
    <>
      <canvas ref={canvasRef} className={`fixed inset-0 z-10 pointer-events-none ${className}`}></canvas>
      <div className="fixed inset-0 z-0 bg-hero-gradient"></div>
    </>
  );
};

export default StarBackground;
