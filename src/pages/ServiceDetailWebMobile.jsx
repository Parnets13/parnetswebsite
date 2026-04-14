import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Smartphone, Globe, Layers, Palette } from 'lucide-react';

const ServiceDetailWebMobile = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=400&fit=crop)',
        }}
      >
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Web & Mobile App Development</h1>
          <p className="text-xl text-gray-200 mb-6">Beautiful, Fast, and User-Friendly Applications</p>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-orange-500">Web & Mobile App Development</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Create Stunning Digital Experiences</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We design and develop responsive websites and mobile applications that engage users and drive results. 
              Our team combines creative design with cutting-edge technology to deliver exceptional digital products.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you need a corporate website, e-commerce platform, or mobile app for iOS and Android, 
              we have the expertise to bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" 
              alt="Web & Mobile Development"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Globe className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Responsive Design</h3>
            <p className="text-gray-600">Perfect experience across all devices and screen sizes</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Smartphone className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Native & Hybrid Apps</h3>
            <p className="text-gray-600">iOS and Android apps with native performance</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Palette className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Modern UI/UX</h3>
            <p className="text-gray-600">Beautiful interfaces that users love</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Layers className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">API Integration</h3>
            <p className="text-gray-600">Seamless connection with third-party services</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Cross-platform compatibility',
              'Fast loading speeds and performance',
              'SEO-optimized web applications',
              'Intuitive user interfaces',
              'App store deployment support',
              'Continuous updates and maintenance'
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

export default ServiceDetailWebMobile;
