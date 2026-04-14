import FadeInUp from '../FadeInUp';

const TechStack = () => {
  const technologies = [
    { 
      name: 'React', 
      category: 'Frontend',
      description: 'UI Library',
      color: 'from-blue-400 to-cyan-400'
    },
    { 
      name: 'Next.js', 
      category: 'Frontend',
      description: 'React Framework',
      color: 'from-gray-800 to-gray-900'
    },
    { 
      name: 'TypeScript', 
      category: 'Language',
      description: 'Type Safety',
      color: 'from-blue-600 to-blue-700'
    },
    { 
      name: 'Tailwind CSS', 
      category: 'Styling',
      description: 'Utility Framework',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      name: 'Node.js', 
      category: 'Backend',
      description: 'Runtime',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Express.js', 
      category: 'Backend',
      description: 'Web Framework',
      color: 'from-gray-700 to-gray-800'
    },
    { 
      name: 'MongoDB', 
      category: 'Database',
      description: 'NoSQL DB',
      color: 'from-green-400 to-green-600'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database',
      description: 'SQL DB',
      color: 'from-blue-500 to-blue-700'
    },
    { 
      name: 'AWS', 
      category: 'Cloud',
      description: 'Cloud Services',
      color: 'from-orange-400 to-orange-600'
    },
    { 
      name: 'Docker', 
      category: 'DevOps',
      description: 'Containerization',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'Git', 
      category: 'Version Control',
      description: 'Source Control',
      color: 'from-red-500 to-orange-600'
    },
    { 
      name: 'REST API', 
      category: 'Architecture',
      description: 'API Design',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Version Control', 'Language', 'Styling', 'Architecture'];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technologies We Use
          </h2>
          <p className="text-gray-600 text-lg">
            We leverage the latest and most reliable technologies to build robust, scalable, and future-proof solutions
          </p>
        </div>

        {/* Tech Stack by Category */}
        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-brand-primary rounded-full"></span>
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.filter(t => t.category === 'Frontend' || t.category === 'Styling' || t.category === 'Language').map((tech, index) => (
                <FadeInUp key={index}>
                  <div className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-white hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105`}>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                    <div className="mt-4 pt-4 border-t border-white/20 text-xs opacity-75">{tech.category}</div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-brand-primary rounded-full"></span>
              Backend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.filter(t => t.category === 'Backend').map((tech, index) => (
                <FadeInUp key={index}>
                  <div className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-white hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105`}>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                    <div className="mt-4 pt-4 border-t border-white/20 text-xs opacity-75">{tech.category}</div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Database & Cloud */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-brand-primary rounded-full"></span>
              Database & Cloud Infrastructure
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.filter(t => t.category === 'Database' || t.category === 'Cloud').map((tech, index) => (
                <FadeInUp key={index}>
                  <div className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-white hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105`}>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                    <div className="mt-4 pt-4 border-t border-white/20 text-xs opacity-75">{tech.category}</div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-brand-primary rounded-full"></span>
              DevOps & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.filter(t => t.category === 'DevOps' || t.category === 'Version Control' || t.category === 'Architecture').map((tech, index) => (
                <FadeInUp key={index}>
                  <div className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-white hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105`}>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                    <div className="mt-4 pt-4 border-t border-white/20 text-xs opacity-75">{tech.category}</div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
