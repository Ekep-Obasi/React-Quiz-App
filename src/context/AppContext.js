import { createContext, useContext, useState } from 'react';
import useIncrement from '../hooks/useIncrement';

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useIncrement(0);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);


  const ctxValues = {
    quiz, setQuiz, score, setScore, loading, setLoading, disabled, setDisabled
  }

  return (
    <AppContext.Provider value={ctxValues}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
