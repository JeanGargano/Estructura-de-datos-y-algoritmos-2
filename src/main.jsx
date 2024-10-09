import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FirstApp from './FirstApp.jsx';
import './index.css';

const value = 10; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp value={value} />
  </StrictMode>
);
