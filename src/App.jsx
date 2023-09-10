import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizTemplate from './page/Quiz';
import Results from './page/Results';
import Guide from './page/Guide';
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
