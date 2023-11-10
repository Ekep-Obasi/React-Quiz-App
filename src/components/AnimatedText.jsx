import React from 'react';
import styled from '@emotion/styled';

function AnimatedText() {
  return (
    <StyledDynamicText>
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
            <span>🤩🤩🤩</span>
          </li>
        </ul>
      </div>
    </StyledDynamicText>
  );
}

const StyledDynamicText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .static-txts {
    ${(props) => props.theme.colors.gradient}
    font-size: 60px;
    font-weight: 600;
  }

  .dynamic-txts {
    top: 0;
    height: 90px;
    line-height: 90px;
    overflow: hidden;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
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
        height: 120%;
        width: 100%;
        background-color: ${(props) => props.theme.bg.primary};
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
`;

export default AnimatedText;
