import './index.css'
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Resume } from './components';

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resume" element={<Resume />} />
      {/* Add more Route components as needed */}
    </Routes>
  </Router>
);
