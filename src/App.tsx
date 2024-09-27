import './App.css';
import { motion, Variants } from 'framer-motion';
import ExperienceCard from './components/ExperienceCard';
import { useState } from 'react';
import FilterButton from './components/FilterButton';

const experiences = [
  {
    title: 'devops engineer',
    company: 'lifebooster',
    primaryTag: 'devops',
    technologies: ['azure', 'terraform'],
  },
  {
    title: 'ai-tinerary',
    company: 'an AI itinerary creator',
    primaryTag: 'web application',
    technologies: ['react', 'express'],
  },
];

const technologies: string[] = experiences
  .map((experience) => experience.technologies)
  .flat();

const animateOpacity: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.3 },
  },
};

function App() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  return (
    <motion.div
      variants={animateOpacity}
      initial='initial'
      animate='animate'
      className='mt-[90px] p-10 max-w-screen-md mx-auto'
    >
      <h1 className='text-5xl font-mono text-center pb-10'>Projects</h1>
      <div className='flex pb-10'>
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
      <div className='flex flex-wrap justify-center'>
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
  );
}

export default App;
