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
      type: 'spring',
      bounce: 0.6,
      delay: 0.25,
      duration: 1.5,
    },
  },
  animateCardHeight: {
    height: 'auto',
    transition: { duration: 0.25 },
  },
  closeCardHeight: { height: 0, transition: { delay: 0.3, duration: 0.25 } },
  removeBoxShadow: {
    boxShadow: `0px 0px 0px 0 #cbd1d9 inset,
                0px 0px 0px 0 #ffffff inset,
                0px 0px 0px 0 #cbd1d9,
                0px 0px 0px 0 #ffffff`,
    outlineWidth: '0px',
    transition: { duration: 0.3 },
  },
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
  activeTags: string[];
};

export default function ExperienceCard({
  title,
  company,
  primaryTag,
  technologies,
  activeTags,
}: ExperienceCardProps) {
  useEffect(() => {
    if (activeTags.length === 0) {
      setVisible(true);
    } else {
      setVisible(false);

      if (activeTags.every((tag) => technologies.includes(tag))) {
        setVisible(true);
      }
    }
  }, [activeTags, technologies]);

  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={animatePadding}
          initial='initial'
          animate='animate'
          exit='exit'
          className='pb-10 w-full'
          onClick={() => setExpanded(!expanded)}
        >
          <motion.div
            variants={animateCard}
            initial='initial'
            animate={['animateBoxShadow', 'animateCardHeight']}
            exit={['closeCardHeight', 'removeBoxShadow']}
            className='card rounded-3xl text-3xl'
          >
            <motion.div
              variants={animateText}
              initial='initial'
              animate='animate'
              exit='exit'
              className='px-6 sm:px-10 pt-3 sm:pt-7 pb-3'
            >
              <div className='py-2'>
                <h2 className='text-blue-200 inset-text font-mono text-3xl sm:text-5xl'>
                  {title}
                </h2>
                <h2 className='pt-1 sm:pt-3 text-sm sm:text-xl'>{company}</h2>
              </div>
              <div className='pt-1'>
                <div
                  className='w-fit py-1.5 px-3 rounded-md text-xs sm:text-sm'
                  style={{
                    boxShadow: `-3px -3px 7px 0 #cbd1d9 inset,
                                3.5px 3.5px 6px 0 #ffffff inset,
                                -3px -3px 7px 0 #cbd1d9,
                                3.5px 3.5px 6px 0 #ffffff`,
                  }}
                >
                  {primaryTag}
                </div>
              </div>
              <div className='text-sm sm:text-lg pt-1.5'>
                {technologies.map(
                  (technology: string, index: number) =>
                    `${technology}${index === technologies.length - 1 ? '' : ', '}`
                )}
              </div>
              <div className='text-center text-xs text-blue-300 sm:text-sm pt-2'>
                click the card to expand
              </div>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    variants={animateCard}
                    initial='initial'
                    animate='animateCardHeight'
                    exit='closeCardHeight'
                    className='text-base'
                  >
                    <motion.p
                      variants={animateText}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      className='pb-4'
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam vitae pellentesque purus. Suspendisse at convallis
                      est, vitae congue quam. Duis euismod suscipit velit non
                      maximus. Donec hendrerit laoreet turpis vitae vulputate.
                      Morbi vestibulum ligula ipsum, in feugiat nisl ultrices
                      vitae. Nullam ac metus condimentum, scelerisque ligula sit
                      amet, feugiat nisi. Mauris eget dapibus arcu. Quisque nec
                      velit tristique, vehicula urna eget, iaculis augue.
                      Pellentesque iaculis vulputate massa ut convallis. Integer
                      condimentum, quam vel iaculis tincidunt, ipsum dolor
                      faucibus arcu, eget malesuada ex nunc in velit. Sed nisi
                      mi, pretium in purus vitae, semper aliquet lectus. Cras
                      feugiat eros nunc, sed feugiat enim dapibus posuere. Sed
                      euismod mollis pellentesque.
                    </motion.p>
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
