'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '@/data/portfolio';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href={`mailto:${portfolioData.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      {portfolioData.email}
                    </a>
                  </div>
                </motion.div>
                
                {portfolioData.phone && (
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <FiPhone className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <a href={`tel:${portfolioData.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                        {portfolioData.phone}
                      </a>
                    </div>
                  </motion.div>
                )}
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {portfolioData.location}
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {portfolioData.socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-dark p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:text-primary"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <Icon className="text-xl" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Your message has been sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-gray-800"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary flex items-center justify-center w-full"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      <span>Send Message</span>
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

export default Contact;