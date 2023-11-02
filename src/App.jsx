import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizTemplate from './page/Quiz';
import QuizProvider from './context/QuizContext';
import { Error, Landing, Results, Test } from './page';

function App() {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/quiz/:id" element={<QuizTemplate />} />
          <Route path="/results" element={<Results />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </QuizProvider>
  );
}

export default App;
