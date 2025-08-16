import React from 'react';
import { Code, Server, Database, Monitor, Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const services = [
        {
            title: "Frontend Development",
            description: "Modern, responsive web applications using React, Next.js, and TypeScript with pixel-perfect designs.",
            icon: <Monitor className="w-6 h-6" />
        },
        {
            title: "Backend Development",
            description: "Scalable server-side solutions with Node.js, Express, and secure API development.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "Full-Stack Solutions",
            description: "End-to-end web applications with seamless frontend-backend integration and deployment.",
            icon: <Code className="w-6 h-6" />
        },
        {
            title: "Database Design",
            description: "Efficient database architecture using MongoDB, PostgreSQL, and optimized data structures.",
            icon: <Database className="w-6 h-6" />
        }
    ];

    const stats = [
        { number: "50+", label: "Projects Completed" },
        { number: "2+", label: "Years Experience" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" }
    ];

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

    return (
        <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                {/* <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Passionate developer focused on creating exceptional digital solutions for businesses
                    </p>
                </div> */}

                <motion.div className="text-center mb-20" variants={itemVariants}>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                        About Me
                    </h2>
                    <motion.div
                        className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                    <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Passionate developer focused on creating exceptional digital solutions for businesses.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    {/* About Text */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                                Professional Background
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                I'm a passionate Full-Stack Developer with expertise in modern web technologies.
                                I specialize in building scalable applications that solve real business problems
                                and deliver exceptional user experiences.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                My approach combines technical excellence with business understanding, ensuring
                                every project delivers measurable value and meets client objectives.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Core Competencies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Git'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <GraduationCap className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                            Education & Experience
                        </h3>
                        <div className="space-y-6">
                            <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Software Engineer Intern
                                    </h4>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                        Jan 2025 - Apr 2025
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                                        Upfroz Infotech, Surat
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Developed full-stack web applications and contributed to client projects
                                    </p>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        B.E in Computer Engineering
                                    </h4>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                        2021 - 2025
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                                        Gujarat Technological University
                                    </p>
                                    <div className="flex items-center">
                                        <Award className="w-4 h-4 text-yellow-500 mr-2" />
                                        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                                            CGPA: 8.45/10
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        What I Can Do For You
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <div className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Let's discuss how I can help bring your ideas to life with clean, efficient code and modern design.
                    </p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Let's Talk
                        <Award className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;