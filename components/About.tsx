'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import portfolioData from '@/data/portfolio';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <motion.div 
                className="relative h-64 w-full md:h-80 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/Amit.jpg"  
                  alt="About me"
                  width={300}
                  height={100}
                  style={{ objectFit: 'contain',borderRadius: '40%' }}
                />
              </motion.div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {portfolioData.about}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  className="bg-white dark:bg-dark p-6 rounded-lg shadow-md"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">{portfolioData.location}</p>
                </motion.div>
                
                <motion.div
                  className="bg-white dark:bg-dark p-6 rounded-lg shadow-md"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">{portfolioData.email}</p>
                </motion.div>
                
                <motion.div
                  className="bg-white dark:bg-dark p-6 rounded-lg shadow-md"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">{portfolioData.experience.length}+ Years</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;