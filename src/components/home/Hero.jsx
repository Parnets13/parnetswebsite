import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdShield, MdSettings, MdDescription } from 'react-icons/md';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const technologies = [
    { id: 'react', name: 'React', image: '/react.js.png' },
    { id: 'node', name: 'Node.js', image: '/android.png' },
    { id: 'mongo', name: 'MongoDB', image: '/mongoodb.png' },
    { id: 'next', name: 'Next.js', image: '/next.js.png' },
    { id: 'android', name: 'Android', image: '/android.png' },
    { id: 'ios', name: 'iOS', image: '/ios.png' }
  ];

  const rotatingTexts = [
    'Digital Innovation',
    'Web Solutions',
    'App Development',
    'Tech Excellence',
    'Digital Transformation',
    'Creative Technology'
  ];

  const heroImages = [
    '/hero image1.png'
  ];

  const heroVideos = [
    '/hero video1.mp4',
    '/hiro video2.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentFullText = rotatingTexts[currentTextIndex];
    
    const typingSpeed = isDeleting ? 50 : 80;
    const pauseTime = isDeleting ? 500 : 2500;

    if (!isDeleting && displayText === currentFullText) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, rotatingTexts]);

  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden bg-black rounded-b-3xl pt-16 sm:pt-20 md:pt-24 lg:pt-0"
    >
      {/* Video Background - Fullscreen with proper mobile support */}
      <div className="absolute inset-0 overflow-hidden rounded-b-3xl w-full h-full">
        <video
          key={currentVideoIndex}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover rounded-b-3xl"
          onEnded={() => setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)}
          style={{
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        >
          <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 rounded-b-3xl"></div>
      </div>

      {/* Animated Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs with Glow - Only Blue and Cyan */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-40 -left-32 w-80 h-80 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-300 rounded-full opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#60a5fa" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full">
        <div className="flex items-center justify-between min-h-screen lg:min-h-screen md:min-h-screen sm:min-h-auto">
          {/* Left Content */}
          <div className="space-y-8 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-8 relative text-left w-full lg:w-1/2 py-8 sm:py-12 lg:py-0">
            {/* Main Heading with Premium Typography */}
            <div className="space-y-6 ml-5 lg:ml-5">
              <div>
                <h1 className="text-5xl font-black leading-tight text-white">
                The Ultimate
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                    {displayText || 'Digital Magic'}
                  </span>
                </h1>
              </div>
              
              {/* Animated Accent Lines */}
              <div className="flex gap-3 pt-2 justify-start">
                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                <div className="w-12 h-1.5 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            {/* Premium Description */}
            <p className="text-3xl text-white leading-relaxed max-w-2xl font-light ml-0 lg:ml-8">
             From sleek websites to intuitive apps, we deliver solutions that captivate and engage.
            </p>

            {/* Tech Stack Icons - Between Description and Buttons */}
            <div className="flex justify-start items-center ml-0 lg:ml-8">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.id}
                  className="relative group"
                  title={tech.name}
                  style={{ marginLeft: index === 0 ? 0 : '-0.75rem' }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden border-3 border-white hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:scale-110 hover:z-50 relative z-10">
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-50">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-row gap-5 pt-6 justify-start ml-0 lg:ml-8 w-full">
              <Link 
                to="/contact"
                className="group relative px-12 py-4 rounded-full font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center overflow-hidden text-lg flex-1 sm:flex-none"
                style={{ 
                  background: '#f97316',
                  boxShadow: 'none'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-3">
                  <span className="hidden sm:inline">Know more</span>
                  <span className="sm:hidden">Know</span>
                  <FaArrowRight className="w-3 sm:w-5 h-3 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-orange-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </Link>
              
              <Link 
                to="/projects"
                className="group relative px-12 py-4 rounded-full font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center border-0 overflow-hidden text-lg flex-1 sm:flex-none"
                style={{ 
                  background: '#2563eb',
                  boxShadow: 'none'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-3">
                  <span className="hidden sm:inline">Our Forte</span>
                  <span className="sm:hidden">Forte</span>
                  <FaArrowRight className="w-3 sm:w-5 h-3 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-blue-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </Link>
            </div>
          </div>

          {/* Right Side Icons - Visible on lg screens, below content on mobile */}
          <div className="lg:flex flex-col gap-6 justify-end items-end w-1/2 relative h-screen pr-8 pb-20 hidden">
            {/* Shield Icon - Privacy Policy */}
            <Link to="/privacy-policy" className="group relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:from-blue-50 group-hover:to-blue-100 cursor-pointer">
                <MdShield className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <span className="absolute right-20 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                Privacy Policy
              </span>
            </Link>

            {/* Settings/Gear Icon - Maintenance Policy */}
            <Link to="/maintenance-policy" className="group relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:from-orange-50 group-hover:to-orange-100 cursor-pointer">
                <MdSettings className="w-8 h-8 text-gray-700 group-hover:text-orange-600 transition-colors duration-300 animate-spin-slow" />
              </div>
              <span className="absolute right-20 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                Maintenance Policy
              </span>
            </Link>

            {/* Document Icon - Terms & Conditions */}
            <Link to="/term-conditions" className="group relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:from-cyan-50 group-hover:to-cyan-100 cursor-pointer">
                <MdDescription className="w-8 h-8 text-gray-700 group-hover:text-cyan-600 transition-colors duration-300" />
              </div>
              <span className="absolute right-20 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                Terms & Conditions
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Icons Section - Below Hero on mobile/tablet */}
        <div className="lg:hidden relative z-10 w-full py-3 px-4 mt-8">
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-4">
            {/* Shield Icon - Privacy Policy */}
            <Link to="/privacy-policy" className="group relative flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:from-blue-50 group-hover:to-blue-100 cursor-pointer">
                <MdShield className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <span className="mt-2 text-white text-xs sm:text-sm font-semibold text-center">
                Privacy Policy
              </span>
            </Link>

            {/* Settings/Gear Icon - Maintenance Policy */}
            <Link to="/maintenance-policy" className="group relative flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:from-orange-50 group-hover:to-orange-100 cursor-pointer">
                <MdSettings className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700 group-hover:text-orange-600 transition-colors duration-300 animate-spin-slow" />
              </div>
              <span className="mt-2 text-white text-xs sm:text-sm font-semibold text-center">
                Maintenance Policy
              </span>
            </Link>

            {/* Document Icon - Terms & Conditions */}
            <Link to="/term-conditions" className="group relative flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:from-cyan-50 group-hover:to-cyan-100 cursor-pointer">
                <MdDescription className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700 group-hover:text-cyan-600 transition-colors duration-300" />
              </div>
              <span className="mt-2 text-white text-xs sm:text-sm font-semibold text-center">
                Terms & Conditions
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Premium Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -60px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(0px);
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
          }
        }

        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-smooth {
          animation: float-smooth 4s ease-in-out infinite;
        }

        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .animate-float-icon {
          animation: float-icon 4s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
