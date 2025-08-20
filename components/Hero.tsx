'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import portfolioData from '@/data/portfolio';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">{portfolioData.name.split(' ')[0]}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            {portfolioData.role}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            {portfolioData.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
            <Link href="#projects">
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image
                src="/images/Amit.jpg"
                alt={portfolioData.name}
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
                priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Link href="#about">
          <FiArrowDown className="text-primary text-3xl cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;