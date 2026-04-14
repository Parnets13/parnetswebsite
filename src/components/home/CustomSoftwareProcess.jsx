import { ArrowRight, Lightbulb, ClipboardList, Palette, Cog, CheckCircle, Rocket, Wrench } from 'lucide-react';
import Process3DAnimation from '../Process3DAnimation';

const CustomSoftwareProcess = () => {
  const steps = [
    { id: 1, title: 'Idea Generation', label: 'Idea\nGeneration', color: '#3b82f6', icon: Lightbulb },
    { id: 2, title: 'Requirement Analysis', label: 'Requirement\nAnalysis', color: '#0891b2', icon: ClipboardList },
    { id: 3, title: 'Product Design', label: 'Product\nDesign', color: '#0891b2', icon: Palette },
    { id: 4, title: 'Product Development', label: 'Product\nDevelopm', color: '#14b8a6', icon: Cog },
    { id: 5, title: 'Integration & Testing', label: 'Integration &\nTesting', color: '#fbbf24', icon: CheckCircle },
    { id: 6, title: 'Deployment', label: 'Deployment', color: '#f97316', icon: Rocket },
    { id: 7, title: 'Maintenance', label: 'Maintenance', color: '#f97316', icon: Wrench },
  ];

  return (
    <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32 lg:mb-40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Our <span className="text-orange-500">Custom Software</span> Development
            <br />
            <span className="text-blue-600">Process</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 mt-4">
            We follow a structured, transparent approach to deliver high-quality software solutions that exceed your expectations.
          </p>
        </div>

        {/* Desktop View - 3D Stepped Process */}
        <div className="hidden lg:block">
          <div className="flex justify-center px-8 overflow-x-auto">
            <div className="w-full max-w-7xl">
              <svg 
                className="w-full h-auto min-h-96" 
                viewBox="0 0 1800 650" 
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Gradient ribbons */}
                  <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0891b2" stopOpacity="0.25" />
                  </linearGradient>
                  <linearGradient id="ribbonGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0891b2" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.25" />
                  </linearGradient>
                  <linearGradient id="ribbonGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.25" />
                  </linearGradient>
                  <linearGradient id="ribbonGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.25" />
                  </linearGradient>

                  {/* Shadows */}
                  <filter id="circleShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.15" />
                  </filter>
                  <filter id="platformShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="12" stdDeviation="8" floodOpacity="0.2" />
                  </filter>
                </defs>

                {/* Connecting ribbons */}
                <path d="M 180 420 Q 240 380, 300 340 L 320 320 Q 260 360, 200 400 Z" fill="url(#ribbonGrad1)" filter="url(#platformShadow)" />
                <path d="M 380 360 Q 440 320, 500 280 L 520 260 Q 460 300, 400 340 Z" fill="url(#ribbonGrad1)" filter="url(#platformShadow)" />
                <path d="M 580 300 Q 640 260, 700 220 L 720 200 Q 660 240, 600 280 Z" fill="url(#ribbonGrad2)" filter="url(#platformShadow)" />
                <path d="M 780 240 Q 840 200, 900 160 L 920 140 Q 860 180, 800 220 Z" fill="url(#ribbonGrad2)" filter="url(#platformShadow)" />
                <path d="M 980 180 Q 1040 140, 1100 100 L 1120 80 Q 1060 120, 1000 160 Z" fill="url(#ribbonGrad3)" filter="url(#platformShadow)" />
                <path d="M 1180 120 Q 1240 80, 1300 40 L 1320 20 Q 1260 60, 1200 100 Z" fill="url(#ribbonGrad3)" filter="url(#platformShadow)" />
                <path d="M 1380 60 Q 1440 20, 1500 -20 L 1520 -40 Q 1460 0, 1400 40 Z" fill="url(#ribbonGrad4)" filter="url(#platformShadow)" />

                {/* Steps */}
                {steps.map((step, idx) => {
                  const baseX = 100 + idx * 200;
                  const baseY = 450 - idx * 60;
                  const IconComponent = step.icon;

                  return (
                    <g key={step.id}>
                      {/* 3D Cylinder Platform */}
                      <g filter="url(#platformShadow)">
                        {/* Bottom ellipse */}
                        <ellipse cx={baseX} cy={baseY + 140} rx="75" ry="20" fill="#d0dce8" opacity="0.6" />
                        
                        {/* Left side */}
                        <path d={`M ${baseX - 75} ${baseY + 90} Q ${baseX - 78} ${baseY + 115}, ${baseX - 75} ${baseY + 140} L ${baseX - 75} ${baseY + 140} Q ${baseX - 78} ${baseY + 115}, ${baseX - 75} ${baseY + 90} Z`} fill="#c5d4e0" />
                        
                        {/* Right side */}
                        <path d={`M ${baseX + 75} ${baseY + 90} Q ${baseX + 78} ${baseY + 115}, ${baseX + 75} ${baseY + 140} L ${baseX + 75} ${baseY + 140} Q ${baseX + 78} ${baseY + 115}, ${baseX + 75} ${baseY + 90} Z`} fill="#e5ecf3" />
                        
                        {/* Top ellipse */}
                        <ellipse cx={baseX} cy={baseY + 90} rx="75" ry="22" fill="#f0f4f8" />
                        
                        {/* Highlight */}
                        <ellipse cx={baseX - 20} cy={baseY + 85} rx="35" ry="12" fill="white" opacity="0.4" />
                        
                        {/* Shadow */}
                        <ellipse cx={baseX} cy={baseY + 155} rx="80" ry="16" fill="rgba(0,0,0,0.08)" />
                      </g>

                      {/* Main Circle */}
                      <circle
                        cx={baseX}
                        cy={baseY}
                        r="58"
                        fill="white"
                        stroke={step.color}
                        strokeWidth="5"
                        filter="url(#circleShadow)"
                        style={{
                          animation: `float 3.5s ease-in-out ${idx * 0.15}s infinite`
                        }}
                      />

                      {/* Icon */}
                      <g transform={`translate(${baseX - 26}, ${baseY - 26})`}>
                        <IconComponent 
                          size={52}
                          color={step.color}
                          strokeWidth={1.5}
                        />
                      </g>

                      {/* Number Badge */}
                      <circle
                        cx={baseX + 48}
                        cy={baseY - 48}
                        r="24"
                        fill={step.color}
                        stroke="white"
                        strokeWidth="5"
                        filter="url(#circleShadow)"
                      />
                      <text
                        x={baseX + 48}
                        y={baseY - 40}
                        textAnchor="middle"
                        fontSize="22"
                        fontWeight="bold"
                        fill="white"
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        {step.id}
                      </text>

                      {/* Title - Above circle */}
                      <text
                        x={baseX}
                        y={baseY - 95}
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="700"
                        fill={step.color}
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        {step.title.split(' ')[0]}
                      </text>
                      <text
                        x={baseX}
                        y={baseY - 75}
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="700"
                        fill={step.color}
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        {step.title.split(' ').slice(1).join(' ')}
                      </text>

                      {/* Subtitle - Below platform */}
                      <text
                        x={baseX}
                        y={baseY + 175}
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="500"
                        fill={step.color}
                        opacity="0.8"
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        {step.label.split('\n')[0]}
                      </text>
                      <text
                        x={baseX}
                        y={baseY + 195}
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="500"
                        fill={step.color}
                        opacity="0.8"
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        {step.label.split('\n')[1]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          <div className="flex justify-center px-4 overflow-x-auto pb-12">
            <div className="flex items-end gap-6 min-w-max">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;

                return (
                  <div 
                    key={step.id} 
                    className="flex flex-col items-center"
                    style={{ marginBottom: `${idx * 20}px` }}
                  >
                    {/* Platform */}
                    <div className="w-24 h-8 rounded-b-2xl bg-gradient-to-b from-gray-200 to-gray-300 mb-2 shadow-lg"></div>

                    {/* Circle */}
                    <div 
                      className="w-24 h-24 rounded-full border-3 bg-white flex items-center justify-center relative shadow-xl transition-all duration-300 hover:scale-110"
                      style={{ borderColor: step.color }}
                    >
                      <IconComponent 
                        size={40} 
                        color={step.color}
                        strokeWidth={1.5}
                      />
                      
                      {/* Badge */}
                      <div 
                        className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white border-3 border-white shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.id}
                      </div>
                    </div>

                    {/* Title */}
                    <p 
                      className="text-center text-xs font-semibold mt-3 w-24"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-5 px-4">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            
            return (
              <div 
                key={step.id} 
                className="relative"
              >
                {/* Timeline Line */}
                {idx < steps.length - 1 && (
                  <div 
                    className="absolute left-10 top-20 w-1 h-14"
                    style={{ backgroundColor: step.color, opacity: 0.3 }}
                  ></div>
                )}

                {/* Card */}
                <div className="flex items-center gap-4 group">
                  {/* Circle */}
                  <div className="relative flex-shrink-0">
                    <div 
                      className="w-20 h-20 rounded-full border-3 bg-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110"
                      style={{ borderColor: step.color }}
                    >
                      <IconComponent 
                        size={36} 
                        color={step.color}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div 
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white border-3 border-white shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Title Card */}
                  <div 
                    className="flex-1 px-4 py-3 rounded-lg border-2 shadow-md"
                    style={{ 
                      borderColor: step.color,
                      backgroundColor: `${step.color}12`
                    }}
                  >
                    <p 
                      className="font-semibold text-sm"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">Ready to start your custom software development journey?</p>
          <button className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-orange-700">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CustomSoftwareProcess;
