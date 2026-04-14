import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FadeInUp from '../components/FadeInUp';

// Dynamically load AOS
const loadAOS = () => {
  if (typeof window !== 'undefined' && !window.AOS) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });
    };
    document.body.appendChild(script);
  }
};

const Projects = () => {
  useEffect(() => {
    loadAOS();
  }, []);
  const projects = [
    {
      id: 1,
      name: 'Dailydish',
      description: 'A platform delivering fresh and delicious meals daily with easy ordering and fast delivery.',
      image: '/dailydish image.png',
      liveUrl: 'https://dailydish.in/home',
      detailsUrl: '/project-details/dailydish'
    },
    {
      id: 2,
      name: 'Dhanya Tour & Travel',
      description: 'Complete travel booking platform with customized tour packages and seamless reservations.',
      image: '/Dhanya Tour & Travel image.png',
      liveUrl: 'https://dhanyatoursandtravels.com/home/',
      detailsUrl: '/project-details/dhanya'
    },
    {
      id: 3,
      name: 'Doorstep',
      description: 'On-demand delivery service connecting customers with local businesses for quick and reliable service.',
      image: '/Doorstep image.png',
      liveUrl: 'https://doorstepedu.com/',
      detailsUrl: '/project-details/doorstep'
    },
    {
      id: 4,
      name: 'Bright Beginning',
      description: 'Educational platform providing quality learning resources and interactive courses for students.',
      image: '/Bright Beginning image.png',
      liveUrl: 'https://example.com',
      detailsUrl: '/project-details/bright-beginning'
    },
    {
      id: 5,
      name: 'Insta Buy Computers',
      description: 'E-commerce platform for computer hardware and accessories with expert recommendations.',
      image: '/Insta Buy Computers image.png',
      liveUrl: 'https://example.com',
      detailsUrl: '/project-details/insta-buy'
    },
    {
      id: 6,
      name: 'Just Buy Gold',
      description: 'Online gold trading platform with real-time prices and secure transactions for investors.',
      image: '/Just Buy Gold image.png',
      liveUrl: 'https://example.com',
      detailsUrl: '/project-details/just-buy-gold'
    },
    {
      id: 7,
      name: 'Kittu',
      description: 'Fashion and lifestyle marketplace connecting customers with premium brands and designers.',
      image: '/Kittu image.png',
      liveUrl: 'https://example.com',
      detailsUrl: '/project-details/kittu'
    },
    {
      id: 8,
      name: 'Spazo',
      description: 'Wellness and spa booking platform offering premium services and relaxation experiences.',
      image: '/Spazo image.png',
      liveUrl: 'https://example.com',
      detailsUrl: '/project-details/spazo'
    },
    {
      id: 9,
      name: 'Valuepro',
      description: 'Property valuation and real estate analytics platform with comprehensive market insights.',
      image: '/Valuepro image.png',
      liveUrl: 'https://example.com',
      detailsUrl: '/project-details/valuepro'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop" 
            alt="Projects Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-gray-900/85 to-brand-secondary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Featured Projects
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore our latest projects showcasing our expertise and commitment to excellence across diverse industries.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-brand-primary">Our</span> Projects
              </h2>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <p className="text-lg md:text-xl leading-relaxed text-center bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Welcome to our showcase of projects, a testament to our commitment to innovation, quality, and excellence. Each project reflects our dedication to delivering tailored solutions that meet the unique needs of our clients. From cutting-edge e-commerce platforms and educational resources to travel services and technological solutions, our portfolio spans a wide range of industries.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              // Determine AOS animation based on row
              let aosAnimation = '';
              if (index < 3) {
                // First row: fade-up animation
                aosAnimation = 'fade-up';
              } else if (index < 6) {
                // Second row: fade-left animation
                aosAnimation = 'fade-left';
              } else {
                // Third row: fade-right animation
                aosAnimation = 'fade-right';
              }

              return (
                <div key={project.id} data-aos={aosAnimation}>
                  <FadeInUp>
                    <div className="group relative bg-[#363090] rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col text-white p-8">
                  {/* Top Content - Auto Height */}
                  <div className="mb-8">
                    <h3 className="text-4xl font-bold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-indigo-100 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Image Section - White Background - Clickable - Flex Grow */}
                  <div className="relative w-full flex-1 rounded-[25px] bg-white p-6 flex items-center justify-center overflow-hidden cursor-pointer group/img mb-6" onClick={() => window.open(project.image, '_blank')}>
                    <img src={project.image} alt={project.name} className="w-full h-full object-contain group-hover/img:scale-110 transition-transform duration-700" />
                  </div>

                  {/* Bottom Buttons - Fixed Height */}
                  <div className="h-14 flex gap-4 items-center justify-between">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-orange-300 transition-colors duration-300 group/btn">
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-brand-primary text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn whitespace-nowrap">
                      <span>Reach Out</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </Link>
                  </div>
                    </div>
                  </FadeInUp>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden p-8 md:p-16">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop" 
                alt="Background" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Transform Your Vision into Reality
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Partner with us to create cutting-edge web solutions that drive success and innovation.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base w-full md:w-auto"
                >
                  <span>Talk to Expert</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center gap-2 bg-transparent border-2 border-purple-500 text-white px-8 py-4 rounded-full hover:bg-purple-500/10 transition-all duration-300 font-semibold text-base w-full md:w-auto"
                >
                  <span>Hire Us</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
