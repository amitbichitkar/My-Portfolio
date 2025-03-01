'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import portfolioData from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text">
              {portfolioData.name.split(' ')[0]}
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              {portfolioData.bio}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium text-white">Email:</span> {portfolioData.email}
              </li>
              {portfolioData.phone && (
                <li className="text-gray-400">
                  <span className="font-medium text-white">Phone:</span> {portfolioData.phone}
                </li>
              )}
              <li className="text-gray-400">
                <span className="font-medium text-white">Location:</span> {portfolioData.location}
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              {portfolioData.socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;