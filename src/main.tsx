import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import NavBar from './components/NavBar.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
