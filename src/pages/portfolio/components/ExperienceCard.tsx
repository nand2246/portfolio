import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../../../components/Card';

const animateExpand: Variants = {
  initial: {
    height: 0,
  },
  animateHeight: {
    height: 'auto',
    transition: { duration: 0.25 },
  },
  closeHeight: { height: 0, transition: { delay: 0.2, duration: 0.25 } },
};

const animateContent: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.25, duration: 0.6 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const animatePadding: Variants = {
  initial: { paddingBottom: '0rem' },
  animate: {
    paddingBottom: '2rem',
    transition: { duration: 0.3 },
  },
  exit: { paddingBottom: '0rem', transition: { delay: 0.3, duration: 0.3 } },
};

type ExperienceCardProps = {
  title: string;
  company: string | undefined;
  type: string;
  technologies: string[] | undefined;
  responsibilities: string[];
  activeTypes: string[];
  activeTechnologies: string[];
};

export default function ExperienceCard({
  title,
  company,
  type,
  technologies,
  responsibilities,
  activeTypes,
  activeTechnologies,
}: ExperienceCardProps) {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (activeTypes.length === 0 && activeTechnologies.length === 0) {
      setVisible(true);
    } else {
      setVisible(false);

      if (
        activeTypes.find((activeType) => activeType === type) ||
        activeTechnologies.find(
          (activeTechnology) =>
            technologies && technologies.includes(activeTechnology)
        )
      ) {
        setVisible(true);
      }
    }
  }, [technologies, activeTypes, activeTechnologies, type]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={animatePadding}
          initial='initial'
          animate='animate'
          exit='exit'
          onClick={() => setExpanded(!expanded)}
        >
          <Card>
            <div className='px-6 py-4 cursor-pointer'>
              <div className='flex flex-col sm:flex-row'>
                <h2 className='flex-auto sm:mr-14 my-auto inset-text-sm font-mono italic text-3xl sm:text-4xl'>
                  {title}
                </h2>
                <div className='flex flex-col flex-auto'>
                  <h2 className='flex-1 basis-1/2 text-left sm:text-right text-lg sm:text-xl'>
                    {company}
                  </h2>
                  <h2 className='flex-1 basis-1/2 text-left sm:text-right text-xs sm:text-sm'>
                    {type}
                  </h2>
                </div>
              </div>

              <div className='text-sm sm:text-lg pt-1 sm:pt-3'>
                {technologies && (
                  <>
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
                  </>
                )}
              </div>
              <div className='text-center text-xs sm:text-sm pt-2'>
                click the card to expand
              </div>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    variants={animateExpand}
                    initial='initial'
                    animate='animateHeight'
                    exit='closeHeight'
                  >
                    <motion.div
                      variants={animateContent}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                    >
                      <ul className='py-4 pl-4 text-sm sm:text-base list-disc'>
                        {responsibilities.map((responsibility) => (
                          <li key={responsibility} className='pt-2'>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
