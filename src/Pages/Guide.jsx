import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #343f4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  .wrapper {
    display: inline-flex;
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
    }

    button:hover {
      scale: 0.96;
    }

    .static-txts {
      color: #fff;
      font-size: 60px;
      font-weight: 500;
    }

    .dynamic-txts {
      top: 0;
      margin-left: 15px;
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
        font-size: 60px;
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
        <Link to="/quiz1">
          <button type="button">PLAY</button>
        </Link>
      </div>
    </StyledContainer>
  );
}

export default Guide;
