/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    border: 1px solid transparent;
    border-radius: 16px;
    background-color: #defdef;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    p {
      width: 60%;
      margin: 0 auto;
      padding: 1rem;
    }

    .buttonsContainer {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 20%;

      button:first-child {
        cursor: pointer;
        padding: 0.75rem;
        color: #fff;
        background-color: mediumseagreen;
        border: none;
        border-radius: 8px;
      }

      button:last-child {
        cursor: pointer;
        padding: 0.75rem;
        color: #fff;
        background-color: red;
        border: none;
        border-radius: 8px;
      }
    }

    button {
      cursor: pointer;
      padding: 0.875rem;
      background-color: orange;
      border-radius: 8px;
      border: none;

      &:hover {
        scale: 0.95;
      }

      a {
        text-decoration: none;
        color: #fff;
        font-size: 16px;
      }
    }
  }
`;

function BoilerplatePage({ number, path }) {
  const [quiz, setQuiz] = useState([]);
  const URL =
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

  const getQuestions = () =>
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        setQuiz([...response.results]);
      });

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <StyledContent>
        {quiz.length > 0 && (
          <div className="container">
            <p>Question {number} 0f 10</p>
            <p>Category: {quiz[number - 1].category}</p>
            <p className="display">{quiz[number - 1].question}</p>
            <div className="buttonsContainer">
              <button type="button">True</button>
              <button type="button">False</button>
            </div>
            <Link to={path}>
              <button type="button">Next Page</button>
            </Link>
          </div>
        )}
      </StyledContent>
    </div>
  );
}

export default BoilerplatePage;
