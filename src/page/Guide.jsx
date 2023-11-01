/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #343f4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

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

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

    button:hover {
      scale: 0.96;
      cursor: pointer;
    }

    .static-txts {
      color: #fff;
      font-size: 60px;
      font-weight: 500;
    }

    .dynamic-txts {
      top: 0;
      height: 90px;
      line-height: 90px;
      overflow: hidden;

      ul {
        margin: 0;
        padding: 0;
      }

      li {
        list-style: none;
        color: #fc6d6d;
        font-size: 3.75rem;
        font-weight: 500;
        top: 0;
        animation: slide 6s steps(4) infinite;
        position: relative;

        span {
          position: relative;
        }

        span::after {
          content: '';
          position: absolute;
          left: 0;
          height: 110%;
          width: 100%;
          background-color: #343f4f;
          border-left: 2px solid #fc6d6d;
          animation: typing 1.5s steps(10) infinite;
        }
      }
    }
    @keyframes slide {
      100% {
        top: -360px;
      }
    }
    @keyframes typing {
      100% {
        left: 100%;
        margin: 0 -35px 0 35px;
      }
    }
  }
`;

function Guide() {
  return (
    <StyledContainer>
      <div className="wrapper">
        <div className="static-txts">Quiz Game</div>
        <div className="dynamic-txts">
          <ul>
            <li>
              <span>Hey ! 👋</span>
            </li>
            <li>
              <span>Ready ?</span>
            </li>
            <li>
              <span>Let&rsquo;s play</span>
            </li>
            <li>
              <span>Awesome</span>
            </li>
          </ul>
        </div>
        <a href="#popup1">
          <button type="button">Let&rsquo;s GO</button>
        </a>
      </div>

      <div id="popup1" className="overlay">
        <div className="popup">
          <h2>Quiz Instructions</h2>
          <a className="close" href="#">
            ×
          </a>
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
    </StyledContainer>
  );
}

export default Guide;
