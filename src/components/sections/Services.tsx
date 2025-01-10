import { motion } from 'framer-motion';
import { Globe, Users, FileCheck, UserCog } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg border border-ocean-100 hover:border-ocean-300 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-12 h-12 mb-4 text-ocean-500">{icon}</div>
      <h3 className="text-xl font-primary font-semibold mb-2 text-ocean-900">{title}</h3>
      <p className="text-ocean-700">{description}</p>
    </motion.div>
  );
};

export const Services = () => {
  const services = [
    {
      icon: <Globe className="w-full h-full" />,
      title: 'Hospitality Consultancy',
      description: 'Expert guidance in cost control, digital solutions, and process optimization.'
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
    <section className="py-20 bg-gradient-to-b from-white to-ocean-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display text-ocean-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-ocean-700 max-w-2xl mx-auto">
            Comprehensive solutions for your business and immigration needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};