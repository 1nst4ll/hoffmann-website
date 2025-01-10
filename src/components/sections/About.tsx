import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, Lightbulb, Heart, Shield, Leaf } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollTo } from '@/hooks/useScrollTo';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard = ({ icon, title, description, delay = 0 }: ValueCardProps) => {
  return (
    <motion.div
      className="flex items-start space-x-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 10 }}
    >
      <motion.div 
        className="text-ocean-500 w-12 h-12 flex-shrink-0 mt-1"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        {icon}
      </motion.div>
      
      <div>
        <motion.h3 
          className="text-lg font-primary font-semibold text-ocean-900 mb-2"
          whileHover={{ color: '#0082A3' }}
        >
          {title}
        </motion.h3>
        <p className="text-ocean-700">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const About = () => {
  const scrollTo = useScrollTo();
  
  const values = [
    {
      icon: <Clock className="w-full h-full" />,
      title: 'Punctual',
      description: 'We respect your time and deliver on schedule, every time.'
    },
    {
      icon: <MessageCircle className="w-full h-full" />,
      title: 'Responsive',
      description: 'Quick and effective communication is our priority.'
    },
    {
      icon: <Lightbulb className="w-full h-full" />,
      title: 'Proactive',
      description: 'We anticipate needs and provide solutions before problems arise.'
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: 'Trustworthy',
      description: 'Built on a foundation of integrity and professional excellence.'
    },
    {
      icon: <Heart className="w-full h-full" />,
      title: 'Friendly',
      description: 'Warm, welcoming, and culturally sensitive service.'
    },
    {
      icon: <Leaf className="w-full h-full" />,
      title: 'Sustainable',
      description: 'Committed to environmentally conscious business practices.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-ocean-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="bg-ocean-100 text-ocean-600 px-4 py-1 rounded-full text-sm font-medium">
                About Us
              </div>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-display text-ocean-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Building Trust Through Excellence
            </motion.h2>
            
            <motion.p 
              className="text-xl text-ocean-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              We combine international expertise with local knowledge to deliver exceptional 
              service that exceeds expectations.
            </motion.p>

            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                variant="primary"
                size="lg"
                onClick={() => scrollTo('contact')}
              >
                Work With Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                {...value}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};