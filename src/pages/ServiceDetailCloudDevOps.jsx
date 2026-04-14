import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cloud, Server, GitBranch, Gauge } from 'lucide-react';

const ServiceDetailCloudDevOps = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=400&fit=crop)',
        }}
      >
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Cloud & DevOps Solutions</h1>
          <p className="text-xl text-gray-200 mb-6">Accelerate Deployment & Scale with Confidence</p>
          <div className="flex items-center justify-center gap-2 text-white">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-orange-500">Cloud & DevOps Solutions</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern Infrastructure for Modern Business</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Transform your IT infrastructure with cloud computing and DevOps practices. We help businesses 
              migrate to the cloud, automate deployments, and implement continuous integration/continuous 
              deployment (CI/CD) pipelines for faster, more reliable software delivery.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our cloud and DevOps experts work with leading platforms like AWS, Azure, and Google Cloud 
              to optimize your infrastructure for performance, security, and cost-efficiency.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Optimize Your Infrastructure <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop" 
              alt="Cloud & DevOps"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Cloud className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Migration</h3>
            <p className="text-gray-600">Seamless transition to cloud infrastructure</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <GitBranch className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">CI/CD Pipelines</h3>
            <p className="text-gray-600">Automated testing and deployment workflows</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Server className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure as Code</h3>
            <p className="text-gray-600">Manage infrastructure through code</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Gauge className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring & Alerts</h3>
            <p className="text-gray-600">Real-time performance tracking</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Cloud & DevOps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Faster time to market',
              'Reduced infrastructure costs',
              'Improved scalability and reliability',
              'Enhanced security and compliance',
              'Better collaboration between teams',
              '24/7 monitoring and support'
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

export default ServiceDetailCloudDevOps;
