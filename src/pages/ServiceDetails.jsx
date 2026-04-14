import { Check, ArrowRight, Code, Smartphone, Globe, Database, Cloud, Shield, Stethoscope, ShoppingCart, BookOpen, Landmark, UtensilsCrossed, Plane, Users, Music, Gamepad2, Home, Zap, Leaf, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInUp from '../components/FadeInUp';

const ServiceDetails = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business requirements and drive growth.',
      features: ['Scalable Architecture', 'Agile Development', 'Quality Assurance', 'Ongoing Support']
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'CMS Integration']
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Database Solutions',
      description: 'Robust database design and management for efficient data storage and retrieval.',
      features: ['SQL & NoSQL', 'Data Migration', 'Performance Tuning', 'Backup & Recovery']
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup, migration, and management for scalable operations.',
      features: ['AWS & Azure', 'DevOps', 'CI/CD Pipeline', 'Cloud Migration']
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Security & Maintenance',
      description: 'Comprehensive security audits and ongoing maintenance to keep your systems secure.',
      features: ['Security Audits', 'Bug Fixes', '24/7 Monitoring', 'Regular Updates']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
            alt="Services Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-gray-900/85 to-brand-secondary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Our Services
              </span>
            </FadeInUp>
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Comprehensive Software Solutions
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                From concept to deployment, we provide end-to-end software development services tailored to your business needs.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Together We Grow Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-blue-600">Together</span>
                  <span className="text-gray-900"> we </span>
                  <span className="text-orange-500">Grow</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Join us in our journey of growth! Here, you won't just find jobs; you'll discover fulfilling careers. Collaborate with us and push the limits of your professional development. Let's achieve greatness together! 🚀
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                  <span>Join Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Right Place for Talent Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900">We have the right place for your</span>
                  <span className="text-orange-500"> talent!</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're always eager to meet fresh new talents, check out our open positions to push your career to new heights.
                </p>
              </div>

              {/* Right - Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Team meeting" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* We are Looking For Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-blue-600">We are </span>
              <span className="text-orange-500">looking for</span>
            </h2>
          </FadeInUp>

          {/* Job Cards Grid */}
          <FadeInUp>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'ReactJs Developer', exp: '0-5 Years', location: 'Bengaluru' },
                { title: 'React Native Developer', exp: '0-5 Years', location: 'Bengaluru' },
                { title: 'MERN FullStack Developer', exp: '0-5 Years', location: 'Bengaluru' },
                { title: 'Testing Engineer', exp: '0-5 Years', location: 'Bengaluru' }
              ].map((job, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white hover:shadow-2xl transition-all duration-300 group">
                  <h3 className="text-xl font-bold mb-4">{job.title}</h3>
                  <div className="space-y-3 mb-6 text-sm text-white/90">
                    <p>Experience: {job.exp}</p>
                    <p>{job.location}</p>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 group-hover:gap-3">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-blue-600">Custom</span>
                  <span className="text-gray-900"> Web & Mobile </span>
                  <span className="text-blue-600">Solutions</span>
                  <span className="text-gray-900"> to Drive Your </span>
                  <span className="text-blue-600">Business</span>
                  <span className="text-gray-900"> Forward</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  At our company, we specialize in delivering tailored web and app development services designed to help businesses of all sizes thrive in the digital landscape. Explore our comprehensive range of services below and discover how we can bring your ideas to life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
                    <span>Reach Out</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
                    <span>Sales Update</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Team working" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Our Services Tags Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Our</span>
                <span className="text-orange-500"> Services</span>
              </h3>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {['Website Design', 'Mobile Experience', 'Digital Marketing', 'UI/UX Design', 'Design Support and Maintenance', 'E-commerce', 'AI & Machine Learning', 'Customer Care Support'].map((service, idx) => (
                <span key={idx} className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer">
                  {service}
                </span>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInUp key={index}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="group/btn flex items-center gap-2 text-brand-primary font-semibold hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Work With Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Industries</span>
                <span className="text-gray-900"> we </span>
                <span className="text-orange-500">work</span>
                <span className="text-gray-900"> with</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Over 10 years of dedicated service have enriched our expertise across multiple domains. We cater to a broad spectrum of industries, including Logistics, Travel, Real Estate, Healthcare, FMCG, Non-Profit Sectors, Banking, and beyond.
              </p>
            </div>
          </FadeInUp>

          {/* Industries Grid */}
          <FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
              {[
                { name: 'HealthCare', icon: <Stethoscope className="w-6 h-6" /> },
                { name: 'E-commerce', icon: <ShoppingCart className="w-6 h-6" /> },
                { name: 'Education', icon: <BookOpen className="w-6 h-6" /> },
                { name: 'Banking', icon: <Landmark className="w-6 h-6" /> },
                { name: 'Restaurant', icon: <UtensilsCrossed className="w-6 h-6" /> },
                { name: 'Travel', icon: <Plane className="w-6 h-6" /> },
                { name: 'Social', icon: <Users className="w-6 h-6" /> },
                { name: 'Entertainment', icon: <Music className="w-6 h-6" /> },
                { name: 'Transportation', icon: <Plane className="w-6 h-6" /> },
                { name: 'Game', icon: <Gamepad2 className="w-6 h-6" /> },
                { name: 'Real Estate', icon: <Home className="w-6 h-6" /> },
                { name: 'NGOs', icon: <Users className="w-6 h-6" /> },
                { name: 'Energy', icon: <Zap className="w-6 h-6" /> },
                { name: 'Agritech', icon: <Leaf className="w-6 h-6" /> },
                { name: 'Automobile', icon: <Car className="w-6 h-6" /> }
              ].map((industry, idx) => (
                <div key={idx} className="border-2 border-gray-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">{industry.name}</span>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* View All Button */}
          <FadeInUp>
            <div className="flex justify-center">
              <Link 
                to="/portfolio" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can help transform your ideas into reality with our expert development services.
              </p>
            </FadeInUp>
            <FadeInUp>
              <button className="bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
