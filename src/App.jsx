import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Pages/App.css';
import QuizTemplate from './Views/Quiz';
import Results from './Pages/Results';
import Guide from './Guide';
import { PageProvider } from './Controller/script';
import getQuestions from './Pages/api';

function App() {
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    getQuestions().then((response) => {
      setQuiz([...response.results]);
    });
  }, []);

  return (
    <PageProvider value={quiz}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Guide />} />
          <Route path="/question/:id" element={<QuizTemplate />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </PageProvider>
  );
}

export default App;
