import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import NavBar from './components/NavBar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <App />
  </StrictMode>
);
