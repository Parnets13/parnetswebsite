import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, TrendingUp, Target, CheckCircle } from 'lucide-react';
import ProcessFlow3D from '../ProcessFlow3D';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
        
        // Determine active step based on scroll progress
        if (scrollProgress < 0.3) {
          setActiveStep(0);
        } else if (scrollProgress < 0.6) {
          setActiveStep(1);
        } else {
          setActiveStep(2);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      id: '01',
      title: 'Discovery & Planning',
      description: 'The first step in our process is understanding your unique business needs, objectives, and our customer challenges. We ensure an alignment between goals and implementation strategies before acting.',
      icon: <TrendingUp className="w-10 h-10" />
    },
    {
      id: '02',
      title: 'Execution & Delivery',
      description: 'With a clear blueprint in hand, our team leverages the latest technologies and methodologies to bring your vision to life, keeping you updated every step of the way.',
      icon: <Target className="w-10 h-10" />
    },
    {
      id: '03',
      title: 'Review & Support',
      description: 'Post-delivery isn\'t the end. We meticulously review the results, ensure performance benchmarks are met, and offer ongoing support to secure sustained success.',
      icon: <CheckCircle className="w-10 h-10" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-brand-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - 3D Animation */}
          <div className="lg:sticky lg:top-32 rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <ProcessFlow3D activeStep={activeStep} />
          </div>

          {/* Right Side - Header and Steps */}
          <div>
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span className="text-brand-primary font-semibold uppercase text-sm tracking-wider">
                  OUR PROCESS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Seamless Process and
                <br />
                Great Results.
              </h2>
              <button className="group flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="font-semibold">Explore More</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Steps */}
            <div className="space-y-6 lg:min-h-[800px] mt-12 lg:mt-0">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPassed = index < activeStep;
                
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer transition-all duration-700 ease-in-out ${
                      isActive 
                        ? 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10 scale-100 opacity-100 translate-y-0' 
                        : isPassed
                        ? 'opacity-40 scale-95 -translate-y-4'
                        : 'opacity-60 scale-95 translate-y-4'
                    }`}
                  >
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-bold text-sm tracking-wider transition-colors ${
                        isActive ? 'text-brand-primary' : 'text-gray-500'
                      }`}>
                        Step {step.id}
                      </span>
                      {!isActive && (
                        <div className="h-px bg-gray-700 flex-1 mx-4"></div>
                      )}
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'bg-brand-primary text-white scale-110' 
                          : 'bg-white/5 text-gray-400'
                      }`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl lg:text-3xl font-bold transition-colors ${
                          isActive ? 'text-white' : 'text-gray-400'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description - Only visible when active */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-300 text-base leading-relaxed pl-[88px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
