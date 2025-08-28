import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuizProvider } from './context/quiz.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
       <App />
    </QuizProvider> 
  </React.StrictMode>
);
