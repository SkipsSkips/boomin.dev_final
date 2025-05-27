import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element not found. Please ensure <div id="root"></div> is present in index.html');
}

console.log('Rendering App');

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
