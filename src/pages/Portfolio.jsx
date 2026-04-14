import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Stethoscope, ShoppingCart, BookOpen, Landmark, UtensilsCrossed, Plane, Users, Gamepad2, Home, Zap, Leaf, Car, Music } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const industries = [
    {
      id: 1,
      name: 'Healthcare',
      icon: <Stethoscope className="w-12 h-12" />,
      description: 'Patient management systems, telemedicine platforms, and health tracking applications',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      color: 'from-red-500 to-pink-500',
      projects: 3
    },
    {
      id: 2,
      name: 'E-Commerce',
      icon: <ShoppingCart className="w-12 h-12" />,
      description: 'Multi-vendor marketplaces, shopping platforms, and inventory management systems',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-500',
      projects: 5
    },
    {
      id: 3,
      name: 'Education',
      icon: <BookOpen className="w-12 h-12" />,
      description: 'Learning management systems, online courses, and student portals',
      image: 'https://images.unsplash.com/photo-1427504494785-cdba58dadff6?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-indigo-500',
      projects: 4
    },
    {
      id: 4,
      name: 'Banking & Finance',
      icon: <Landmark className="w-12 h-12" />,
      description: 'Digital banking solutions, payment gateways, and financial management tools',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      color: 'from-green-500 to-emerald-500',
      projects: 6
    },
    {
      id: 5,
      name: 'Restaurant & Food',
      icon: <UtensilsCrossed className="w-12 h-12" />,
      description: 'Food delivery apps, restaurant management, and online ordering systems',
      image: 'https://images.unsplash.com/photo-1504674900967-a8f32de4a645?w=600&h=400&fit=crop',
      color: 'from-orange-500 to-red-500',
      projects: 4
    },
    {
      id: 6,
      name: 'Travel & Tourism',
      icon: <Plane className="w-12 h-12" />,
      description: 'Booking platforms, travel itineraries, and tour management systems',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      color: 'from-sky-500 to-blue-500',
      projects: 3
    },
    {
      id: 7,
      name: 'Social Media',
      icon: <Users className="w-12 h-12" />,
      description: 'Social networking platforms, community apps, and engagement tools',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      color: 'from-pink-500 to-rose-500',
      projects: 5
    },
    {
      id: 8,
      name: 'Entertainment',
      icon: <Music className="w-12 h-12" />,
      description: 'Streaming platforms, content management, and media applications',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
      color: 'from-violet-500 to-purple-500',
      projects: 4
    },
    {
      id: 9,
      name: 'Gaming',
      icon: <Gamepad2 className="w-12 h-12" />,
      description: 'Game development, multiplayer platforms, and gaming communities',
      image: 'https://images.unsplash.com/photo-1538481143235-5d630a5bba20?w=600&h=400&fit=crop',
      color: 'from-yellow-500 to-orange-500',
      projects: 3
    },
    {
      id: 10,
      name: 'Real Estate',
      icon: <Home className="w-12 h-12" />,
      description: 'Property portals, virtual tours, and real estate management systems',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      color: 'from-amber-500 to-yellow-500',
      projects: 4
    },
    {
      id: 11,
      name: 'Energy',
      icon: <Zap className="w-12 h-12" />,
      description: 'Smart grid solutions, energy management, and utility platforms',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1d?w=600&h=400&fit=crop',
      color: 'from-lime-500 to-green-500',
      projects: 2
    },
    {
      id: 12,
      name: 'Agritech',
      icon: <Leaf className="w-12 h-12" />,
      description: 'Farm management systems, crop monitoring, and agricultural solutions',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
      color: 'from-green-600 to-emerald-600',
      projects: 3
    },
    {
      id: 13,
      name: 'Automobile',
      icon: <Car className="w-12 h-12" />,
      description: 'Fleet management, vehicle tracking, and automotive solutions',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop',
      color: 'from-slate-500 to-gray-600',
      projects: 3
    },
    {
      id: 14,
      name: 'Transportation',
      icon: <Plane className="w-12 h-12" />,
      description: 'Logistics platforms, ride-sharing apps, and delivery management',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      color: 'from-cyan-500 to-blue-500',
      projects: 4
    },
    {
      id: 15,
      name: 'NGOs',
      icon: <Users className="w-12 h-12" />,
      description: 'Donation platforms, volunteer management, and social impact tools',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      color: 'from-teal-500 to-cyan-500',
      projects: 2
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop" 
            alt="Portfolio Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-gray-900/85 to-brand-secondary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Our Portfolio
              </span>
            </FadeInUp>
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Showcasing Our Best Work
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore our portfolio of successful projects that have helped businesses achieve their digital goals.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Filter & Industries */}
      <FadeInUp>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeInUp>
                <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
                  <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                  Industries We Serve
                </span>
              </FadeInUp>
              <FadeInUp>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Expertise Across Diverse Sectors
                </h2>
              </FadeInUp>
              <FadeInUp>
                <p className="text-xl text-gray-600">
                  We have successfully delivered solutions across 15+ industries, helping businesses transform and grow.
                </p>
              </FadeInUp>
            </div>

            {/* Industries Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <FadeInUp key={industry.id}>
                  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-full flex flex-col hover:-translate-y-2">
                    {/* Gradient Top Border */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${industry.color}`}></div>

                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                      <img 
                        src={industry.image} 
                        alt={industry.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex-1 flex flex-col relative z-10">
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500" style={{
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}>
                        {industry.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 group-hover:text-gray-700 transition-colors">
                        {industry.description}
                      </p>

                      {/* CTA Button */}
                      <Link 
                        to="/portfolio-details" 
                        className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${industry.color} text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group/link w-fit`}
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      </FadeInUp>

      {/* CTA Section */}
      <FadeInUp>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Looking for Industry-Specific Solutions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team has deep expertise across multiple industries. Let's discuss how we can help your business succeed.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                Get Industry Consultation
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInUp>
    </div>
  );
};

export default Portfolio;
