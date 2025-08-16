import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  ExternalLink, Code, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            title: "LMS Platform",
            description: "Built a full-stack e-learning app with secure authentication and role-based access. Instructors can upload content, track revenue, and manage enrollments. Integrated Stripe for payments and enabled students to explore and purchase courses by niche.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
            category: "web",
            tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            codeLink: "https://github.com/PandyaSumit/LMS-MERN",
            featured: true,
            gradient: "from-purple-600 to-blue-600"
        },
        {
            title: "BookStore",
            description: "Developed a full-stack book management web application that allows users to seamlessly upload, create, filter, and search for books. Designed with a user-friendly interface and robust backend functionality to support dynamic content interaction.",
            image: "https://raw.githubusercontent.com/PandyaSumit/BookStore/refs/heads/main/Client/src/assets/page2.png",
            category: "web",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            codeLink: "https://github.com/PandyaSumit/BookStore",
            gradient: "from-emerald-600 to-teal-600"
        },
        {
            title: "Draggable Todo",
            description: "An interactive task management application with drag-and-drop functionality. Features smooth animations, local storage persistence, and a clean, intuitive interface for organizing daily tasks and improving productivity.",
            image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
            category: "web",
            tags: ["React", "CSS", "JavaScript"],
            demoLink: "https://draggable-todo-sigma.vercel.app/",
            codeLink: "https://github.com/PandyaSumit/Draggable-todo",
            gradient: "from-orange-600 to-red-600"
        },
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const categories = [
        { name: 'All Projects', value: 'all', },
        { name: 'Web Apps', value: 'web', },
        { name: 'Mobile Apps', value: 'mobile', },
        { name: 'APIs', value: 'api', }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: {
            y: -50,
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="projects" className="relative py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {/* Header Section */}
                    <motion.div className="text-center mb-20" variants={itemVariants}>
                        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                            Featured Projects
                        </h2>
                        <motion.div
                            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        ></motion.div>
                        <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                            Explore my latest work in full-stack development, featuring modern technologies and innovative solutions.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-16"
                        variants={itemVariants}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category.value}
                                className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 overflow-hidden ${activeCategory === category.value
                                    ? 'text-white shadow-xl shadow-blue-500/25'
                                    : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50'
                                    }`}
                                onClick={() => setActiveCategory(category.value)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeCategory === category.value && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl"
                                        layoutId="activeCategory"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="text-lg">{category.icon}</span>
                                    {category.name}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            {filteredProjects.length === 0 ? (
                                <motion.div
                                    className="col-span-full text-center py-20"
                                    variants={itemVariants}
                                >
                                    <div className="text-6xl mb-4">🔍</div>
                                    <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                                        No projects found
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Projects in this category are coming soon!
                                    </p>
                                </motion.div>
                            ) : (
                                filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={`${project.title}-${index}`}
                                        className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                                            }`}
                                        variants={cardVariants}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        onHoverStart={() => setHoveredProject(index)}
                                        onHoverEnd={() => setHoveredProject(null)}
                                    >
                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <motion.div
                                                className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                                                initial={{ scale: 0, rotate: -10 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ delay: 0.5, type: "spring" }}
                                            >
                                                <Star className="w-3 h-3" />
                                                Featured
                                            </motion.div>
                                        )}

                                        {/* Image Container */}
                                        <div className="relative overflow-hidden h-56 group">
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                                            />
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                animate={{
                                                    scale: hoveredProject === index ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                            />

                                            {/* Overlay with quick actions */}
                                            <motion.div
                                                className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                            >
                                                {project.demoLink && (
                                                    <motion.a
                                                        href={project.demoLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <FiExternalLink className="w-4 h-4" />
                                                        Demo
                                                    </motion.a>
                                                )}
                                                <motion.a
                                                    href={project.codeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FaGithub className="w-4 h-4" />
                                                    Code
                                                </motion.a>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8">
                                            {/* Tags */}
                                            <motion.div
                                                className="flex flex-wrap gap-2 mb-4"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                                    <motion.span
                                                        key={tagIndex}
                                                        className="text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 px-3 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-800/50"
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ type: "spring", stiffness: 400 }}
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                ))}
                                                {project.tags.length > 4 && (
                                                    <motion.span
                                                        className="text-xs font-semibold bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-600/50"
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        +{project.tags.length - 4}
                                                    </motion.span>
                                                )}
                                            </motion.div>

                                            {/* Title */}
                                            <motion.h3
                                                className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {project.title}
                                            </motion.h3>

                                            {/* Description */}
                                            <motion.p
                                                className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {project.description}
                                            </motion.p>

                                            {/* Action Links */}
                                            <motion.div
                                                className="flex items-center justify-between"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                <div className="flex gap-4">
                                                    {project.demoLink && (
                                                        <motion.a
                                                            href={project.demoLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors group/link"
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform duration-300" />
                                                            Live Demo
                                                        </motion.a>
                                                    )}
                                                    <motion.a
                                                        href={project.codeLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold transition-colors group/link"
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <Code className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                                                        Source
                                                    </motion.a>
                                                </div>

                                                <motion.div
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <FiArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Hover gradient border effect */}
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                                        />
                                    </motion.div>
                                ))
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Call to Action */}
                    <motion.div
                        className="mt-20 text-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="inline-block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="https://github.com/PandyaSumit?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl transition-all duration-300 font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40"
                            >
                                <span>Explore All Projects</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <FiArrowRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                                </motion.div>

                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.6 }}
                                />
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="flex justify-center gap-8 mt-8 text-sm text-gray-500 dark:text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                {projects.length} Active Projects
                            </div>
                            <div className="flex items-center gap-2">
                                <FiGithub className="w-4 h-4" />
                                Open Source
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;