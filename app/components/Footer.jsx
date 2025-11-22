import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/gdg_tsec' },
    { name: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/company/gdg-tsec/' },
    { name: 'Email', icon: <FaEnvelope size={20} />, href: 'mailto:dsctsec@gmail.com' },
    { name: 'WhatsApp', icon: <FaWhatsapp size={20} />, href: 'https://chat.whatsapp.com/BsLBWWGIAcz379C9BSRuIM' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Domains', href: '#domains' },
        { name: 'Timeline', href: '#timeline' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Sponsors', href: '#sponsors' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Code of Conduct', href: '#' },
        { name: 'Contact Us', href: 'mailto:dsctsec@gmail.com' },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-red-900/30 overflow-hidden font-['Chinese_Rocks']">
    
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center gap-2 mb-3 md:mb-4 justify-center sm:justify-start">
              <div className="text-2xl flex justify-center items-center gap-1">
              <span>HackSync</span>
              <span className="text-red-600">II</span>
            </div>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-b from-red-700 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-2 md:mb-3" >
              HackSync 2.0
            </h3>
            <p className="text-gray-400 text-sm md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 max-w-md mx-auto sm:mx-0">
              A 24-hour offline hackathon bringing together the finest minds to build, innovate, and conquer the digital frontier.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 md:gap-3 justify-center sm:justify-start flex-wrap mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 md:w-11 md:h-11 rounded-full border-2 border-red-900/60 bg-gradient-to-br from-red-950/40 to-black flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] overflow-hidden"
                  aria-label={social.name}
                >
                  {/* Glossy shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <span className="relative z-10 group-hover:text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300 transform group-hover:scale-110 text-lg md:text-lg">
                    {social.icon}
                  </span>
                  
                  {/* Animated ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-red-600 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-150 transition-all duration-500"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links - Side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-2">
            {footerLinks.map((section, idx) => (
              <div key={section.title} className="text-center sm:text-left">
                <h4 className="font-['Chinese_Rocks'] text-lg md:text-lg lg:text-xl bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-3 md:mb-4 uppercase tracking-wider drop-shadow-[0_2px_8px_rgba(220,38,38,0.3)]">
                  {section.title}
                </h4>
                <ul className="space-y-2.5 md:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group relative text-gray-400 text-sm md:text-sm lg:text-base hover:text-red-500 transition-all duration-300 inline-flex items-center gap-1.5 md:gap-2"
                      >
                        {/* Animated underline */}
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(220,38,38,0.6)]"></span>
                        </span>
                        
                        {/* Arrow that appears on hover */}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-500 text-sm md:text-sm">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider with Western style */}
        <div className="relative mb-6 md:mb-8 my-6 md:my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.3)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-black via-zinc-950 to-black px-4 md:px-6 text-red-600 text-2xl md:text-3xl drop-shadow-[0_0_15px_rgba(220,38,38,0.6)] animate-pulse">
              ★
            </span>
          </div>
        </div>

        {/* GDG TSEC Logo Section */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="group relative inline-flex items-center gap-2 md:gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-red-900/40 bg-gradient-to-br from-red-950/20 via-black to-red-950/20 hover:border-red-600 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300">
            {/* Glossy overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <span className="relative z-10 font-['Chinese_Rocks'] text-sm md:text-base lg:text-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent uppercase tracking-wider drop-shadow-[0_2px_8px_rgba(220,38,38,0.3)]">
              Powered by
            </span>
            <Image
              src="/Logo.png"
              alt="GDG Logo"
              width={48}
              height={24}
              className="relative z-10 drop-shadow-[0_0_8px_rgba(220,38,38,0.3)] w-6 h-6 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="relative z-10 font-['Chinese_Rocks'] text-lg md:text-lg lg:text-xl bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent uppercase tracking-wider drop-shadow-[0_2px_8px_rgba(220,38,38,0.3)]">
              GDG TSEC
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 md:gap-2 lg:gap-4">
            <p className="font-['Chinese_Rocks'] bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent uppercase tracking-wider text-base md:text-base drop-shadow-[0_2px_8px_rgba(220,38,38,0.3)]">
              GDG TSEC
            </p>
            <span className="hidden sm:inline text-red-900">•</span>
            <p className="text-xs md:text-xs font-normal lg:text-sm">© {currentYear} HackSync 2.0. All rights reserved.</p>
          </div>
          <div className="flex gap-4 md:gap-4 lg:gap-6 text-xs md:text-xs lg:text-sm flex-wrap justify-center">
            <a 
              href="#" 
              className="group relative hover:text-red-500 transition-colors duration-300"
            >
              <span className="relative">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a 
              href="#" 
              className="group relative hover:text-red-500 transition-colors duration-300"
            >
              <span className="relative">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          </div>
        </div>

       
      </div>

      {/* Bottom glossy decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-900/0 via-red-600/70 to-red-900/0 shadow-[0_-2px_10px_rgba(220,38,38,0.4)]"></div>
    </footer>
  );
};

export default Footer;