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
    technologies: ['azure', 'terraform', 'typescript', 'python'],
    responsibilities: [
      'Led the project to implement Terraform Infrastructure as Code to manage several Azure systems.',
      'Led/performed a migration of a team of 15 from GitHub to Azure Repos to streamline dev processes.',
      'Significantly improved application security by provisioning several security measures including a WAF.',
      'Spearheaded the implementation of a key rotation procedure in a production environment without impacting application uptime.',
      'Reduced container security vulnerabilities by over 85%, significantly improving application security.',
    ],
  },
  {
    title: 'ai-tinerary',
    company: 'an AI itinerary creator',
    primaryTag: 'personal project',
    technologies: ['react', 'express', 'mongodb', 'node.js'],
    responsibilities: [
      'Developed an AI-powered itinerary creator application that helps users plan personalized travel itineraries based on their preferences and interests.',
      'Built responsive and user-friendly interfaces using React receiving positive feedback from users.',
      'Developed RESTful APIs with Node.js and Express.js to handle user data and AI interactions.',
      'Ensured robust and secure data handling and storage using MongoDB.',
      'Integrated AI capabilities using Meta Llama 3 to generate personalized travel plans.',
      'Deployed the application on cloud platforms, ensuring scalability and availability.',
      'Collaborated with a team of four to define project requirements and deliverables within a tight timeline.',
    ],
  },
  {
    title: 'software developer',
    company: 'real savings coupon magazine',
    primaryTag: 'work experience',
    technologies: ['python', 'c++', 'sql', 'javascript', 'react native'],
    responsibilities: [
      'Collaborated with a team of developers to create an Android and iOS application using React Native.',
      'Built RESTful APIs that served data to the React Native front-end based on dynamically chosen user input that handled several concurrent users.',
      'Managed SEO for the company website, implementing the usage of several utilities such as image optimization and structured schema markup data to the site.',
      'Implemented Git and SSH access hosted on the company server and assisted colleagues with initializing these services with their systems.',
    ],
  },
  {
    title: 'planit',
    company: 'an application to facilitate casual local event planning',
    primaryTag: 'hackathon project',
    technologies: ['next.js', 'prisma'],
    responsibilities: [
      'Collaborated with a team of developers to create an Android and iOS application using React Native.',
      'Built RESTful APIs that served data to the React Native front-end based on dynamically chosen user input that handled several concurrent users.',
      'Managed SEO for the company website, implementing the usage of several utilities such as image optimization and structured schema markup data to the site.',
      'Implemented Git and SSH access hosted on the company server and assisted colleagues with initializing these services with their systems.',
    ],
  },
];

const technologies: string[] = [
  ...new Set(experiences.map((experience) => experience.technologies).flat()),
];

export default function Portfolio() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [resetFilter, setResetFilter] = useState<boolean>(false);

  return (
    <GlassTransition>
      <div className='p-5 max-w-screen-lg mx-auto'>
        {/* portfolio title text */}
        <h1 className='text-5xl sm:text-7xl text-blue-200 inset-text text-center font-mono pb-6 sm:pb-10'>
          projects
        </h1>

        {/* filters */}
        <div className='flex flex-wrap sm:flex-nowrap text-center sm:text-left pb-10'>
          <div className='basis-full sm:basis-0 pb-2 sm:pr-4'>
            <div className='text-2xl sm:text-3xl'>filters:</div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-wrap justify-left sm:justify-end px-3 sm:px-0'>
              {technologies.map((technology: string) => (
                <FilterButton
                  key={`${technology}${resetFilter}`}
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
            <div className='flex justify-start sm:justify-end pt-3 pl-3 pr-3'>
              <div
                className={`text-xs sm:text-base px-2.5 py-2 rounded-xl sm:rounded-2xl ${
                  activeTags.length === 0 ? 'text-slate-300' : ''
                }`}
                style={{
                  transitionDuration: '500ms',
                  transitionProperty: 'box-shadow',
                  boxShadow:
                    activeTags.length === 0
                      ? ''
                      : `-3px -3px 4px 0 #c9c6d8 inset,
                          3.5px 3.5px 6px 0 #ffffff inset,
                          3px 3px 7px 0 #c9c6d8,
                          -1.5px -1.5px 6px 0 #ffffff`,
                }}
                onClick={() => {
                  if (activeTags.length > 0) {
                    setActiveTags([]);
                    setResetFilter(!resetFilter);
                  }
                }}
              >
                reset filters
              </div>
            </div>
          </div>
        </div>

        {/* experience cards */}
        <div className='max-w-screen-sm mx-auto'>
          {experiences.map((experience) => {
            const {
              title,
              company,
              primaryTag,
              technologies,
              responsibilities,
            } = experience;
            return (
              <ExperienceCard
                key={title}
                title={title}
                company={company}
                primaryTag={primaryTag}
                technologies={technologies}
                responsibilities={responsibilities}
                activeTags={activeTags}
              />
            );
          })}
        </div>
      </div>
    </GlassTransition>
  );
}
