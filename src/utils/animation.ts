import { AnimationProps } from '@/types';

export const fadeInUp = (props?: AnimationProps) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { 
    duration: props?.duration || 0.5,
    delay: props?.delay || 0
  }
});

export const fadeIn = (props?: AnimationProps) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { 
    duration: props?.duration || 0.5,
    delay: props?.delay || 0
  }
});

export const staggerContainer = (props?: AnimationProps) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { 
    delayChildren: props?.delay || 0,
    staggerChildren: 0.1
  }
});