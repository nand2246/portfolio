import { motion, Variants } from 'framer-motion';
import { ReactElement } from 'react';

const animateCard: Variants = {
  initial: {
    boxShadow: `0px 0px 0px 0 #cbd1d9 inset,
                0px 0px 0px 0 #ffffff inset,
                0px 0px 0px 0 #cbd1d9,
                0px 0px 0px 0 #ffffff`,
    height: 0,
  },
  animateBoxShadow: {
    boxShadow: `4.5px 4.5px 6px 0 #cbd1d9 inset,
                -5.25px -5.25px 9px 0 #ffffff inset,
                -4.5px -4.5px 10.5px 0 #cbd1d9,
                2.25px 2.25px 9px 0 #ffffff`,
    transition: {
      type: 'linear',
      delay: 0.25,
      duration: 0.3,
    },
  },
  removeBoxShadow: {
    boxShadow: `0px 0px 0px 0 #cbd1d9 inset,
                0px 0px 0px 0 #ffffff inset,
                0px 0px 0px 0 #cbd1d9,
                0px 0px 0px 0 #ffffff`,
    transition: { duration: 0.3 },
  },
  animateCardHeight: {
    height: 'auto',
    transition: { duration: 0.25 },
  },
  closeCardHeight: { height: 0, transition: { delay: 0.3, duration: 0.25 } },
};

const animateContent: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.25, duration: 0.6 },
  },
  exit: { opacity: 0 },
};

export default function Card({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <motion.div
      variants={animateCard}
      initial='initial'
      animate={['animateBoxShadow', 'animateCardHeight']}
      exit={['closeCardHeight', 'removeBoxShadow']}
      className='rounded-[2rem]'
    >
      <motion.div
        variants={animateContent}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
