import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Use the correct extension for TypeScript files
import './index.css';

// Add a non-null assertion since TypeScript can't guarantee the element exists
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);