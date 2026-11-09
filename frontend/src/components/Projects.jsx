import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaClock, FaCalendar } from 'react-icons/fa';

const Projects = ({ data }) => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('All');

  const projectsData = data?.projects || [
    { title: "Portfolio Website", description: "Personal portfolio built with React and Tailwind CSS", technologies: ["React", "Tailwind CSS", "Node.js", "Express"], status: "Completed" },
    { title: "Photography Gallery", description: "Gallery showcasing photography work", technologies: ["React", "CSS", "Firebase"], status: "In Development" },
    { title: "Frag Design Studio", description: "Design studio for fragrance packaging and branding", technologies: ["Adobe Suite", "Figma"], status: "Planning" }
  ];

  const filters = ['All', 'Completed', 'In Development', 'Planning'];
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.status === filter);

  const statusIcons = {
    'Completed': <FaCheckCircle className="text-green-500" />,
    'In Development': <FaClock className="text-yellow-500" />,
    'Planning': <FaCalendar className="text-blue-500" />
  };

  return (
    <section id="projects" className={`py-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#1a1a2e]' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Some of the projects I've worked on
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)} 
              className={`px-6 py-2.5 text-sm rounded-full transition-all duration-300 font-medium ${
                filter === f 
                  ? 'bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white shadow-lg shadow-[#6C63FF]/30' 
                  : theme === 'dark' 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-3 ${
              theme === 'dark' 
                ? 'bg-[#16213e] hover:bg-[#16213e]/80 border border-gray-800' 
                : 'bg-white shadow-lg hover:shadow-xl border border-gray-200'
            }`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className={`font-semibold text-lg sm:text-xl ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium">
                  {statusIcons[project.status] || <FaCheckCircle />}
                  <span className={
                    project.status === 'Completed' ? 'text-green-500' : 
                    project.status === 'In Development' ? 'text-yellow-500' : 'text-blue-500'
                  }>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <p className={`text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={`text-xs px-3 py-1.5 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-300' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6 pt-6 border-t border-gray-700">
                <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-[#6C63FF]' : 'text-gray-600 hover:text-[#6C63FF]'
                }`}>
                  <FaGithub /> Code
                </a>
                <a href={project.demo || '#'} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-[#6C63FF]' : 'text-gray-600 hover:text-[#6C63FF]'
                }`}>
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;