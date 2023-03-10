import { useState, useEffect } from 'react';
import getQuestions from '../api';

export default function useFetch() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    getQuestions().then((response) => {
      setQuiz([...response.results]);
    });
  }, []);

  return [quiz, setQuiz];
}
