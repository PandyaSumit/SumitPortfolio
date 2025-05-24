import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiMonitor } from 'react-icons/fi';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, NextJS, and modern CSS frameworks.",
      icon: <FiMonitor className="text-3xl" />
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and RESTful API design.",
      icon: <FiServer className="text-3xl" />
    },
    {
      title: "Full-Stack Solutions",
      description: "Delivering end-to-end web applications with seamless integration between frontend and backend systems.",
      icon: <FiCode className="text-3xl" />
    },
    {
      title: "Database Design",
      description: "Implementing efficient database structures using SQL and NoSQL solutions for optimal data management.",
      icon: <FiDatabase className="text-3xl" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Get to know more about me and what I do
            </p>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-10 mb-16"
            variants={itemVariants}
          >
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Web Developer
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm Sumit Pandya, a passionate Full-Stack Developer based in Surat, India, 
                specializing in building exceptional digital experiences. I focus on creating 
                clean, efficient code and intuitive UX/UI designs.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With expertise in modern web technologies like React, Node.js, and cloud platforms, 
                I develop applications that are not only functional but also scalable and maintainable.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My goal is to always build products that provide pixel-perfect, performant experiences 
                that solve real business problems.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Education & Experience
              </h3>
              <ul className="space-y-6">
                <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 dark:before:bg-blue-400 before:rounded-full before:content-['']">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Software engineer intern
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">20 Jan 2025 - 20 Apr 2025</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Upfroz Infotech, Surat
                  </p>
                </li>
                {/* <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 dark:before:bg-blue-400 before:rounded-full before:content-['']">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Frontend Developer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">2018 - 2020</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    WebCraft Studios, Delhi
                  </p>
                </li> */}
                <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 dark:before:bg-blue-400 before:rounded-full before:content-['']">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    B.E in Computer Engineering
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">2021 - 2025 ( CGPA - 8.45/10 )</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Gujarat Technological University
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Services */}
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            variants={itemVariants}
          >
            Services I Offer
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover-up"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;