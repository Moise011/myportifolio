import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaCode, FaCamera, FaPaintBrush, FaRocket } from 'react-icons/fa';

const About = ({ data }) => {
  const { theme } = useTheme();
  const { bio, name } = data || {};

  const services = [
    { icon: <FaCode />, title: "Software Development", desc: "Building responsive and scalable web applications" },
    { icon: <FaCamera />, title: "Photography", desc: "Professional photography for events and portraits" },
    { icon: <FaPaintBrush />, title: "Frags Design", desc: "Creative fragrance design and packaging solutions" },
    { icon: <FaRocket />, title: "Innovation", desc: "Creating innovative solutions that make a difference" }
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#16213e]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Know more about me and what I do
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className={`text-2xl font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Who I Am
            </h3>
            <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {bio || 'I\'m a passionate software developer from Rwanda with expertise in web development, photography, and fragrance design. My diverse skills allow me to create innovative solutions across multiple creative and technical domains.'}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I believe in the power of technology to solve real-world problems and I'm committed to delivering high-quality work that exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
                theme === 'dark' 
                  ? 'bg-[#1a1a2e] hover:bg-[#1a1a2e]/80 border border-gray-800' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 shadow-sm'
              }`}>
                <div className="text-[#6C63FF] text-4xl mb-4">{service.icon}</div>
                <h4 className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{service.title}</h4>
                <p className={`text-sm sm:text-base mt-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;