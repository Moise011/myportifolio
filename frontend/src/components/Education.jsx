import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const Education = ({ data }) => {
  const { theme } = useTheme();
  const educationData = data?.education || [
    { school: "Nyirarukobwa Primary School", level: "Primary Education", period: "Started studies here" },
    { school: "Nyirarukobwa", level: "Ordinary Level (O'Level)", period: "Continued studies" },
    { school: "Runda TSS", level: "Upper Level", period: "Completed secondary education" }
  ];

  const icons = [<FaSchool className="text-3xl" />, <FaGraduationCap className="text-3xl" />, <FaUniversity className="text-3xl" />];

  return (
    <section id="education" className={`py-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#16213e]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Education</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My educational journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className={`p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-3 ${
              theme === 'dark' 
                ? 'bg-[#1a1a2e] hover:bg-[#1a1a2e]/80 border border-gray-800' 
                : 'bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
            }`}>
              <div className="text-[#6C63FF] mb-6 flex justify-center">
                {icons[index % icons.length]}
              </div>
              <h3 className={`text-xl font-semibold text-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {edu.school}
              </h3>
              <p className="text-[#6C63FF] text-base text-center mt-2 font-medium">{edu.level}</p>
              <p className={`text-sm text-center mt-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;