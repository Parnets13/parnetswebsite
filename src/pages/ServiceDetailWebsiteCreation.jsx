import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Layout, Zap, Search, Paintbrush } from 'lucide-react';

const ServiceDetailWebsiteCreation = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&h=400&fit=crop)',
        }}
      >
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Website Creation</h1>
          <p className="text-xl text-gray-200 mb-6">Static & Dynamic Websites That Convert</p>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-orange-500">Website Creation</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Digital Presence Starts Here</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We create beautiful, fast-loading websites that make a lasting impression. Whether you need a 
              simple static website or a complex dynamic platform, we deliver solutions that are optimized 
              for performance, SEO, and user experience.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our websites are built with modern technologies and best practices to ensure they look great, 
              load fast, and rank well in search engines.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Launch Your Website <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
              alt="Website Creation"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Layout className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Responsive Design</h3>
            <p className="text-gray-600">Perfect on desktop, tablet, and mobile</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Zap className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
            <p className="text-gray-600">Optimized for speed and performance</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Search className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Optimized</h3>
            <p className="text-gray-600">Built to rank well in search engines</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Paintbrush className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Design</h3>
            <p className="text-gray-600">Unique designs that match your brand</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Modern, professional design',
              'Mobile-first responsive layout',
              'Fast page load times',
              'SEO-friendly structure',
              'Content management system',
              'Free SSL certificate and hosting setup'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailWebsiteCreation;
