import { useState } from 'react';
import FilterButton from './components/FilterButton';
import ExperienceCard from './components/ExperienceCard';
import GlassTransition from '../components/GlassTransition';

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

export default function Portfolio() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  return (
    <GlassTransition>
      <div className='p-5 sm:p-10 max-w-screen-lg mx-auto'>
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
      </div>
    </GlassTransition>
  );
}
