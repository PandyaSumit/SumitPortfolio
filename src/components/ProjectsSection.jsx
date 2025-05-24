import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            title: "LMS platform",
            description: "Built a full-stack e-learning app with secure authentication and role-based access. Instructors can upload content, track revenue, and manage enrollments. Integrated Stripe for payments and enabled students to explore and purchase courses by niche.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
            category: "web",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            codeLink: "https://github.com/PandyaSumit/LMS-MERN"
        },
        {
            title: "BookStore",
            description: "Developed a full-stack book management web application that allows users to seamlessly upload, create, filter, and search for books. Designed with a user-friendly interface and robust backend functionality to support dynamic content interaction.",
            image: "https://raw.githubusercontent.com/PandyaSumit/BookStore/refs/heads/main/Client/src/assets/page2.png",
            category: "web",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            codeLink: "https://github.com/PandyaSumit/BookStore"
        },
        {
            title: "Draggable Todo",
            description: "A weather application that provides current conditions and forecasts based on location using OpenWeatherMap API and geolocation.",
            image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
            category: "web",
            tags: ["React", "CSS"],
            demoLink: "https://draggable-todo-sigma.vercel.app/",
            codeLink: "https://github.com/PandyaSumit/Draggable-todo"
        },
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const categories = [
        { name: 'All', value: 'all' },
        { name: 'Web Apps', value: 'web' },
        { name: 'Mobile Apps', value: 'mobile' },
        { name: 'API', value: 'api' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    console.log('filteredProjects', filteredProjects)
    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-12"
                        variants={itemVariants}
                    >
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.value
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                    }`}
                                onClick={() => setActiveCategory(category.value)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </motion.div>
                    <motion.div
                        key={activeCategory}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {
                            filteredProjects.length === 0 ? (
                                <motion.div
                                    className="col-span-full text-center text-gray-600 dark:text-gray-300 text-lg"
                                    variants={itemVariants}
                                >
                                    No projects found in this category.
                                </motion.div>) : (filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                                        variants={itemVariants}
                                        whileHover={{ y: -10 }}
                                    >
                                        <div className="relative overflow-hidden h-48">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                                                        +{project.tags.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="flex justify-between">
                                                {project.demoLink ? <a
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                                                >
                                                    <FiExternalLink className="mr-1" /> Demo
                                                </a> : ""}
                                                <a
                                                    href={project.codeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                                                >
                                                    <FiGithub className="mr-1" /> Code
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                )))}
                    </motion.div>
                    <motion.div
                        className="mt-16 text-center"
                        variants={itemVariants}
                    >
                        <a
                            href="https://github.com/PandyaSumit?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                        >
                            View More Projects
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;