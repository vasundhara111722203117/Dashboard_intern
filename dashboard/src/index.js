import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Correct for React 18
import App from './App';
import './index.css'; // Optional if you're using it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);