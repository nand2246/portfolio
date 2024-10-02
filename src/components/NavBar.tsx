import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <div className='sticky top-0 left-0 w-full flex bg-blue-50 pt-3 px-2 z-40'>
      <div
        className='flex w-full p-4 rounded-3xl'
        style={{
          boxShadow: `-3px -3px 4px 0 #cbd1d9 inset,
                      3.5px 3.5px 6px 0 #ffffff inset,
                      3px 3px 7px 0 #cbd1d9,
                      -1.5px -1.5px 6px 0 #ffffff`,
        }}
      >
        <div className='flex-auto w-1/2 flex items-center'>
          <Link
            to='/portfolio'
            className='sm:pl-3 pr-1 sm:pr-3 text-base sm:text-xl'
          >
            portfolio
          </Link>
          <div className='pr-1 sm:pr-3 text-base sm:text-xl'>|</div>
          <Link to='/photography' className='text-base sm:text-xl'>
            photography
          </Link>
        </div>
        <div className='flex-auto w-1/2 flex gap-3 justify-end'>
          <motion.div
            className='p-2 w-9 rounded-full'
            style={{
              boxShadow: `3px 3px 7px 0 #cbd1d9 inset,
                      -3.5px -3.5px 6px 0 #ffffff inset,
                      3px 3px 7px 0 #cbd1d9,
                      -3.5px -3.5px 6px 0 #ffffff`,
            }}
            whileHover={{
              boxShadow: `3px 3px 7px 0 #ffffff inset,
                      -3.5px -3.5px 6px 0 #cbd1d9 inset,
                      3px 3px 7px 0 #ffffff,
                      -3.5px -3.5px 6px 0 #cbd1d9`,
            }}
          >
            <a href='https://github.com/nand2246'>
              <img src='/github-logo.webp' className='w-fit h' />
            </a>
          </motion.div>

          <motion.div
            className='p-2 w-9 rounded-full'
            style={{
              boxShadow: `3px 3px 7px 0 #cbd1d9 inset,
                      -3.5px -3.5px 6px 0 #ffffff inset,
                      3px 3px 7px 0 #cbd1d9,
                      -3.5px -3.5px 6px 0 #ffffff`,
            }}
            whileHover={{
              boxShadow: `3px 3px 7px 0 #ffffff inset,
                      -3.5px -3.5px 6px 0 #cbd1d9 inset,
                      3px 3px 7px 0 #ffffff,
                      -3.5px -3.5px 6px 0 #cbd1d9`,
            }}
          >
            <a href='https://www.linkedin.com/in/nandrpatel/'>
              <img src='/linkedin.webp' className='w-fit h' />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
