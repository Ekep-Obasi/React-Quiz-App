import React from 'react';
import './Pages/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizTemplate from './Views/Quiz';
import Results from './Pages/Results';
import Guide from './Views/Guide';
import { PageProvider } from './Controller/Context';

import useFetch from './Pages/Hooks/useFetch';
import useCustomState from './Pages/Hooks/useIncrement';

function App() {
  const [quiz] = useFetch();
  const [number, setNumber] = useCustomState(0);
  const [score] = useCustomState(0);

  function changePage() {
    setNumber((previousPage) => previousPage + 1);
  }

  return (
    <PageProvider value={{ quiz, number, changePage, setNumber, score }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Guide />} />
          <Route path=":id" element={<QuizTemplate />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </PageProvider>
  );
}

export default App;
