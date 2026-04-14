import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TechStackModels = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    {
      id: 'react',
      name: 'React',
      icon: '/react.js.png',
      color: '#61dafb',
      description: 'A JavaScript library for building user interfaces with reusable components.',
      features: ['Component-based', 'Virtual DOM', 'Unidirectional Data Flow', 'Large Community'],
      useCases: ['Single Page Applications', 'Progressive Web Apps', 'Mobile Apps with React Native'],
      version: '18.x'
    },
    {
      id: 'node',
      name: 'Node.js',
      icon: '/javascript.png',
      color: '#f7df1e',
      description: 'JavaScript runtime built on Chrome\'s V8 engine for server-side development.',
      features: ['Event-driven', 'Non-blocking I/O', 'NPM Ecosystem', 'Scalable'],
      useCases: ['REST APIs', 'Real-time Applications', 'Microservices', 'Streaming Applications'],
      version: '18.x LTS'
    },
    {
      id: 'mongo',
      name: 'MongoDB',
      icon: '/mongoodb.png',
      color: '#13aa52',
      description: 'NoSQL database that stores data in flexible, JSON-like documents.',
      features: ['Document-oriented', 'Flexible Schema', 'Horizontal Scaling', 'Aggregation Pipeline'],
      useCases: ['Content Management', 'Real-time Analytics', 'IoT Applications', 'Mobile Apps'],
      version: '6.x'
    },
    {
      id: 'next',
      name: 'Next.js',
      icon: '/next.js.png',
      color: '#000000',
      description: 'React framework for production with server-side rendering and static generation.',
      features: ['SSR/SSG', 'API Routes', 'File-based Routing', 'Image Optimization'],
      useCases: ['E-commerce Sites', 'Blogs', 'Marketing Websites', 'Full-stack Applications'],
      version: '13.x'
    },
    {
      id: 'android',
      name: 'Android',
      icon: '/android.png',
      color: '#3ddc84',
      description: 'Open-source mobile operating system for building native Android applications.',
      features: ['Native Performance', 'Large User Base', 'Rich APIs', 'Material Design'],
      useCases: ['Mobile Applications', 'Wearables', 'IoT Devices', 'Smart TVs'],
      version: '13.x+'
    },
    {
      id: 'ios',
      name: 'iOS',
      icon: '/ios.png',
      color: '#555555',
      description: 'Apple\'s mobile operating system for building native iPhone and iPad apps.',
      features: ['High Performance', 'Security', 'SwiftUI', 'App Store Distribution'],
      useCases: ['iPhone Apps', 'iPad Apps', 'Apple Watch Apps', 'Premium Applications'],
      version: '16.x+'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden text-gray-800 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-15 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-200 to-emerald-200 rounded-full blur-3xl opacity-15 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-green-500 to-indigo-600">Tech Stack</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              Explore the cutting-edge technologies we use to build scalable, modern solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                onClick={() => setSelectedTech(selectedTech === tech.id ? null : tech.id)}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ backgroundColor: tech.color }}
                  ></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${tech.color}15 0%, ${tech.color}05 100%)`,
                        border: `3px solid ${tech.color}`
                      }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{tech.description}</p>

                  {/* Version Badge */}
                  <div className="mb-6">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: tech.color }}
                    >
                      v{tech.version}
                    </span>
                  </div>

                  {/* Expandable Content */}
                  {selectedTech === tech.id && (
                    <div className="relative pt-6 border-t-2 border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {tech.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <span
                                className="w-2 h-2 rounded-full mr-3"
                                style={{ backgroundColor: tech.color }}
                              ></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Use Cases</h4>
                        <ul className="space-y-2">
                          {tech.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <span
                                className="w-2 h-2 rounded-full mr-3"
                                style={{ backgroundColor: tech.color }}
                              ></span>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Click Indicator */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                      {selectedTech === tech.id ? 'Click to collapse' : 'Click to learn more'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's leverage these powerful technologies to create solutions tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechStackModels;
