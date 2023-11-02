import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledPopup = styled.div`
  .overlay {
    position: absolute;
    top: -300px;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .overlay:target {
    visibility: visible;
    opacity: 1;
    top: 0px;
  }

  .popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    min-width: 320px;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 5s ease-in-out;

    h2 {
      margin-top: 0;
      color: #333;
      font-family: Tahoma, Arial, sans-serif;
    }

    .close {
      position: absolute;
      top: 20px;
      right: 30px;
      transition: all 200ms;
      font-size: 30px;
      font-weight: bold;
      text-decoration: none;
      color: #333;

      &:hover {
        color: orange;
        transform: rotate(90deg);
      }
    }

    .content {
      max-height: 30%;
      overflow: auto;

      ul {
        padding: 0.5rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
          line-height: 1rem;
          padding: 0.5rem 0;
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
        cursor: pointer;
        margin: 0 auto;
      }
    }
  }
`;

const PopUp = () => {
  const [isClosed, setIsClosed] = useState({
    isOpen: true,
  });

  return (
    <StyledPopup state={isClosed}>
      <div className="overlay">
        <div className="popup">
          <h2>Quiz Instructions</h2>
          <Link className="close">×</Link>
          <div className="content">
            <ul>
              <li>
                The quizzes consists of questions carefully designed to help you
                self-assess your knowledge
              </li>
              <li>
                Each question in the quiz &rsquo;true or false&rsquo; format.
              </li>
              <li>
                After responding to a question, click on the &rsquo;Next
                Question&rsquo; button at the bottom
              </li>
              <li>
                The total score for the quiz is based on your responses to all
                questions
              </li>
              <h3>Have Fun!</h3>
            </ul>
            <Link to="/quiz/0">
              <button type="button">Start Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </StyledPopup>
  );
};

export default PopUp;
