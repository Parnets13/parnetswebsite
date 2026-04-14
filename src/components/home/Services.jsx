import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    id: '01',
    title: 'IT Consultation',
    desc: 'Expert IT consulting services to guide your digital transformation, optimize infrastructure, and align technology with your business goals.',
    link: '/service-details/it-consultation',
  },
  {
    id: '02',
    title: 'Data Security',
    desc: 'Comprehensive data security solutions protecting your sensitive information with advanced encryption, compliance, and threat prevention.',
    link: '/service-details/data-security',
  },
  {
    id: '03',
    title: 'Digital Marketing',
    desc: 'Result-driven digital marketing strategies including SEO, social media, content marketing, and paid campaigns to grow your online presence.',
    link: '/service-details/digital-marketing',
  },
  {
    id: '04',
    title: 'Cloud Services',
    desc: 'Scalable cloud infrastructure solutions with migration, management, and optimization for cost-effective and reliable operations.',
    link: '/service-details/cloud-services',
  },
];

const Services = () => {
  return (
    <section className="pt-8 md:pt-16 pb-12 md:pb-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12 px-2">
          <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-xs md:text-sm mb-1.5 md:mb-3">
            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
            Our Services
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Comprehensive Solutions for Your Business
          </h2>
        </div>

        <div className="relative px-2 md:px-4 lg:px-8 overflow-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.3, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2.8, spaceBetween: 30 },
              1280: { slidesPerView: 3.2, spaceBetween: 35 },
            }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            slidesPerGroup={1}
            className="pb-16 !overflow-visible"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-white rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group h-[450px] flex flex-col overflow-visible w-full">
                  {/* Upper Right Notch Background */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 bg-gray-100 transition-colors duration-500" 
                    style={{
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                      borderTopRightRadius: '1.5rem'
                    }}
                  ></div>

                  {/* Number in Notch */}
                  <div className="absolute top-3 right-5 text-3xl font-bold text-gray-400 transition-colors duration-500 z-10">
                    {service.id}.
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <Link to={service.link}>
                        <div className="w-24 h-24 bg-gradient-to-br from-[#fff1e7] to-[#ffe4c4] rounded-full flex items-center justify-center text-brand-primary mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                        {idx === 0 && (
                          <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                        {idx === 1 && (
                          <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                        {idx === 2 && (
                          <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                        {idx === 3 && (
                          <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        </div>
                      </Link>

                      <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-brand-primary transition-colors duration-500 leading-tight">
                        <Link to={service.link}>{service.title}</Link>
                      </h4>

                      <p className="text-gray-500 leading-relaxed mb-6 transition-colors duration-500">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-auto pt-4">
                      <Link
                        to={service.link}
                        className="inline-flex items-center justify-center gap-3 w-14 h-14 rounded-full bg-gray-900 text-white group-hover:bg-orange-500 group-hover:w-auto group-hover:px-6 group-hover:py-4 transition-all duration-500 overflow-hidden"
                      >
                        
                        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-7-7m7 7l-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
