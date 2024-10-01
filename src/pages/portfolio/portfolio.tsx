import { useState } from 'react';
import FilterButton from './components/FilterButton';
import ExperienceCard from './components/ExperienceCard';
import GlassTransition from '../../components/GlassTransition';

const experiences = [
  {
    title: 'devops engineer',
    company: 'lifebooster',
    dates: 'january - august 2023',
    type: 'work experience',
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
    title: 'software developer',
    company: 'real savings coupon magazine',
    dates: 'may - december 2022',
    type: 'work experience',
    technologies: ['python', 'c++', 'sql', 'javascript', 'react native'],
    responsibilities: [
      'Collaborated with a team of developers to create an Android and iOS application using React Native.',
      'Built RESTful APIs that served data to the React Native front-end based on dynamically chosen user input that handled several concurrent users.',
      'Managed SEO for the company website, implementing the usage of several utilities such as image optimization and structured schema markup data to the site.',
      'Implemented Git and SSH access hosted on the company server and assisted colleagues with initializing these services with their systems.',
    ],
  },
  {
    title: 'ai-tinerary',
    company: 'an AI itinerary creator',
    dates: 'may - august 2024',
    type: 'personal project',
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
    title: 'nwHacks 2024',
    dates: 'january 2024',
    company: 'plan.it an application to facilitate casual local event planning',
    type: 'hackathon project',
    technologies: ['next.js', 'prisma'],
    responsibilities: [
      'Collaborated with a team of developers to create an Android and iOS application using React Native.',
      'Built RESTful APIs that served data to the React Native front-end based on dynamically chosen user input that handled several concurrent users.',
      'Managed SEO for the company website, implementing the usage of several utilities such as image optimization and structured schema markup data to the site.',
      'Implemented Git and SSH access hosted on the company server and assisted colleagues with initializing these services with their systems.',
    ],
  },
  {
    title: 'cpsc 406',
    company: 'computational optimization',
    dates: 'january - april 2024',
    type: 'education',
    responsibilities: [
      'Learned the mathematical motivation behind several machine learning algorithms',
      'Applied algorithms to optimize and solve several complex machine learning problems',
      'Applied algorithms to solve linear programming problems',
    ],
  },
  {
    title: 'cpsc 340',
    company: 'machine learning and data mining',
    dates: 'september - december 2023',
    type: 'education',
    responsibilities: [
      'Trained and tested several machine learning algorithms using Python to solve complex problems.',
      'I was introduced to several complex machine learning concepts including deep learning and neural networks.',
    ],
  },
  {
    title: 'analog archive',
    company: 'a java image data organization project',
    dates: 'january - april 2021',
    technologies: ['java', 'windows', 'javaFX'],
    type: 'personal project',
    responsibilities: [
      'A Java application project created to help users organize analog photography collections.',
      'This Java program was created as a project for my CPSC 210 class, allowing me to apply what I had learned about software construction to a real program.',
      'This program applies the concepts of design hierarchies, data abstraction, and error exception handling.',
    ],
  },
  {
    title: 'cpsc 310',
    company: 'software engineering',
    dates: 'january - april 2021',
    type: 'education',
    responsibilities: [
      'Evaluated software engineering processes used to build modern industrial-caliber systems by justifying their benefits and trade-offs.',
      'During the course project, I collaborated with a team working on full-stack development split into four sprints.',
      'We first developed a server-side implementation using Node and then successfully implemented on client-side development using HTML/CSS/JS.',
      'This course allowed me to develop a more in-depth understanding of software construction, and how to approach programming in a more organized, practical manner.',
    ],
  },
  {
    title: 'cpsc 313',
    company: 'computer hardware and operating systems',
    dates: 'january - april 2021',
    type: 'education',
    responsibilities: [
      'This course covered several topics, including CPU execution and instruction execution, caches and memory systems, virtual memory, and operating systems.',
      'Allowed me to become a better full-stack programmer by allowing me to fully understand the execution of a program at various levels of abstraction and have a deeper understanding of memory management.',
    ],
  },
  {
    title: 'cpsc 320',
    company: 'intermediate algorithm design and analysis',
    dates: 'january - april 2021',
    type: 'education',
    responsibilities: [
      'The content covered in this course includes the definition, design, and implementation of several classic data structures, along with the time and space analysis of algorithms and data structures.',
      'I am now able to recognize which algorithm design technique(s) was used in each algorithm.',
      'Through the content taught in this course, I learned the importance of algorithm stability and conditioning, and can identify which data structures would be able to provide that stability to solve complex problems.',
    ],
  },
  {
    title: 'cpsc 322',
    company: 'introduction to artificial intelligence',
    dates: 'january - april 2021',
    type: 'education',
    responsibilities: [
      'This course introduced the field of artificial intelligence, covering topics including search algorithms, constraint satisfaction problems, and heuristics.',
      'This course has given me a great understanding of the fundamentals of artificial intelligence and introduced me to several essential topics that will be valuable when working on future projects involving artificial intelligence.',
    ],
  },
  {
    title: 'nwHacks 2021',
    company:
      'frij.space, an application to facilitate non-intrusive social engagement',
    dates: 'january 2021',
    type: 'hackathon project',
    technologies: ['next.js', 'prisma'],
    responsibilities: [
      'Created a web-based application that allows users to create pages filled with notes and share those pages with their peers.',
      'HTML / JavaScript front-end, backed by the Axios library to handle HTTP requests.',
      'Given just 24 hours to complete the project, this hackathon presented the challenge of working together in a group with very little time.    ],',
    ],
  },
];

const technologies: string[] = [
  ...new Set(
    experiences
      .map((experience) =>
        experience.technologies ? experience.technologies : []
      )
      .flat()
      .sort()
  ),
];

const types: string[] = [
  ...new Set(
    experiences
      .map((experience) => experience.type)
      .flat()
      .sort()
  ),
];

export default function Portfolio() {
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>([]);
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [resetFilter, setResetFilter] = useState<boolean>(false);

  return (
    <GlassTransition>
      <div className='py-4 px-8 max-w-screen-lg mx-auto'>
        {/* portfolio title text */}
        <h1 className='text-5xl sm:text-7xl inset-text text-center font-mono'>
          portfolio
        </h1>

        <div className='pt-6 sm:pt-10 text-center text-3xl sm:text-4xl'>
          filters
        </div>

        {/* technology filters */}
        <div className='flex flex-wrap sm:flex-nowrap text-center pt-3 sm:pt-5'>
          <div className='sm:flex-none w-full sm:w-fit sm:pr-4'>
            <div className='text-xl sm:text-2xl'>technologies:</div>
          </div>
          <div className='flex flex-wrap justify-start sm:justify-end w-full pt-2 sm:pt-0 px-3 sm:px-0'>
            {technologies.map((technology: string) => (
              <FilterButton
                key={`${technology}${resetFilter}`}
                filter={technology}
                handleAdd={() => {
                  return setActiveTechnologies([
                    ...activeTechnologies,
                    technology,
                  ]);
                }}
                handleRemove={() => {
                  return setActiveTechnologies(
                    activeTechnologies.filter(
                      (activeTechnology) => activeTechnology !== technology
                    )
                  );
                }}
              />
            ))}
          </div>
        </div>

        {/* experience type filters */}
        <div className='flex flex-wrap sm:flex-nowrap text-center pt-2'>
          <div className='sm:flex-none w-full sm:w-fit sm:pr-4'>
            <div className='text-xl sm:text-2xl'>experience type:</div>
          </div>
          <div className='flex flex-wrap justify-start sm:justify-end w-full pt-2 sm:pt-0 px-3 sm:px-0'>
            {types.map((type: string) => (
              <FilterButton
                key={`${type}${resetFilter}`}
                filter={type}
                handleAdd={() => {
                  return setActiveTypes([...activeTypes, type]);
                }}
                handleRemove={() => {
                  return setActiveTypes(
                    activeTypes.filter((activeType) => activeType !== type)
                  );
                }}
              />
            ))}
          </div>
        </div>

        <div className='w-full pt-1 pr-2.5 pl-3'>
          <div
            className={`mr-auto ml-0 sm:mr-0 sm:ml-auto w-fit text-xs sm:text-base px-2.5 py-2 rounded-xl sm:rounded-2xl ${
              activeTypes.length === 0 && activeTechnologies.length === 0
                ? 'text-slate-300'
                : ''
            }`}
            style={{
              transitionDuration: '200ms',
              transitionProperty: 'box-shadow',
              boxShadow:
                activeTypes.length === 0 && activeTechnologies.length === 0
                  ? ''
                  : `-3px -3px 4px 0 #c9c6d8 inset,
                    3.5px 3.5px 6px 0 #ffffff inset,
                    3px 3px 7px 0 #c9c6d8,
                    -1.5px -1.5px 6px 0 #ffffff`,
            }}
            onClick={() => {
              if (activeTypes.length > 0 || activeTechnologies.length > 0) {
                setActiveTypes([]);
                setActiveTechnologies([]);
                setResetFilter(!resetFilter);
              }
            }}
          >
            reset filters
          </div>
        </div>

        {/* experience cards */}
        <div className='max-w-screen-sm mx-auto pt-8'>
          {experiences.map((experience) => {
            const { title, company, type, technologies, responsibilities } =
              experience;
            return (
              <ExperienceCard
                key={title}
                title={title}
                company={company}
                type={type}
                technologies={technologies}
                responsibilities={responsibilities}
                activeTypes={activeTypes}
                activeTechnologies={activeTechnologies}
              />
            );
          })}
        </div>
      </div>
    </GlassTransition>
  );
}
