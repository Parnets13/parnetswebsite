import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does your company offer?',
          answer: 'We offer comprehensive software development services including custom software development, mobile app development (iOS & Android), web development, cloud solutions, database management, and ongoing maintenance and support.'
        },
        {
          question: 'How long does it take to develop a custom software solution?',
          answer: 'The timeline varies based on project complexity and requirements. A simple application might take 2-3 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed timelines during the initial consultation.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, e-commerce, education, logistics, manufacturing, and more. Our team has experience adapting solutions to meet specific industry requirements and regulations.'
        }
      ]
    },
    {
      category: 'Development Process',
      questions: [
        {
          question: 'What is your development methodology?',
          answer: 'We follow Agile development methodology with regular sprints, continuous integration, and frequent client communication. This ensures flexibility, transparency, and the ability to adapt to changing requirements throughout the project.'
        },
        {
          question: 'How do you ensure code quality?',
          answer: 'We maintain high code quality through code reviews, automated testing, continuous integration/deployment (CI/CD), adherence to coding standards, and regular security audits. Our QA team thoroughly tests all deliverables before release.'
        },
        {
          question: 'Can I see progress during development?',
          answer: 'Absolutely! We provide regular updates, demo sessions, and access to staging environments. You\'ll have full visibility into the development process and can provide feedback at every stage.'
        }
      ]
    },
    {
      category: 'Pricing & Support',
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project scope, complexity, timeline, and resource requirements. We provide detailed quotes after understanding your needs.'
        },
        {
          question: 'Do you provide post-launch support?',
          answer: 'Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. We have various support packages to suit different needs and budgets.'
        },
        {
          question: 'What if I need changes after the project is completed?',
          answer: 'We\'re happy to accommodate changes and enhancements. Minor adjustments during the warranty period are typically included. For larger changes or new features, we can provide a separate quote or include them in an ongoing support agreement.'
        }
      ]
    },
    {
      category: 'Technology & Security',
      questions: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with modern technologies including React, Node.js, Python, Java, .NET, React Native, Flutter, AWS, Azure, MongoDB, PostgreSQL, and more. We choose the best technology stack based on your specific requirements.'
        },
        {
          question: 'How do you handle data security?',
          answer: 'Security is our top priority. We implement industry-standard security practices including encryption, secure authentication, regular security audits, compliance with regulations (GDPR, HIPAA, etc.), and secure coding practices throughout development.'
        },
        {
          question: 'Do you sign NDAs?',
          answer: 'Yes, we\'re happy to sign Non-Disclosure Agreements (NDAs) to protect your intellectual property and confidential information. We take client confidentiality very seriously.'
        }
      ]
    }
  ];

  const toggleFaq = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop" 
            alt="FAQ Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-gray-900/85 to-brand-secondary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Help Center
              </span>
            </FadeInUp>
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Frequently Asked Questions
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Find answers to common questions about our services, processes, and how we can help your business.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <FadeInUp>
                  <div className="flex items-center gap-3 mb-6">
                    <HelpCircle className="w-6 h-6 text-brand-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                </FadeInUp>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;
                    return (
                      <FadeInUp key={questionIndex}>
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                          <button
                            onClick={() => toggleFaq(categoryIndex, questionIndex)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <span className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-6 h-6 text-brand-primary flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? 'max-h-96' : 'max-h-0'
                            }`}
                          >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </FadeInUp>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="bg-gradient-to-br from-brand-primary to-orange-600 rounded-3xl p-12 text-center text-white">
                <MessageCircle className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Our team is here to help. Get in touch and we'll respond as soon as possible.
                </p>
                <button className="bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                  Contact Support
                </button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
