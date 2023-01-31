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

  const [number, setNumber] = useState(0);

  function changePage() {
    setNumber((previousPage) => previousPage + 1);
  }

  return (
    <PageProvider value={{ quiz, number, changePage, setNumber }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Guide />} />
          <Route
            path="/quiz/:id"
            element={<QuizTemplate quizData={quiz} setter={setQuiz} />}
          />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </PageProvider>
  );
}

export default App;
