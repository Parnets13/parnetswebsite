import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Eleanor Pena',
    designation: 'Marketing Director',
    image: '/assets/images/testimonial/ts-1.webp',
    text: '"We\'ve been partnering with this agency for over a year now, and the results have been nothing short of spectacular. Their innovative approaches and dedication to our brand have significantly boosted our market presence."',
    rating: 5,
  },
  {
    id: 2,
    name: 'Guy Hawkins',
    designation: 'CEO',
    image: '/assets/images/testimonial/ts-2.webp',
    text: '"Their team is incredibly professional and responsive. We saw a 30% increase in productivity within the first three months of implementing their software solutions. Highly recommended!"',
    rating: 5,
  },
  {
    id: 3,
    name: 'Bessie Cooper',
    designation: 'Product Manager',
    image: '/assets/images/testimonial/ts-3.webp',
    text: '"What sets them apart is their attention to detail and creative flair. They didn\'t just give us what we asked for; they anticipated our needs and delivered something even better."',
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-secondary text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <svg width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#fff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
            What Our Clients Say About Us.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative cursor-grab active:cursor-grabbing">
           {/* Custom Quote Icon Background */}
          <div className="absolute top-10 left-0 text-brand-primary/20 -z-10 w-32 h-32 hidden md:block">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white/10 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/15 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6 text-brand-primary">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                      {item.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary p-0.5">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' }}
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{item.name}</h4>
                      <p className="text-brand-primary text-sm font-semibold uppercase tracking-wider">{item.designation}</p>
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

export default Testimonials;
