import React, { useState } from 'react';
import { Code, Brain, Trophy, Wrench, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('web');

    const skillCategories = {
        web: {
            title: "Web Development",
            icon: <Code className="w-6 h-6" />,
            description: "Full-stack web applications with modern frameworks",
            skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Python", "JavaScript", "HTML5", "CSS3"]
        },
        ai: {
            title: "AI & Automation",
            icon: <Brain className="w-6 h-6" />,
            description: "AI integration and intelligent automation solutions",
            skills: ["LangChain", "Retrieval-Augmented Generation (RAG)", "Vector Databases (Pinecone)", "LLM API Integration", "TensorFlow.js", "Automation Scripts"]
        },
        programming: {
            title: "Competitive Programming",
            icon: <Trophy className="w-6 h-6" />,
            description: "Problem-solving and algorithmic thinking",
            skills: ["Data Structures", "Algorithms", "Problem-Solving", "Time Complexity Analysis", "Space Optimization", "Competitive Coding"]
        },
        tools: {
            title: "Developer Tools",
            icon: <Wrench className="w-6 h-6" />,
            description: "Development environment and productivity tools",
            skills: ["Git", "VS Code", "IntelliJ", "Terminal/CLI", "Package Managers", "Version Control"]
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

    return (
        <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                {/* <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Technologies and skills I use to build exceptional digital solutions
                    </p>
                </div> */}

                <motion.div className="text-center mb-20" variants={itemVariants}>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                        Technical Expertise
                    </h2>
                    <motion.div
                        className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                    <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Technologies and skills I use to build exceptional digital solutions
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {Object.entries(skillCategories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeCategory === key
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                                {skillCategories[activeCategory].icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {skillCategories[activeCategory].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {skillCategories[activeCategory].description}
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillCategories[activeCategory].skills.map((skill) => (
                            <div
                                key={skill}
                                className="group flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-700"
                            >
                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Modern Stack
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Using latest technologies and best practices for optimal performance
                        </p>
                    </div>

                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Brain className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            AI Integration
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Implementing intelligent features and automation solutions
                        </p>
                    </div>

                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Problem Solver
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Strong algorithmic thinking and efficient solution development
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Build Something Great?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Let's discuss how these skills can help solve your business challenges and create exceptional digital experiences.
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
                        Let's Collaborate
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;