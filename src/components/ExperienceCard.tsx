import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const animateCard: Variants = {
  initial: {
    boxShadow: '0px 0px 0 #000000',
    height: 0,
    outlineWidth: '0px',
  },
  animateBoxShadow: {
    boxShadow: '20px 20px 0 #000000',
    outlineWidth: '3px',
    transition: { delay: 0.6, duration: 0.3 },
  },
  animateCardHeight: {
    height: 'auto',
    transition: { duration: 0.3 },
  },
  closeCardHeight: { height: 0, transition: { delay: 0.3, duration: 0.3 } },
  removeBoxShadow: {
    boxShadow: '0px 0px 0 #000000',
    outlineWidth: '0px',
    transition: { duration: 0.3 },
  },
};

const animateText: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.3, duration: 0.3 } },
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
            className='card bg-indigo-400 outline rounded-md text-3xl'
          >
            <motion.div
              variants={animateText}
              initial='initial'
              animate='animate'
              exit='exit'
              className='p-3'
            >
              <div className='py-2'>
                <h2>{title}</h2>
                <h2 className='pt-1 text-xl'>{company}</h2>
              </div>
              <div className='w-fit py-1 px-2 bg-orange-50 rounded-md outline text-xs'>
                {primaryTag}
              </div>
              <div className='text-lg'>
                {technologies.map((technology: string) => `${technology}, `)}
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
                      className='text-base'
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
