import './App.css';
import { AnimatePresence } from 'framer-motion';
import Portfolio from './pages/portfolio/portfolio';
import Photography from './pages/photography';
import { useLocation, useRoutes } from 'react-router-dom';
import { cloneElement } from 'react';
import GlassTransition from './components/GlassTransition';
import NotFound from './components/NotFound';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Portfolio />,
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
    },
    {
      path: '/photography',
      element: <Photography />,
    },
    {
      path: '*',
      element: (
        <GlassTransition>
          <NotFound />
        </GlassTransition>
      ),
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <>
      <AnimatePresence mode='wait'>
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </>
  );
}

export default App;
