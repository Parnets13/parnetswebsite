import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import ParticleNetwork from './ParticleNetwork';

const Footer = () => {
  const [visibleItems, setVisibleItems] = useState({
    widget1: false,
    widget2: false,
    widget3: false,
    widget4: false,
    copyright: false
  });

  const canvasRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const timings = {
      widget1: 0,
      widget2: 100,
      widget3: 200,
      widget4: 300,
      copyright: 400
    };

    Object.entries(timings).forEach(([key, delay]) => {
      setTimeout(() => {
        setVisibleItems(prev => ({ ...prev, [key]: true }));
      }, delay);
    });
  }, []);

  // 3D Animation Loop
  useEffect(() => {
    let animationId;
    let angle = 0;

    const animate = () => {
      angle += 0.3;
      setRotation({
        x: Math.sin(angle * 0.001) * 20,
        y: angle * 0.5,
        z: Math.cos(angle * 0.001) * 15
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <footer className="text-gray-300 relative overflow-hidden pt-20 pb-8" style={{ backgroundColor: '#1a1a2e', perspective: '1000px' }}>
      {/* 3D Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: '1200px' }}>
        {/* 3D Cube Grid Background */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {/* Animated 3D Boxes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute border rounded-lg"
              style={{
                borderColor: `rgba(249, 115, 22, ${0.4 + i * 0.08})`,
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: `${10 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 30}%`,
                transformStyle: 'preserve-3d',
                transform: `translateZ(${i * 100}px) rotateX(${i * 15}deg) rotateY(${i * 20}deg)`,
                opacity: 0.15 + (i * 0.08),
                animation: `float${i % 3} ${4 + i * 0.5}s ease-in-out infinite`,
                boxShadow: `0 0 ${25 + i * 8}px rgba(249, 115, 22, ${0.2 + i * 0.08}), inset 0 0 ${15 + i * 5}px rgba(249, 115, 22, ${0.1 + i * 0.05})`
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Lines */}
        <div className="absolute inset-0 w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              style={{
                height: '2px',
                width: '100%',
                top: `${(i + 1) * 12.5}%`,
                opacity: 0.35,
                animation: `slideHorizontal ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>

        {/* Particle Network */}
        <div className="absolute inset-0 h-full w-full opacity-25">
          <ParticleNetwork 
            particleCount={40} 
            connectionDistance={120} 
            speed={0.6}
          />
        </div>
      </div>

      {/* Gradient Overlay - Lighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-black/20 pointer-events-none z-1"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Widget 1 - Brand */}
          <div className={`flex-shrink-0 z-20 transition-all duration-700 ${visibleItems.widget1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/" className="flex items-center mb-6 group">
              <img 
                src="/logo.png" 
                alt="Parnets" 
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                style={{ maxWidth: '160px' }}
              />
            </Link>
          
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light mb-8">
              ParNets is a leading custom software development company delivering innovative digital solutions and transforming businesses through cutting-edge technology.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31392C20.6337 5.79136 21.2877 4.96894 21.6005 3.97607C20.78 4.46221 19.881 4.80765 18.944 4.99596C18.15 4.1462 17.0385 3.65527 15.895 3.65527C13.582 3.65527 11.7585 5.56708 11.7585 7.848C11.7585 8.17265 11.785 8.49089 11.8485 8.79979C8.411 8.62562 5.3855 6.94589 3.328 4.40879C2.9645 5.03434 2.7605 5.73351 2.7605 6.47192C2.7605 7.92557 3.4875 9.20815 4.6005 9.94057C3.914 9.92087 3.2355 9.73403 2.6505 9.40955C2.6505 9.42621 2.6505 9.44439 2.6505 9.46257C2.6505 11.536 4.0955 13.2655 6.059 13.6653C5.7005 13.7652 5.3285 13.8152 4.9455 13.8152C4.671 13.8152 4.4035 13.7849 4.1435 13.738C4.6865 15.4371 6.2415 16.6743 8.0835 16.7092C6.6715 17.8283 4.881 18.4991 2.9465 18.4991C2.597 18.4991 2.253 18.4795 1.9165 18.4416C3.7745 19.6455 5.9725 20.3541 8.328 20.3541C16.023 20.3541 20.2315 13.9715 20.2315 8.43701C20.2315 8.25378 20.226 8.07207 20.218 7.89187C21.036 7.30055 21.7455 6.54418 22.3165 5.67261L22.162 5.65593Z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Widget 2 - Links */}
          <div className={`transition-all duration-700 ${visibleItems.widget2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-base sm:text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li className="group"><Link to="/" className="text-xs sm:text-sm text-gray-400 hover:text-brand-primary transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"><span className="w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Home</Link></li>
              <li className="group"><Link to="/about-us" className="text-xs sm:text-sm text-gray-400 hover:text-brand-primary transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"><span className="w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> About Us</Link></li>
              <li className="group"><Link to="/services" className="text-xs sm:text-sm text-gray-400 hover:text-brand-primary transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"><span className="w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Services</Link></li>
              <li className="group"><Link to="/projects" className="text-xs sm:text-sm text-gray-400 hover:text-brand-primary transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"><span className="w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Projects</Link></li>
              <li className="group"><Link to="/industries" className="text-xs sm:text-sm text-gray-400 hover:text-brand-primary transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"><span className="w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Industries</Link></li>
              <li className="group"><Link to="/careers" className="text-xs sm:text-sm text-gray-400 hover:text-brand-primary transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"><span className="w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Careers</Link></li>
              <li className="group"><Link to="/contact" className="text-xs sm:text-sm text-gray-400 hover:text-brand-primary transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"><span className="w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact</Link></li>
            </ul>
          </div>

          {/* Widget 3 - Contact */}
          <div className={`transition-all duration-700 ${visibleItems.widget3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-base sm:text-lg font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="transition-all duration-300">
                  <h5 className="text-white font-semibold mb-1 text-xs sm:text-sm">Location</h5>
                  <p className="text-gray-400 text-xs leading-relaxed">104/1 Singapura Main Road, Bengaluru, Karnataka 560097</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="transition-all duration-300">
                  <h5 className="text-white font-semibold mb-1 text-xs sm:text-sm">Email</h5>
                  <a href="mailto:info@Parnets.com" className="text-gray-400 text-xs hover:text-brand-primary transition-colors">info@Parnets.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="transition-all duration-300">
                  <h5 className="text-white font-semibold mb-1 text-xs sm:text-sm">Phone</h5>
                  <a href="tel:+919876543210" className="text-gray-400 text-xs hover:text-brand-primary transition-colors">+91 98765 43210</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Widget 4 - Newsletter */}
          <div className={`transition-all duration-700 ${visibleItems.widget4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="text-base sm:text-lg font-bold text-white mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 font-light mb-6 text-xs sm:text-sm leading-relaxed">
              Subscribe to get the latest updates and insights delivered to your inbox.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-xs sm:text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all duration-300"
                required 
              />
              <button 
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-primary text-white rounded-md flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
        
        {/* Copyright & Links */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 ${visibleItems.copyright ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-gray-500 text-center sm:text-left hover:text-gray-300 transition-colors duration-300">
            &copy; {new Date().getFullYear()} <span className="text-brand-primary font-semibold">Parnets</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link to="/term-conditions" className="hover:text-brand-primary transition-colors duration-300 hover:translate-x-0.5">Terms</Link>
            <span className="text-white/20">•</span>
            <Link to="/privacy-policy" className="hover:text-brand-primary transition-colors duration-300 hover:translate-x-0.5">Privacy</Link>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float0 {
          0%, 100% {
            transform: translateZ(0px) rotateX(0deg) rotateY(0deg) translateY(0px);
            opacity: 0.15;
          }
          50% {
            transform: translateZ(80px) rotateX(15deg) rotateY(15deg) translateY(-30px);
            opacity: 0.25;
          }
        }

        @keyframes float1 {
          0%, 100% {
            transform: translateZ(100px) rotateX(0deg) rotateY(0deg) translateY(0px);
            opacity: 0.18;
          }
          50% {
            transform: translateZ(180px) rotateX(-15deg) rotateY(-15deg) translateY(30px);
            opacity: 0.28;
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateZ(200px) rotateX(0deg) rotateY(0deg) translateY(0px);
            opacity: 0.20;
          }
          50% {
            transform: translateZ(280px) rotateX(20deg) rotateY(-20deg) translateY(-25px);
            opacity: 0.30;
          }
        }

        @keyframes slideHorizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          25% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.5;
            transform: translateX(0%);
          }
          75% {
            opacity: 0.4;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
