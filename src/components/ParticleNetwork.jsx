import { useEffect, useRef } from 'react';

const ParticleNetwork = ({ width = 800, height = 600, particleCount = 60, connectionDistance = 160, speed = 1.2 }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Particle class
    class Particle {
      constructor(x, y, canvasWidth, canvasHeight) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * speed * 2;
        this.vy = (Math.random() - 0.5) * speed * 2;
        this.radius = Math.random() * 2.5 + 1.5;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x - this.radius < 0 || this.x + this.radius > this.canvasWidth) {
          this.vx *= -1;
          this.x = Math.max(this.radius, Math.min(this.canvasWidth - this.radius, this.x));
        }
        if (this.y - this.radius < 0 || this.y + this.radius > this.canvasHeight) {
          this.vy *= -1;
          this.y = Math.max(this.radius, Math.min(this.canvasHeight - this.radius, this.y));
        }
      }

      draw(ctx) {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.9)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + 1.5, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesRef.current.push(new Particle(x, y, canvas.width, canvas.height));
      }
    };

    initParticles();

    // Draw connecting lines with optimized distance calculation
    const drawConnections = () => {
      const particles = particlesRef.current;
      const connectionDist = connectionDistance;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = connectionDist * connectionDist;

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            const opacity = (1 - distance / connectionDist) * 0.6;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent background for smooth trail effect
      ctx.fillStyle = 'rgba(49, 46, 129, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections
      drawConnections();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, connectionDistance, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0"
      style={{ display: 'block' }}
    />
  );
};

export default ParticleNetwork;
