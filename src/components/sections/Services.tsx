import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, FileCheck, UserCog } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Service } from '@/types';

interface ServiceCardProps extends Service {
  delay?: number;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
  onLearnMore
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg border border-ocean-100 hover:border-ocean-300 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 space-y-4">
        <motion.div 
          className="w-12 h-12 text-ocean-500"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-primary font-semibold text-ocean-900">
          {title}
        </h3>
        
        <p className="text-ocean-700">
          {description}
        </p>

        <Button 
          variant="ghost" 
          onClick={onLearnMore}
          className="text-ocean-500 font-medium hover:text-ocean-600 p-0"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const scrollTo = useScrollTo();

  const services: Service[] = [
    {
      icon: <Globe className="w-full h-full" />,
      title: 'Hospitality Consultancy',
      description: 'Expert guidance in cost control, digital solutions, and process optimization for hospitality businesses.'
    },
    {
      icon: <FileCheck className="w-full h-full" />,
      title: 'Immigration & Compliance',
      description: 'Professional assistance with visas, permits, and citizenship applications.'
    },
    {
      icon: <Users className="w-full h-full" />,
      title: 'Human Resources',
      description: 'Complete HR solutions including recruitment, training, and cultural integration.'
    },
    {
      icon: <UserCog className="w-full h-full" />,
      title: 'Digital Services',
      description: 'Modern digital solutions from online presence management to technical integration.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-ocean-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 space-y-4"
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
              Our Services
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display text-ocean-900">
            Comprehensive Solutions
          </h2>
          
          <p className="text-xl text-ocean-700 max-w-2xl mx-auto">
            Expert services tailored to your business and immigration needs in Turks & Caicos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.2}
              onLearnMore={() => scrollTo('contact')}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('contact')}
          >
            Get Started with Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};