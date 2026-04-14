import { Mail } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import FadeInUp from '../FadeInUp';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: '/client 1.png',
      social: { linkedin: '#', twitter: '#', email: '#', github: '#' },
      highlight: false
    },
    {
      name: 'Priya Singh',
      role: 'Lead Developer',
      image: '/client 2.png',
      social: { linkedin: '#', twitter: '#', email: '#', github: '#' },
      highlight: true
    },
    {
      name: 'Amit Patel',
      role: 'CTO',
      image: '/client 3.png',
      social: { linkedin: '#', twitter: '#', email: '#', github: '#' },
      highlight: false
    },
    {
      name: 'Neha Sharma',
      role: 'Design Lead',
      image: '/client 4.png',
      social: { linkedin: '#', twitter: '#', email: '#', github: '#' },
      highlight: false
    },
    {
      name: 'Vikram Desai',
      role: 'Senior Developer',
      image: '/client 5.png',
      social: { linkedin: '#', twitter: '#', email: '#', github: '#' },
      highlight: false
    },
    {
      name: 'Anjali Verma',
      role: 'QA Lead',
      image: '/client 6.png',
      social: { linkedin: '#', twitter: '#', email: '#', github: '#' },
      highlight: false
    },
    {
      name: 'Rohan Gupta',
      role: 'DevOps Engineer',
      image: '/client 7.png',
      social: { linkedin: '#', twitter: '#', email: '#', github: '#' },
      highlight: false
    },
    {
      name: 'Sneha Patel',
      role: 'UI/UX Designer',
      image: '/client 8.png',
      social: { linkedin: '#', twitter: '#', email: '#', github: '#' },
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              Our Team
            </span>
          </FadeInUp>
          <FadeInUp>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-brand-primary">Talented</span> Team
            </h2>
          </FadeInUp>
          <FadeInUp>
            <p className="text-gray-600 text-lg">
              Passionate professionals dedicated to delivering excellence in every project
            </p>
          </FadeInUp>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FadeInUp key={index}>
              <div className="group flex flex-col items-center">
                {/* Circular Image - Overlapping Card */}
                <div className="mb-0 z-10 -mb-3">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info Card */}
                <div className={`w-full rounded-2xl px-6 py-3 pt-6 flex flex-col items-center text-center transition-all duration-500 ${
                  member.highlight 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white group-hover:bg-white group-hover:text-blue-600 group-hover:border group-hover:border-gray-200' 
                    : 'bg-white border border-gray-200 text-gray-900 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-blue-600'
                }`}>
                  
                  {/* Name */}
                  <h3 className={`text-base font-bold mb-0.5 ${
                    member.highlight ? 'text-white group-hover:text-blue-600' : 'text-gray-900 group-hover:text-white'
                  }`}>
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className={`text-xs font-semibold mb-3 ${
                    member.highlight ? 'text-blue-100 group-hover:text-brand-primary' : 'text-brand-primary group-hover:text-blue-100'
                  }`}>
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-2.5">
                    <a 
                      href={member.social.linkedin}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        member.highlight
                          ? 'bg-white/20 text-white hover:bg-white hover:text-blue-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-brand-primary hover:text-white'
                      }`}
                      title="LinkedIn"
                    >
                      <FaLinkedin className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        member.highlight
                          ? 'bg-white/20 text-white hover:bg-white hover:text-blue-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-brand-primary hover:text-white'
                      }`}
                      title="Twitter"
                    >
                      <FaTwitter className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={member.social.github}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        member.highlight
                          ? 'bg-white/20 text-white hover:bg-white hover:text-blue-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-brand-primary hover:text-white'
                      }`}
                      title="GitHub"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        member.highlight
                          ? 'bg-white/20 text-white hover:bg-white hover:text-blue-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-brand-primary hover:text-white'
                      }`}
                      title="Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TeamSection;
