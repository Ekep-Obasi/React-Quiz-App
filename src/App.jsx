import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizTemplate from './pages/Quiz';
import Results from './pages/Results';
import Guide from './pages/Guide';
import QuizProvider from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Guide />} />
          <Route path="/quiz/:id" element={<QuizTemplate />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
