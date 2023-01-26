import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizTemplate from './Views/Quiz';
import './Pages/App.css';
import Results from './Pages/Results';
import Guide from './Pages/Guide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Guide />} />
        <Route
          path="/quiz1"
          element={<QuizTemplate number={1} path="/quiz2" />}
        />
        <Route
          path="/quiz2"
          element={<QuizTemplate number={2} path="/quiz3" />}
        />
        <Route
          path="/quiz3"
          element={<QuizTemplate number={3} path="/quiz4" />}
        />
        <Route
          path="/quiz4"
          element={<QuizTemplate number={4} path="/quiz5" />}
        />
        <Route
          path="/quiz5"
          element={<QuizTemplate number={5} path="/quiz6" />}
        />
        <Route
          path="/quiz6"
          element={<QuizTemplate number={6} path="/quiz7" />}
        />
        <Route
          path="/quiz7"
          element={<QuizTemplate number={7} path="/quiz8" />}
        />
        <Route
          path="/quiz8"
          element={<QuizTemplate number={8} path="/quiz9" />}
        />
        <Route
          path="/quiz9"
          element={<QuizTemplate number={9} path="/quiz10" />}
        />
        <Route
          path="/quiz10"
          element={<QuizTemplate number={10} path="/results" />}
        />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
