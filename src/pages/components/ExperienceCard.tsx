import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

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

const animateText: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.25, duration: 0.6 },
  },
  exit: { opacity: 0 },
};

const animatePadding: Variants = {
  initial: { paddingBottom: '0rem' },
  animate: {
    paddingBottom: '2.5rem',
    transition: { duration: 0.3 },
  },
  exit: { paddingBottom: '0rem', transition: { delay: 0.3, duration: 0.3 } },
};

type ExperienceCardProps = {
  title: string;
  company: string | undefined;
  primaryTag: string;
  technologies: string[];
  responsibilities: string[];
  activeTags: string[];
};

export default function ExperienceCard({
  title,
  company,
  primaryTag,
  technologies,
  responsibilities,
  activeTags,
}: ExperienceCardProps) {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (activeTags.length === 0) {
      setVisible(true);
    } else {
      setVisible(false);

      if (activeTags.find((tag) => technologies.includes(tag))) {
        setVisible(true);
      }
    }
  }, [activeTags, technologies]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={animatePadding}
          initial='initial'
          animate='animate'
          exit='exit'
          className='pb-10'
          onClick={() => setExpanded(!expanded)}
        >
          <motion.div
            variants={animateCard}
            initial='initial'
            animate={['animateBoxShadow', 'animateCardHeight']}
            exit={['closeCardHeight', 'removeBoxShadow']}
            className='rounded-[2rem]'
          >
            <motion.div
              variants={animateText}
              initial='initial'
              animate='animate'
              exit='exit'
              className='flex flex-col px-6 py-4'
              whileHover={{ cursor: 'pointer' }}
            >
              <div className='flex flex-col sm:flex-row'>
                <h2 className='flex-auto sm:mr-14 my-auto text-blue-200 inset-text-sm font-mono text-2xl sm:text-4xl'>
                  {title}
                </h2>
                <div className='flex flex-col flex-auto'>
                  <h2 className='flex-1 basis-1/2 text-left sm:text-right text-lg sm:text-xl'>
                    {company}
                  </h2>
                  <h2 className='flex-1 basis-1/2 text-left sm:text-right text-xs sm:text-sm'>
                    {primaryTag}
                  </h2>
                </div>
              </div>

              <div className='text-sm sm:text-lg pt-1 sm:pt-3'>
                <div className='text-base sm:text-lg'>technologies:</div>
                <div className='flex flex-wrap pt-2'>
                  {technologies.map((technology: string) => (
                    <div
                      key={technology}
                      className='w-fit pt-1.5 pb-2 pl-2 pr-2.5 mr-2 mb-2 rounded-xl text-xs sm:text-sm'
                      style={{
                        boxShadow: `-3px -3px 7px 0 #cbd1d9 inset,
                                    3.5px 3.5px 6px 0 #ffffff inset,
                                    -3px -3px 7px 0 #cbd1d9,
                                    3.5px 3.5px 6px 0 #ffffff`,
                      }}
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
              <div className='text-center text-xs sm:text-sm pt-2'>
                click the card to expand
              </div>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    variants={animateCard}
                    initial='initial'
                    animate='animateCardHeight'
                    exit='closeCardHeight'
                  >
                    <motion.div
                      variants={animateText}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                    >
                      <ul className='pt-6 pb-4 pl-4 text-base list-disc'>
                        {responsibilities.map((responsibility) => (
                          <li key={responsibility} className='pb-2'>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
