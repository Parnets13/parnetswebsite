import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Outside click detection (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown && window.innerWidth >= 1024) {
      document.addEventListener('mousedown', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [activeDropdown]);

  const navItems = [
    { name: 'Home', path: '/', badge: null },
    { name: 'Pages', path: '#', badge: null },
    { name: 'Services', path: '/services', badge: null },
    { name: 'Projects', path: '/projects', badge: null },
    { name: 'Industries', path: '/industries', badge: null },
    { name: 'Contact', path: '/contact', badge: null }
  ];                                                                                                                        

  const megaMenuPages = {
    mainPages: [
      { name: 'About', path: '/about-us' },
      { name: 'Careers', path: '/careers', badge: 'NEW' },
    ]
  };

  const servicesMenu = [
    { 
      name: 'IT Consultation', 
      path: '/service-details/it-consultation',
      icon: (
        <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      name: 'Data Security', 
      path: '/service-details/data-security',
      icon: (
        <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    { 
      name: 'Digital Marketing', 
      path: '/service-details/digital-marketing',
      icon: (
        <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: 'Cloud Services', 
      path: '/service-details/cloud-services',
      icon: (
        <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const blogMenu = [
    { name: 'Blog Grid', path: '/blog-grid' },
    { name: 'Blog Right Sidebar', path: '/blog-standard' },
    { name: 'Blog Details', path: '/blog-details' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white py-3 md:py-3 shadow-md' 
          : ' to-transparent py-3 md:py-3 lg:py-3 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-12 md:h-14">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="ParNets" 
                className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain transition-none"
                style={{ maxWidth: '180px' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Capsule when not scrolled */}
          <div className={`hidden lg:flex transition-all duration-500 ${
            !isScrolled ? 'bg-white rounded-full px-8 py-1.5' : ''
          }`}>
            <nav className="flex items-center justify-center space-x-6" ref={dropdownRef}>
              {navItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="relative py-2"
                >
                  <button
                    onClick={() => {
                      if (item.name === 'Pages') {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      } else {
                        window.location.href = item.path;
                      }
                    }}
                    className={`flex items-center gap-1 font-semibold transition-colors duration-300 ${
                      item.name === 'Home' 
                        ? 'text-brand-primary' 
                        : (isScrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-gray-700 hover:text-brand-primary')
                    }`}
                  >
                    {item.name}
                    {item.name === 'Pages' && (
                      <ChevronDown 
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>

                  {/* Services Dropdown */}
                  {item.name === 'Services' && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[90vw] sm:w-[450px] max-w-[450px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-50 animate-slideDown"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-6">
                        <ul className="space-y-1">
                          {servicesMenu.map((service, idx) => (
                            <li key={idx}>
                              <Link 
                                to={service.path} 
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 transition-all group/service"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center flex-shrink-0 group-hover/service:scale-110 transition-transform">
                                  {service.icon}
                                </div>
                                <span className="text-gray-700 font-medium group-hover/service:text-brand-primary transition-colors">
                                  {service.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Blog Dropdown */}
                  {item.name === 'Blog' && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[90vw] sm:w-[300px] max-w-[300px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-50 animate-slideDown"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-6">
                        <ul className="space-y-2">
                          {blogMenu.map((page, idx) => (
                            <li key={idx}>
                              <Link 
                                to={page.path} 
                                className="block p-3 rounded-xl hover:bg-orange-50 text-gray-700 font-medium hover:text-brand-primary transition-all"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {page.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Mega Menu Dropdown */}
                  {item.name === 'Pages' && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[90vw] sm:w-[350px] max-w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-[100] animate-slideDown"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-6">
                        <ul className="space-y-2">
                          {megaMenuPages.mainPages.map((page, idx) => (
                            <li key={idx}>
                              <Link 
                                to={page.path} 
                                className="text-gray-800 hover:text-brand-primary font-medium flex items-center justify-between group/link transition-all py-3 px-4 rounded-lg hover:bg-orange-50 hover:shadow-sm"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="group-hover/link:translate-x-1 transition-transform text-[15px] flex items-center gap-3">
                                  <svg className="w-2 h-2 fill-current text-orange-500 opacity-0 group-hover/link:opacity-100 transition-opacity" viewBox="0 0 8 8">
                                    <circle cx="4" cy="4" r="4"/>
                                  </svg>
                                  {page.name}
                                </span>
                                {page.badge && (
                                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-orange-500 text-white">
                                    {page.badge}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-6 z-20">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center transition-all hover:scale-125">
                <FaInstagram className="w-6 h-6 text-white" />
              </a>
              
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-125">
                <FaFacebook className="w-6 h-6 text-white" />
              </a>
              
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-125">
                <FaLinkedin className="w-6 h-6 text-white" />
              </a>
              
              {/* WhatsApp */}
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center transition-all hover:scale-125">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </a>
            </div>


          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden z-20 p-2 transition-colors ${isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white transition-all duration-300 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} z-40`}>
        <div className="pt-20 px-4 sm:px-6 pb-6 h-full overflow-y-auto">
          <nav className="space-y-1">
            {navItems.map((item, idx) => (
              <div key={idx}>
                {item.name === 'Pages' ? (
                  <>
                    <button
                      onClick={() => {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }}
                      className="w-full text-left py-3 px-4 text-base sm:text-lg font-semibold text-gray-900 hover:text-brand-primary hover:bg-orange-50 rounded-lg transition-all flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {/* Mobile Pages Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="bg-gray-50 rounded-lg mt-2 overflow-hidden ml-4 border-l-4 border-brand-primary z-50">
                        {megaMenuPages.mainPages.map((page, pidx) => (
                          <button
                            key={pidx}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveDropdown(null);
                              navigate(page.path);
                            }}
                            className="w-full text-left py-3 px-4 text-gray-700 hover:text-brand-primary hover:bg-white transition-all font-medium flex items-center justify-between"
                          >
                            <span>{page.name}</span>
                            {page.badge && (
                              <span className="text-xs font-bold px-2 py-1 rounded-full bg-orange-500 text-white ml-2">
                                {page.badge}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                    className="w-full text-left py-3 px-4 text-base sm:text-lg font-semibold text-gray-900 hover:text-brand-primary hover:bg-orange-50 rounded-lg transition-all"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="mt-8 space-y-3 border-t border-gray-200 pt-6">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/contact');
              }}
              className="block w-full py-3 px-4 bg-brand-primary text-white font-bold rounded-lg text-center hover:bg-orange-600 transition-all"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
