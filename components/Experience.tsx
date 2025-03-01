'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '@/data/portfolio';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FiBriefcase className="mr-2 text-primary" />
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {portfolioData.experience.map((exp, index) => (
                  <motion.div
                    key={`${exp.company}-${index}`}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <h4 className="text-xl font-semibold">{exp.position}</h4>
                    <h5 className="text-lg text-primary mb-2">{exp.company}</h5>
                    
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center mr-4">
                        <FiCalendar className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h3>
              
              <div className="space-y-8">
                {portfolioData.education.map((edu, index) => (
                  <motion.div
                    key={`${edu.institution}-${index}`}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <h5 className="text-lg text-primary mb-2">{edu.institution}</h5>
                    
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center mr-4">
                        <FiCalendar className="mr-1" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;