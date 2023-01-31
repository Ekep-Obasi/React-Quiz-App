/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PageConsumer } from '../Controller/Context';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #343f4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  h1 {
    font-size: 60px;
    color: #fff;
    font-weight: 500;
    margin: 2px;
  }

  .score {
    font-size: 36px;
    color: green;
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
  font-size: 18px;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 5px;

  .answer {
    color: yellow;
  }

  span {
    margin: 12px 0;
  }
`;

function Results() {
  return (
    <PageConsumer>
      {({ quiz, setNumber, score }) => {
        return (
          <StyledContent>
            <h1>Results Page</h1>
            <div className="score">You Score {score} / 100</div>
            <div>
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
            </div>
            <Link to="/">
              <button type="button" onClick={setNumber(0)}>
                Back to Home
              </button>
            </Link>
          </StyledContent>
        );
      }}
    </PageConsumer>
  );
}

export default Results;
