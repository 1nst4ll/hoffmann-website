import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useActiveSection } from '@/hooks/useActiveSection';
import { NavigationItem } from '@/types';

const navigationItems: NavigationItem[] = [
  { label: 'Services', href: 'services' },
  { label: 'About', href: 'about' },
  { label: 'Blog', href: 'blog' },
  { label: 'Contact', href: 'contact' }
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();
  const activeSection = useActiveSection();

  const handleNavigation = (href: string) => {
    scrollTo(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <button 
              onClick={() => handleNavigation('hero')}
              className="text-ocean-900 font-display text-2xl"
            >
              Hoffmann Ltd
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`relative text-ocean-700 hover:text-ocean-500 font-medium transition-colors ${
                  activeSection === item.href ? 'text-ocean-500' : ''
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ocean-500"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
            <Button 
              variant="primary"
              onClick={() => handleNavigation('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ocean-900 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`block w-full text-left text-ocean-700 hover:text-ocean-500 font-medium py-2 transition-colors ${
                      activeSection === item.href ? 'text-ocean-500' : ''
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <Button 
                  variant="primary" 
                  fullWidth
                  onClick={() => handleNavigation('contact')}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};