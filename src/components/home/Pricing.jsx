import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
            Pricing Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Flexible Package to Manage Pricing.
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`font-semibold ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-[72px] h-9 bg-brand-secondary rounded-full p-1 transition-colors flex items-center"
            >
              <div className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-transform ${isAnnual ? 'translate-x-9' : 'translate-x-0'}`}></div>
            </button>
            <span className={`font-semibold flex items-center gap-2 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annually
              <span className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-secondary/5 rounded-2xl flex items-center justify-center text-brand-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">
                ${isAnnual ? '86' : '99'}
              </span>
              <span className="text-gray-500 font-medium">/Per Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              {['Social media marketing', 'Email campaigns', 'Reporting & analytics', 'Pay-per-click advertising'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 text-center font-bold text-brand-secondary bg-brand-secondary/5 rounded-full hover:bg-brand-secondary hover:text-white transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Plan 2 */}
          <div className="bg-brand-secondary text-white rounded-3xl p-10 shadow-2xl relative transform lg:-translate-y-4 border border-brand-secondary/50">
            <div className="absolute top-0 right-10 transform -translate-y-1/2">
              <span className="bg-brand-primary text-white text-sm font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">Popular</span>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold">Standard</h3>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold">
                ${isAnnual ? '129' : '150'}
              </span>
              <span className="text-white/60 font-medium">/Per Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              {['Social media marketing', 'Email campaigns', 'Reporting & analytics', 'Pay-per-click advertising', 'Content strategy'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 text-center font-bold text-white bg-brand-primary rounded-full hover:bg-white hover:text-brand-secondary transition-colors">
              Choose Plan
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-secondary/5 rounded-2xl flex items-center justify-center text-brand-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">
                ${isAnnual ? '169' : '199'}
              </span>
              <span className="text-gray-500 font-medium">/Per Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              {['Social media marketing', 'Email campaigns', 'Reporting & analytics', 'Pay-per-click advertising', 'Dedicated support team'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 text-center font-bold text-brand-secondary bg-brand-secondary/5 rounded-full hover:bg-brand-secondary hover:text-white transition-colors">
              Choose Plan
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
