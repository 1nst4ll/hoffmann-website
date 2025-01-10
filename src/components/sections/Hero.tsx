import { motion } from 'framer-motion';
import { PuzzlePiece } from '../animations/PuzzlePiece';

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-ocean-100 to-white">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center space-y-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-display text-ocean-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connecting Pieces, Creating Solutions
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-ocean-700 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your trusted partner bridging international expertise with local know-how in Turks & Caicos
        </motion.p>

        <div className="flex justify-center space-x-4">
          <PuzzlePiece color="#0082A3" delay={0} />
          <PuzzlePiece color="#8FBC8F" delay={0.2} />
          <PuzzlePiece color="#E6A570" delay={0.4} />
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-ocean-500 text-white px-8 py-3 rounded-md hover:bg-ocean-600 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-ocean-500 text-ocean-500 px-8 py-3 rounded-md hover:bg-ocean-50 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};