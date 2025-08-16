import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    // Handle smooth scrolling
    const smoothScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Navigation links
    const navLinks = [
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Skills", path: "skills" },
        { name: "Projects", path: "projects" },
        { name: "Contact", path: "contact" }
    ];

    // Social links with lucide-react icons
    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            url: "https://github.com/PandyaSumit",
            label: "GitHub",
            color: "hover:text-gray-300"
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            url: "https://www.linkedin.com/in/sumitpandya1/",
            label: "LinkedIn",
            color: "hover:text-blue-400"
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            url: "https://x.com/sumitpandya01",
            label: "Twitter",
            color: "hover:text-sky-400"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            url: "mailto:pandyasumit01@gmail.com",
            label: "Email",
            color: "hover:text-red-400"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const socialVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* Main Footer Content */}
                    <div className="py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                            {/* Brand & Description */}
                            <motion.div
                                className="lg:col-span-5"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="mb-6"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                        Sumit Pandya
                                    </h3>
                                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                                        Full Stack Developer
                                    </p>
                                </motion.div>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
                                    Crafting digital experiences with modern technologies.
                                    Passionate about creating scalable, user-friendly applications that make a difference.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3 text-sm">
                                    <motion.div
                                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <span>Surat, Gujarat, India</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <span>+91 93163 XXXXX</span>
                                    </motion.div>
                                    <motion.a
                                        href="mailto:pandyasumit01@gmail.com"
                                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <span>pandyasumit01@gmail.com</span>
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Navigation Links */}
                            <motion.div
                                className="lg:col-span-3"
                                variants={itemVariants}
                            >
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                    Navigation
                                </h4>
                                <nav className="space-y-3">
                                    {navLinks.map((link, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => smoothScrollTo(link.path)}
                                            className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {link.name}
                                        </motion.button>
                                    ))}
                                </nav>
                            </motion.div>

                            {/* Social Links & Back to Top */}
                            <motion.div
                                className="lg:col-span-4 flex flex-col items-start lg:items-end"
                                variants={itemVariants}
                            >
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                    Connect
                                </h4>

                                {/* Social Icons */}
                                <div className="flex gap-4 mb-8">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl ${link.color} transition-all duration-300 shadow-sm hover:shadow-md group`}
                                            variants={socialVariants}
                                            whileHover={{ y: -3, scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Back to Top Button */}
                                {/* <motion.button
                                    onClick={scrollToTop}
                                    className="group flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={itemVariants}
                                >
                                    <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                                    <span className="text-sm font-medium">Back to Top</span>
                                </motion.button> */}
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        className="py-8 border-t border-gray-200 dark:border-gray-800"
                        variants={itemVariants}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <motion.p
                                className="text-gray-500 dark:text-gray-400 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                © {year} Sumit Pandya. All rights reserved.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Decorative Line */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                    />
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;