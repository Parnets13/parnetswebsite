import { ArrowUpRight, ArrowLeft, Check, Code2, Users, Calendar, Target, Briefcase, Zap, CheckCircle, X } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import FadeInUp from '../components/FadeInUp';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const projects = {
    'ecommerce': {
      title: 'E-commerce Platform',
      type: 'E-Commerce',
      category: 'E-Commerce Solution',
      industry: 'Retail & E-Commerce',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=1200&h=600&fit=crop',
      description: 'A fully responsive e-commerce solution with payment integration and inventory management.',
      shortIntro: 'A comprehensive online retail platform that transformed the client\'s digital presence and sales channels.',
      clientNeed: 'The client needed a modern, scalable e-commerce platform to expand their online presence and reach customers globally with secure payment processing.',
      problemSolved: 'Eliminated manual inventory management, reduced payment processing time by 80%, and increased online sales conversion by 300%.',
      objective: 'Build a world-class e-commerce platform that provides seamless shopping experience, secure transactions, and real-time inventory management.',
      businessRequirement: 'Support 50K+ concurrent users, process 10K+ transactions daily, maintain 99.9% uptime, and integrate with multiple payment gateways.',
      fullDescription: 'We developed a comprehensive e-commerce platform that revolutionized the client\'s online sales. The platform features a modern, intuitive interface with seamless payment processing, real-time inventory management, and advanced analytics. This solution increased their online revenue by 300% within the first year.',
      challenge: 'The client needed a scalable e-commerce solution that could handle high traffic during peak seasons while maintaining fast performance and security.',
      solution: 'We built a robust platform using React for the frontend and Node.js for the backend, integrated with Stripe for secure payments, and deployed on AWS for scalability.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis', 'Docker'],
      features: [
        'Responsive design for all devices',
        'Secure payment gateway integration',
        'Real-time inventory management',
        'Advanced product filtering and search',
        'Customer review system',
        'Order tracking and notifications',
        'Admin dashboard with analytics',
        'Multi-currency support'
      ],
      results: [
        { metric: '300%', description: 'Increase in online sales' },
        { metric: '50K+', description: 'Monthly active users' },
        { metric: '99.9%', description: 'Platform uptime' },
        { metric: '4.8/5', description: 'Customer rating' }
      ],
      timeline: '6 months',
      team: '8 developers',
      budget: 'Custom',
      testimonial: 'ParNets delivered an exceptional e-commerce platform that exceeded our expectations. Their team was professional, responsive, and delivered on time.',
      testimonialAuthor: 'CEO, E-Commerce Company'
    },
    'fitness': {
      title: 'Fitness Tracking App',
      type: 'Mobile App',
      category: 'Mobile Application',
      industry: 'Health & Wellness',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
      description: 'Cross-platform mobile app for fitness tracking with real-time analytics and social features.',
      shortIntro: 'A comprehensive fitness tracking solution that combines personal health monitoring with community engagement.',
      clientNeed: 'The client wanted to create a mobile app that helps users track their fitness journey while building a community of health-conscious individuals.',
      problemSolved: 'Provided users with real-time health insights, eliminated data silos between devices, and created an engaging social fitness community.',
      objective: 'Develop a cross-platform mobile app that provides accurate fitness tracking, personalized recommendations, and social engagement features.',
      businessRequirement: 'Support iOS and Android platforms, integrate with 5+ wearable devices, process real-time data from 100K+ users, and maintain 4.5+ app store rating.',
      fullDescription: 'A cutting-edge fitness tracking application that combines health monitoring with social engagement. Users can track workouts, monitor progress, and connect with a community of fitness enthusiasts. The app integrates with popular wearables and provides personalized recommendations.',
      challenge: 'Creating a cross-platform app that works seamlessly on iOS and Android while integrating with multiple wearable devices and providing real-time data synchronization.',
      solution: 'We used React Native for cross-platform development, Firebase for real-time data sync, and integrated with Google Fit and Apple HealthKit APIs for wearable compatibility.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Google Fit API', 'Apple HealthKit', 'TypeScript'],
      features: [
        'Real-time workout tracking',
        'Heart rate and calorie monitoring',
        'Social sharing and challenges',
        'Personalized workout recommendations',
        'Progress analytics and reports',
        'Integration with wearables',
        'Offline mode support',
        'Push notifications'
      ],
      results: [
        { metric: '100K+', description: 'App downloads' },
        { metric: '4.7/5', description: 'App store rating' },
        { metric: '45%', description: 'Daily active users' },
        { metric: '2M+', description: 'Workouts tracked' }
      ],
      timeline: '5 months',
      team: '6 developers',
      budget: 'Custom',
      testimonial: 'The fitness app has transformed how our users track their health. The integration with wearables is seamless and the user experience is outstanding.',
      testimonialAuthor: 'Founder, Fitness Startup'
    },
    'saas': {
      title: 'SaaS Dashboard',
      type: 'SaaS',
      category: 'Web Application',
      industry: 'Enterprise & Analytics',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      description: 'Enterprise-grade dashboard with advanced analytics, reporting, and data visualization.',
      shortIntro: 'An enterprise analytics platform that empowers businesses with real-time insights and data-driven decision making.',
      clientNeed: 'The client needed a powerful analytics dashboard to help enterprise clients visualize complex data and generate actionable insights.',
      problemSolved: 'Reduced data analysis time by 40%, provided real-time insights, and enabled faster business decision-making for 500+ enterprise clients.',
      objective: 'Create a scalable SaaS dashboard that processes millions of data points and provides real-time analytics for enterprise clients.',
      businessRequirement: 'Handle 10M+ data points daily, support 500+ concurrent users, maintain 99.99% uptime, and provide custom report generation.',
      fullDescription: 'An enterprise-level SaaS dashboard designed for data-driven decision making. Features comprehensive analytics, customizable reports, and real-time data visualization for business intelligence. The platform serves 500+ enterprise clients with millions of data points processed daily.',
      challenge: 'Building a scalable dashboard that can handle massive amounts of data while providing real-time insights and maintaining high performance for enterprise clients.',
      solution: 'We developed using Next.js for optimal performance, PostgreSQL for robust data management, and implemented advanced caching strategies with Redis for real-time data visualization.',
      technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'Chart.js', 'AWS', 'Redis', 'GraphQL'],
      features: [
        'Real-time data visualization',
        'Customizable dashboards',
        'Advanced filtering and search',
        'Automated report generation',
        'User role management',
        'API integration capabilities',
        'Data export functionality',
        'Performance optimization'
      ],
      results: [
        { metric: '500+', description: 'Enterprise clients' },
        { metric: '99.99%', description: 'Uptime guarantee' },
        { metric: '10M+', description: 'Data points processed daily' },
        { metric: '40%', description: 'Faster insights' }
      ],
      timeline: '8 months',
      team: '10 developers',
      budget: 'Custom',
      testimonial: 'The SaaS dashboard has become integral to our business operations. The real-time analytics and reporting capabilities have improved our decision-making significantly.',
      testimonialAuthor: 'CTO, Enterprise Solutions'
    }
  };

  const projectKey = id || 'ecommerce';
  const project = projects[projectKey];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {project.category}
              </span>
            </FadeInUp>
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {project.title}
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                {project.description}
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto py-6">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors font-semibold group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </button>
          </div>
        </div>
      </section>

      {/* Project Info Cards */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <FadeInUp>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-gray-600 text-sm font-semibold mb-2">Project Type</p>
                <p className="text-2xl font-bold text-gray-900">{project.type}</p>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-gray-600 text-sm font-semibold mb-2">Industry</p>
                <p className="text-2xl font-bold text-gray-900">{project.industry}</p>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-gray-600 text-sm font-semibold mb-2">Status</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-2xl font-bold text-gray-900">{project.status}</p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-gray-600 text-sm font-semibold mb-2">Duration</p>
                <p className="text-2xl font-bold text-gray-900">{project.timeline}</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Project Overview & Objectives */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto mb-16">
            <FadeInUp>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-orange-500" />
                  Project <span className="text-orange-500">Overview</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-2">Short Introduction</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{project.shortIntro}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-2">Client / Business Need</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{project.clientNeed}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-2">Problem Solved</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{project.problemSolved}</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-blue-500" />
                  Objective & <span className="text-blue-500">Goals</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-2">Main Purpose</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{project.objective}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-2">Business Requirements & Expected Outcome</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{project.businessRequirement}</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeInUp>
              <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-orange-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Challenge</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Solution</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Key <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Comprehensive features designed to deliver exceptional value
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.features.map((feature, index) => (
              <FadeInUp key={index}>
                <div className="flex gap-4 items-start p-6 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-orange-50 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-lg">{feature}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Technologies <span className="text-orange-500">Used</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Modern tech stack for optimal performance and scalability
              </p>
            </div>
          </FadeInUp>

          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {project.technologies.map((tech, index) => (
              <FadeInUp key={index}>
                <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-default">
                  {tech}
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Results & <span className="text-orange-500">Impact</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Measurable outcomes that demonstrate project success
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {project.results.map((result, index) => (
              <FadeInUp key={index}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-4">
                    {result.metric}
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    {result.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 shadow-2xl border-l-4 border-orange-500">
              <p className="text-2xl text-gray-900 font-semibold mb-8 leading-relaxed">
                "{project.testimonial}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-orange-500"></div>
                <div>
                  <p className="font-bold text-gray-900">{project.testimonialAuthor}</p>
                  <p className="text-gray-600 text-sm">Project Stakeholder</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your <span className="text-white">Project?</span>
              </h2>
              <p className="text-white text-lg mb-8">
                Let's discuss how we can bring your vision to life with similar excellence and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                  <span>Get Started</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 font-semibold"
                >
                  <span>Back to Projects</span>
                  <X className="w-5 h-5" />
                </button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
