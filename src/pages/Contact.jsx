import { useState, useRef } from 'react';
import FadeInUp from '../components/FadeInUp';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    industry: '',
    message: ''
  });
  const [showMap, setShowMap] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setShowMap(true);
    // After 2 minutes (120000ms), hide map and restart video
    const timer = setTimeout(() => {
      setShowMap(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 120000); // 2 minutes

    return () => clearTimeout(timer);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        industry: '',
        message: ''
      });
      // Close popup after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Banner Section with Background Image */}
      <section className="relative bg-gradient-to-br from-brand-secondary via-gray-900 to-brand-secondary text-white py-60 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/contact image.png" 
            alt="Contact Banner" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <FadeInUp>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-white">
                <span>Contact </span>
                <span className="text-brand-primary">Us</span>
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
                We develop websites worldwide
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left: Contact Info Cards + Video */}
            <FadeInUp>
              <div className="space-y-8 w-full">
                {/* Contact Info Cards Section */}
                <div className="w-full">
                  {/* Heading Section */}
                  <div className="text-center mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                      Let's Connect and Build <br />
                      <span className="text-brand-primary">Smarter Solutions Together.</span>
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                      We're here to help you with any questions or concerns. Reach out to us through any of the channels below.
                    </p>
                  </div>

                  {/* Contact Cards Grid */}
                  <div className="grid grid-cols-2 gap-8">
                    {/* Head Office */}
                    <div className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-primary/10 transition-all">
                          <MapPin className="w-8 h-8 text-brand-primary" />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-base mb-2">Head Office</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">104/1 Singapura Main Road<br />Bengaluru, Karnataka 560097</p>
                    </div>

                    {/* Let's Talk */}
                    <div className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-primary/10 transition-all">
                          <Phone className="w-8 h-8 text-brand-primary" />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-base mb-2">Let's Talk</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Phone: +91 9704002068<br />Fax: +91 9704002068</p>
                    </div>

                    {/* Email Support */}
                    <div className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-primary/10 transition-all">
                          <Mail className="w-8 h-8 text-brand-primary" />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-base mb-2">Email Support</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">hello@parnetsgroup.com<br />support@parnetsgroup.com</p>
                    </div>

                    {/* Support Hours */}
                    <div className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-primary/10 transition-all">
                          <Clock className="w-8 h-8 text-brand-primary" />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-base mb-2">Support Hours</h4>
                        <p className="text-gray-600 text-sm">Monday – Saturday</p>
                      <p className="text-gray-600 text-sm">Mon - Fri, 09:00 - 18:30<br />(IST)</p>
                    </div>
                  </div>
                </div>

                {/* Map Design Video & Google Map Container */}
                <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 relative w-full" style={{ minHeight: '400px', maxHeight: '550px', aspectRatio: '16/10' }}>
                  {/* Video - Shows initially */}
                  {!showMap && (
                    <video
                      ref={videoRef}
                      src="/map design.mp4"
                      autoPlay
                      loop={false}
                      muted
                      playsInline
                      onEnded={handleVideoEnd}
                      className="w-full h-full object-cover"
                      style={{ display: 'block' }}
                    />
                  )}

                  {/* Google Map - Shows after video ends, fades in */}
                  {showMap && (
                    <div className="w-full h-full animate-fadeIn">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.408469794573!2d77.59521!3d13.034900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20!3m3!1m2!1s0x3bae1781c0000001%3A0x0!2s104%2F1%2F50%2C%20Singapura%20Main%20Rd%2C%20Singapura%20Village%2C%20Varadharaja%20Nagar%2C%20Vidyaranyapura%2C%20Bengaluru%2C%20Karnataka%20560097%2C%20India!5e0!3m2!1sen!2sin!4v1712425890000"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Parnets Group Office Location - 104/1 Singapura Main Road, Bengaluru"
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </FadeInUp>

            {/* Right: Contact Form */}
            <FadeInUp>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 w-full">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 border-b border-gray-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    <span>Talk In </span>
                    <span className="text-brand-primary">Details</span>
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    About <span className="text-brand-primary font-semibold">Your Project</span> With Us!
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Service & Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Select Services *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        required
                      >
                        <option value="">Choose a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="custom">Custom Software</option>
                        <option value="cloud">Cloud & DevOps</option>
                        <option value="erp">ERP/CRM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Select Industry *
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        required
                      >
                        <option value="">Choose an industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="education">Education</option>
                        <option value="banking">Banking</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="travel">Travel & Tourism</option>
                        <option value="social">Social</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="transportation">Transportation</option>
                        <option value="game">Game</option>
                        <option value="realestate">Real Estate</option>
                        <option value="ngo">NGOs</option>
                        <option value="energy">Energy</option>
                        <option value="agritech">Agritech</option>
                        <option value="automobile">Automobile</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and requirements..."
                      rows="4"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </button>
                    
                  </div>
                </form>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Career */}
            <FadeInUp>
              <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col items-center justify-center group hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full animate-growth-level">
                  <img src="/Career.png" alt="Career" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Career</h3>
                <p className="text-gray-600 text-lg mb-4 group-hover:text-gray-900 transition-colors duration-300">Build your career with us</p>
                <p className="text-gray-700 font-semibold text-base group-hover:text-orange-500 transition-colors duration-300">hello@parnetsgroup.com</p>
              </div>
            </FadeInUp>

            {/* Business Enquiries */}
            <FadeInUp>
              <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col items-center justify-center group hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full animate-glow-pulse">
                  <img src="/business image.png" alt="Business Enquiries" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Business Enquiries</h3>
                <p className="text-gray-600 text-lg mb-4 group-hover:text-gray-900 transition-colors duration-300">Let's make your business success</p>
                <p className="text-gray-700 font-semibold text-base group-hover:text-orange-500 transition-colors duration-300">+91 9704002068</p>
              </div>
            </FadeInUp>

            {/* Address */}
            <FadeInUp>
              <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col items-center justify-center group hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  {/* Icon with continuous bounce animation */}
                  <img 
                    src="/address.png" 
                    alt="Address" 
                    className="w-full h-full object-contain relative z-10 animate-bounce" 
                  />
                  
                  {/* Oval ripple under icon */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-24 h-6 border-2 border-orange-500 rounded-full animate-oval-ripple group-hover:border-orange-500 transition-colors duration-300"></div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">Address</h3>
                <p className="text-gray-600 text-lg mb-2 group-hover:text-gray-900 transition-colors duration-300">Reach Out to Us</p>
                <p className="text-gray-700 font-semibold text-base group-hover:text-orange-500 transition-colors duration-300">104/1 Singapura Main Road near Reliance Smart, Bengaluru, Karnataka, 560097</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Success Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fadeIn text-center">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
