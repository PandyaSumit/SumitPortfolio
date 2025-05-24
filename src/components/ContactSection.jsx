import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com'; 

const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError('');

        try {
            console.log("Form data submitted:", data);
            const result = await emailjs.send(
                'service_ee1qstu',        
                'template_0lh69zj',        
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                'S7j8csOWxK-BtjDBa'        
            );


            await new Promise(resolve => setTimeout(resolve, 1500));
            reset();
            setSubmitSuccess(true);

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);

        } catch (error) {
            setSubmitError(error.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FiMail className="text-2xl text-blue-600 dark:text-blue-400" />,
            title: "Email",
            details: "pandyasumit01@gmail.com",
            link: "mailto:sumit.pandyasumit01@gmail.com"
        },
        {
            icon: <FiPhone className="text-2xl text-blue-600 dark:text-blue-400" />,
            title: "Phone",
            details: "+91 93163 XXXXX",
            link: ""
        },
        {
            icon: <FiMapPin className="text-2xl text-blue-600 dark:text-blue-400" />,
            title: "Location",
            details: "Surat, India",
            link: ""
        }
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
            <div className="container mx-auto">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                            Have a project in mind or just want to chat? Feel free to reach out using the form below or through my contact details.
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <motion.div
                            className="lg:w-1/3"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="mt-1 mr-4">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {info.title}
                                            </h4>
                                            <a
                                                href={info.link}
                                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            >
                                                {info.details}
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Follow Me
                                </h3>
                                <div className="flex space-x-4">
                                    <motion.a
                                        href="https://github.com/PandyaSumit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        whileHover={{ y: -3 }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/sumitpandya1/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        whileHover={{ y: -3 }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </motion.a>
                                    <motion.a
                                        href="https://x.com/sumitpandya01"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        whileHover={{ y: -3 }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-2/3"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Send me a message
                            </h3>

                            {submitSuccess && (
                                <motion.div
                                    className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p>Your message has been sent successfully! I'll get back to you soon.</p>
                                </motion.div>
                            )}

                            {submitError && (
                                <motion.div
                                    className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p>{submitError}</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                            placeholder="Your name"
                                            {...register('name')}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                            placeholder="Your email"
                                            {...register('email')}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="subject">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                        placeholder="Subject of your message"
                                        {...register('subject')}
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                                            {errors.subject.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                        placeholder="Your message"
                                        {...register('message')}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="mt-1 text-red-600 dark:text-red-400 text-sm">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>
                                <motion.button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg flex items-center justify-center disabled:bg-blue-400 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="mr-2" /> Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;