import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  
  // Handle smooth scrolling
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Navigation links
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" }
  ];

  // Social links
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/PandyaSumit", label: "GitHub" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/sumitpandya1/", label: "LinkedIn" },
    { icon: <FiTwitter />, url: "https://x.com/sumitpandya01", label: "Twitter" },
    { icon: <FiMail />, url: "mailto:pandyasumit01@gmail.com", label: "Email" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
            variants={containerVariants}
          >
            {/* Logo & About */}
            <motion.div variants={itemVariants}>
              <div className="text-2xl font-bold text-blue-400 flex items-center mb-4">
                <span>Sumit Pandya</span>
              </div>
              <p className="text-gray-400 mb-6">
                Full-stack web developer specializing in creating elegant, responsive, and user-friendly applications with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ y: -3 }}
                    aria-label={link.label}
                  >
                    <span className="text-xl">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => smoothScrollTo(link.path)}
                      className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <span className="block">Surat, India</span>
                </li>
                <li>
                  <a 
                    href="mailto:pandyasumit01@gmail.com" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    pandyasumit01@gmail.com
                  </a>
                </li>
                <li>
                    +91 93163 XXXXX
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div 
            className="pt-8 border-t border-gray-800 text-center text-gray-500"
            variants={itemVariants}
          >
            <p>© {year} Sumit Pandya. All Rights Reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;