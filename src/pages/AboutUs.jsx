import { ArrowUpRight, Users, Award, Target, TrendingUp, Code2, Zap, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInUp from '../components/FadeInUp';
import TeamSection from '../components/home/TeamSection';

const AboutUs = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies to deliver solutions that drive your business forward.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring reliable and scalable solutions.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Continuous Growth',
      description: 'We evolve with technology trends to provide you with the most effective solutions.'
    }
  ];

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

  const testimonials = [
    {
      name: 'Vikram Desai',
      company: 'TechStart India',
      text: 'ParNets delivered our project on time with exceptional quality. Their team is professional and responsive.',
      rating: 5,
      image: '/client 1.png'
    },
    {
      name: 'Anjali Verma',
      company: 'E-Commerce Solutions',
      text: 'Outstanding work! They understood our requirements perfectly and delivered beyond expectations.',
      rating: 5,
      image: '/client 2.png'
    },
    {
      name: 'Rohan Gupta',
      company: 'Digital Marketing Pro',
      text: 'Best decision to partner with ParNets. Their expertise in web development is unmatched.',
      rating: 5,
      image: '/client 3.png'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative text-white py-40 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop" 
            alt="About Us Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-gray-900/85 to-brand-secondary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                About Our Company
              </span>
            </FadeInUp>
           
            <FadeInUp>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto">
                We are a team of passionate developers, designers, and strategists dedicated to transforming ideas into powerful digital solutions.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Who We Are & Why Partner With Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Who We Are */}
              <FadeInUp>
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    <span className="text-brand-primary">Who</span> We Are ?
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    ParNets Software India PVT LTD is a team of passionate developers, creative designers, and strategic thinkers. Since our inception in 2012 as ParNets (Prop), we've partnered with startups, small businesses, and enterprises worldwide to craft high-quality digital experiences. Our commitment to excellence and customer satisfaction makes us a trusted name in web and app development.
                  </p>
                </div>
              </FadeInUp>

              {/* Why Partner With Us */}
              <FadeInUp>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    <span className="text-brand-primary">Why</span> Partner With Us ?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-primary/10 text-brand-primary">
                          <span className="font-bold">✓</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Proven Expertise</h4>
                        <p className="text-gray-600">Over more than a decade of experience in delivering successful projects across various industries.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-primary/10 text-brand-primary">
                          <span className="font-bold">✓</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Innovative Solutions</h4>
                        <p className="text-gray-600">We stay updated with the latest technology trends to offer future-proof solutions.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-primary/10 text-brand-primary">
                          <span className="font-bold">✓</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Tailored Approach</h4>
                        <p className="text-gray-600">Every project is unique; we focus on understanding your goals and delivering customized solutions.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-primary/10 text-brand-primary">
                          <span className="font-bold">✓</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">SEO-Optimized Digital Products</h4>
                        <p className="text-gray-600">We design and develop websites and apps with SEO in mind to improve online visibility. End-to-End Support: From concept to deployment and ongoing maintenance, we're with you every step of the way.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right Image */}
            <div className="relative">
              <FadeInUp>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                    alt="Team collaboration" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-brand-primary">Choose</span> Us?
            </h2>
            <p className="text-gray-600 text-base">
              With a deep understanding of the business area, ParNets is backed by technical professionals that are skilled at producing high-quality solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expert Team */}
            <FadeInUp>
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 h-56">
                <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Our team consists of industry experts with years of experience who are dedicated to delivering top-notch services tailored to your needs.
                </p>
              </div>
            </FadeInUp>

            {/* Quality Assurance */}
            <FadeInUp>
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 h-56">
                <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  We adhere to the highest quality standards to ensure that our services and products exceed your expectations every single time.
                </p>
              </div>
            </FadeInUp>

            {/* Customer Support */}
            <FadeInUp>
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 h-56">
                <h3 className="text-2xl font-bold mb-4">Customer Support</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  We pride ourselves on providing excellent customer support available 24/7 to assist you with any question or issues you may have.
                </p>
              </div>
            </FadeInUp>

            {/* Innovative Solutions */}
            <FadeInUp>
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 h-56">
                <h3 className="text-2xl font-bold mb-4">Innovative Solutions</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Our innovative approach ensures that we provide cutting-edge solutions that keep you ahead of the competition.
                </p>
              </div>
            </FadeInUp>

            {/* Affordable Pricing */}
            <FadeInUp>
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 h-56">
                <h3 className="text-2xl font-bold mb-4">Affordable Pricing</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment.
                </p>
              </div>
            </FadeInUp>

            {/* Proven Track Record */}
            <FadeInUp>
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 h-56">
                <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  With a long history of successful projects, our proven track record speaks for itself. Join our list of satisfied clients today.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <FadeInUp>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
                  <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Transforming Visions Into Reality
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Founded with a mission to bridge the gap between technology and business, we've grown from a small startup to a trusted partner for companies worldwide. Our journey has been driven by innovation, dedication, and an unwavering commitment to excellence.
                </p>
                <p className="text-gray-600 text-lg mb-8">
                  Today, we specialize in custom software development, mobile applications, web solutions, and digital transformation strategies that empower businesses to thrive in the digital age.
                </p>
                <button className="group flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="font-semibold">Learn More</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                    alt="Our team" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInUp>

      {/* Our Values */}
      <FadeInUp>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Drives Us Forward
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInUp>

      {/* Our Projects */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto mb-16">
            <div className="flex-1 text-center">
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-2xl mb-4 justify-center">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Our Projects
              </span>
            
            </div>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-400 whitespace-nowrap ml-8"
            >
              <span>View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <style>{`
            @keyframes waterWave {
              0%, 100% { transform: translateY(0px); opacity: 0.8; }
              50% { transform: translateY(-8px); opacity: 1; }
            }
            .animate-water-wave {
              animation: waterWave 3s ease-in-out infinite;
            }
          `}</style>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Project 1 - Dailydish */}
            <FadeInUp>
              <div className="group relative pt-12">
                {/* Project name on top - always visible */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap bg-white px-4 py-1 rounded-full">Dailydish</h3>
                </div>

                {/* Outer card with inset effect */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-white">
                  {/* Inner card */}
                  <div className="bg-white rounded-2xl overflow-hidden relative h-64">
                    {/* Normal state - animated image with water wave */}
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 animate-water-wave">
                      <img 
                        src="/dailydish image.png" 
                        alt="Dailydish" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hover state - show image preview only */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <img 
                        src="/dailydish image.png" 
                        alt="Dailydish Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Project 2 - Dhanya Tour & Travel */}
            <FadeInUp>
              <div className="group relative pt-12">
                {/* Project name on top - always visible */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap bg-white px-4 py-1 rounded-full">Dhanya Tour</h3>
                </div>

                {/* Outer card with inset effect */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-white">
                  {/* Inner card */}
                  <div className="bg-white rounded-2xl overflow-hidden relative h-64">
                    {/* Normal state - animated image with water wave */}
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 animate-water-wave">
                      <img 
                        src="/Dhanya Tour & Travel image.png" 
                        alt="Dhanya Tour & Travel" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hover state - show image preview only */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <img 
                        src="/Dhanya Tour & Travel image.png" 
                        alt="Dhanya Tour & Travel Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Project 3 - Doorstep */}
            <FadeInUp>
              <div className="group relative pt-12">
                {/* Project name on top - always visible */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap bg-white px-4 py-1 rounded-full">Doorstep</h3>
                </div>

                {/* Outer card with inset effect */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-white">
                  {/* Inner card */}
                  <div className="bg-white rounded-2xl overflow-hidden relative h-64">
                    {/* Normal state - animated image with water wave */}
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 animate-water-wave">
                      <img 
                        src="/Doorstep image.png" 
                        alt="Doorstep" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hover state - show image preview only */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <img 
                        src="/Doorstep image.png" 
                        alt="Doorstep Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-base">
              Hear from our satisfied clients about their experience working with us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInUp key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-8 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                    {/* Client Image */}
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Client Info */}
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-brand-primary font-semibold text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;
