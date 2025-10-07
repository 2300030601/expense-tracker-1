// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Assuming you have some basic global CSS here or in App.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter enables routing across your entire application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);