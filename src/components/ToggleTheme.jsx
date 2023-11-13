import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styled from '@emotion/styled';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { css } from '@emotion/react';

const ToggleTheme = () => {
  const { setMode, mode, themeObj } = useTheme();

  const toggleMode = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <StyledToggleModeButton mode={mode} onClick={toggleMode}>
      <span className="slider" />
      <span className="icon__wrapper">
        <BsFillSunFill className="icon" color={themeObj.colors.yellow} />
      </span>
      <span className="icon__wrapper">
        <BsFillMoonStarsFill
          className="icon"
          color={themeObj.colors.lightBlue}
        />
      </span>
    </StyledToggleModeButton>
  );
};

const StyledToggleModeButton = styled.button`
  display: flex;
  gap: 15px;
  padding: 5px;
  background-color: ${(props) => props.theme.bg.primary};
  border-radius: 20px;
  border: none;
  position: relative;
  cursor: pointer;

  .slider {
    height: 25px;
    width: 30px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.dark};
    position: absolute;
    ${(props) => {
      return props.mode === 'light'
        ? css`
            left: 5px;
          `
        : css`
            left: 40px;
          `;
    }}
    transition: 0.3s all linear;
    position: absolute;
  }

  .icon__wrapper {
    height: 25px;
    width: 25px;
    border-radius: 12.5px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      font-size: 1.25rem;
    }
  }
`;

export default ToggleTheme;
