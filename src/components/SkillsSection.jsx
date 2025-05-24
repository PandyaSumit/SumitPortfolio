import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaVuejs, 
  FaAws, FaDocker, FaFigma, FaGitAlt, FaNpm
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiExpress, SiNextdotjs, SiRedux, SiGraphql, SiFirebase,
  SiWebpack, SiJest, SiStorybook
} from 'react-icons/si';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Skills data with categories
  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl text-blue-500" />, category: 'frontend' },
    { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-600" />, category: 'frontend' },
    { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" />, category: 'frontend' },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" />, category: 'frontend' },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-600" />, category: 'frontend' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-400" />, category: 'frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-500" />, category: 'frontend' },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" />, category: 'backend' },
    { name: 'Express', icon: <SiExpress className="text-4xl text-gray-600 dark:text-gray-400" />, category: 'backend' },
    { name: 'GraphQL', icon: <SiGraphql className="text-4xl text-pink-600" />, category: 'backend' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-500" />, category: 'database' },
    { name: 'Firebase', icon: <SiFirebase className="text-4xl text-yellow-500" />, category: 'database' },
    { name: 'AWS', icon: <FaAws className="text-4xl text-orange-400" />, category: 'tools' },
    // { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-500" />, category: 'tools' },
    { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-500" />, category: 'tools' },
    { name: 'npm', icon: <FaNpm className="text-4xl text-red-500" />, category: 'tools' },
    { name: 'Figma', icon: <FaFigma className="text-4xl text-purple-500" />, category: 'tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Database', value: 'database' },
    { name: 'Tools', value: 'tools' },
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
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item flex flex-col items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <div className="mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-gray-800 dark:text-gray-200 font-medium text-center">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Information */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I believe in continuous growth and regularly expand my skill set with emerging technologies.
              Currently exploring Web3 development, AI integration, and advanced animation techniques.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;