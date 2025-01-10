import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Button } from '../ui/Button';
import { BlogPost } from '@/types';

const BlogCard: React.FC<BlogPost> = ({
  title,
  excerpt,
  category,
  readTime,
  date,
  imageUrl
}) => {
  return (
    <motion.article
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute top-4 left-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-ocean-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </motion.div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </motion.div>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime} min read</span>
          </motion.div>
        </div>
        
        <motion.h3 
          className="text-xl font-semibold text-ocean-900 mb-2 group-hover:text-ocean-600 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-ocean-700 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {excerpt}
        </motion.p>
        
        <motion.button
          className="inline-flex items-center text-ocean-500 font-medium group/btn"
          whileHover={{ x: 5 }}
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.article>
  );
};

export const BlogSection: React.FC = () => {
  const scrollTo = useScrollTo();

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Understanding TCI Business Licensing Requirements',
      excerpt: 'A comprehensive guide to obtaining and maintaining business licenses in Turks & Caicos Islands.',
      category: 'Industry News',
      readTime: 5,
      date: 'Jan 15, 2025',
      imageUrl: '/api/placeholder/800/600'
    },
    {
      id: '2',
      title: 'Digital Transformation in Caribbean Hospitality',
      excerpt: 'How modern technology is reshaping the hospitality industry in the Caribbean region.',
      category: 'Local Insights',
      readTime: 4,
      date: 'Jan 12, 2025',
      imageUrl: '/api/placeholder/800/600'
    },
    {
      id: '3',
      title: '2025 Immigration Policy Updates',
      excerpt: 'Key changes to immigration policies and their impact on businesses and individuals.',
      category: 'Immigration Tips',
      readTime: 6,
      date: 'Jan 8, 2025',
      imageUrl: '/api/placeholder/800/600'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 space-y-4"
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
              Latest Updates
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display text-ocean-900">
            Industry Insights & News
          </h2>
          
          <p className="text-xl text-ocean-700 max-w-2xl mx-auto">
            Stay informed with the latest updates in business, immigration, and local developments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              {...post}
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
            variant="outline"
            size="lg"
            icon={<ExternalLink />}
          >
            Visit Our Blog
          </Button>
        </motion.div>
      </div>
    </section>
  );
};