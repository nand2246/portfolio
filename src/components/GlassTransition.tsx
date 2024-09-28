import { easeInOut, Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

const animateGlass: Variants = {
  initial: {
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  },
  animateUnBlur: {
    backdropFilter: 'blur(0px)',
    WebkitBackdropFilter: 'blur(0px)',
    transition: { ease: easeInOut, delay: 0, duration: 0.4 },
  },
  setDisplayNone: {
    display: 'none',
    transition: { delay: 0.4 },
  },
  animateBlur: {
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    transition: { ease: easeInOut, delay: 0, duration: 0.4 },
  },
  setDisplayBlock: {
    display: 'block',
    transition: { duration: 0 },
  },
};

const animateOpacity: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.1, duration: 0.2 },
  },
};
export default function GlassTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        className='fixed top-0 h-screen w-screen z-50'
        variants={animateGlass}
        initial='initial'
        animate={['animateUnBlur', 'setDisplayNone']}
        exit={['animateBlur', 'setDisplayBlock']}
      />
      <motion.div
        variants={animateOpacity}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {children}
      </motion.div>
    </>
  );
}
