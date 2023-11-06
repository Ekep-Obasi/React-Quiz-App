import React from 'react';
import styled from '@emotion/styled';
import { ToggleTheme } from '.';

const Header = () => {
  return (
    <StyledHeader>
      <span className="app__logo">BrainTeasers ⚡</span>
      <ToggleTheme />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  min-height: 65px;
  padding: 0 2rem;
  gap: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.bg.primaryGradient}

  .app__logo {
    font-family: 'Agbalumo', cursive;
    font-size: 2rem;
    color: #fff;
  }
`;

export default Header;
