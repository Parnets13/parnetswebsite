import React from 'react';

const marqueeItems = [
  { text: 'Growth', img: '/assets/images/marquee/marquee-1.webp' },
  { text: 'Leadership', img: '/assets/images/marquee/marquee-2.webp' },
  { text: 'Enterprise', img: '/assets/images/marquee/marquee-1.webp' },
  { text: 'Leadership', img: '/assets/images/marquee/marquee-2.webp' },
  { text: 'Enterprise', img: '/assets/images/marquee/marquee-1.webp' },
  { text: 'Leadership', img: '/assets/images/marquee/marquee-2.webp' },
  { text: 'Growth', img: '/assets/images/marquee/marquee-1.webp' },
];

const Marquee = () => {
  return (
    <section className="py-10 bg-brand-primary overflow-hidden">
      <div className="relative flex whitespace-nowrap">
        <div className="flex w-max animate-marquee space-x-12 px-6 items-center">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <h4 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-wider">
                {item.text}
              </h4>
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20">
                <img 
                  src={item.img} 
                  alt={item.text} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
