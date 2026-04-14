import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const IndustryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const industry = location.state?.industry;

  // Complete industries data
  const industriesData = [
    {
      id: 1,
      name: 'Healthcare',
      description: 'Patient management systems, telemedicine platforms, and health tracking applications',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
      color: 'from-red-500 to-pink-500',
      projects: 3,
      fullDescription: 'We specialize in building comprehensive healthcare solutions that improve patient care and operational efficiency. Our expertise spans across patient management systems, telemedicine platforms, and health tracking applications.',
      benefits: [
        'Improved patient engagement and satisfaction',
        'Streamlined healthcare operations',
        'Enhanced data security and compliance',
        'Real-time health monitoring capabilities',
        'Seamless integration with existing systems'
      ],
      caseStudies: [
        { title: 'Telemedicine Platform', description: 'Built a scalable telemedicine platform serving 50,000+ patients' },
        { title: 'Patient Management System', description: 'Developed an integrated EHR system for a hospital network' },
        { title: 'Health Tracking App', description: 'Created a mobile app for chronic disease management' }
      ]
    },
    {
      id: 2,
      name: 'E-Commerce',
      description: 'Multi-vendor marketplaces, shopping platforms, and inventory management systems',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      color: 'from-blue-500 to-cyan-500',
      projects: 5,
      fullDescription: 'Our e-commerce solutions empower businesses to reach customers globally with robust, scalable platforms. We build multi-vendor marketplaces, shopping platforms, and inventory management systems.',
      benefits: [
        'Increased online sales and revenue',
        'Better inventory management',
        'Enhanced customer experience',
        'Secure payment processing',
        'Mobile-first design approach'
      ],
      caseStudies: [
        { title: 'Multi-Vendor Marketplace', description: 'Launched a marketplace connecting 1000+ sellers with millions of buyers' },
        { title: 'E-Commerce Platform', description: 'Built a high-performance shopping platform with AI recommendations' },
        { title: 'Inventory Management', description: 'Developed real-time inventory tracking system' }
      ]
    },
    {
      id: 3,
      name: 'Education',
      description: 'Learning management systems, online courses, and student portals',
      image: 'https://images.unsplash.com/photo-1427504494785-cdba58dadff6?w=1200&h=600&fit=crop',
      color: 'from-purple-500 to-indigo-500',
      projects: 4,
      fullDescription: 'We create innovative educational technology solutions that enhance learning experiences. Our platforms include learning management systems, online courses, and student portals.',
      benefits: [
        'Enhanced student engagement',
        'Flexible learning options',
        'Better progress tracking',
        'Interactive learning tools',
        'Scalable infrastructure'
      ],
      caseStudies: [
        { title: 'Learning Management System', description: 'Built LMS serving 100,000+ students across multiple institutions' },
        { title: 'Online Course Platform', description: 'Created platform for delivering professional certification courses' },
        { title: 'Student Portal', description: 'Developed comprehensive student information system' }
      ]
    },
    {
      id: 4,
      name: 'Banking & Finance',
      description: 'Digital banking solutions, payment gateways, and financial management tools',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
      color: 'from-green-500 to-emerald-500',
      projects: 6,
      fullDescription: 'We develop secure and scalable banking and financial solutions that meet regulatory requirements. Our expertise includes digital banking platforms, payment gateways, and comprehensive financial management tools.',
      benefits: [
        'Enhanced security and compliance',
        'Faster transaction processing',
        'Improved customer experience',
        'Real-time financial reporting',
        'Fraud detection and prevention'
      ],
      caseStudies: [
        { title: 'Digital Banking Platform', description: 'Developed a mobile banking app with 500K+ active users' },
        { title: 'Payment Gateway', description: 'Built a secure payment processing system handling millions in transactions' },
        { title: 'Financial Dashboard', description: 'Created comprehensive financial analytics and reporting platform' }
      ]
    },
    {
      id: 5,
      name: 'Restaurant & Food',
      description: 'Food delivery apps, restaurant management, and online ordering systems',
      image: 'https://images.unsplash.com/photo-1504674900967-a8f32de4a645?w=1200&h=600&fit=crop',
      color: 'from-orange-500 to-red-500',
      projects: 4,
      fullDescription: 'We create innovative food and restaurant solutions that streamline operations and enhance customer experience. From food delivery apps to restaurant management systems.',
      benefits: [
        'Increased order volume and revenue',
        'Streamlined kitchen operations',
        'Better customer engagement',
        'Real-time order tracking',
        'Inventory management automation'
      ],
      caseStudies: [
        { title: 'Food Delivery App', description: 'Launched a delivery platform connecting 1000+ restaurants' },
        { title: 'Restaurant Management System', description: 'Built POS and inventory system for restaurant chains' },
        { title: 'Online Ordering Platform', description: 'Developed white-label ordering solution for restaurants' }
      ]
    },
    {
      id: 6,
      name: 'Travel & Tourism',
      description: 'Booking platforms, travel itineraries, and tour management systems',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop',
      color: 'from-sky-500 to-blue-500',
      projects: 3,
      fullDescription: 'We build comprehensive travel and tourism solutions that connect travelers with experiences. Our platforms include booking systems, itinerary management, and tour operator tools.',
      benefits: [
        'Increased bookings and revenue',
        'Better customer experience',
        'Simplified tour management',
        'Real-time availability updates',
        'Multi-currency support'
      ],
      caseStudies: [
        { title: 'Travel Booking Platform', description: 'Created a platform with 100K+ monthly bookings' },
        { title: 'Tour Management System', description: 'Built system for managing tours and itineraries' },
        { title: 'Hotel Booking App', description: 'Developed mobile app for hotel reservations' }
      ]
    },
    {
      id: 7,
      name: 'Social Media',
      description: 'Social networking platforms, community apps, and engagement tools',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      color: 'from-pink-500 to-rose-500',
      projects: 5,
      fullDescription: 'We develop engaging social media and community platforms that foster meaningful connections. Our solutions include social networking apps, community engagement tools, and content management systems.',
      benefits: [
        'Increased user engagement',
        'Strong community building',
        'Content moderation tools',
        'Real-time notifications',
        'Social analytics and insights'
      ],
      caseStudies: [
        { title: 'Social Networking App', description: 'Built platform with 500K+ active users' },
        { title: 'Community Platform', description: 'Created niche community for professionals' },
        { title: 'Content Sharing App', description: 'Developed app for content creators and influencers' }
      ]
    },
    {
      id: 8,
      name: 'Entertainment',
      description: 'Streaming platforms, content management, and media applications',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=600&fit=crop',
      color: 'from-violet-500 to-purple-500',
      projects: 4,
      fullDescription: 'We create cutting-edge entertainment solutions including streaming platforms, content management systems, and media applications that deliver exceptional user experiences.',
      benefits: [
        'High-quality streaming experience',
        'Content management automation',
        'Personalized recommendations',
        'Multi-device support',
        'Monetization options'
      ],
      caseStudies: [
        { title: 'Video Streaming Platform', description: 'Built OTT platform with 1M+ subscribers' },
        { title: 'Content Management System', description: 'Developed CMS for media companies' },
        { title: 'Music Streaming App', description: 'Created music streaming app with 100K+ songs' }
      ]
    },
    {
      id: 9,
      name: 'Gaming',
      description: 'Game development, multiplayer platforms, and gaming communities',
      image: 'https://images.unsplash.com/photo-1538481143235-5d630a5bba20?w=1200&h=600&fit=crop',
      color: 'from-yellow-500 to-orange-500',
      projects: 3,
      fullDescription: 'We develop engaging gaming solutions including game development, multiplayer platforms, and gaming community tools that provide immersive experiences.',
      benefits: [
        'Engaging gameplay mechanics',
        'Multiplayer connectivity',
        'In-game monetization',
        'Community features',
        'Cross-platform support'
      ],
      caseStudies: [
        { title: 'Multiplayer Game', description: 'Developed game with 100K+ concurrent players' },
        { title: 'Gaming Platform', description: 'Built platform for indie game developers' },
        { title: 'Gaming Community App', description: 'Created social platform for gamers' }
      ]
    },
    {
      id: 10,
      name: 'Real Estate',
      description: 'Property portals, virtual tours, and real estate management systems',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
      color: 'from-amber-500 to-yellow-500',
      projects: 4,
      fullDescription: 'We build comprehensive real estate solutions including property portals, virtual tour systems, and management platforms that revolutionize property transactions.',
      benefits: [
        'Increased property visibility',
        'Virtual tour capabilities',
        'Lead management automation',
        'Property analytics',
        'Transaction management'
      ],
      caseStudies: [
        { title: 'Property Portal', description: 'Created portal with 100K+ property listings' },
        { title: 'Virtual Tour Platform', description: 'Built 3D virtual tour system for properties' },
        { title: 'Real Estate CRM', description: 'Developed CRM for real estate agents' }
      ]
    },
    {
      id: 11,
      name: 'Energy',
      description: 'Smart grid solutions, energy management, and utility platforms',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1d?w=1200&h=600&fit=crop',
      color: 'from-lime-500 to-green-500',
      projects: 2,
      fullDescription: 'We develop smart energy solutions including grid management systems, energy monitoring platforms, and utility management tools for sustainable operations.',
      benefits: [
        'Energy consumption optimization',
        'Real-time monitoring',
        'Cost reduction',
        'Sustainability tracking',
        'Predictive maintenance'
      ],
      caseStudies: [
        { title: 'Smart Grid System', description: 'Implemented smart grid for utility company' },
        { title: 'Energy Monitoring App', description: 'Built app for tracking energy consumption' },
        { title: 'Utility Management Platform', description: 'Developed platform for utility operations' }
      ]
    },
    {
      id: 12,
      name: 'Agritech',
      description: 'Farm management systems, crop monitoring, and agricultural solutions',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop',
      color: 'from-green-600 to-emerald-600',
      projects: 3,
      fullDescription: 'We create innovative agricultural technology solutions including farm management systems, crop monitoring tools, and precision farming platforms.',
      benefits: [
        'Increased crop yield',
        'Resource optimization',
        'Weather-based insights',
        'Pest management',
        'Market price tracking'
      ],
      caseStudies: [
        { title: 'Farm Management System', description: 'Built system for managing 1000+ farms' },
        { title: 'Crop Monitoring App', description: 'Developed IoT-based crop monitoring solution' },
        { title: 'Agricultural Marketplace', description: 'Created platform connecting farmers to buyers' }
      ]
    },
    {
      id: 13,
      name: 'Automobile',
      description: 'Fleet management, vehicle tracking, and automotive solutions',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=600&fit=crop',
      color: 'from-slate-500 to-gray-600',
      projects: 3,
      fullDescription: 'We develop comprehensive automotive solutions including fleet management systems, vehicle tracking platforms, and automotive service management tools.',
      benefits: [
        'Fleet optimization',
        'Real-time vehicle tracking',
        'Maintenance scheduling',
        'Fuel efficiency monitoring',
        'Driver safety management'
      ],
      caseStudies: [
        { title: 'Fleet Management System', description: 'Built system managing 5000+ vehicles' },
        { title: 'Vehicle Tracking App', description: 'Developed GPS tracking solution' },
        { title: 'Automotive Service Platform', description: 'Created platform for service centers' }
      ]
    },
    {
      id: 14,
      name: 'Transportation',
      description: 'Logistics platforms, ride-sharing apps, and delivery management',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop',
      color: 'from-cyan-500 to-blue-500',
      projects: 4,
      fullDescription: 'We build robust transportation and logistics solutions including ride-sharing apps, delivery management systems, and logistics optimization platforms.',
      benefits: [
        'Optimized routes',
        'Real-time tracking',
        'Cost reduction',
        'Customer satisfaction',
        'Scalable infrastructure'
      ],
      caseStudies: [
        { title: 'Ride-Sharing App', description: 'Developed app with 100K+ daily rides' },
        { title: 'Delivery Management', description: 'Built system for managing deliveries' },
        { title: 'Logistics Platform', description: 'Created platform for logistics companies' }
      ]
    },
    {
      id: 15,
      name: 'NGOs',
      description: 'Donation platforms, volunteer management, and social impact tools',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop',
      color: 'from-teal-500 to-cyan-500',
      projects: 2,
      fullDescription: 'We create impactful solutions for NGOs including donation platforms, volunteer management systems, and social impact tracking tools.',
      benefits: [
        'Increased donations',
        'Volunteer engagement',
        'Impact tracking',
        'Transparency and reporting',
        'Community building'
      ],
      caseStudies: [
        { title: 'Donation Platform', description: 'Built platform raising $10M+ for causes' },
        { title: 'Volunteer Management', description: 'Developed system managing 50K+ volunteers' },
        { title: 'Impact Tracking App', description: 'Created app for tracking social impact' }
      ]
    }
  ];

  const currentIndustry = industry || industriesData.find(ind => ind.id === industry?.id || ind.name === industry?.name) || industriesData[0];

  if (!currentIndustry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Industry not found</h1>
          <button 
            onClick={() => navigate('/industries')}
            className="text-brand-primary hover:text-brand-secondary"
          >
            Back to Industries
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden mt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={currentIndustry.image} 
            alt={currentIndustry.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/95 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => navigate('/industries')}
            className="flex items-center gap-2 text-white hover:text-brand-primary transition-colors mb-8 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Industries
          </button>
          
          <div className="max-w-3xl">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Industry Details
              </span>
            </FadeInUp>
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {currentIndustry.name}
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                {currentIndustry.fullDescription}
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Why Choose Us
              </span>
            </FadeInUp>
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
                Key Benefits for {currentIndustry.name}
              </h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-8">
              {currentIndustry.benefits.map((benefit, idx) => (
                <FadeInUp key={idx}>
                  <div className="flex gap-4 p-6 rounded-xl hover:bg-orange-50 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{benefit}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Our Portfolio
              </span>
            </FadeInUp>
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
                Success Stories in {currentIndustry.name}
              </h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-8">
              {currentIndustry.caseStudies.map((study, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-primary group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                        {study.title}
                      </h3>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary/20 to-orange-100 flex items-center justify-center flex-shrink-0">
                        <ArrowUpRight className="w-6 h-6 text-brand-primary" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    <button className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors group/link">
                      View Case Study
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your {currentIndustry.name} Business?
              </h2>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team has deep expertise in {currentIndustry.name} solutions. Let's discuss how we can help you achieve your business goals and drive digital transformation.
              </p>
            </FadeInUp>
            <FadeInUp>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                  Get Consultation
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigate('/industries')}
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 font-semibold"
                >
                  Explore Other Industries
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetails;
