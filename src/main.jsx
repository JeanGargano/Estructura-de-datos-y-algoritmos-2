import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MultipleCustomHooks from "./MultipleCustomHooks";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>
);
