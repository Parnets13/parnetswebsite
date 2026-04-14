import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ClientsFeedback = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Uttam Kishor',
      role: 'CEO - Kishore MedTech',
      image: '/client 1.png',
      feedback: 'Excellent web and app development with top-notch post-development support—highly professional, responsive, and committed to quality. .',
      rating: 5
    },
    {
      id: 2,
      name: 'Karthik',
      role: 'CEO - DailyDish',
      image: '/client 2.png',
      feedback: 'I want to appreciate ParNets Team for being quick to respond and being patient in understanding things . They have built our Food Tech platform not only focusing technology but also understanding business . Fantastic Experience .',
      rating: 5
    },
    {
      id: 3,
      name: 'Guy Hawkins',
      role: 'Co-Founder',
      image: '/client 3.png',
      feedback: 'Working with Bexon has been a game-changer for our business. Their team\'s professionalism, attention to detail, and innovative solutions have helped us achieve our goals faster than we imagined. We truly feel like a valued partner.',
      rating: 5
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'CEO',
      image: '/client 4.png',
      feedback: 'The results we\'ve seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted partner.',
      rating: 5
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'Director',
      image: '/client 5.png',
      feedback: 'We\'ve been working with Bexonfor years, and they continue to deliver outstanding results. Their team is creative and responsive to ensure our needs are met. They\'ve become a key contributor to our growth and success that really help us.',
      rating: 5
    },
    {
      id: 6,
      name: 'Emily Davis',
      role: 'Manager',
      image: '/client 6.png',
      feedback: 'Working with Bexon has been a game-changer for our business. Their team\'s professionalism, attention to detail, and innovative solutions have helped us achieve our goals faster than we imagined. We truly feel like a valued partner.',
      rating: 5
    },
    {
      id: 7,
      name: 'James Wilson',
      role: 'Founder',
      image: '/client 7.png',
      feedback: 'The results we\'ve seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level.',
      rating: 5
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      role: 'Co-Founder',
      image: '/client 8.png',
      feedback: 'We\'ve been working with Bexonfor years, and they continue to deliver outstanding results. Their team is creative and responsive to ensure our needs are met.',
      rating: 5
    },
    {
      id: 9,
      name: 'David Martinez',
      role: 'CEO',
      image: '/clinet 9.png',
      feedback: 'Working with Bexon has been a game-changer for our business. Their team\'s professionalism, attention to detail, and innovative solutions have helped us achieve our goals faster than we imagined.',
      rating: 5
    }
  ];

  // Auto-scroll from right to left
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    let animationId;

    const autoScroll = () => {
      if (!isPaused && container) {
        // Scroll to the right continuously
        container.scrollLeft += 1;
        
        // Reset to beginning when reaching halfway (for seamless loop)
        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
        
        updateScrollButtons();
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsPaused(true);
    const scrollAmount = 420;
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    setTimeout(() => {
      updateScrollButtons();
      setIsPaused(false);
    }, 1000);
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <section className="py-8 md:py-16 lg:py-24 pb-12 md:pb-24 lg:pb-32 bg-brand-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span className="text-brand-primary font-semibold uppercase text-xs md:text-sm tracking-wider">
                CLIENTS FEEDBACK
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Our Clients Share Their
              <br />
              Success Stories.
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-white/10 hover:bg-brand-primary text-white hover:text-white'
                  : 'bg-white/5 text-white/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'bg-white/10 hover:bg-brand-primary text-white hover:text-white'
                  : 'bg-white/5 text-white/30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8"
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

            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-2xl p-5 md:p-8 lg:p-10 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Client Info */}
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-full overflow-hidden border-2 border-brand-primary flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base md:text-xl font-bold text-white truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Feedback Text */}
                <p className="text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 line-clamp-4 md:line-clamp-none">
                  {testimonial.feedback}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 md:w-5 h-4 md:h-5 fill-brand-primary text-brand-primary"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex lg:hidden justify-center gap-1.5 mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsFeedback;
