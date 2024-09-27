import { motion, Variants } from 'framer-motion';
const animateNavBar: Variants = {
  initial: {
    opacity: 0,
    boxShadow: '0px 0px 0 #000000',
    outlineWidth: '0px',
  },
  animateOpacity: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.3 },
  },
  animateBoxShadow: {
    boxShadow: '10px 10px 0 #000000',
    outlineWidth: '3px',
    transition: { delay: 0.6, duration: 0.3 },
  },
};
export default function NavBar() {
  return (
    <motion.div
      variants={animateNavBar}
      initial='initial'
      animate={['animateOpacity', 'animateBoxShadow']}
      className='sticky top-3 mx-6 p-4 outline bg-indigo-500 rounded-md z-50'
    >
      <div>Home</div>
    </motion.div>
  );
}
