import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Project',
      desc: 'Manage and track your projects efficiently and effectively.',
      image: '/hero image1.png',
      icon: '📊',
    },
    {
      id: 2,
      title: 'Project',
      desc: 'Manage and track your projects efficiently and effectively.',
      image: '/hero image3.png',
      icon: '🎯',
    },
    {
      id: 3,
      title: 'Project',
      desc: 'Manage and track your projects efficiently and effectively.',
      image: '/hero image4.png',
      icon: '💼',
    },
  ];

  return (
    <section className="pt-8 md:pt-16 pb-8 md:pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          {/* Left / Top Image */}
          <div className="w-full lg:w-5/12 hidden md:block">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
              <img 
                src="/about image.png" 
                alt="About us" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop' }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-1.5 md:space-y-2">
                <span className="flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-xs md:text-sm">
                  <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                  About Our Company
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Powering Innovation Through Partnerships with our Brands and Many Companies.
                </h2>
              </div>

              <div className="md:hidden rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl my-4">
                  <img 
                    src="/about image.png" 
                    alt="About us" 
                    className="w-full h-auto object-cover"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop' }}
                  />
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <img className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white object-cover" src="/assets/images/testimonial/client-1.webp" alt="Client" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' }}/>
                    <img className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white object-cover" src="/assets/images/testimonial/client-2.webp" alt="Client" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }}/>
                    <img className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white object-cover" src="/assets/images/testimonial/client-3.webp" alt="Client" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' }}/>
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white bg-brand-primary flex items-center justify-center text-white z-10">
                      <Plus className="w-4 md:w-5 h-4 md:h-5" />
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-base md:text-lg">
                  Recognized by industry award leaders, award winning team has a proven record.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-3 md:pt-4 border-t border-gray-100">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-baseline gap-1 text-brand-primary font-bold text-3xl md:text-4 lg:text-5xl">
                      <span>20</span>
                      <span className="text-xl md:text-2xl lg:text-3xl text-brand-secondary">M</span>
                    </div>
                    <span className="text-gray-600 font-medium text-xs md:text-sm lg:text-base">Reach Worldwide empower dreams everywhere.</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-baseline gap-1 text-brand-primary font-bold text-3xl md:text-4xl lg:text-5xl">
                      <span>8.5</span>
                      <span className="text-xl md:text-2xl lg:text-3xl text-brand-secondary">X</span>
                    </div>
                    <span className="text-gray-600 font-medium text-xs md:text-sm lg:text-base">Faster Growth starts smart solutions today.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
