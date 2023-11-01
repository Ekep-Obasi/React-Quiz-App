export const API_URL =
  process.env.REACT_APP_API_URL ||
  'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export { quizCategories } from './questions';
export { difficultyLevel } from './questions';
