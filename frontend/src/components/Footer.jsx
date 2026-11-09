import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = ({ data }) => {
  const { theme } = useTheme();
  const { instagram, phone, email, github } = data || {};

  const instagramHandle = instagram || '__m_o_n_i__011';
  const phoneNumber = phone || '0793203618';
  const emailAddress = email || 'moiseniyobuhungiro011@gmail.com';

  const socialLinks = [
    { icon: <FaInstagram />, href: `https://instagram.com/${instagramHandle}`, label: "Instagram" },
    { icon: <FaWhatsapp />, href: `https://wa.me/250${phoneNumber.replace(/\D/g, '')}`, label: "WhatsApp" },
    { icon: <FaEnvelope />, href: `mailto:${emailAddress}`, label: "Email" },
    { icon: <FaGithub />, href: github || "#", label: "GitHub" }
  ];

  return (
    <footer className={`py-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a1a] border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links with more spacing */}
          <div className="flex space-x-10">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-all duration-300 hover:scale-125 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-[#6C63FF]' 
                    : 'text-gray-600 hover:text-[#6C63FF]'
                }`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

      
          <div className={`w-full max-w-md h-px ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
          }`}></div>

          {/* Copyright with more spacing */}
          <div className="flex flex-col items-center space-y-3">
            <p className={`text-base text-center transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {new Date().getFullYear()} <span className="font-semibold">Moise NIYOBUHUNGIRO</span>. All rights reserved.
            </p>

            <p className={`text-base text-center flex items-center gap-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Made By MONIBYIBAKWE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;