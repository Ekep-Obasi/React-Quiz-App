const URL =
  'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

const getQuestions = () =>
  fetch(URL)
    .then((res) => res.json())
    .catch((err) => err);

export default getQuestions;
