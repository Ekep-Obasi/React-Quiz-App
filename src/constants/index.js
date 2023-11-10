export const BASE_URL = 'https://opentdb.com';

export { quizCategories, difficultyLevel, quizType } from './questions';

export const ErrorTypes = {
  "1": {
    title: 'No Results',
    message: "Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)"
  },
  "2": {
    title: 'Invalid Parameter',
    message: "Your Query contains an invalid parameter"
  },
  "3": {
    title: 'Token Not Found',
    message: "Session Token does not exist."
  },
  "4": {
    title: 'Token Empty',
    message: "Session Token has returned all possible questions for the specified query. Resetting the Token is necessary."
  },
}
