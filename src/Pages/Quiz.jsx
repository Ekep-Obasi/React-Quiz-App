/* eslint-disable react/no-danger */
import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState, useMemo } from 'react';
import { useQuiz } from '../context/QuizContext';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #343f4f;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    width: 65%;
    min-width: 320px;
    min-height: 550px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media screen and (max-width: 72em) {
      flex-direction: column;
      padding: 1rem;
    }

    .informationContainer {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 550px;
      border-right: 8px solid #fc6d6d;

      @media screen and (max-width: 72em) {
        height: fit-content;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }

      @media screen and (max-width: 72em) {
        width: 100%;
        padding: 1rem;
        height: fit-content;
        border-right: 0;
        border-bottom: 8px solid #fc6d6d;
      }

      h3 {
        align-self: center;
        text-align: center;
        font-size: 2.625rem;
        margin: 0;
        padding: 0;
        margin: 0 2%;

        @media screen and (max-width: 72em) {
          font-size: 1.5rem;
          margin: 0;
        }

        span {
          color: #fc6d6d;
        }
      }

      p {
        font-size: 1.8rem;
        font-weight: 400;
        top: 0;
        position: absolute;
        margin: 0;
        padding: 5px 0;

        @media screen and (max-width: 72em) {
          font-size: 1.5rem;
          position: relative;
          padding: 0;
          flex: 2;
        }
      }
    }

    .questionContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 55%;
      height: 550px;
      box-sizing: border-box;
      margin: 15px 2%;

      @media screen and (max-width: 72em) {
        height: fit-content;
        width: 100%;
        gap: 2rem;
      }

      .buttonsContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 150px;

        .response {
          display: flex;
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
          justify-content: space-between;

          button {
            height: 45px;
            width: 75px;
            border-radius: 8px;
            font-size: 1.25rem;
            font-weight: 500;
            color: #fff;
            border: none;
            cursor: pointer;
          }

          button:hover {
            scale: 0.95;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
              rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
          }

          .greenButton {
            background-color: green;
          }

          .redButton {
            background-color: red;
          }
        }
        .nextButton {
          display: flex;
          justify-content: flex-end;
          width: 100%;

          button {
            padding: 0.75rem 1rem;
            font-size: 1rem;
            color: #fff;
            background-color: #343f4f;
            border: none;
            border-radius: 8px;
            cursor: pointer;
          }
        }
      }

      h3 {
        font-size: 1.25rem;
        margin: 0;
        padding: 0;

        span {
          font-size: 1.875rem;
          color: orange;

          @media screen and (max-width: 72em) {
            font-size: 1.5rem;
          }
        }
      }
    }

    p {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

function BoilerplatePage() {
  const { score, setScore, quiz, setQuiz } = useQuiz();
  const [decision, setDecision] = useState('');
  const [disable, setDisable] = useState(false);

  const { id } = useParams();
  const questionIndex = useMemo(() => +id, [id]);

  function validation(index, answer) {
    const arr = quiz;
    setQuiz(() => {
      arr[index].userAns = answer;
      return [...arr];
    });

    if (answer && arr[index].correct_answer === 'True') {
      setScore((scoreVal) => scoreVal + 10);
      setDecision('Correct Answer');
      setDisable(true);
    } else if (!answer && arr[index].correct_answer === 'False') {
      setScore((scoreVal) => scoreVal + 10);
      setDecision('Correct Answer');
      setDisable(true);
    } else {
      setDecision('Wrong Answer');
      setDisable(true);
    }
  }

  return (
    quiz.length > 0 && (
      <StyledContent>
        <div className="container">
          <div className="informationContainer">
            <p>Score: {score}</p>
            <h3>
              Question <span>{questionIndex + 1}</span> of {quiz.length}
            </h3>
          </div>
          <div className="questionContainer">
            <h3>
              <span>Category</span> - {quiz[questionIndex].category}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: quiz[questionIndex].question,
              }}
            />
            <p>{decision}</p>
            <div className="buttonsContainer">
              <div className="response">
                <button
                  type="button"
                  className="greenButton"
                  onClick={() => validation(questionIndex, true)}
                  disabled={disable}
                >
                  True
                </button>
                <button
                  type="button"
                  className="redButton"
                  onClick={() => validation(questionIndex, false)}
                  disabled={disable}
                >
                  False
                </button>
              </div>
              <div className="nextButton">
                <Link
                  replace
                  to={
                    questionIndex === quiz.length - 1
                      ? '/results'
                      : `/quiz/${questionIndex + 1}`
                  }
                >
                  <button
                    type="button"
                    onClick={() => {
                      setDecision('');
                      setDisable(false);
                    }}
                  >
                    Next Page
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </StyledContent>
    )
  );
}

export default BoilerplatePage;