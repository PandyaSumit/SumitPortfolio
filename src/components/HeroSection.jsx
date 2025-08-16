import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Mail } from 'lucide-react';

const HeroSection = () => {
    const smoothScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gray-950">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 -z-10 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)]"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
                {/* Professional Badge */}
                <div className="inline-flex items-center px-4 py-2 mb-8 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm font-medium">Open to new projects</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Sumit Pandya
                </h1>

                {/* Professional Subtitle */}
                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-light">
                    Full-Stack Developer
                </h2>

                {/* Value Proposition */}
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
                    I help businesses build fast, scalable web applications that drive results.
                </p>
                
                <p className="text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-12">
                    Specializing in React, Node.js, and modern web technologies with 
                    <strong className="text-gray-700 dark:text-gray-300"> proven track record</strong> of delivering projects on time and on budget.
                </p>

                {/* Clear Call-to-Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button
                        onClick={() => smoothScrollTo('contact')}
                        className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        Start a Project
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <button
                        onClick={() => smoothScrollTo('projects')}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-200"
                    >
                        View Portfolio
                    </button>
                </div>

                {/* Professional Social Links */}
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://github.com/PandyaSumit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 hover:scale-105"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sumitpandya1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 hover:scale-105"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="http://x.com/sumitpandya01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 hover:scale-105"
                        aria-label="Twitter Profile"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Simple scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <button
                    onClick={() => smoothScrollTo('about')}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 animate-bounce"
                    aria-label="Scroll to learn more"
                >
                    <ArrowRight className="w-5 h-5 transform rotate-90" />
                </button>
            </div>

            {/* Minimal custom styles */}
            <style jsx>{`
                .animate-fade-in-up {
                    opacity: 0;
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;