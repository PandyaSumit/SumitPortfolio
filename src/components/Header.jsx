import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = ({ toggleTheme, currentTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: "About", path: "about" },
        { name: "Work", path: "projects" },
        { name: "Contact", path: "contact" }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                        ? 'py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/10 dark:border-gray-800/10'
                        : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => smoothScrollTo('home')}
                        className="text-xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                        Sumit Pandya
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => smoothScrollTo(link.path)}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200 relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white group-hover:w-full transition-all duration-200"></span>
                            </button>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                            aria-label="Toggle theme"
                        >
                            {currentTheme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                            aria-label="Toggle theme"
                        >
                            {currentTheme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 pt-20 px-6 shadow-xl border-l border-gray-200/20 dark:border-gray-800/20 md:hidden">
                        <nav className="flex flex-col space-y-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    className="text-left py-4 px-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                                    onClick={() => smoothScrollTo(link.path)}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>

                        <div className="absolute bottom-8 left-6 right-6 text-center text-sm text-gray-400">
                            Let's build something great together
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;