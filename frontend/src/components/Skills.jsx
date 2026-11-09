import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaCode, FaPalette, FaCamera, FaReact, FaNodeJs, FaDatabase, FaPaintBrush, FaFigma, FaHtml5, FaCss3 } from 'react-icons/fa';

const Skills = ({ data }) => {
  const { theme } = useTheme();
  const skills = data?.skills || {
    development: ["React", "JavaScript", "Node.js", "Express", "Tailwind CSS", "HTML/CSS", "Python", "Git"],
    design: ["UI/UX Design", "Figma", "Adobe Photoshop", "Canva"],
    photography: ["Portrait Photography", "Event Photography", "Photo Editing"]
  };

  const skillCategories = [
    { name: "Development", icon: <FaCode className="text-4xl" />, skills: skills.development },
    { name: "Design", icon: <FaPalette className="text-4xl" />, skills: skills.design },
    { name: "Photography", icon: <FaCamera className="text-4xl" />, skills: skills.photography }
  ];

  const getIcon = (skill) => {
    const icons = {
      "React": <FaReact />,
      "JavaScript": "JS",
      "Node.js": <FaNodeJs />,
      "Express": "EX",
      "Tailwind CSS": "TW",
      "HTML/CSS": <><FaHtml5 /><FaCss3 /></>,
      "Python": <FaDatabase />,
      "Git": "GIT",
      "UI/UX Design": <FaPaintBrush />,
      "Figma": <FaFigma />,
      "Adobe Photoshop": "PS",
      "Canva": "CV"
    };
    return icons[skill] || "•";
  };

  return (
    <section id="skills" className={`py-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#1a1a2e]' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies and tools I work with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
              theme === 'dark' 
                ? 'bg-[#16213e] hover:bg-[#16213e]/80 border border-gray-800' 
                : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
            }`}>
              <div className="text-[#6C63FF] mb-6 flex justify-center">
                {category.icon}
              </div>
              <h3 className={`text-xl font-semibold text-center mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    <span className="text-[#6C63FF]">{getIcon(skill)}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;