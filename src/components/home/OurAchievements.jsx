import React from 'react';
import { FaTrophy, FaChartLine, FaGlobe, FaStar, FaRocket, FaShieldAlt } from 'react-icons/fa';
import FadeInUp from '../FadeInUp';

const OurAchievements = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: 'Industry Awards',
      desc: 'Recognized with multiple awards for innovation and excellence in technology solutions.',
    },
    {
      icon: FaChartLine,
      title: 'Growth & Success',
      desc: 'Helped 150+ clients achieve their business goals with measurable results.',
    },
    {
      icon: FaGlobe,
      title: 'Global Reach',
      desc: 'Serving clients across 25+ countries with diverse industry expertise.',
    },
    {
      icon: FaStar,
      title: 'Client Satisfaction',
      desc: '98% client satisfaction rate with long-term partnerships and repeat business.',
    },
    {
      icon: FaRocket,
      title: 'Innovation Leader',
      desc: 'Pioneering new technologies and methodologies in software development.',
    },
    {
      icon: FaShieldAlt,
      title: 'Security Certified',
      desc: 'ISO 27001 certified with enterprise-grade security standards.',
    },
  ];

  const stats = [
    {
      number: '500+',
      title: 'Projects Delivered',
      desc: 'Successfully completed projects across various industries'
    },
    {
      number: '200+',
      title: 'Happy Clients',
      desc: 'Trusted by businesses worldwide for quality solutions'
    },
    {
      number: '50+',
      title: 'Team Members',
      desc: 'Expert professionals dedicated to your success'
    },
    {
      number: '10+',
      title: 'Years Experience',
      desc: 'Over a decade of excellence in technology solutions'
    }
  ];

  return (
    <section className="py-8 md:py-16 lg:py-24 text-gray-900" style={{ backgroundColor: '#fff5ed' }}>
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block mb-1.5 md:mb-3">
            <span className="text-brand-primary font-semibold text-xs md:text-sm tracking-wider uppercase">Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2 md:mb-4">
            Our Achievements
          </h2>
          <p className="text-xs md:text-base lg:text-xl text-gray-600">
            Milestones and accomplishments that define our journey of excellence and innovation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12 lg:mb-16">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <FadeInUp key={idx}>
                <div 
                  className="group relative bg-white rounded-lg md:rounded-2xl p-5 md:p-8 lg:p-10 border border-gray-200 hover:border-brand-primary/50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-all duration-500"></div>

                  {/* Icon */}
                  <div className="relative z-10 w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-brand-primary" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base md:text-lg lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-brand-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                      {achievement.desc}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>

        {/* Stats Section - New Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 pt-6 md:pt-8 lg:pt-12 border-t border-gray-300">
          {stats.map((stat, idx) => (
            <FadeInUp key={idx}>
              <div className="bg-white rounded-lg md:rounded-2xl p-5 md:p-8 text-center border border-gray-200 hover:border-[#fa8c24] hover:bg-[#fa8c24]/10 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#fa8c24]">{stat.number}</span>
                </div>
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 md:mb-2">{stat.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{stat.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
