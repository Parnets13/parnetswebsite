import { useEffect, useRef } from 'react';

const Brands = () => {
  const scrollRef = useRef(null);

  const brands = [
    { name: 'monceau', logo: 'monceau' },
    { name: 'coudac', logo: 'coudac' },
    { name: 'flomotha', logo: 'flomotha' },
    { name: 'WEGLOT', logo: 'WEGLOT' },
    { name: 'Influencer', logo: 'Influencer' },
    { name: 'monceau', logo: 'monceau' },
    { name: 'coudac', logo: 'coudac' },
    { name: 'flomotha', logo: 'flomotha' }
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += 1;
        
        // Reset to beginning when reaching halfway (for seamless loop)
        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-[#FFF4ED] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h3 className="text-brand-primary font-semibold text-sm md:text-base tracking-wider uppercase">
            • WE'RE PROUD TO PARTNER WITH BEST-IN-CLASS CLIENTS •
          </h3>
        </div>

        {/* Scrolling Brands */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-12 lg:gap-16 overflow-x-hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-48 md:w-56 lg:w-64 h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center px-8 hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <span className="text-gray-700 text-2xl md:text-3xl font-bold tracking-wide">
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
