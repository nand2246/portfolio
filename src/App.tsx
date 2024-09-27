import './App.css';
import { easeInOut, motion, Variants } from 'framer-motion';
import ExperienceCard from './components/ExperienceCard';
import { useState } from 'react';
import FilterButton from './components/FilterButton';

const experiences = [
  {
    title: 'devops engineer',
    company: 'lifebooster',
    dates: 'may - december 2022',
    primaryTag: 'work experience',
    technologies: ['azure', 'terraform', 'typescript', 'python', 'datadog'],
    responsibilities: [],
  },
  {
    title: 'devops engineer',
    company: 'lifebooster',
    dates: 'january - april 2023',
    primaryTag: 'work experience',
    technologies: ['azure', 'terraform', 'typescript', 'python', 'datadog'],
    responsibilities: [],
  },
  {
    title: 'ai-tinerary',
    company: 'an AI itinerary creator',
    primaryTag: 'personal project',
    technologies: ['react', 'express', 'mongodb', 'node.js'],
    responsibilities: [],
  },
];

const technologies: string[] = [
  ...new Set(experiences.map((experience) => experience.technologies).flat()),
];

const animateOpacity: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.6, duration: 0.6 },
  },
};

const animateGlass: Variants = {
  initial: {
    background: 'rgba(255,255,255,0.25)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  },
  animateBlur: {
    background: 'rgba(255,255,255,0)',
    backdropFilter: 'blur(0px)',
    WebkitBackdropFilter: 'blur(0px)',
    transition: { ease: easeInOut, delay: 0.6, duration: 1 },
  },
  setDisplayNone: {
    display: 'none',
    transition: { delay: 1.6 },
  },
};

function App() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  return (
    <>
      <motion.div
        className='fixed top-0 h-screen w-full z-50'
        variants={animateGlass}
        initial='initial'
        animate={['animateBlur', 'setDisplayNone']}
      />

      <motion.div
        variants={animateOpacity}
        initial='initial'
        animate='animate'
        className='p-5 sm:p-10 max-w-screen-lg mx-auto'
      >
        <h1 className='text-5xl sm:text-7xl text-blue-200 inset-text text-center pb-6 sm:pb-10'>
          Projects
        </h1>
        <div className='flex flex-wrap sm:flex-nowrap text-center sm:text-left pb-10'>
          <div
            className='w-full sm:w-fit sm:pt-1.5 pb-2 sm:pb-5 pr-3 sm:pr-4 text-blue-300 text-3xl'
            style={{ fontWeight: 700 }}
          >
            Filters:
          </div>
          <div className='flex-1 flex flex-wrap justify-left sm:justify-end px-3'>
            {technologies.map((technology: string) => (
              <FilterButton
                key={technology}
                tag={technology}
                handleAdd={() => {
                  return setActiveTags([...activeTags, technology]);
                }}
                handleRemove={() => {
                  return setActiveTags(
                    activeTags.filter((tag) => tag !== technology)
                  );
                }}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-wrap justify-center max-w-screen-md mx-auto'>
          {experiences.map((experience) => {
            const { title, company, primaryTag, technologies } = experience;
            return (
              <ExperienceCard
                key={title}
                title={title}
                company={company}
                primaryTag={primaryTag}
                technologies={technologies}
                activeTags={activeTags}
              />
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default App;
