import { ArrowUpRight } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      id: 1,
      author: 'Ellinien Loma',
      date: 'June 20, 2025',
      category: 'Business',
      title: 'Harnessing Digital Transform a Roadmap Businesses.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      link: '/blog/digital-transformation'
    },
    {
      id: 2,
      author: 'Ellinien Loma',
      date: 'June 20, 2025',
      category: 'Success',
      title: 'Mastering Change Management Lessons for Businesses.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop',
      link: '/blog/change-management'
    },
    {
      id: 3,
      author: 'Ellinien Loma',
      date: 'June 20, 2025',
      category: 'Connect',
      title: 'Leading Through Change: Proven Lessons for Effective Change Business.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      link: '/blog/leading-change'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span className="text-brand-primary font-semibold uppercase text-sm tracking-wider">
                INSIGHTS & IDEAS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The Ultimate Resource.
            </h2>
          </div>
          <button className="group flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            <span>More Blogs</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Blog Cards */}
        <div className="space-y-6">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="bg-white rounded-[24px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="grid lg:grid-cols-[1fr_300px] gap-6 p-6 lg:p-8 items-center">
                {/* Left Side - Content */}
                <div className="flex items-center justify-between gap-8">
                  <div className="flex items-center gap-6 flex-1">
                    {/* Author & Date */}
                    <div className="min-w-[140px]">
                      <p className="text-gray-900 font-semibold text-sm mb-1">
                        By {insight.author}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {insight.date}
                      </p>
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-brand-primary transition-colors cursor-pointer hover:underline underline-offset-4">
                        {insight.title}
                      </h3>
                    </div>
                  </div>

                  {/* Category & Read More */}
                  <div className="flex items-center gap-4">
                    <span className="inline-block bg-brand-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                      {insight.category}
                    </span>
                    <button className="group/btn flex items-center gap-2 text-gray-900 font-semibold hover:text-brand-primary transition-colors whitespace-nowrap">
                      <span className="text-sm">Read More</span>
                      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white group-hover/btn:bg-brand-primary transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="order-first lg:order-last">
                  <div className="relative h-32 lg:h-36 rounded-[16px] overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
