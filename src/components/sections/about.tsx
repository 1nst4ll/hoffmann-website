import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, MessageCircle, Lightbulb, Heart, Shield, Leaf } from 'lucide-react';

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
    >
      <div className="text-ocean-500 w-12 h-12 flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-primary font-semibold text-ocean-900 mb-2">
          {title}
        </h3>
        <p className="text-ocean-700">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Clock className="w-full h-full" />,
      title: t('about.values.punctual.title'),
      description: t('about.values.punctual.description')
    },
    {
      icon: <MessageCircle className="w-full h-full" />,
      title: t('about.values.responsive.title'),
      description: t('about.values.responsive.description')
    },
    {
      icon: <Lightbulb className="w-full h-full" />,
      title: t('about.values.proactive.title'),
      description: t('about.values.proactive.description')
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: t('about.values.trustworthy.title'),
      description: t('about.values.trustworthy.description')
    },
    {
      icon: <Heart className="w-full h-full" />,
      title: t('about.values.friendly.title'),
      description: t('about.values.friendly.description')
    },
    {
      icon: <Leaf className="w-full h-full" />,
      title: t('about.values.sustainable.title'),
      description: t('about.values.sustainable.description')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ocean-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-ocean-900">
              {t('about.title')}
            </h2>
            <p className="text-xl text-ocean-700">
              {t('about.description')}
            </p>
            <div className="pt-6">
              <button className="bg-ocean-500 text-white px-8 py-3 rounded-md hover:bg-ocean-600 transition-colors">
                {t('about.cta')}
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                {...value}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};