import { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Users, TrendingUp, Heart, Zap, Lightbulb, Globe, Users2 } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';
import ApplyModal from '../components/ApplyModal';
import HiringProcessFlow from '../components/HiringProcessFlow';

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [showHiringProcess, setShowHiringProcess] = useState(false);

  const openings = [
    {
      title: 'React Developer',
      experience: '0-5 Years',
      location: 'Bengaluru',
      type: 'Full-time',
      skills: ['React', 'JavaScript', 'CSS']
    },
    {
      title: 'React Native Developer',
      experience: '0-5 Years',
      location: 'Bengaluru',
      type: 'Full-time',
      skills: ['React Native', 'Mobile Dev', 'JavaScript']
    },
    {
      title: 'Testing Engineer',
      experience: '0-5 Years',
      location: 'Bengaluru',
      type: 'Full-time',
      skills: ['QA', 'Testing', 'Automation']
    },
    {
      title: 'Senior Full Stack Developer',
      experience: '5+ Years',
      location: 'Bengaluru / Remote',
      type: 'Full-time',
      skills: ['Full Stack', 'Leadership', 'Architecture']
    },
    {
      title: 'UI/UX Designer',
      experience: '2-5 Years',
      location: 'Bengaluru',
      type: 'Full-time',
      skills: ['Figma', 'UI/UX', 'Design']
    },
    {
      title: 'DevOps Engineer',
      experience: '3-6 Years',
      location: 'Bengaluru / Remote',
      type: 'Full-time',
      skills: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Flutter Developer',
      experience: '1-4 Years',
      location: 'Bengaluru',
      type: 'Full-time',
      skills: ['Flutter', 'Dart', 'Mobile']
    },
    {
      title: 'Business Analyst',
      experience: '2-5 Years',
      location: 'Bengaluru',
      type: 'Full-time',
      skills: ['Analysis', 'Documentation', 'Communication']
    },
    {
      title: 'Project Manager',
      experience: '4-7 Years',
      location: 'Bengaluru',
      type: 'Full-time',
      skills: ['Leadership', 'Agile', 'Planning']
    }
  ];

  const internships = [
    {
      title: 'Frontend Development Internship',
      duration: '3 Months',
      mode: 'Remote',
      perks: ['Certificate', 'Stipend']
    },
    {
      title: 'Backend Development Internship',
      duration: '3 Months',
      mode: 'On-site',
      perks: ['Certificate', 'Stipend']
    },
    {
      title: 'UI/UX Design Internship',
      duration: '2 Months',
      mode: 'Remote',
      perks: ['Certificate', 'Portfolio']
    },
    {
      title: 'Mobile App Development Internship',
      duration: '3 Months',
      mode: 'On-site',
      perks: ['Certificate', 'Stipend']
    },
    {
      title: 'Data Science Internship',
      duration: '3 Months',
      mode: 'Remote',
      perks: ['Certificate', 'Stipend']
    },
    {
      title: 'DevOps Internship',
      duration: '2 Months',
      mode: 'On-site',
      perks: ['Certificate', 'Mentorship']
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career progression paths.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Great Team',
      description: 'Work with talented professionals in a collaborative environment.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options available.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Latest Tech',
      description: 'Work with cutting-edge technologies and modern development tools.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-40 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop" 
            alt="Careers Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-gray-900/85 to-brand-secondary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Join Our Team
              </span>
            </FadeInUp>
            <FadeInUp>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4 leading-tight">
                Build Your Career With Us
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto">
                Join a team of passionate innovators and help shape the future of technology.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <FadeInUp>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                Great Benefits & Perks
              </h2>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <FadeInUp key={index}>
                <div className="bg-white rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-4 md:mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Together We Grow Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-6">
                  <span className="text-blue-600">Together</span>
                  <span className="text-gray-900"> we </span>
                  <span className="text-orange-500">Grow</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
                  Join us in our journey of growth! Here, you won't just find jobs; you'll discover fulfilling careers. Collaborate with us and push the limits of your professional development. Let's achieve greatness together! 
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl text-sm md:text-base">
                  <span>Join Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm md:text-base mb-4">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              Why Join Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Knowledge is the key to making the right future decisions.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInUp>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovative Work Environment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Work in a dynamic environment where creativity and innovation are encouraged. We foster a culture of continuous learning and experimentation.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Global Career Opportunities
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to international projects and opportunities to work with clients and teams across the globe. Expand your horizons and grow globally.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users2 className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Experienced Professional Team
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn from industry experts and experienced professionals. Collaborate with talented individuals who are passionate about their craft.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-xs md:text-sm mb-4">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-brand-primary">Current </span>
                <span className="text-gray-900">Openings</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Explore exciting career opportunities and join our growing team of talented professionals.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {openings.map((job, index) => (
              <FadeInUp key={index}>
                <div className="group relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden border border-gray-100 hover:border-brand-primary/30" style={{boxShadow: '0 15px 40px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.12)'}}>
                  {/* Decorative Gradient Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>
                  
                  {/* Job Category Badge */}
                  <div className="relative z-10 mb-3">
                    <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 relative z-10 group-hover:text-brand-primary transition-colors">
                    {job.title}
                  </h3>

                  {/* Job Details */}
                  <div className="space-y-2 md:space-y-2.5 mb-4 md:mb-5 pb-4 md:pb-5 border-b border-gray-100 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-3.5 h-3.5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Experience</p>
                        <p className="text-sm text-gray-700 font-semibold">{job.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Location</p>
                        <p className="text-sm text-gray-700 font-semibold">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-3.5 h-3.5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Type</p>
                        <p className="text-sm text-gray-700 font-semibold">{job.type}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="mb-4 md:mb-5 relative z-10">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Required Skills</p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="inline-block bg-gradient-to-r from-brand-primary/10 to-orange-100 text-brand-primary text-xs font-bold px-2.5 py-1 rounded-lg border border-brand-primary/20 hover:border-brand-primary/50 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button 
                    onClick={() => {
                      setSelectedJob(job.title);
                      setIsModalOpen(true);
                    }}
                    className="mt-auto w-full bg-gradient-to-r from-orange-400 to-orange-300 hover:from-orange-500 hover:to-orange-400 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn relative z-10 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Cards Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-xs md:text-sm mb-4">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Grow With Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                <span className="text-brand-primary">Internship </span>
                <span className="text-gray-900">Opportunities</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                Launch your career with hands-on experience, mentorship, and real-world projects. Perfect for students and fresh graduates.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {internships.map((internship, index) => (
              <FadeInUp key={index}>
                <div className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden border border-gray-100 hover:border-brand-primary/30">
                  {/* Gradient Background Accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-primary/5 to-orange-100/5 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-500"></div>
                  
                  {/* Badge */}
                  <div className="relative z-10 mb-4 md:mb-6">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-primary/10 to-orange-100 text-brand-primary text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-brand-primary/20">
                      <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                      Internship
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 relative z-10 group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                    {internship.title}
                  </h3>

                  {/* Details Section */}
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-100 relative z-10">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-primary/10 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:from-brand-primary/20 transition-all">
                        <Clock className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Duration</p>
                        <p className="text-sm md:text-base text-gray-800 font-semibold">{internship.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-primary/10 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:from-brand-primary/20 transition-all">
                        <MapPin className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Mode</p>
                        <p className="text-sm md:text-base text-gray-800 font-semibold">{internship.mode}</p>
                      </div>
                    </div>
                  </div>

                  {/* Perks Section */}
                  <div className="mb-6 md:mb-8 relative z-10">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">What You'll Get</p>
                    <div className="flex flex-wrap gap-2">
                      {internship.perks.map((perk, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-50 to-amber-50 text-brand-primary text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-orange-200 hover:border-brand-primary/50 hover:shadow-md transition-all duration-300"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
                          {perk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button 
                    onClick={() => {
                      setSelectedJob(internship.title);
                      setIsModalOpen(true);
                    }}
                    className="mt-auto w-full bg-gradient-to-r from-brand-primary to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white px-6 md:px-8 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 group/btn relative z-10 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm md:text-base mb-4">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Our Process
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Recommended Hiring Process
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-8">
                A transparent and comprehensive hiring journey designed for software professionals
              </p>
              <button
                onClick={() => setShowHiringProcess(true)}
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <span>Start Application Process</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Apply Modal */}
      <ApplyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob}
      />

      {/* Hiring Process Flow Modal */}
      <HiringProcessFlow
        isOpen={showHiringProcess}
        onClose={() => setShowHiringProcess(false)}
        jobTitle={selectedJob}
      />
    </div>
  );
};

export default Careers;
