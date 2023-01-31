/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState } from 'react';
import { PageConsumer } from '../Controller/script';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #343f4f;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    width: 65%;
    min-width: 560px;
    min-height: 550px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    .informationContainer {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 550px;
      border-right: 15px solid #fc6d6d;

      h3 {
        align-self: center;
        text-align: center;
        font-size: 42px;
        margin: 0;
        padding: 0;
        margin: 0 2%;

        span {
          color: #fc6d6d;
        }
      }

      p {
        font-size: 24px;
        font-weight: 400;
        top: 0;
        position: absolute;
        margin: 0;
        padding: 5px 0;
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
            font-size: 18px;
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
            padding: 0.5rem 1rem;
            color: #fff;
            background-color: #343f4f;
            border: none;
            border-radius: 8px;
            cursor: pointer;
          }
        }
      }

      h3 {
        font-size: 20px;
        margin: 0;
        padding: 0;

        span {
          font-size: 30px;
          color: orange;
        }
      }
    }

    p {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

function BoilerplatePage({ quizData, setter, score, setScore }) {
  const [decision, setDecision] = useState('');
  const [disable, setDisable] = useState(false);

  function validation(index, answer) {
    const arr = quizData;
    setter(() => {
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
    <PageConsumer>
      {({ quiz, number, changePage }) => {
        return (
          quiz.length > 0 && (
            <StyledContent>
              <div className="container">
                <div className="informationContainer">
                  <p>Score: {score}</p>
                  <h3>
                    Question <span>{number}</span> of {quiz.length}
                  </h3>
                </div>
                <div className="questionContainer">
                  <h3>
                    <span>Category</span> - {quiz[number].category}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: quiz[number].question,
                    }}
                  />
                  <p>{decision}</p>
                  <div className="buttonsContainer">
                    <div className="response">
                      <button
                        type="button"
                        className="greenButton"
                        onClick={() => validation(number - 1, true)}
                        disabled={disable}
                      >
                        True
                      </button>
                      <button
                        type="button"
                        className="redButton"
                        onClick={() => validation(number - 1, false)}
                        disabled={disable}
                      >
                        False
                      </button>
                    </div>
                    <div className="nextButton">
                      <Link
                        replace
                        to={
                          number === quiz.length - 1
                            ? '/results'
                            : `/quiz/${number}`
                        }
                      >
                        <button
                          type="button"
                          onClick={() => {
                            changePage();
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
      }}
    </PageConsumer>
  );
}

export default BoilerplatePage;
