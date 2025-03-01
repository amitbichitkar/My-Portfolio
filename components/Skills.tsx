'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '@/data/portfolio';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {portfolioData.skills.map((skill, index) => {
              const Icon = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center mb-2">
                    <Icon className="text-primary text-xl mr-2" />
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                    <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;