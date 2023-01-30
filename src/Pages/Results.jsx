/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PageConsumer } from '../Controller/script';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #343f4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  h1 {
    font-size: 60px;
    color: #fff;
    font-weight: 500;
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

function Results() {
  return (
    <div className="results">
      <PageConsumer>
        {(quiz) => {
          return (
            <StyledContent>
              <h1>Results Page</h1>
              <div>
                {quiz.map(({ question, correct_answer }, index) => {
                  return (
                    <div className="Review">
                      <span dangerouslySetInnerHTML={{ __html: index }} />
                      <span dangerouslySetInnerHTML={{ __html: question }} />
                      <span
                        dangerouslySetInnerHTML={{ __html: correct_answer }}
                      />
                    </div>
                  );
                })}
              </div>
              <Link to="/">
                <button type="button">Back to Home</button>
              </Link>
            </StyledContent>
          );
        }}
      </PageConsumer>
    </div>
  );
}

export default Results;
