'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import portfolioData from '@/data/portfolio';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Certificate background images
  const certImages = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3"
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="relative bg-white dark:bg-dark overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={certImages[index % certImages.length]}
                    alt={cert.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <p className="text-gray-300">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{cert.date}</span>
                    {cert.url && (
                      <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="text-primary flex items-center"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="mr-1 text-sm">View Certificate</span>
                          <FiExternalLink className="text-sm" />
                        </motion.div>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;