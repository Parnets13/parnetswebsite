import { Link } from 'react-router-dom';

const projects = [
  {
    id: '01',
    title: 'Web Development',
    desc: 'Responsive and scalable web solutions that drive your business forward.',
    subServices: ['React.js', 'PHP', 'Laravel', 'WordPress'],
  },
  {
    id: '02',
    title: 'App Development',
    desc: 'Native and cross-platform mobile applications that engage users effectively.',
    subServices: ['iOS App', 'Android App', 'Flutter', 'React Native'],
  },
  {
    id: '03',
    title: 'E-commerce Solutions',
    desc: 'Complete online store solutions with secure payments and inventory management.',
    subServices: ['Magento 2', 'Shopify', 'WooCommerce', 'Custom Store'],
  },
  {
    id: '04',
    title: 'UI/UX Design',
    desc: 'Creative and user-focused designs that deliver seamless digital experiences.',
    subServices: ['Figma Design', 'Adobe XD', 'Prototyping', 'Design Systems', 'User Research'],
  },
  {
    id: '05',
    title: 'AI & Machine Learning',
    desc: 'Smart solutions powered by AI to automate processes and enhance decision-making.',
    subServices: ['Predictive Analytics', 'Chatbots', 'Computer Vision', 'NLP Solutions'],
  },
  {
    id: '06',
    title: 'Digital Marketing',
    desc: 'Result-driven strategies to grow your brand, traffic, and online presence.',
    subServices: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'],
  },
];

const Projects = () => {
  return (
    <section className="py-8 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12 lg:mb-16 px-2">
          <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-xs md:text-sm mb-1.5 md:mb-3">
            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
            Our Project 
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Advanced Solutions for Growing your online Business
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 px-2 md:px-0">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-md hover:shadow-lg transition-all duration-500 h-auto md:h-full flex flex-col border border-gray-100 overflow-hidden"
            >
              {/* Gray Background Pad for Number */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gray-100 rounded-full opacity-40"></div>

              {/* Number in Top Right */}
              <div className="absolute top-4 right-4 md:top-6 md:right-8 text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400 z-10">
                {project.id}.
              </div>

              {/* Content */}
              <div className="flex flex-col h-full relative z-20">
                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1.5 md:mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4">
                  {project.desc}
                </p>

                {/* Sub Services List */}
                <ul className="space-y-1 md:space-y-1.5 mb-4 md:mb-6 flex-1">
                  {project.subServices.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 md:gap-2.5 text-gray-600 text-xs md:text-sm lg:text-base">
                      <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-brand-primary rounded-full flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex gap-1.5 md:gap-2 justify-between items-center">
                  <Link
                    to="#"
                    className="px-3 md:px-5 py-1 md:py-1.5 bg-brand-primary text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 text-xs md:text-sm"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="#"
                    className="px-3 md:px-5 py-1 md:py-1.5 border-2 border-brand-primary text-brand-primary rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300 text-xs md:text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
