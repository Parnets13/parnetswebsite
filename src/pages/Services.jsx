import { Code, Smartphone, ShoppingCart, Brain, Palette, ArrowUpRight, MessageSquare, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInUp from '../components/FadeInUp';
import DribbbleAnimation from '../components/DribbbleAnimation';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Design & Development',
      description: 'Custom, responsive websites that drive results and provide exceptional user experiences across all devices.',
      features: [
        'Responsive Web Design',
        'Custom Development',
        'SEO Optimization',
        'Performance Optimization',
        'Content Management Systems',
        'E-commerce Integration'
      ],
      techs: ['NEXT.JS', 'REACT', 'NODE.JS', 'MONGODB', 'TYPESCRIPT', 'GRAPHQL']
    },
    {
      icon: Smartphone,
      title: 'Mobile Experience',
      description: 'Native and cross-platform mobile applications with seamless user experiences.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Apps',
        'UI/UX Design',
        'API Integration',
        'App Store Deployment'
      ],
      techs: ['REACT NATIVE', 'FLUTTER', 'SWIFT', 'KOTLIN', 'FIREBASE', 'EXPO']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Powerful online stores with payment integration and inventory management.',
      features: [
        'Store Setup',
        'Payment Integration',
        'Inventory Management',
        'Product Catalog',
        'Order Management',
        'Analytics & Reporting'
      ],
      techs: ['SHOPIFY', 'WOOCOMMERCE', 'STRIPE', 'PAYPAL', 'MAGENTO', 'BIGCOMMERCE']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by AI and ML for data-driven decision making.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Data Classification',
        'Model Training',
        'AI Integration'
      ],
      techs: ['PYTHON', 'TENSORFLOW', 'PYTORCH', 'SCIKIT-LEARN', 'KERAS', 'OPENAI']
    },
    {
      icon: Palette,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to boost your online presence and reach.',
      features: [
        'SEO Optimization',
        'SEM Campaigns',
        'Social Media Marketing',
        'Content Strategy',
        'Email Marketing',
        'Analytics & Tracking'
      ],
      techs: ['GOOGLE ADS', 'FACEBOOK ADS', 'ANALYTICS', 'MAILCHIMP', 'HOOTSUITE', 'SEMrush']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed for optimal user engagement.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      techs: ['FIGMA', 'ADOBE XD', 'SKETCH', 'PROTOPIE', 'FRAMER', 'WEBFLOW']
    },
    {
      icon: MessageSquare,
      title: 'Customer Care Support',
      description: '24/7 customer support solutions with chatbots and ticketing systems.',
      features: [
        'Chatbot Development',
        'Helpdesk System',
        'CRM Integration',
        'Ticket Management',
        'Knowledge Base',
        'Multi-channel Support'
      ],
      techs: ['INTERCOM', 'ZENDESK', 'FRESHDESK', 'CHATBOT.COM', 'DRIFT', 'HUBSPOT']
    },
    {
      icon: Wrench,
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your systems running smoothly.',
      features: [
        'System Monitoring',
        'Regular Updates',
        'Bug Fixes',
        'Performance Tuning',
        'Security Patches',
        'Technical Support'
      ],
      techs: ['DATADOG', 'NEW RELIC', 'SENTRY', 'UPTIME ROBOT', 'PAGERDUTY', 'SPLUNK']
    }
  ];

  return (
    <div className="bg-white">
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateShape {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px);
            opacity: 0.8;
          }
        }

        @keyframes slideRight {
          0%, 100% {
            transform: translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateX(60px);
            opacity: 0.7;
          }
        }

        @keyframes pulse {
          0%, 100% {
            r: 40px;
            opacity: 0.3;
          }
          50% {
            r: 60px;
            opacity: 0.1;
          }
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        .banner-content {
          animation: slideInUp 0.8s ease-out;
        }
        
        .banner-overlay {
          animation: slideInDown 0.8s ease-out;
        }

        .animation-wrapper {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          overflow: hidden;
        }

        svg {
          width: 100%;
          height: 100%;
          position: absolute;
        }

        .geometric-circle {
          animation: rotateShape 8s linear infinite;
          transform-origin: center;
        }

        .geometric-line {
          stroke-dasharray: 300;
          animation: drawLine 3s ease-in-out infinite;
        }

        .float-element {
          animation: floatUp 4s ease-in-out infinite;
        }

        .slide-element {
          animation: slideRight 5s ease-in-out infinite;
        }

        .pulse-circle {
          animation: pulse 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .animation-wrapper {
            display: none;
          }
        }
      `}</style>
      
      {/* Hero Banner with Geometric Animation */}
      <section className="relative bg-gradient-to-br from-brand-secondary via-gray-900 to-brand-secondary text-white py-60 md:py-20 lg:py-32 overflow-hidden">
        <div className="banner-overlay absolute inset-0 bg-gradient-to-r from-brand-secondary to-transparent"></div>
        
        {/* Animated Geometric Background */}
        <div className="animation-wrapper hidden md:block">
          <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
            {/* Background circles with pulse effect */}
            <circle cx="500" cy="150" r="40" fill="none" stroke="rgba(250, 140, 36, 0.3)" strokeWidth="2" className="pulse-circle" />
            <circle cx="550" cy="400" r="50" fill="none" stroke="rgba(250, 140, 36, 0.2)" strokeWidth="2" className="pulse-circle" style={{animationDelay: '1s'}} />
            <circle cx="480" cy="650" r="35" fill="none" stroke="rgba(250, 140, 36, 0.25)" strokeWidth="2" className="pulse-circle" style={{animationDelay: '2s'}} />
            
            {/* Animated geometric shapes */}
            <g className="geometric-circle" style={{animationDelay: '0s'}}>
              <circle cx="520" cy="200" r="60" fill="none" stroke="rgba(250, 140, 36, 0.4)" strokeWidth="2" />
              <circle cx="520" cy="200" r="45" fill="none" stroke="rgba(250, 140, 36, 0.3)" strokeWidth="1" />
            </g>

            <g className="geometric-circle" style={{animationDelay: '2s'}}>
              <polygon points="480,500 530,480 550,530 500,550" fill="none" stroke="rgba(250, 140, 36, 0.35)" strokeWidth="2" />
            </g>

            {/* Animated lines */}
            <line x1="450" y1="100" x2="550" y2="200" stroke="rgba(250, 140, 36, 0.3)" strokeWidth="2" className="geometric-line" style={{animationDelay: '0s'}} />
            <line x1="500" y1="300" x2="580" y2="350" stroke="rgba(250, 140, 36, 0.25)" strokeWidth="2" className="geometric-line" style={{animationDelay: '0.5s'}} />
            <line x1="470" y1="600" x2="550" y2="700" stroke="rgba(250, 140, 36, 0.3)" strokeWidth="2" className="geometric-line" style={{animationDelay: '1s'}} />

            {/* Floating elements */}
            <circle cx="520" cy="300" r="8" fill="rgba(250, 140, 36, 0.6)" className="float-element" />
            <circle cx="490" cy="550" r="6" fill="rgba(250, 140, 36, 0.5)" className="float-element" style={{animationDelay: '1s'}} />
            <circle cx="540" cy="700" r="7" fill="rgba(250, 140, 36, 0.55)" className="float-element" style={{animationDelay: '2s'}} />

            {/* Sliding elements */}
            <rect x="450" y="400" width="80" height="3" fill="rgba(250, 140, 36, 0.4)" className="slide-element" />
            <rect x="480" y="250" width="60" height="2" fill="rgba(250, 140, 36, 0.35)" className="slide-element" style={{animationDelay: '1.5s'}} />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto md:mx-0 md:text-left banner-content">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Our Services
              </span>
            </FadeInUp>
            <FadeInUp>
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4 lg:mb-6 leading-tight">
                Comprehensive IT Solutions for Your Business
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 lg:mb-8 max-w-2xl">
                From concept to deployment, we deliver end-to-end technology solutions that drive growth and innovation.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Niche Services - Alternating Layout */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Service 1 - Image Left, Text Right */}
            <FadeInUp>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="w-full lg:w-5/12">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop" 
                      alt="Custom Software Development" 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-7/12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Your Complete IT Support Partner - Extending Your Technology Capabilities
                      </h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Whether you have a few computers or offices throughout the country, we provide expert assistance when equipment fails, networks crash, or you simply need a helping hand. Our flexible maintenance contracts fit various pricing and service-level requirements.
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Our managed IT solutions give companies of all sizes access to technology specialists who excel in network management, cybersecurity, and technical support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <FadeInUp>
                <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
                  <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                  Featured Services
                </span>
              </FadeInUp>
              <FadeInUp>
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Advanced Solutions for Growing Your Online Business
                </h2>
              </FadeInUp>
              <FadeInUp>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive services designed to accelerate your digital transformation and drive sustainable growth
                </p>
              </FadeInUp>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <FadeInUp key={index}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col overflow-hidden group">
                      {/* Icon and Title Section */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-20 h-20 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 leading-tight pt-1">{service.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features Grid */}
                      <div className="mb-6 flex-grow">
                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-brand-primary rounded-full mt-1.5 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <div className="flex flex-wrap gap-2">
                          {service.techs.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full hover:bg-brand-primary/20 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center justify-center w-full gap-2 bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-[#ea580c] transition-all duration-300 font-semibold group/btn"
                      >
                        Start Project
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <FadeInUp>
                <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
                  <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                  Our Success
                </span>
              </FadeInUp>
              <FadeInUp>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Our Achievements
                </h2>
              </FadeInUp>
              <FadeInUp>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Proven track record of delivering exceptional results and driving business growth for our clients
                </p>
              </FadeInUp>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Achievement 1 */}
              <FadeInUp>
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl p-8 text-center border border-brand-primary/20 hover:border-[#fa8c24] hover:bg-[#fa8c24]/15 transition-all duration-300 hover:shadow-lg group">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-brand-primary group-hover:text-[#fa8c24] transition-colors duration-300">500+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Projects Delivered</h3>
                  <p className="text-gray-600">Successfully completed projects across various industries</p>
                </div>
              </FadeInUp>

              {/* Achievement 2 */}
              <FadeInUp>
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl p-8 text-center border border-brand-primary/20 hover:border-[#fa8c24] hover:bg-[#fa8c24]/15 transition-all duration-300 hover:shadow-lg group">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-brand-primary group-hover:text-[#fa8c24] transition-colors duration-300">200+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Happy Clients</h3>
                  <p className="text-gray-600">Trusted by businesses worldwide for quality solutions</p>
                </div>
              </FadeInUp>

              {/* Achievement 3 */}
              <FadeInUp>
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl p-8 text-center border border-brand-primary/20 hover:border-[#fa8c24] hover:bg-[#fa8c24]/15 transition-all duration-300 hover:shadow-lg group">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-brand-primary group-hover:text-[#fa8c24] transition-colors duration-300">50+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Team Members</h3>
                  <p className="text-gray-600">Expert professionals dedicated to your success</p>
                </div>
              </FadeInUp>

              {/* Achievement 4 */}
              <FadeInUp>
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl p-8 text-center border border-brand-primary/20 hover:border-[#fa8c24] hover:bg-[#fa8c24]/15 transition-all duration-300 hover:shadow-lg group">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-brand-primary group-hover:text-[#fa8c24] transition-colors duration-300">10+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Years Experience</h3>
                  <p className="text-gray-600">Over a decade of excellence in technology solutions</p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FadeInUp>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                Get Started
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInUp>
    </div>
  );
};

export default Services;
