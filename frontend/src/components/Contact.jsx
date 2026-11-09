import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaUser, FaCheck, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';

const Contact = ({ data }) => {
  const { theme } = useTheme();
  const { email, phone, instagram, location } = data || {};
  const [form, setForm] = useState({ name: '', email: '', message: '', phone: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('sending');

    try {
      const response = await axios.post('/api/contact', form);
      if (response.data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', phone: '' });
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (error) {
      console.error('Contact error:', error);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const instagramHandle = instagram || '__m_o_n_i__011';
  const phoneNumber = phone || '0793203618';
  const emailAddress = email || 'moiseniyobuhungiro011@gmail.com';
  const locationText = location || 'Bugesera District, Eastern Province';

  const contacts = [
    { 
      icon: <FaEnvelope />, 
      label: 'Email', 
      value: emailAddress, 
      link: `mailto:${emailAddress}` 
    },
    { 
      icon: <FaPhone />, 
      label: 'Phone', 
      value: phoneNumber, 
      link: `tel:${phoneNumber}` 
    },
    { 
      icon: <FaInstagram />, 
      label: 'Instagram', 
      value: instagramHandle, 
      link: `https://instagram.com/${instagramHandle}` 
    },
    { 
      icon: <FaWhatsapp />, 
      label: 'WhatsApp', 
      value: phoneNumber, 
      link: `https://wa.me/250${phoneNumber.replace(/\D/g, '')}` 
    },
    { 
      icon: <FaMapMarkerAlt />, 
      label: 'Location', 
      value: locationText,
      link: null
    }
  ];

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#16213e]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Get In <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a question or want to work together?
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contacts.map((item, index) => {
              const hasLink = item.link && typeof item.link === 'string' && item.link.startsWith;
              const isLinkValid = hasLink && (item.link.startsWith('http') || item.link.startsWith('mailto'));
              
              const Wrapper = (isLinkValid) ? 'a' : 'div';
              const wrapperProps = isLinkValid ? {
                href: item.link,
                target: item.link.startsWith('http') ? '_blank' : '_self',
                rel: item.link.startsWith('http') ? 'noopener noreferrer' : undefined
              } : {};

              return (
                <Wrapper
                  key={index}
                  {...wrapperProps}
                  className={`flex items-center gap-5 p-5 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    theme === 'dark' 
                      ? 'bg-[#1a1a2e] hover:bg-[#1a1a2e]/80 border border-gray-800' 
                      : 'bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                  } ${isLinkValid ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-[#0a0a1a]' : 'bg-gray-200'
                  }`}>
                    <span className="text-[#6C63FF] text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>{item.label}</p>
                    <p className={`text-base font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{item.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className={`p-8 rounded-xl transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-[#1a1a2e] border border-gray-800' 
              : 'bg-gray-50 shadow-lg border border-gray-200'
          }`}>
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <FaUser className="inline mr-2" /> Your Name *
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  value={form.name} 
                  onChange={e => setForm({...form, name: e.target.value})} 
                  required 
                  className={`w-full p-4 rounded-lg text-base transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-[#6C63FF]' 
                      : 'bg-white text-gray-900 border border-gray-300 focus:border-[#6C63FF]'
                  } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/30`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <FaEnvelope className="inline mr-2" /> Your Email *
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})} 
                  required 
                  className={`w-full p-4 rounded-lg text-base transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-[#6C63FF]' 
                      : 'bg-white text-gray-900 border border-gray-300 focus:border-[#6C63FF]'
                  } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/30`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <FaPhone className="inline mr-2" /> Phone (Optional)
                </label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  value={form.phone} 
                  onChange={e => setForm({...form, phone: e.target.value})} 
                  className={`w-full p-4 rounded-lg text-base transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-[#6C63FF]' 
                      : 'bg-white text-gray-900 border border-gray-300 focus:border-[#6C63FF]'
                  } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/30`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea 
                  placeholder="Enter your message" 
                  rows="5" 
                  value={form.message} 
                  onChange={e => setForm({...form, message: e.target.value})} 
                  required 
                  className={`w-full p-4 rounded-lg text-base transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-[#6C63FF]' 
                      : 'bg-white text-gray-900 border border-gray-300 focus:border-[#6C63FF]'
                  } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/30`}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading} 
                className={`w-full py-4 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white rounded-lg font-medium text-base transition-all duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#5a52d9] hover:to-[#00c4e6] hover:scale-[1.02]'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <div className="p-4 bg-green-500/20 text-green-500 text-center rounded-lg flex items-center justify-center gap-2 text-base">
                  <FaCheck /> Message sent successfully!
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-500/20 text-red-500 text-center rounded-lg flex items-center justify-center gap-2 text-base">
                  <FaTimes /> Failed to send message. Please use inbox to convey me?.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;