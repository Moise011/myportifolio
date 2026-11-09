import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './context/ThemeContext';
import axios from 'axios';

function App() {
  const { theme } = useTheme();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/portfolio')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback data with updated Instagram
        setData({
          name: "Moise NIYOBUHUNGIRO",
          title: "Software Developer",
          bio: "Passionate software developer from Rwanda with expertise in web development, photography, and frags design. Creating innovative solutions that make a difference.",
          location: "Bugesera District, Eastern Province, Ntarama Sector",
          email: "moiseniyobuhungiro011@gmail.com",
          phone: "0793203618",
          instagram: "__m_o_n_i__011", // Updated Instagram
          education: [
            { school: "Nyirarukobwa Primary School", level: "Primary Education", period: "Started studies here" },
            { school: "Nyirarukobwa", level: "Ordinary Level (O'Level)", period: "Continued studies" },
            { school: "Runda TSS", level: "Secondary School", period: "Completed secondary education" }
          ],
          skills: {
            development: ["React", "JavaScript", "Node.js", "Express", "Tailwind CSS", "HTML/CSS", "Python", "Git"],
            design: ["UI/UX Design", "Figma", "Adobe Photoshop", "Canva"],
            photography: ["Portrait Photography", "Event Photography", "Photo Editing"]
          },
          projects: [
            { title: "Portfolio Website", description: "Personal portfolio built with React and Tailwind CSS", technologies: ["React", "Tailwind CSS", "Node.js", "Express"], status: "Completed" },
            { title: "Photography Gallery", description: "Gallery showcasing photography work", technologies: ["React", "CSS", "Firebase"], status: "In Development" },
            { title: "Frag Design Studio", description: "Design studio for fragrance packaging and branding", technologies: ["Adobe Suite", "Figma"], status: "Planning" }
          ]
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-[#0a0a1a]' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#6C63FF] mx-auto"></div>
          <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a1a]' : 'bg-gray-50'}`}>
      <ThemeToggle />
      <Header data={data} />
      <Hero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Education data={data} />
      <Projects data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;