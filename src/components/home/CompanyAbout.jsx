import { ArrowUpRight } from 'lucide-react';
import FadeInUp from '../FadeInUp';

const CompanyAbout = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <FadeInUp>
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-brand-primary">Who</span> We Are ?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  ParNets Software India PVT LTD is a team of passionate developers, creative designers, and strategic thinkers. Since our inception in 2012, we've partnered with startups, small businesses, and enterprises worldwide to craft high-quality digital experiences. Our commitment to excellence and customer satisfaction makes us a trusted name in web and app development.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-brand-primary">Why</span> Choose Us ?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-brand-primary font-bold text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Proven Expertise</h4>
                      <p className="text-gray-600 text-sm">15+ years delivering successful projects</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-primary font-bold text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Innovative Solutions</h4>
                      <p className="text-gray-600 text-sm">Latest technology trends & best practices</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-brand-primary font-bold text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">24/7 Support</h4>
                      <p className="text-gray-600 text-sm">Always here when you need us</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp>
              <button className="group flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
                <span className="font-semibold">Learn More About Us</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </FadeInUp>
          </div>

          {/* Right Image */}
          <div className="relative">
            <FadeInUp>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;
