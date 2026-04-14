import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Database, Shield, Zap } from 'lucide-react';

const ServiceDetailCustomSoftware = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section with Background Image */}
      <div 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=400&fit=crop)',
        }}
      >
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Custom Software Development</h1>
          <p className="text-xl text-gray-200 mb-6">Tailored Solutions for Your Business Needs</p>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-orange-500">Custom Software Development</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop" 
              alt="Custom Software Development"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Build Software That Fits Your Vision</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We specialize in creating custom software solutions that are perfectly aligned with your business goals. 
              Our team of expert developers works closely with you to understand your requirements and deliver 
              scalable, secure, and efficient software applications.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From enterprise applications to specialized tools, we leverage the latest technologies and best 
              practices to ensure your software stands out in the market.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Code className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Clean Code</h3>
            <p className="text-gray-600">Well-structured, maintainable code following industry standards</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure</h3>
            <p className="text-gray-600">Built with security best practices and data protection</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Zap className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">High Performance</h3>
            <p className="text-gray-600">Optimized for speed and efficiency at scale</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Database className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable</h3>
            <p className="text-gray-600">Architecture designed to grow with your business</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Custom Software?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Tailored to your specific business processes',
              'Complete control over features and functionality',
              'Better integration with existing systems',
              'Competitive advantage in your market',
              'Long-term cost savings',
              'Ongoing support and maintenance'
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

export default ServiceDetailCustomSoftware;
