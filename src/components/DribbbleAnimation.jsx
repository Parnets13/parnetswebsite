import React from 'react';

const DribbbleAnimation = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <style>{`
        @keyframes flowLine1 {
          0% {
            strokeDashoffset: 1000;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            strokeDashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes flowLine2 {
          0% {
            strokeDashoffset: 1200;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            strokeDashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes flowLine3 {
          0% {
            strokeDashoffset: 800;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            strokeDashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes floatCircle1 {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(200px, -150px) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes floatCircle2 {
          0% {
            transform: translate(0, 0) scale(0.9);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translate(150px, -200px) scale(1.1);
            opacity: 0;
          }
        }

        @keyframes floatCircle3 {
          0% {
            transform: translate(0, 0) scale(0.7);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate(250px, -100px) scale(1.3);
            opacity: 0;
          }
        }

        @keyframes rotateShape {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            r: 8;
            opacity: 0.6;
          }
          50% {
            r: 12;
            opacity: 0.3;
          }
        }

        .flow-line {
          stroke-dasharray: 1000;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .line-1 {
          animation: flowLine1 4s ease-in-out infinite;
        }

        .line-2 {
          animation: flowLine2 5s ease-in-out infinite;
        }

        .line-3 {
          animation: flowLine3 4.5s ease-in-out infinite;
        }

        .float-circle {
          fill: rgba(250, 140, 36, 0.8);
        }

        .circle-1 {
          animation: floatCircle1 4s ease-in-out infinite;
        }

        .circle-2 {
          animation: floatCircle2 5s ease-in-out infinite;
        }

        .circle-3 {
          animation: floatCircle3 4.5s ease-in-out infinite;
        }

        .rotating-shape {
          animation: rotateShape 8s linear infinite;
        }

        .pulse-dot {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {/* Background grid effect */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(250, 140, 36, 0.05)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#grid)" />

        {/* Flowing curved lines */}
        <path
          d="M 100,500 Q 200,400 300,300 T 500,100"
          stroke="rgba(250, 140, 36, 0.6)"
          strokeWidth="3"
          className="flow-line line-1"
        />

        <path
          d="M 150,550 Q 250,420 350,280 T 550,80"
          stroke="rgba(250, 140, 36, 0.5)"
          strokeWidth="2.5"
          className="flow-line line-2"
        />

        <path
          d="M 80,480 Q 180,380 280,320 T 480,120"
          stroke="rgba(250, 140, 36, 0.55)"
          strokeWidth="2"
          className="flow-line line-3"
        />

        {/* Geometric shapes with rotation */}
        <g className="rotating-shape" style={{ transformOrigin: '600px 150px' }}>
          <circle cx="600" cy="150" r="50" fill="none" stroke="rgba(250, 140, 36, 0.3)" strokeWidth="2" />
          <circle cx="600" cy="150" r="35" fill="none" stroke="rgba(250, 140, 36, 0.25)" strokeWidth="1.5" />
          <circle cx="600" cy="150" r="20" fill="none" stroke="rgba(250, 140, 36, 0.2)" strokeWidth="1" />
        </g>

        {/* Floating circles that move along paths */}
        <circle cx="100" cy="500" r="6" className="float-circle circle-1" />
        <circle cx="150" cy="550" r="5" className="float-circle circle-2" />
        <circle cx="80" cy="480" r="4" className="float-circle circle-3" />

        {/* Pulsing accent dots */}
        <circle cx="300" cy="300" r="8" fill="none" stroke="rgba(250, 140, 36, 0.4)" strokeWidth="2" className="pulse-dot" />
        <circle cx="500" cy="100" r="6" fill="none" stroke="rgba(250, 140, 36, 0.35)" strokeWidth="1.5" className="pulse-dot" style={{ animationDelay: '0.5s' }} />

        {/* Connecting nodes */}
        <circle cx="300" cy="300" r="3" fill="rgba(250, 140, 36, 0.7)" />
        <circle cx="500" cy="100" r="3" fill="rgba(250, 140, 36, 0.7)" />
        <circle cx="100" cy="500" r="3" fill="rgba(250, 140, 36, 0.7)" />

        {/* Additional flowing elements */}
        <path
          d="M 600,400 L 650,350 L 700,380"
          stroke="rgba(250, 140, 36, 0.4)"
          strokeWidth="2"
          fill="none"
          className="flow-line line-1"
          style={{ animationDelay: '1s' }}
        />

        {/* Subtle background circles */}
        <circle cx="700" cy="500" r="80" fill="none" stroke="rgba(250, 140, 36, 0.1)" strokeWidth="1" />
        <circle cx="700" cy="500" r="60" fill="none" stroke="rgba(250, 140, 36, 0.08)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default DribbbleAnimation;
