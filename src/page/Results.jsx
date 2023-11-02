import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

const StyledContent = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #343f4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1rem;

  h1 {
    font-size: 3.75rem;
    color: #fff;
    font-weight: 500;
    margin: 8px 0;

    @media screen and (max-width: 72em) {
      font-size: 2.75rem;
    }
  }

  .score {
    font-size: 2.25rem;
    color: green;

    @media screen and (max-width: 72em) {
      font-size: 1.75rem;
    }
  }

  button {
    padding: 0.8rem 1.2rem;
    background-color: #fc6d6d;
    border-radius: 8px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-top: 25px;
    cursor: pointer;
  }
`;

const StyledReviews = styled.div`
  color: white;
  font-size: 1.25rem;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 72em) {
    width: 100%;
    font-size: 1rem;
  }

  .answer {
    color: yellow;
  }

  span {
    margin: 12px 0;
  }
`;

function ResultList() {
  const { quiz } = useQuiz();

  return (
    <>
      {quiz.map(({ question, correct_answer }, index) => {
        return (
          <StyledReviews>
            <span
              key={question}
              className="numbers"
              dangerouslySetInnerHTML={{ __html: index + 1 }}
            />
            .
            <span
              className="questions"
              dangerouslySetInnerHTML={{ __html: question }}
            />
            <span
              className="answer"
              dangerouslySetInnerHTML={{ __html: correct_answer }}
            />
          </StyledReviews>
        );
      })}
    </>
  );
}

function Results() {
  const { setScore, score } = useQuiz();

  return (
    <StyledContent>
      <h1>Results Page</h1>
      <div className="score">Your Score {score} / 100</div>
      <ResultList />
      <Link to="/">
        <button type="button" onClick={() => setScore(0)}>
          Back to Home
        </button>
      </Link>
    </StyledContent>
  );
}

export default Results;
