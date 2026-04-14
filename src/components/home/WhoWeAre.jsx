import { FaAward, FaUsers, FaBriefcase, FaStar } from 'react-icons/fa';

const WhoWeAre = () => {
  const stats = [
    {
      icon: FaAward,
      number: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across diverse industries and sectors.'
    },
    {
      icon: FaUsers,
      number: '150+',
      label: 'Happy Clients',
      description: 'Building long-term relationships with satisfied clients worldwide.'
    },
    {
      icon: FaBriefcase,
      number: '50+',
      label: 'Expert Team',
      description: 'Talented professionals with expertise in cutting-edge technologies.'
    },
    {
      icon: FaStar,
      number: '10+',
      label: 'Years Experience',
      description: 'A decade of innovation and excellence in technology solutions.'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <div className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-brand-primary/10 rounded-full">
                <span className="text-brand-primary font-semibold text-xs md:text-sm tracking-wider uppercase">About Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                Who We Are
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                We are a team of passionate professionals dedicated to delivering innovative technology solutions that transform businesses. With years of experience across various industries, we understand the unique challenges our clients face and provide tailored solutions that drive real results.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-100 hover:border-brand-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-brand-primary" />
                    </div>

                    {/* Number */}
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-1 md:mb-2 group-hover:text-brand-primary transition-colors">
                      {stat.number}
                    </div>

                    {/* Label */}
                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-brand-primary transition-colors">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <button className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-brand-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 group text-sm md:text-base">
                Learn More About Us
                <svg className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/about image.png" 
                alt="Who We Are" 
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl">
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-brand-primary rounded-full"></div>
                  <span className="text-xs md:text-sm font-bold text-brand-primary uppercase tracking-wider">Since</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">10+ Years</div>
                <p className="text-gray-600 text-xs md:text-sm mt-1">Industry Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
