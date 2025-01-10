import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PuzzlePieceProps {
  delay?: number;
  color?: string;
  size?: number;
}

export const PuzzlePiece = ({
  delay = 0,
  color = '#0082A3',
  size = 40,
}: PuzzlePieceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="transform-gpu"
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <path
          d="M20 0C20 5.52285 24.4772 10 30 10C24.4772 10 20 14.4772 20 20C20 14.4772 15.5228 10 10 10C15.5228 10 20 5.52285 20 0Z"
          fill={color}
        />
      </motion.svg>
    </motion.div>
  );
};