import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'wouter';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);
  
  // Apply theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
    
    // Simulate loading for better entrance animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Loading screen animation variants
  const loadingVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  // Page content variants
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-blue-600 dark:bg-gray-900 z-50"
            variants={loadingVariants}
            initial="initial"
            exit="exit"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  duration: 0.5, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                } 
              }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Sumit Pandya
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <Header toggleTheme={toggleTheme} currentTheme={theme} />
            
            <Switch>
              <Route path="/">
                <main>
                  <HeroSection />
                  <AboutSection />
                  <SkillsSection />
                  <ProjectsSection />
                  <ContactSection />
                </main>
                <Footer />
              </Route>
              <Route>
                <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">404 - Page Not Found</h1>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">The page you're looking for doesn't exist or has been moved.</p>
                  <a 
                    href="/"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    Go Home
                  </a>
                </div>
              </Route>
            </Switch>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Particle background effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className={`absolute rounded-full ${theme === 'dark' ? 'bg-blue-600/10' : 'bg-blue-400/10'}`}
            style={{
              width: `${Math.random() * 120 + 10}px`,
              height: `${Math.random() * 120 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 15}s linear infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;