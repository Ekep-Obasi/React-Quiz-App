import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Error, Landing, Results, SetupQuiz, Quiz } from './page';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Router>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/setup-quiz" element={<SetupQuiz />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
