import { FaCheck, FaRocket, FaLightbulb, FaLock, FaPhone, FaDollarSign } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaCheck,
      title: 'Expert Team',
      desc: 'Highly skilled professionals with years of industry experience and proven track record.',
    },
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      desc: 'Quick turnaround times without compromising on quality and excellence.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      desc: 'Cutting-edge solutions using latest technologies and industry best practices.',
    },
    {
      icon: FaLock,
      title: 'Security',
      desc: 'Enterprise-grade security and comprehensive data protection measures.',
    },
    {
      icon: FaPhone,
      title: '24/7 Support',
      desc: 'Dedicated support team available round the clock for your needs.',
    },
    {
      icon: FaDollarSign,
      title: 'Cost Effective',
      desc: 'Competitive pricing with maximum value for your investment.',
    },
  ];

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
              <img 
                src="/why choosw us image.png" 
                alt="Why Choose Us" 
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-3 md:bottom-6 lg:bottom-8 left-3 md:left-6 lg:left-8 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 shadow-lg md:shadow-xl">
                <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3 mb-0.5 md:mb-1 lg:mb-2">
                  <div className="w-1.5 md:w-2 lg:w-3 h-1.5 md:h-2 lg:h-3 bg-brand-primary rounded-full"></div>
                  <span className="text-xs md:text-sm lg:text-base font-bold text-brand-primary uppercase tracking-wider">Growth</span>
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">+150%</div>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base mt-0.5 md:mt-1">Client Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-4 md:mb-6 lg:mb-10">
              <div className="inline-block mb-1.5 md:mb-2 lg:mb-3 px-2.5 md:px-4 py-0.5 md:py-1 lg:py-1.5 bg-brand-primary/10 rounded-full">
                <span className="text-brand-primary font-semibold text-xs md:text-sm lg:text-base tracking-wider uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-1.5 md:mb-3 lg:mb-4">
               Why Businesses Trust SlashifyTech
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
            We combine clarity, speed, and ownership to deliver technology that scales globally. As a reliable custom web application development company, we build products that support long-term growth.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="group flex gap-2 md:gap-3 lg:gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-8 md:w-10 lg:w-14 h-8 md:h-10 lg:h-14 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-4 md:w-5 lg:w-7 h-4 md:h-5 lg:h-7 text-brand-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-sm md:text-base lg:text-xl font-bold text-gray-900 mb-0.5 md:mb-1 lg:mb-2 group-hover:text-brand-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 text-brand-primary transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-4 md:mt-6 lg:mt-10">
              <button className="inline-flex items-center gap-1 md:gap-1.5 lg:gap-3 px-4 md:px-5 lg:px-8 py-1.5 md:py-2 lg:py-4 bg-brand-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 group text-xs md:text-sm lg:text-base">
                Get Started Today
                <svg className="w-3 md:w-3.5 lg:w-5 h-3 md:h-3.5 lg:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
