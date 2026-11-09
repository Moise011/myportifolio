import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGithub, FaCode, FaCamera, FaPalette } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
  const { theme } = useTheme();
  const { name, title, bio, location, email, phone, instagram, github } = data || {};

  const instagramHandle = instagram || '__m_o_n_i__011';
  const phoneNumber = phone || '0793203618';
  const emailAddress = email || 'moiseniyobuhungiro011@gmail.com';

  const socialLinks = [
    { icon: <FaWhatsapp />, label: "WhatsApp", href: `https://wa.me/250${phoneNumber.replace(/\D/g, '')}`, color: "bg-green-500 hover:bg-green-600" },
    { icon: <FaInstagram />, label: "Instagram", href: `https://instagram.com/${instagramHandle}`, color: "bg-gradient-to-r from-pink-500 to-purple-500" },
    { icon: <FaEnvelope />, label: "Email", href: `mailto:${emailAddress}`, color: "bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] hover:from-[#5a52d9] hover:to-[#00c4e6]" },
    { icon: <FaGithub />, label: "GitHub", href: github || "#", color: "bg-gray-700 hover:bg-gray-800" }
  ];

  return (
    <section id="home" className={`min-h-screen flex items-center pt-16 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e]' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            <div className={`inline-block px-5 py-2 p-4 rounded-full text-sm font-medium ${
              theme === 'dark' 
                ? 'bg-[#6C63FF]/20 text-[#6C63FF]' 
                : 'bg-[#6C63FF]/10 text-[#6C63FF]'
            }`}>
              Welcome to my portfolio,Enjoy your journey better is bellow.....
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block mb-2">Hello, I'm</span>
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent block">
                {name || 'Moise NIYOBUHUNGIRO'}
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <div className={`px-5 py-2.5 rounded-full text-sm font-medium ${
                theme === 'dark' 
                  ? 'bg-[#6C63FF]/20 text-[#6C63FF] border border-[#6C63FF]/30' 
                  : 'bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/20'
              }`}>
                <FaCode className="inline mr-2" /> Software Developer
              </div>
              <div className={`px-5 py-2.5 rounded-full text-sm font-medium ${
                theme === 'dark' 
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                  : 'bg-purple-500/10 text-purple-600 border border-purple-500/20'
              }`}>
                <FaCamera className="inline mr-2" /> Photographer
              </div>
              <div className={`px-5 py-2.5 rounded-full text-sm font-medium ${
                theme === 'dark' 
                  ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' 
                  : 'bg-pink-500/10 text-pink-600 border border-pink-500/20'
              }`}>
                <FaPalette className="inline mr-2" /> Frag Design
              </div>
            </div>

            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {bio || 'Passionate software developer from Rwanda with expertise in web development, photography, and frags design. Creating innovative solutions that make a difference.'}
            </p>

            <div className={`flex items-center justify-center lg:justify-start gap-3 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <FaMapMarkerAlt className="text-[#6C63FF] text-lg" />
              <span>{location || 'Bugesera District, Eastern Province, Ntarama Sector'}</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 text-white rounded-lg transition-all duration-300 ${social.color} shadow-lg text-sm sm:text-base`}
                >
                  {social.icon}
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className={`absolute -inset-6 rounded-full animate-spin-slow ${
                theme === 'dark' 
                  ? 'border-4 border-t-[#6C63FF] border-r-[#00D4FF] border-b-[#6C63FF] border-l-[#00D4FF]' 
                  : 'border-4 border-t-[#6C63FF] border-r-[#00D4FF] border-b-[#6C63FF] border-l-[#00D4FF]'
              }`}></div>
              
              <div className={`relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-[#6C63FF] flex items-center justify-center text-7xl sm:text-8xl md:text-9xl font-bold shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#16213e] to-[#1a1a2e] text-[#6C63FF]' 
                  : 'bg-gradient-to-br from-gray-100 to-white text-[#6C63FF]'
              }`}>
                <div className="text-center">
                  <div>{name ? name.split(' ').map(n => n[0]).join('') : 'MN'}</div>
                  <div className={`text-sm font-normal mt-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>Developer</div>
                </div>
              </div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] p-3 sm:p-4 rounded-full shadow-lg"
              >
                <FaCode className="text-white text-base sm:text-lg" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-3 -left-3 bg-purple-500 p-3 sm:p-4 rounded-full shadow-lg"
              >
                <FaCamera className="text-white text-base sm:text-lg" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -left-8 -translate-y-1/2 bg-pink-500 p-3 sm:p-4 rounded-full shadow-lg"
              >
                <FaPalette className="text-white text-base sm:text-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;