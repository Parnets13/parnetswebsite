const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative w-full min-h-[350px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-b-3xl pt-32">
      {/* Animated Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs with Glow */}
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

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[350px]">
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white mb-4">
            {title.split(' ').map((word, idx) => (
              idx === title.split(' ').length - 1 ? (
                <span key={idx} className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                <span key={idx}>{word} </span>
              )
            ))}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>

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

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PageHero;
