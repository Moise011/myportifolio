import React, { useState } from 'react';
import { FaBars, FaTimes, FaInstagram, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Header = ({ data }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'];
  
  const instagramHandle = data?.instagram || '__m_o_n_i__011';
  const phoneNumber = data?.phone || '0793203618';
  const emailAddress = data?.email || 'moiseniyobuhungiro011@gmail.com';
  const githubUrl = data?.github || '#';

  const socialLinks = [
    { icon: <FaInstagram />, href: `https://instagram.com/${instagramHandle}` },
    { icon: <FaWhatsapp />, href: `https://wa.me/250${phoneNumber.replace(/\D/g, '')}` },
    { icon: <FaEnvelope />, href: `mailto:${emailAddress}` },
    { icon: <FaGithub />, href: githubUrl }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-[#1a1a2e]/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className={`text-xl sm:text-2xl font-bold transition-colors duration-300 whitespace-nowrap ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Moise</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>NIYOBUHUNGIRO</span>
          </a>

          {/* Desktop Navigation - USING FLEX WITH EXPLICIT SPACING */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm lg:text-base font-medium transition-all duration-300 hover:text-[#6C63FF] hover:scale-105 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                style={{ marginRight: index < navItems.length - 1 ? '48px' : '0' }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons - USING FLEX WITH EXPLICIT SPACING */}
          <div className="hidden md:flex items-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:text-[#6C63FF] hover:scale-110 text-xl ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
                style={{ marginRight: index < socialLinks.length - 1 ? '32px' : '0' }}
                aria-label={`Visit ${social.href}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-3 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden py-8 border-t transition-colors duration-300 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}>
            {navItems.map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`block py-4 text-base font-medium transition-colors duration-300 hover:text-[#6C63FF] hover:pl-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`} 
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-10 pt-8 border-t border-gray-700 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-colors duration-300 hover:text-[#6C63FF] hover:scale-110 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  aria-label={`Visit ${social.href}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;