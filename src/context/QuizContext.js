/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import useIncrement from '../hooks/useIncrement';

const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [quiz, setQuiz] = useFetch();
  const [score, setScore] = useIncrement(0);

  return (
    <QuizContext.Provider value={{ quiz, setQuiz, score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
